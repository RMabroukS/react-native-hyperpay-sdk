//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import "OPPPaymentParams.h"

/**
 Class to encapsulate all necessary transaction parameters for performing KG Inicis transaction.
 */
NS_ASSUME_NONNULL_BEGIN
@interface OPPInicisPaymentParams : OPPPaymentParams

/// @name Initialization

/// :nodoc:
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                      paymentBrand:(nullable NSString *)paymentBrand
                             error:(NSError * _Nullable __autoreleasing *)error NS_UNAVAILABLE;

/**
 Creates an object representing a KG Inicis transaction.
 
 @param checkoutID The checkout ID of the transaction. Must be not `nil` or empty.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing KG Inicis transaction.
*/
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                                      error:(NSError * _Nullable __autoreleasing *)error NS_DESIGNATED_INITIALIZER;

/**
 Creates an object representing a KG Inicis transaction.
 
 @param checkoutID The checkout ID of the transaction. Must be not `nil` or empty.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing KG Inicis transaction.
*/
+ (nullable instancetype)inicisPaymentParamsWithCheckoutID:(NSString *)checkoutID
                                                     error:(NSError * _Nullable __autoreleasing *)error;

@end
NS_ASSUME_NONNULL_END
