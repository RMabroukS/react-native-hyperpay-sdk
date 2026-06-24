//  © Copyright ACI Worldwide, Inc. 2018, 2026

#import <Foundation/Foundation.h>
#import "OPPCheckoutProvider.h"

@class OPPToken;

NS_ASSUME_NONNULL_BEGIN

/// :nodoc:

@interface OPPPaymentSelectionViewModel : NSObject
- (instancetype)init NS_UNAVAILABLE;
- (nullable instancetype)initWithCheckoutProvider:(nonnull OPPCheckoutProvider *)checkoutProvider viewController:(nonnull UIViewController *)controller;
- (void)loadPaymentSchemes;
- (void)paymentSelectionControllerDidSelectPaymentBrand:(NSString *)paymentBrand completionHandler:(nullable void (^)(BOOL success))completionHandler;
- (void)paymentSelectionControllerDidSelectToken:(nonnull OPPToken *)token completionHandler:(void (^)(BOOL success))completionHandler;
@end

NS_ASSUME_NONNULL_END
