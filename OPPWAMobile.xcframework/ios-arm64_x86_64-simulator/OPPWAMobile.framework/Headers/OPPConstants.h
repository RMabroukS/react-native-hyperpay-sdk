//  © Copyright ACI Worldwide, Inc. 2018, 2026

#import <Foundation/Foundation.h>

/**
 A constant to be used instead of specific card brand. The brand will be detected automatically based on card number.
 */
extern NSString *const OPPPaymentBrandCard;

/**
Constant for a key to get Klarna Payments client token value from the transaction response.
*/
FOUNDATION_EXPORT NSString *const OPPTransactionKlarnaInlineClientTokenKey;

/**
Constant for a key to get Klarna Payments callback URL value from the transaction response.
*/
FOUNDATION_EXPORT NSString *const OPPTransactionKlarnaInlineClientCallbackUrlKey;

/**
Constant for a key to get Klarna Payments failure callback URL from the transaction response.
*/
FOUNDATION_EXPORT NSString *const OPPTransactionKlarnaInlineClientFailureCallbackUrlKey;

/**
Constant for a key to get Klarna Payments initial transaction id from the transaction response.
*/
FOUNDATION_EXPORT NSString *const OPPTransactionKlarnaInlineInitialTransactionIdKey;

/**
Constant for a key to get Bancontact app scheme URL to redirect to the Bancontact app.
*/
FOUNDATION_EXPORT NSString *const OPPTransactionBancontactLinkAppSchemeUrlKey;
