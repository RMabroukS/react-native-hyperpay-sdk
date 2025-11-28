//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import <Foundation/Foundation.h>

/// An enumeration for the various types of error that resulted in an operation's failure.
typedef NS_ENUM(NSInteger, OPPErrorCode) {
    /// Unsupported transaction payment params.
    OPPErrorCodePaymentParamsUnsupported = 1000,
    /// Transaction checkoud ID is not valid.
    OPPErrorCodePaymentParamsCheckoutIDInvalid = 1010,
    /// Brand doesn't match payment params class.
    OPPErrorCodePaymentParamsBrandInvalid = 1011,
    /// Device authentication check failed
    OPPErrorCodeDeviceAuthenticationCheckFailed = 1012,
    /// The token identifier is invalid. Must be alpha-numeric string of length 32.
    OPPErrorCodePaymentParamsTokenIDInvalid = 1090,
    /// Tokenization is not supported for chosen payment brand.
    OPPErrorCodePaymentParamsTokenizationUnsupported = 1091,

    /// Holder must at least contain first and last name.
    OPPErrorCodeCardHolderInvalid = 1110,
    /// Invalid card number. Does not pass the Luhn check.
    OPPErrorCodeCardNumberInvalid = 1111,
    /// Unsupported card brand.
    OPPErrorCodeCardBrandInvalid = 1112,
    /// Month must be in the format MM.
    OPPErrorCodeCardMonthInvalidFormat = 1113,
    /// Year must be in the format YYYY.
    OPPErrorCodeCardYearInvalidFormat = 1114,
    /// Card is expired.
    OPPErrorCodeCardExpired = 1115,
    /// CVV invalid. Must be three or four digits.
    OPPErrorCodeCardCVVInvalid = 1116,
    
    /// Holder of the bank account is not valid.
    OPPErrorCodeBankAccountHolderInvalid = 1130,
    /// IBAN is not valid.
    OPPErrorCodeBankAccountIBANInvalid = 1131,
    /// The country code of the bank is invalid. Should match ISO 3166-1 two-letter standard.
    OPPErrorCodeBankAccountCountryInvalid = 1132,
    /// The name of the bank which holds the account is invalid.
    OPPErrorCodeBankAccountBankNameInvalid = 1133,
    /// The BIC (Bank Identifier Code (SWIFT)) number of the bank account is invalid.
    OPPErrorCodeBankAccountBICInvalid = 1134,
    /// The code associated with the bank account is invalid.
    OPPErrorCodeBankAccountBankCodeInvalid = 1135,
    /// The account number of the bank account is invalid.
    OPPErrorCodeBankAccountNumberInvalid = 1136,
    /// The routing number of the bank account is invalid.
    OPPErrorCodeBankAccountRoutingNumberInvalid = 1137,

    /// The Apple Pay payment token data is invalid. To perform this type of transaction a valid payment token data is needed.
    OPPErrorCodeApplePayTokenDataInvalid = 1150,    
    /// The Apple Pay authorization rejected by merchant.
    OPPErrorCodeApplePayAuthorizationDeclined = 1151,
    /// Unable to submit Apple pay request
    OPPErrorCodeApplePayRequestSubmitionFailed = 1152,
    /// Unable to submit Apple pay recurring request
    OPPErrorCodeApplePayRecurringRequestSubmitionFailed = 1153,

    /// The phone number is not valid.
    OPPErrorCodePhoneNumberInvalid = 1160,
    /// The country code is not valid.
    OPPErrorCodeCountryCodeInvalid = 1161,
    /// The email is not valid.
    OPPErrorCodeEmailInvalid = 1162,
    /// The national identifier is not valid.
    OPPErrorCodeNationalIdentifierInvalid = 1163,
    
    /// The account verification is not valid.
    OPPErrorCodeAccountVerificationInvalid = 1170,
    
    /// The payment token is invalid. To perform this type of transaction a valid payment token is needed.
    OPPErrorCodePaymentTokenInvalid = 1180,
        
    /// Checkout info cannot be loaded.
    OPPErrorCodeCheckoutInfoCannotBeLoaded = 2000,
    /// There are no available payment methods in checkout.
    OPPErrorCodeNoAvailablePaymentMethods = 2001,
    /// Payment method is not available.
    OPPErrorCodePaymentMethodNotAvailable = 2002,
    /// The transaction was aborted.
    OPPErrorCodeTransactionAborted = 2003,
    /// Brand validation rules cannot be loaded from.
    OPPErrorCodeBrandValidationCannotBeLoaded = 2004,
    /// Checkout data cannot be loaded.
    OPPErrorCodeCheckoutDataCannotBeLoaded = 2005,

    
    /// The transaction was declined. Please contact the system administrator of the merchant server to get the reason of failure.
    OPPErrorCodeTransactionProcessingFailure = 2010,
    /// The сheckout configuration is not valid.
    OPPErrorCodeInvalidCheckoutConfiguration = 2020,
    
    /// Unexpected connection error. Please contact the system administrator of the server.
    OPPErrorCodeConnectionFailure = 3000,
    
    /// Invalid input parameters for the request.
    OPPErrorCodeRequestParametersInvalid = 3001,
    
    /// Invalid response from the Server.
    OPPErrorCodeServerResponseInvalid = 3002,
    
    /// File loaded from resources does not have valid checksum. Make sure you installed the framework correctly and no one has been tampering with the application.
    OPPErrorCodeSecurityXMLManipulation = 4000,
    
    /// Klarna Payments specific error.
    OPPErrorCodeKlarnaInline = 5001,
    
    /// Bancontact Link specific error.
    OPPErrorCodeBancontactLink = 5002,
    
    /// Vipps Link specific error.
    OPPErrorCodeVippsLink = 5003,
    
    /// Afterpay Payments specific error.
    OPPErrorCodeAfterPay = 5004,

    /// Clearpay Payments specific error.
    OPPErrorCodeClearPay = 5005,

    /// Blik Payments specific error.
    OPPErrorCodeBlik = 5006,
    
    /// CashAppPay Payments specific error.
    OPPErrorCodeCashAppPay = 5007,
    
    /// Affirm Payments specific error.
    OPPErrorCodeAffirm = 5008,
    
    /// AmazonPay Payments specific error.
    OPPErrorCodeAmazonPay = 5009,
    
    /// MobilePay Link specific error.
    OPPErrorCodeMobilePayLink = 5010,

    /// 3-D Secure 2 transaction error.
    OPPErrorCodeThreeDS2Failure = 6000,
    
    /// 3-D Secure 2 transaction was cancelled.
    OPPErrorCodeThreeDS2ChallengeCanceled = 6001,
    
    /// Card Scanning general error.
    OPPErrorCodeCardScanningGeneralError = 7000,
    
    /// Copy and Pay web loading error.
    OPPErrorCodeCopyAndPayGeneralError = 8000,
    
    /// Custom components validation general errror.
    OPPErrorCodeCustomComponentGeneralError = 9000
};

/**
 Contains all error messages and codes that returned by SDK methods.
 
 To retrieve the return code ([OPPErrorCode](../Documentation/Enums/OPPErrorCode.html )) use the code attribute of the `NSError` object:
 
     error.code;
 
 To retrieve the error description look to localized description:
 
     (NSString *)error.localizedDescription;
 
 ## User info dictionary keys
 
 This key may exist in the user info dictionary, in addition to those defined for `NSError`.
 
     NSString *const OPPErrorTransactionFailureDetailsKey
 
 ### Constants
 
 `OPPErrorTransactionFailureDetailsKey`
 The corresponding value is an `NSDictionary` containing the detail transaction failure information.
 
 ##Error codes
 Below you can find all currently supported error codes. See also separate page with `OPPErrorCode` enum definition.
 ###Payment params errors:
 - 1000: Unsupported transaction payment params.
 - 1010: Transaction checkoud ID is not valid.
 - 1011: Brand doesn't match payment params class.
 - 1012: Device authentication check for payment brand is failed.
 - 1090: The token identifier is invalid. Must be alpha-numeric string of length 32.
 - 1091: Tokenization is not supported for chosen payment brand.

 ###Card errors:
 - 1110: Holder must at least contain first and last name.
 - 1111: Invalid card number. Does not pass the Luhn check.
 - 1112: Unsupported card brand.
 - 1113: Month must be in the format MM.
 - 1114: Year must be in the format YYYY.
 - 1115: Card is expired.
 - 1116: CVV invalid. Must be three or four digits.

 ###Bank account errors:
 - 1130: Holder of the bank account is not valid.
 - 1131: IBAN is not valid.
 - 1132: The country code of the bank is invalid. Should match ISO 3166-1 two-letter standard.
 - 1133: The name of the bank which holds the account is invalid.
 - 1134: The BIC (Bank Identifier Code (SWIFT)) number of the bank account is invalid.
 - 1135: The code associated with the bank account is invalid.
 - 1136: The account number of the bank account is invalid.
 
 ###Apple Pay errors:
 - 1150: The Apple Pay payment token data is invalid. To perform this type of transaction a valid payment token data is needed.
 - 1151: The Apple Pay authorization rejected by merchant.
 - 1152: Unable to send Apple pay request
 
 ###Transaction errors:
 - 2000: Checkout info cannot be loaded.
 - 2001: There are no available payment methods in checkout.
 - 2002: Payment method is not available.
 - 2003: The transaction was aborted.
 - 2004: Brand validation rules cannot be loaded from.
 
 - 2010: The transaction was declined. Please contact the system administrator of the merchant server to get the reason of failure.
 - 2020: The сheckout configuration is not valid.
 
 ###Request errors:
 - 3000: Unexpected connection error. Please contact the system administrator of the server.
 - 3001: Invalid input parameters for the request.
 - 3002: Invalid response from the Server.
 
 ###Security errors:
 - 4000: File loaded from resources does not have valid checksum. Make sure you installed the framework correctly and no one has been tampering with the application.
 
 ###Klarna Payments errors:
 - 5001: Klarna Payments specific error.
 
 ###Bancontact Link  errors:
 - 5002: Bancontact Link specific error.
 
 ###Vipps errors:
 - 5003: Vipps specific error.
 
 ###Afterpay errors:
 - 5004: Afterpay specific error.
 
 ###Clearpay errors:
 - 5005: Clearpay specific error.
 
 ###Blik errors:
 - 5006: Blik specific error.
 
 ###Cash App Pay errors:
 - 5007: Cash App Pay specific error.
 
 ###AmazonPay errors:
 - 5009: AmazonPay specific error.
 
 ###MobilePay errors:
 - 5010: MobilePay specific error.
 
 ###3-D Secure 2 errors:
 - 6000: 3-D Secure 2 transaction error.
 - 6001: 3-D Secure 2 transaction was cancelled.
 
 ###Credit card number scanning error:
 - 7000: Card Scanning general error.
 
 ###Copy and Pay web loading error:
 - 8000: OPPErrorCodeCopyAndPayGeneralError.
 
 ###Custom Components general error:
 - 9000: OPPErrorCodeCustomComponentGeneralError.
 */

@interface OPPErrors : NSObject

/** The error domain for specific errors associated with the ready-to-use UI or SDK API. */
FOUNDATION_EXPORT NSString *const OPPErrorDomain;

/** The corresponding value is the `error.userInfo` dictionary containing the detail transaction failure information. */
FOUNDATION_EXPORT NSString *const OPPErrorTransactionFailureDetailsKey;

@end
