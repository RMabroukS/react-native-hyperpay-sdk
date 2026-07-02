#ifndef Hyperpay_h
#define Hyperpay_h
#import <OPPWAMobile/OPPWAMobile.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>
#import <PassKit/PassKit.h>

@interface HyperPay : RCTEventEmitter <RCTBridgeModule, OPPCheckoutProviderDelegate, PKPaymentAuthorizationViewControllerDelegate>

@property(nonatomic, strong) OPPCheckoutProvider *checkoutProvider;

@end

#endif /* Hyperpay */
