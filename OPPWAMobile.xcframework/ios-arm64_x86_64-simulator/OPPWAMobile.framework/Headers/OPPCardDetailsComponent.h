//  © Copyright ACI Worldwide, Inc. 2018, 2025


#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
@class OPPCheckoutProvider;
@class OPPToken;

/// :nodoc:

NS_ASSUME_NONNULL_BEGIN

@interface OPPCardDetailsComponent : NSObject
- (nullable instancetype)initWithCheckoutProvider:(OPPCheckoutProvider *)checkoutProvider 
                                     paymentBrand:(NSString *)paymentBrand
                                   viewController:(UIViewController *)viewController;
- (nullable instancetype)initWithCheckoutProvider:(OPPCheckoutProvider *)checkoutProvider 
                                            token:(OPPToken *)token
                                   viewController:(UIViewController *)viewController;
- (instancetype)init NS_UNAVAILABLE;
@end

NS_ASSUME_NONNULL_END
