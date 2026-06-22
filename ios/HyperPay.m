
#import <Foundation/Foundation.h>
#import "HyperPay.h"
#import <React/RCTLog.h>

@implementation HyperPay

OPPPaymentProvider *provider;
NSString *shopperResultURL = @"";
NSString *merchantIdentifier = @"";
NSString *countryCode = @"";
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

  OPPCheckoutSettings *checkoutSettings = [[OPPCheckoutSettings alloc] init];
  PKPaymentRequest *paymentRequest = [OPPPaymentProvider paymentRequestWithMerchantIdentifier:merchantIdentifier countryCode:countryCode];
  paymentRequest.supportedNetworks = supportedNetworks;
//  paymentRequest.merchantCapabilities = PKMerchantCapability3DS;

  if ([params valueForKey:@"companyName"]) {
    companyName = [params valueForKey:@"companyName"];
  }

  NSDecimalNumber *amount = [NSDecimalNumber decimalNumberWithMantissa:[[params valueForKey:@"amount"] intValue] exponent:-2 isNegative:NO];
  paymentRequest.paymentSummaryItems = @[ [PKPaymentSummaryItem summaryItemWithLabel:companyName amount:amount] ];
  checkoutSettings.shopperResultURL = shopperResultURL;
  checkoutSettings.applePayPaymentRequest = paymentRequest;

  self.checkoutProvider = [OPPCheckoutProvider checkoutProviderWithPaymentProvider:provider
                                                                        checkoutID:[params valueForKey:@"checkoutID"]
                                                                          settings:checkoutSettings];
  self.checkoutProvider.delegate = self;

  [self.checkoutProvider presentCheckoutWithPaymentBrand:@"APPLEPAY"
    loadingHandler:^(BOOL inProgress) {
      [self sendEventWithName:@"onProgress" body:@(inProgress)];
  } completionHandler:^(OPPTransaction * _Nullable transaction, NSError * _Nullable error) {
      if (error) {
        reject(@"applePay", error.localizedDescription, error);
      } else {
          if (transaction.redirectURL)
              resolve(@{@"redirectURL": transaction.redirectURL.absoluteString});
          else
              resolve(@{@"resourcePath": transaction.resourcePath});
      }
  } cancelHandler:^{
      reject(@"applePay", @"cancel", NULL);
  }];

}

#pragma mark - OPPCheckoutProviderDelegate

- (void)checkoutProvider:(OPPCheckoutProvider *)checkoutProvider
      continueSubmitting:(OPPTransaction *)transaction
              completion:(void (^)(NSString * _Nullable, BOOL))completion {
  completion(nil, YES);
}

@end


