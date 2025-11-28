//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import "OPPPaymentParams.h"

/**
 Class to encapsulate all necessary transaction parameters for performing an Ikano transaction.
 */

NS_ASSUME_NONNULL_BEGIN
@interface OPPIkanoOiPaymentParams : OPPPaymentParams

/// @name Initialization

/// :nodoc:
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                      paymentBrand:(nullable NSString *)paymentBrand
                             error:(NSError * _Nullable __autoreleasing *)error NS_UNAVAILABLE;

/**
 Creates an object representing an Ikano transaction.
 
 @param checkoutID The checkout ID of the transaction. Must be not `nil` or empty.
 @param paymentBrand IKANOOI_SE, IKANOOI_NO or IKANOOI_FI is expected.
 @param nationalIdentifier National identifier of the account.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing an Ikano transaction.
 */
+ (nullable instancetype)ikanoOiPaymentParamsWithCheckoutID:(NSString *)checkoutID
                                               paymentBrand:(nullable NSString *)paymentBrand
                                         nationalIdentifier:(NSString *)nationalIdentifier
                                                      error:(NSError **)error;

/**
 Creates an object representing an Ikano transaction.
 
 @param checkoutID The checkout ID of the transaction. Must be not `nil` or empty.
 @param paymentBrand IKANOOI_SE, IKANOOI_NO or IKANOOI_FI is expected.
 @param nationalIdentifier National identifier of the account.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing an Ikano transaction.
 */
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                               paymentBrand:(nullable NSString *)paymentBrand
                         nationalIdentifier:(NSString *)nationalIdentifier
                                      error:(NSError * _Nullable __autoreleasing *)error NS_DESIGNATED_INITIALIZER;

/// @name Properties

/** National identifier of the account. */
@property (nonatomic, copy, readonly) NSString *nationalIdentifier;

/// @name Parameter Checks

/**
 Checks if the national identifier is valid to perform a transaction.
 
 @param nationalIdentifier National identifier of the account.
 @param paymentBrand IKANOOI_SE, IKANOOI_NO or IKANOOI_FI is expected.
 @return `YES` if the national identifier value is valid.
 */
+ (BOOL)isNationalIdentifierValid:(NSString *)nationalIdentifier
                  forPaymentBrand:(nullable NSString *)paymentBrand;

@end
NS_ASSUME_NONNULL_END
