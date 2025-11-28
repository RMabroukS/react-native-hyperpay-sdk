//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import "OPPPaymentParams.h"

/**
 Class to encapsulate all necessary transaction parameters for performing an MB WAY transaction.
 */

NS_ASSUME_NONNULL_BEGIN
@interface OPPMBWayPaymentParams : OPPPaymentParams

/// @name Initialization

/// :nodoc:
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                               paymentBrand:(nullable NSString *)paymentBrand
                                      error:(NSError * _Nullable __autoreleasing *)error NS_UNAVAILABLE;

/**
 Creates an object representing an MB WAY transaction.
 
 @param checkoutID The checkout ID of the transaction. Must be not `nil` or empty.
 @param countryCode Country code of the mobile phone number.
 @param phoneNumber Mobile phone number of the account.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing an MB WAY transaction.
 */
+ (nullable instancetype)mbWayPaymentParamsWithCheckoutID:(NSString *)checkoutID
                                              countryCode:(NSString *)countryCode
                                              phoneNumber:(NSString *)phoneNumber
                                                    error:(NSError * _Nullable __autoreleasing *)error;

/// @name Properties

/** Country code of the mobile phone number. */
@property (nonatomic, copy, readonly) NSString *countryCode;

/** Mobile phone number of the account. */
@property (nonatomic, copy, readonly) NSString *phoneNumber;

@end
NS_ASSUME_NONNULL_END
