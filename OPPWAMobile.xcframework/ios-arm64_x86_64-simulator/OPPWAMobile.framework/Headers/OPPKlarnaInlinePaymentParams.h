//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import "OPPPaymentParams.h"

/**
 Class to encapsulate all necessary transaction parameters for performing Klarna Payments transaction.
 */
NS_ASSUME_NONNULL_BEGIN
@interface OPPKlarnaInlinePaymentParams : OPPPaymentParams

/// @name Initialization

/**
Creates an object representing a Klarna Payments transaction.

@param checkoutID The checkout ID of the transaction. Must be not `nil` or empty.
@param paymentBrand The payment brand of the transaction.
@param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
@return Returns an object representing a Klarna Payments transaction.
*/
+ (nullable instancetype)klarnaInlinePaymentParamsWithCheckoutID:(NSString *)checkoutID
                                                    paymentBrand:(nullable NSString *)paymentBrand
                                                           error:(NSError * _Nullable __autoreleasing *)error;

/**
 The id of the initial AD transaction (AD - account discovery). This parameter is required to submit PA transaction after shopper clicked Pay button.
 */
@property (nonatomic, copy, nullable) NSString *initialTransactionId;

@end
NS_ASSUME_NONNULL_END

