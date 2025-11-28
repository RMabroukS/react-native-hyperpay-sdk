//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import "OPPPaymentParams.h"

/**
 Class to encapsulate all necessary transaction parameters for performing an RatePay transaction.
 */
NS_ASSUME_NONNULL_BEGIN
@interface OPPRatePayPaymentParams : OPPPaymentParams

/// @name Initialization

/// :nodoc:
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                               paymentBrand:(nullable NSString *)paymentBrand
                                      error:(NSError * _Nullable __autoreleasing *)error NS_UNAVAILABLE;

/**
 Creates an object representing a Ratepay transaction.
 
 @param checkoutID The checkout ID of the transaction. Must be not `nil` or empty.
 @param dateOfBirth Date of Birth of the user.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing a Ratepay transaction.
 */
+ (nullable instancetype)ratePayPaymentParamsWithCheckoutID:(NSString *)checkoutID
                                                dateOfBirth:(nullable NSDate *)dateOfBirth
                                                      error:(NSError * _Nullable __autoreleasing *)error;

/**
 Creates an object representing a Ratepay transaction.
 
 @param checkoutID The checkout ID of the transaction. Must be not `nil` or empty.
 @param dateOfBirth Date of Birth of the user.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing a Ratepay transaction.
 */
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                                dateOfBirth:(nullable NSDate *)dateOfBirth
                                      error:(NSError * _Nullable __autoreleasing *)error NS_DESIGNATED_INITIALIZER;

@end
NS_ASSUME_NONNULL_END
