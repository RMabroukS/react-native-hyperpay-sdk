//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import "OPPPaymentParams.h"
@class PKContact;

/**
 Class to encapsulate all necessary transaction parameters for performing an Apple Pay transaction.
 */

NS_ASSUME_NONNULL_BEGIN
@interface OPPApplePayPaymentParams : OPPPaymentParams

/// @name Initialization

/// :nodoc:
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                      paymentBrand:(nullable NSString *)paymentBrand
                             error:(NSError * _Nullable __autoreleasing *)error NS_UNAVAILABLE;

/**
 Creates an object representing an Apple Pay transaction with brand APPLEPAY.

 @param checkoutID The checkout ID of the transaction. Must be not nil or empty.
 @param tokenData UTF-8 encoded JSON dictionary of encrypted payment data.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing an Apple Pay transaction, and nil if parameters are invalid.
*/
+ (nullable instancetype)applePayPaymentParamsWithCheckoutID:(NSString *)checkoutID
                                                   tokenData:(NSData *)tokenData
                                                       error:(NSError * _Nullable __autoreleasing *)error;

/**
 Creates an object representing an Apple Pay transaction.

 @param checkoutID The checkout ID of the transaction. Must be not nil or empty.
 @param paymentBrand The payment brand of the transaction.
 @param tokenData UTF-8 encoded JSON dictionary of encrypted payment data.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing an Apple Pay transaction, and nil if parameters are invalid.
*/
+ (nullable instancetype)applePayPaymentParamsWithCheckoutID:(NSString *)checkoutID
                                                paymentBrand:(NSString *)paymentBrand
                                                   tokenData:(NSData *)tokenData
                                                       error:(NSError * _Nullable __autoreleasing *)error;


/**
 Creates an object representing an Apple Pay transaction with brand APPLEPAY.

 @param checkoutID The checkout ID of the transaction. Must be not nil or empty.
 @param tokenData UTF-8 encoded JSON dictionary of encrypted payment data.
 @param billingContact billing contact object of payment.
 @param shippingContact shipping contact object of payment.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing an Apple Pay transaction, and nil if parameters are invalid.
*/
+ (nullable instancetype)applePayPaymentParamsWithCheckoutID:(NSString *)checkoutID
                                                   tokenData:(NSData *)tokenData
                                              billingContact:(nullable PKContact *)billingContact
                                             shippingContact:(nullable PKContact *)shippingContact
                                                       error:(NSError * _Nullable __autoreleasing *)error;

/**
 Creates an object representing an Apple Pay transaction.

 @param checkoutID The checkout ID of the transaction. Must be not nil or empty.
 @param paymentBrand The payment brand of the transaction.
 @param tokenData UTF-8 encoded JSON dictionary of encrypted payment data.
 @param billingContact billing contact object of payment.
 @param shippingContact shipping contact object of payment.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing an Apple Pay transaction, and nil if parameters are invalid.
*/
+ (nullable instancetype)applePayPaymentParamsWithCheckoutID:(NSString *)checkoutID
                                                paymentBrand:(NSString *)paymentBrand
                                                   tokenData:(NSData *)tokenData
                                              billingContact:(nullable PKContact *)billingContact
                                             shippingContact:(nullable PKContact *)shippingContact
                                                       error:(NSError * _Nullable __autoreleasing *)error;

/**
 Creates an object representing an Apple Pay transaction.

 @param checkoutID The checkout ID of the transaction. Must be not nil or empty.
 @param paymentBrand The payment brand of the transaction.
 @param tokenData UTF-8 encoded JSON dictionary of encrypted payment data.
 @param billingContact billing contact object of payment.
 @param shippingContact shipping contact object of payment.
 @param cardType Type of card used for payment.
 @param cardNetwork Network of card used for payment.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing an Apple Pay transaction, and nil if parameters are invalid.
*/
+ (nullable instancetype)applePayPaymentParamsWithCheckoutID:(NSString *)checkoutID
                                                paymentBrand:(NSString *)paymentBrand
                                                   tokenData:(NSData *)tokenData
                                              billingContact:(nullable PKContact *)billingContact
                                             shippingContact:(nullable PKContact *)shippingContact
                                                    cardType:(PKPaymentMethodType)cardType
                                                 cardNetwork:(nullable PKPaymentNetwork)cardNetwork
                                                       error:(NSError * _Nullable __autoreleasing *)error;


/**
 Creates an object representing an Apple Pay transaction with brand APPLEPAY.
 
 @param checkoutID The checkout ID of the transaction. Must be not nil or empty.
 @param tokenData UTF-8 encoded JSON dictionary of encrypted payment data.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing an Apple Pay transaction, and nil if parameters are invalid.
 */
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                                  tokenData:(NSData *)tokenData
                                      error:(NSError * _Nullable __autoreleasing *)error;

/**
 Creates an object representing an Apple Pay transaction.
 
 @param checkoutID The checkout ID of the transaction. Must be not nil or empty.
 @param paymentBrand The payment brand of the transaction.
 @param tokenData UTF-8 encoded JSON dictionary of encrypted payment data.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing an Apple Pay transaction, and nil if parameters are invalid.
 */
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                               paymentBrand:(NSString *)paymentBrand
                                  tokenData:(NSData *)tokenData
                                      error:(NSError * _Nullable __autoreleasing *)error NS_DESIGNATED_INITIALIZER;

/**
 Creates an object representing an Apple Pay transaction with brand APPLEPAY.
 
 @param checkoutID The checkout ID of the transaction. Must be not nil or empty.
 @param tokenData UTF-8 encoded JSON dictionary of encrypted payment data.
 @param billingContact billing contact object of payment.
 @param shippingContact shipping contact object of payment.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing an Apple Pay transaction, and nil if parameters are invalid.
 */
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                                  tokenData:(NSData *)tokenData
                             billingContact:(nullable PKContact *)billingContact
                            shippingContact:(nullable PKContact *)shippingContact
                                      error:(NSError * _Nullable __autoreleasing *)error;

/**
 Creates an object representing an Apple Pay transaction.
 
 @param checkoutID The checkout ID of the transaction. Must be not nil or empty.
 @param paymentBrand The payment brand of the transaction.
 @param tokenData UTF-8 encoded JSON dictionary of encrypted payment data.
 @param billingContact billing contact object of payment.
 @param shippingContact shipping contact object of payment.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing an Apple Pay transaction, and nil if parameters are invalid.
 */
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                               paymentBrand:(NSString *)paymentBrand
                                  tokenData:(NSData *)tokenData
                             billingContact:(nullable PKContact *)billingContact
                            shippingContact:(nullable PKContact *)shippingContact
                                      error:(NSError * _Nullable __autoreleasing *)error NS_DESIGNATED_INITIALIZER;

/**
 Creates an object representing an Apple Pay transaction.
 
 @param checkoutID The checkout ID of the transaction. Must be not nil or empty.
 @param paymentBrand The payment brand of the transaction.
 @param tokenData UTF-8 encoded JSON dictionary of encrypted payment data.
 @param billingContact billing contact object of payment.
 @param shippingContact shipping contact object of payment.
 @param cardType Type of card used for payment.
 @param cardNetwork Network of card used for payment.
 @param error The error that occurred while validating payment parameters. See code attribute (`OPPErrorCode`) and `NSLocalizedDescription` to identify the reason of failure.
 @return Returns an object representing an Apple Pay transaction, and nil if parameters are invalid.
 */
- (nullable instancetype)initWithCheckoutID:(NSString *)checkoutID
                               paymentBrand:(NSString *)paymentBrand
                                  tokenData:(NSData *)tokenData
                             billingContact:(nullable PKContact *)billingContact
                            shippingContact:(nullable PKContact *)shippingContact
                                   cardType:(PKPaymentMethodType)cardType
                                cardNetwork:(nullable PKPaymentNetwork)cardNetwork
                                      error:(NSError * _Nullable __autoreleasing *)error NS_DESIGNATED_INITIALIZER;

/// @name Properties

/**
 UTF-8 encoded JSON dictionary of encrypted payment data.  Ready for transmission to merchant's e-commerce backend for decryption and submission to a payment processor's gateway.
 */
@property (nonatomic, copy, readonly) NSData *tokenData;

/// @name Validation methods
/**
 Checks if the token data is valid to perform a transaction.
 
 @param tokenData UTF-8 encoded JSON dictionary of encrypted payment data.
 @return `YES` if the token data is not empty.
 */
+ (BOOL)isTokenDataValid:(NSData *)tokenData;

@end

NS_ASSUME_NONNULL_END
