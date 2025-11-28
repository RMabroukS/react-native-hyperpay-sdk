//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import "OPPPaymentParams.h"

@class OPPCashAppPayBrandConfig;
/**
 Class to encapsulate all necessary transaction parameters for performing Cash App Pay Payments transaction.
 */
NS_ASSUME_NONNULL_BEGIN
@interface OPPCashAppPayPaymentParams : OPPPaymentParams

@property (nonatomic, nonnull) OPPCashAppPayBrandConfig *cashAppPayBrandConfig;

/// @name Initialization
/// :nodoc:
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                               paymentBrand:(nullable NSString *)paymentBrand
                                      error:(NSError * _Nullable __autoreleasing *)error NS_UNAVAILABLE;
/**
 Creates an object representing an Cash App Pay transaction.
 
 @param checkoutID The checkout ID of the transaction. Must be not `nil` or empty.
 @param configuration Set  Cash App Pay brand configuration.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing an Cash App Pay transaction.
 */
+ (nullable instancetype)cashAppPayPaymentParamsWithCheckoutID:(nonnull NSString *)checkoutID
                                                 configuration:(nonnull OPPCashAppPayBrandConfig *) cashAppPayBrandConfig
                                                         error:(NSError * _Nullable __autoreleasing * _Nullable)error;
@end
NS_ASSUME_NONNULL_END
