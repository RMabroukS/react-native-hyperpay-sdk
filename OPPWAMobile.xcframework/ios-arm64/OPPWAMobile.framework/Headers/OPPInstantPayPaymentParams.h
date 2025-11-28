//  © Copyright ACI Worldwide, Inc. 2018, 2025


#import <Foundation/Foundation.h>
#import "OPPPaymentParams.h"
#import "OPPBankAccountPaymentParams.h"

NS_ASSUME_NONNULL_BEGIN

@interface OPPInstantPayPaymentParams : OPPBankAccountPaymentParams

/// @name Initialization

/// :nodoc:
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                      paymentBrand:(nullable NSString *)paymentBrand
                             error:(NSError * _Nullable __autoreleasing *)error NS_UNAVAILABLE;

/**
 Creates an object representing a Instant Pay transaction.
 
 @param checkoutID The checkout ID of the transaction. Must be not `nil` or empty.
 @param accountHolder The account holder of the bank account.
 @param accountNumber The account number of the bank account.
 @param routingNumber The routing number associated with the bank account.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing a Instant Pay  transaction, and `nil` if parameters are invalid.
 */
+ (nullable instancetype)instantPayPaymentParamsWithCheckoutID:(NSString *)checkoutID
                                                 accountHolder:(NSString *)accountHolder
                                                 accountNumber:(NSString *)accountNumber
                                                 routingNumber:(NSString *)routingNumber
                                                   countryCode:(NSString *)countryCode
                                                         error:(NSError * _Nullable __autoreleasing *)error;

/// @name Properties

/** The account number of the bank account. Either the account number or the IBAN are required. */
@property (nonatomic, copy, readonly, nullable) NSString *routingNumber;

/// @name Validation methods


/**
 Checks if the routing number is valid.
 
 @param routingNumber The routing number for validation.
 @return `YES` if the routing number is valid.
 */
+ (BOOL)isRoutingNumberValid:(NSString *)routingNumber;

@end

NS_ASSUME_NONNULL_END
