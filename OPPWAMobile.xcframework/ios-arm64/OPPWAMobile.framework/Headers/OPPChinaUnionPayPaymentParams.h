//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import "OPPPaymentParams.h"

/**
 Class to encapsulate all necessary transaction parameters for performing a China UnionPay (UPOP) transaction.
 */

NS_ASSUME_NONNULL_BEGIN
@interface OPPChinaUnionPayPaymentParams : OPPPaymentParams

/// @name Initialization

/// :nodoc:
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                      paymentBrand:(nullable NSString *)paymentBrand
                             error:(NSError * _Nullable __autoreleasing *)error NS_UNAVAILABLE;

/**
 Creates an object representing a China UnionPay transaction.
 
 @param checkoutID The checkout ID of the transaction. Must be not `nil` or empty.
 @param holder Holder of the card account.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing a China UnionPay transaction.
 */
+ (nullable instancetype)chinaUnionPayPaymentParamsWithCheckoutID:(NSString *)checkoutID
                                                           holder:(nullable NSString *)holder
                                                            error:(NSError * _Nullable __autoreleasing *)error;

/**
 Creates an object representing a China UnionPay transaction.
 
 @param checkoutID The checkout ID of the transaction. Must be not `nil` or empty.
 @param holder Holder of the card account.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing a China UnionPay transaction.
 */
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                                     holder:(nullable NSString *)holder
                                      error:(NSError * _Nullable __autoreleasing *)error NS_DESIGNATED_INITIALIZER;

/// @name Properties

/** Holder of the account. The length must be greater than 3 characters and less then 128 character. */
@property (nonatomic, copy, readonly) NSString *holder;

/// @name Parameter Checks

/**
 Checks if the holder name is filled with sufficient data to perform a transaction.
 
 @param holder Holder of the card account.
 @return `YES` if the holder name length greater than 3 characters and less than 128 character.
 */
+ (BOOL)isHolderValid:(NSString *)holder;

@end
NS_ASSUME_NONNULL_END
