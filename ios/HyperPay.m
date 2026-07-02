
#import <Foundation/Foundation.h>
#import "HyperPay.h"
#import <React/RCTLog.h>

@interface HyperPay ()
@property (nonatomic, copy) NSString              *checkoutID;
@property (nonatomic, copy) NSString              *resourcePath;
@property (nonatomic, copy) NSString              *redirectURL;
@property (nonatomic, copy) RCTPromiseResolveBlock _resolve;
@property (nonatomic, copy) RCTPromiseRejectBlock  _reject;
@end

@implementation HyperPay

OPPPaymentProvider *provider;
NSString *shopperResultURL = @"";
NSString *merchantIdentifier = @"";
NSString *countryCode = @"";
NSString *currencyCode = @"";
NSString *mode=@"TestMode";
NSArray *supportedNetworks;
NSString *companyName=@"";

RCT_EXPORT_MODULE(HyperPay)

-(instancetype)init
{

    self = [super init];
    if (self) {
        provider = [OPPPaymentProvider paymentProviderWithMode:OPPProviderModeTest];
    }
    return self;
}

- (NSArray<NSString *> *)supportedEvents {
    return @[@"onTransactionComplete",@"onProgress"];
}

/**
 React Native functions
 */

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(setup: (NSDictionary*)options) {
    shopperResultURL=[options valueForKey:@"shopperResultURL"];
    if ([options valueForKey:@"merchantIdentifier"])
        merchantIdentifier=[options valueForKey:@"merchantIdentifier"];
    if ([options valueForKey:@"companyName"])
        companyName=[options valueForKey:@"companyName"];
    if ([options valueForKey:@"countryCode"])
       countryCode=[options valueForKey:@"countryCode"];
    if ([options valueForKey:@"currencyCode"])
        currencyCode=[options valueForKey:@"currencyCode"];
    if ([options valueForKey:@"supportedNetworks"])
        supportedNetworks=[options valueForKey:@"supportedNetworks"];
    if ([[options valueForKey:@"mode"] isEqual:@"LiveMode"])
      provider = [OPPPaymentProvider paymentProviderWithMode:OPPProviderModeLive];
    else
      provider = [OPPPaymentProvider paymentProviderWithMode:OPPProviderModeTest];
    return options;
}


RCT_EXPORT_METHOD(createPaymentTransaction: (NSDictionary*)options resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
  NSError * _Nullable error;

    OPPCardPaymentParams *params = [OPPCardPaymentParams cardPaymentParamsWithCheckoutID:[options valueForKey:@"checkoutID"]
                                                                        paymentBrand:[options valueForKey:@"paymentBrand"]
                                                                              holder:[options valueForKey:@"holderName"]
                                                                              number:[options valueForKey:@"cardNumber"]
                                                                         expiryMonth:[options valueForKey:@"expiryMonth"]
                                                                          expiryYear:[options valueForKey:@"expiryYear"]
                                                                                 cvv:[options valueForKey:@"cvv"]
                                                                               error:&error];

    if (error) {
      NSLog(@"%s", "error");
      reject(@"createTransaction",error.localizedDescription, error);

    } else {
       params.shopperResultURL =shopperResultURL;

      OPPTransaction *transaction = [OPPTransaction transactionWithPaymentParams:params];

      [provider submitTransaction:transaction completionHandler:^(OPPTransaction * _Nonnull transaction, NSError * _Nullable error) {
        NSDictionary *transactionResult;
        if (transaction.type == OPPTransactionTypeAsynchronous) {

           transactionResult = @{
          @"redirectURL":transaction.redirectURL.absoluteString,
          @"status":@"pending",
          @"checkoutId":transaction.paymentParams.checkoutID
          };
          resolve(transactionResult);

        }  else if (transaction.type == OPPTransactionTypeSynchronous) {

          transactionResult = @{
          @"status":@"completed",
          @"checkoutId":transaction.paymentParams.checkoutID
          };
          resolve(transactionResult);
        } else {
          reject(@"createTransaction",error.localizedDescription, error);
        }
      }];
    }
}


RCT_EXPORT_METHOD(applePay:(NSDictionary*)params resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
    dispatch_async(dispatch_get_main_queue(), ^{
        self.checkoutID   = [params valueForKey:@"checkoutID"];
        self.resourcePath = nil;
        self._resolve      = resolve;
        self._reject       = reject;

        NSString *merchant  = [params valueForKey:@"merchantIdentifier"] ?: merchantIdentifier;
        NSString *country   = [params valueForKey:@"countryCode"]        ?: countryCode;
        NSString *currency  = [params valueForKey:@"currencyCode"]       ?: currencyCode;
        NSString *company   = [params valueForKey:@"companyName"]        ?: companyName;
        NSString *amountStr = [params valueForKey:@"amount"]             ?: @"0.00";

        PKPaymentRequest *paymentRequest = [OPPPaymentProvider paymentRequestWithMerchantIdentifier:merchant countryCode:country];
        paymentRequest.currencyCode = currency;

        NSArray *rawNetworks = [params valueForKey:@"supportedNetworks"] ?: supportedNetworks;
        if (rawNetworks.count > 0 && [rawNetworks[0] isKindOfClass:[NSString class]]) {
            NSMutableArray *mapped = [NSMutableArray array];
            NSDictionary *networkMap = @{
                @"visa":       PKPaymentNetworkVisa,
                @"mastercard": PKPaymentNetworkMasterCard,
                @"amex":       PKPaymentNetworkAmex,
                @"mada":       PKPaymentNetworkMada,
            };
            for (NSString *name in rawNetworks) {
                PKPaymentNetwork net = networkMap[[name lowercaseString]];
                if (net) [mapped addObject:net];
            }
            paymentRequest.supportedNetworks = mapped.count ? mapped : rawNetworks;
        } else {
            paymentRequest.supportedNetworks = rawNetworks;
        }

        NSDecimalNumber *amount = [NSDecimalNumber decimalNumberWithString:amountStr];
        paymentRequest.paymentSummaryItems = @[ [PKPaymentSummaryItem summaryItemWithLabel:company amount:amount] ];

        if (![OPPPaymentProvider canSubmitPaymentRequest:paymentRequest]) {
            reject(@"applePay", @"Apple Pay is not supported on this device", nil);
            return;
        }

        PKPaymentAuthorizationViewController *vc = [[PKPaymentAuthorizationViewController alloc] initWithPaymentRequest:paymentRequest];
        if (!vc) {
            reject(@"applePay", @"Failed to initialise Apple Pay sheet", nil);
            return;
        }
        vc.delegate = self;

        UIViewController *topVC = [UIApplication sharedApplication].delegate.window.rootViewController;
        while (topVC.presentedViewController) topVC = topVC.presentedViewController;
        [topVC presentViewController:vc animated:YES completion:^{
            [self sendEventWithName:@"onProgress" body:@(YES)];
        }];
    });
}

- (void)paymentAuthorizationViewController:(PKPaymentAuthorizationViewController *)controller
                        didAuthorizePayment:(PKPayment *)payment
                                    handler:(void (^)(PKPaymentAuthorizationResult *))completion
    API_AVAILABLE(ios(11.0)) {
    NSError *error = nil;
    OPPApplePayPaymentParams *appleParams =
        [[OPPApplePayPaymentParams alloc] initWithCheckoutID:self.checkoutID
                                                   tokenData:payment.token.paymentData
                                                       error:&error];
    if (!appleParams) {
        completion([[PKPaymentAuthorizationResult alloc]
                    initWithStatus:PKPaymentAuthorizationStatusFailure
                            errors:error ? @[error] : nil]);
        return;
    }

    appleParams.shopperResultURL = shopperResultURL;
    OPPTransaction *transaction = [OPPTransaction transactionWithPaymentParams:appleParams];

    __weak typeof(self) weakSelf = self;
    [provider submitTransaction:transaction completionHandler:^(OPPTransaction *transaction, NSError *submitError) {
        __strong typeof(weakSelf) _self = weakSelf;
        if (!_self) {
            completion([[PKPaymentAuthorizationResult alloc] initWithStatus:PKPaymentAuthorizationStatusFailure errors:nil]);
            return;
        }
        if (submitError) {
            completion([[PKPaymentAuthorizationResult alloc] initWithStatus:PKPaymentAuthorizationStatusFailure errors:nil]);
            _self.resourcePath = nil;
            _self._reject(@"applePay", submitError.localizedDescription, submitError);
            _self._reject  = nil;
            _self._resolve = nil;
            return;
        }
        
        _self.resourcePath = transaction.resourcePath;
        _self.redirectURL = transaction.redirectURL.absoluteString;
        completion([[PKPaymentAuthorizationResult alloc] initWithStatus:PKPaymentAuthorizationStatusSuccess errors:nil]);
    }];
}

- (void)paymentAuthorizationViewControllerDidFinish:(PKPaymentAuthorizationViewController *)controller {
    __weak typeof(self) weakSelf = self;
    [controller dismissViewControllerAnimated:YES completion:^{
        __strong typeof(weakSelf) _self = weakSelf;
        if (!_self) return;

        [_self sendEventWithName:@"onProgress" body:@(NO)];

        if (!_self._resolve && !_self._reject) return;

        if (_self.resourcePath || _self.redirectURL) {
            _self._resolve(@{
                @"resourcePath": _self.resourcePath ?: @"",
                @"checkoutId":   _self.checkoutID   ?: @"",
                @"redirectURL":  _self.redirectURL  ?: @"",
            });
        } else {
            _self._reject(@"applePay", @"cancel", nil);
        }
        _self.resourcePath = nil;
        _self._resolve     = nil;
        _self._reject      = nil;
    }];
}

#pragma mark - OPPCheckoutProviderDelegate

- (void)checkoutProvider:(OPPCheckoutProvider *)checkoutProvider
      continueSubmitting:(OPPTransaction *)transaction
              completion:(void (^)(NSString * _Nullable, BOOL))completion {
  completion(nil, YES);
}

@end


