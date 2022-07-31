
#import <Foundation/Foundation.h>
#import "HyperPay.h"
#import <React/RCTLog.h>

@implementation HyperPay

OPPPaymentProvider *provider;
NSString *shopperResultURL = @"";
NSString *merchantIdentifier = @"";
NSString *countryCode = @"";
NSString *mode=@"TestMode";

RCT_EXPORT_MODULE(HyperPay)

-(instancetype)init
{
  
    self = [super init];
    if (self) {
        if ([mode isEqual:@"TestMode"])
        provider = [OPPPaymentProvider paymentProviderWithMode:OPPProviderModeTest];
        else
        provider = [OPPPaymentProvider paymentProviderWithMode:OPPProviderModeLive];
    }
    return self;
}

- (NSArray<NSString *> *)supportedEvents {
    return @[@"onTransactionComplete"];
}

/**
 React Native functions
 */


RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(setConfig: (NSDictionary*)options) {
    shopperResultURL=[options valueForKey:@"shopperResultURL"];
    if ([options valueForKey:@"merchantIdentifier"])
    shopperResultURL=[options valueForKey:@"merchantIdentifier"];
    if ([options valueForKey:@"countryCode"])
       countryCode=[options valueForKey:@"countryCode"];
    if ([options valueForKey:@"mode"])
       mode=[options valueForKey:@"mode"];
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
                                                                                 CVV:[options valueForKey:@"cvv"]
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



RCT_EXPORT_METHOD(applePay:(NSString*)checkoutID resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject){
  
  OPPPaymentProvider *provider = [OPPPaymentProvider paymentProviderWithMode:OPPProviderModeTest];
  OPPCheckoutSettings *checkoutSettings = [[OPPCheckoutSettings alloc] init];
  PKPaymentRequest *paymentRequest = [OPPPaymentProvider paymentRequestWithMerchantIdentifier:merchantIdentifier countryCode:countryCode];
//   paymentRequest.supportedNetworks=[@"mada",@"visa",@"masterCard"];
    paymentRequest.supportedNetworks = @ [PKPaymentNetworkMada,PKPaymentNetworkVisa,PKPaymentNetworkMasterCard];
                   
//   paymentRequest.supportedCountries
   checkoutSettings.applePayPaymentRequest = paymentRequest;
   OPPCheckoutProvider *checkoutProvider = [OPPCheckoutProvider checkoutProviderWithPaymentProvider:provider
                                                                                        checkoutID:checkoutID
                                                                                          settings:checkoutSettings];

  [checkoutProvider presentCheckoutWithPaymentBrand:@"APPLEPAY"
    loadingHandler:^(BOOL inProgress) {
    
      // Executed whenever SDK sends request to the server or receives the response.
      // You can start or stop loading animation based on inProgress parameter.
  } completionHandler:^(OPPTransaction * _Nullable transaction, NSError * _Nullable error) {
      if (error) {
//          reject(@"applePay",checkoutID,error);
        reject(@"applePay",error.localizedDescription, error);
          // See code attribute (OPPErrorCode) and NSLocalizedDescription to identify the reason of failure.
      } else {
          if (transaction.redirectURL) {
             resolve(transaction.redirectURL);
              // Shopper was redirected to the issuer web page.
              // Request payment status when shopper returns to the app using transaction.resourcePath or just checkout id.
          } else {
            reject(@"applePay",@"Request payment status for the synchronous transaction from your server using transactionPath.resourcePath or just checkout id..",error);
              // Request payment status for the synchronous transaction from your server using transactionPath.resourcePath or just checkout id.
          }
      }
  } cancelHandler:^{
       reject(@"applePay",@"Executed if the shopper closes the payment page prematurely.",NULL);
      // Executed if the shopper closes the payment page prematurely.
  }];

}


@end


