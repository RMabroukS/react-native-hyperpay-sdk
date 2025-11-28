//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import "OPPPaymentParams.h"

/**
 Class to encapsulate all necessary transaction parameters for performing Afterpay Payments transaction.
 */
NS_ASSUME_NONNULL_BEGIN
@interface OPPAfterPayPaymentParams : OPPPaymentParams

/// @name Initialization
/// :nodoc:
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                               paymentBrand:(nullable NSString *)paymentBrand
                                      error:(NSError * _Nullable __autoreleasing *)error NS_UNAVAILABLE;

+ (nullable instancetype)afterPayPaymentParamsWithCheckoutID:(NSString *)checkoutID
                                                       error:(NSError * _Nullable __autoreleasing *)error;
@end
NS_ASSUME_NONNULL_END
