//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import "OPPPaymentParams.h"

/**
 Class to encapsulate all necessary transaction parameters for performing an Blik transaction.
 */

NS_ASSUME_NONNULL_BEGIN
@interface OPPBlikPaymentParams : OPPPaymentParams

/// @name Initialization

/// :nodoc:
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                               paymentBrand:(nullable NSString *)paymentBrand
                                      error:(NSError * _Nullable __autoreleasing *)error NS_UNAVAILABLE;

/**
 Creates an object representing an Blik transaction.
 
 @param checkoutID The checkout ID of the transaction. Must be not `nil` or empty.
 @param otp received on the mobile phone.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing an Blik transaction.
 */
+ (nullable instancetype)blikPaymentParamsWithCheckoutID:(NSString *)checkoutID
                                                     otp:(NSString *)otp
                                                   error:(NSError * _Nullable __autoreleasing *)error;

/// @name Properties
/** OTP received in the bank app.*/
@property (nonatomic, copy, readonly) NSString *otp;

@end
NS_ASSUME_NONNULL_END
