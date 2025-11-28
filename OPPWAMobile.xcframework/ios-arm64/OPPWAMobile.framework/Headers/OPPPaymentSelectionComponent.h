//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import <Foundation/Foundation.h>
#import "OPPCheckoutProvider.h"

/// :nodoc:

NS_ASSUME_NONNULL_BEGIN

@interface OPPPaymentSelectionComponent : NSObject
- (instancetype)init NS_UNAVAILABLE;
- (nullable instancetype)initWithCheckoutProvider:(nonnull OPPCheckoutProvider *)checkoutProvider viewController:(nonnull UIViewController *)controller;
@end

NS_ASSUME_NONNULL_END
