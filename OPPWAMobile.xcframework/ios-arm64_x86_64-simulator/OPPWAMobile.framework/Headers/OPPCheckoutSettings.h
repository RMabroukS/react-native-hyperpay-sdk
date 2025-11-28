//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import <Foundation/Foundation.h>
#import <PassKit/PassKit.h>
#import "OPPBillingAddress.h"
#import "OPPViewController.h"
@class OPPBrandConfig;
@class OPPCheckoutTheme;
@class OPPSecurityPolicy;
@class OPPThreeDSConfig;
@class OPPWpwlOptions;
@class OPPMBWayConfig;
@class OPPAfterpayConfig;
@class OPPAmazonPayConfig;

/// An enumeration for the possible store payment details modes.
typedef NS_ENUM(NSInteger, OPPCheckoutStorePaymentDetailsMode) {
    /// Always store payment details for future use.
    OPPCheckoutStorePaymentDetailsModeAlways,
    /// Display the option to prompt the user permissions to store payment details for future use.
    OPPCheckoutStorePaymentDetailsModePrompt,
    /// Never store payment details.
    OPPCheckoutStorePaymentDetailsModeNever
};

/// An enumeration for the possible modes to skip CVV check.
typedef NS_ENUM(NSInteger, OPPCheckoutSkipCVVMode) {
    /// Always request CVV for card payments.
    OPPCheckoutSkipCVVModeNever,
    /// Skip CVV check only for payments by stored cards.
    OPPCheckoutSkipCVVModeForStoredCards,
    /// Always skip CVV check. CVV field won't be displayed in card payment forms.
    OPPCheckoutSkipCVVModeAlways
};

/// An enumeration for the possible display modes of card brands on payment method selection screen.
typedef NS_ENUM(NSInteger, OPPCheckoutCardBrandsDisplayMode) {
    /// Display card brands in the list along with other payment methods.
    OPPCheckoutCardBrandsDisplayModeSeparate,
    /// Display all card brands grouped in one row. This mode allows shopper to skip choosing concrete card brand, the brand will be detected automatically based on card number.
    OPPCheckoutCardBrandsDisplayModeGrouped
};

/// An enumeration for the possible ways of automatic card brand detection
typedef NS_ENUM(NSInteger, OPPCheckoutBrandDetectionType) {
    /// Uses regular expressions to analyze card number (supports a limited number of brands)
    OPPCheckoutBrandDetectionTypeRegex,
    /// Searches card bin in the bin list (more precise)
    OPPCheckoutBrandDetectionTypeBinList
};

/// An enumeration for the card brand detection appearance style
typedef NS_ENUM(NSInteger, OPPCheckoutBrandDetectionAppearanceStyle) {
    /// The detected card brands interface appears automatically.
    OPPCheckoutBrandDetectionAppearanceStyleActive,
    /// The detected card brands interface is hidden. The user can make it visible by clicking on card icon in the card number text field.
    OPPCheckoutBrandDetectionAppearanceStyleInactive,
    /// The detected card brands interface is disabled. First detected brand will be used.
    OPPCheckoutBrandDetectionAppearanceStyleNone
};

/// An enumeration for the ApplePay contact types
typedef NS_OPTIONS(NSInteger, OPPCheckoutApplePayContactType) {
    /// ApplePay billing contact type
    OPPCheckoutApplePayContactTypeBillingAddress = 1,
    /// ApplePay shipping contact type
    OPPCheckoutApplePayContactTypeCustomer = 2
};

/**
 Class which encapsulates settings for the built-in in-App payment page. Use this to customize both the visual elements of the payment pages as well as functionality. This includes changing colors and texts, defining payment methods.
 */
NS_ASSUME_NONNULL_BEGIN
@interface OPPCheckoutSettings : NSObject

/// @name Properties

/**
 The custom theme for the payment forms. Default is `OPPCheckoutThemeStyleLight`.
 @see `OPPCheckoutThemeStyle`
 */
@property (nonatomic, readonly) OPPCheckoutTheme *theme;

/**
 This URL will receive the result of an asynchronous payment. Must be sent URL encoded.
 */
@property (nonatomic, copy, nullable) NSString *shopperResultURL;

/**
 The list of payment brands to be shown.
 */
@property (nonatomic, copy) NSArray<NSString *> *paymentBrands;

/**
 A constant that specifies the store payment details mode. Default is `OPPCheckoutStorePaymentDetailsModeNever`.
 */
@property (nonatomic) OPPCheckoutStorePaymentDetailsMode storePaymentDetails;

/**
 A constant that specifies whether request CVV or not. Default is `OPPCheckoutSkipCVVModeNever`.
 */
@property (nonatomic) OPPCheckoutSkipCVVMode skipCVV;

/**
 A flag that specifies whether show card holder name in the card detail view or not. Default is `YES`.
 */
@property (nonatomic, getter=isCardHolderVisible) BOOL cardHolderVisible;

/**
 List of possible numbers of installments.
 */
@property (nonatomic, copy) NSArray<NSNumber *> *installmentOptions;

/**
 A flag that specifies whether payment should be split into installments.
 */
@property (nonatomic, getter=isInstallmentEnabled) BOOL installmentEnabled;

/**
 Set of security policies to confirm payment.
 Increase security for tokens or specific payment methods with Touch ID/Face ID or passcode.
 */
@property (nonatomic, copy, nullable) NSArray<OPPSecurityPolicy *> *securityPolicies;

/**
 The language used for language specific labels in ISO 639-1 language identifier.
 If the language is not supported English will be used.
 If language is `nil`, app wil use the first supported language from language settings.
 */
@property (nonatomic, copy, nullable) NSString *language;

/** Encapsulates a request for payment, including information about payment processing capabilities and the payment amount. */
@property (nonatomic, nullable) PKPaymentRequest *applePayPaymentRequest;

/** Class that contains all possible settings used for additional configuration of the ipworks3ds_sdk. */
@property (nonatomic, nullable) OPPThreeDSConfig *threeDSConfig;

/** Sets the country to be used for Klarna checkout in ISO 3166-1 alpha-2 country identifier. By default, uses `countryCode` from device locale if supported. Otherwise, use `DE`. */
@property (nonatomic, copy, nullable) NSString *klarnaCountry;

/** Sets the fee to be used for the "Billing agreement" link during a Klarna Invoice checkout. */
@property (nonatomic, nullable) NSDecimalNumber *klarnaInvoiceFee;

/** Sets the fee to be used for the "Read more" link during a Klarna Installments checkout. */
@property (nonatomic, nullable) NSDecimalNumber *klarnaInstallmentsFee;

/**
 A flag that specifies whether show IBAN field on the Giropay payment form or not. Default is `NO`.
 */
@property (nonatomic, getter=isIBANRequired) BOOL IBANRequired;

/**
 A flag that specifies whether show QR-Code field on the STC Pay payment form or not. Default is `YES`.
 */
@property (nonatomic, getter=isSTCPayQrCodeRequired) BOOL STCPayQrCodeRequired;

/**
 A mode that specifies how to display card brands on payment method selection screen.
 Default is `OPPCheckoutCardBrandsDisplayModeGrouped`.
 */
@property (nonatomic) OPPCheckoutCardBrandsDisplayMode cardBrandsDisplayMode;

/**
 A flag that specifies whether show total amount in the checkout or not.
 If `YES`, amount is shown on the payment method selection screen and in the 'Pay' buttons.
 Default is `NO`.
 */
@property (nonatomic) BOOL displayTotalAmount;

/**
 Type of automatic card brand detection to be used.
 Default is `OPPCheckoutBrandDetectionTypeRegex`.
 */
@property (nonatomic) OPPCheckoutBrandDetectionType brandDetectionType;

/**
 Sets the preferred order of the detected card brands to be shown under the card number text field.
 By default order from `paymentBrands` is used.
 */
@property (nonatomic, copy) NSArray<NSString *> *brandDetectionPriority;

/**
 A constant that control multiple detected brands under card number appearance style. Default is `OPPCheckoutBrandDetectionAppearanceStyleActive`.
 */
@property (nonatomic) OPPCheckoutBrandDetectionAppearanceStyle brandDetectionAppearanceStyle;

/**
 Sets custom logo to be presented at the checkout for the specified payment brands.
 */
@property (nonatomic, copy, nullable) NSDictionary<NSString *, UIImage *> *customLogos;

/**
 Property which holds billing address of the customer.
 */
@property (nonatomic, nullable) OPPBillingAddress *billingAddress;

/**
 A flag that specifies whether payment brands order is used for tokens on payment method selection screen. Default is `NO`.
 */
@property (nonatomic, getter=isPaymentBrandsOrderUsedForTokens) BOOL paymentBrandsOrderUsedForTokens;

/**
 A flag that enable/disable Show Date of Birth of Customer to be presented at the checkout is used for RatePay payment brand. Default is 'NO'.
 */
@property (nonatomic, getter=isShowBirthDateForRatePay) BOOL showBirthDateForRatePay;

/**
 A flag that enable/disable back button to be presented on the Payment Details. Default is 'YES'.
 */
@property (nonatomic, getter=isBackButtonAvailable) BOOL backButtonAvailable;

/**
A flag that enable/disable card scan button to be presented on the Payment Details. Default is 'YES'.
*/
@property (nonatomic, getter=isCardScanningEnabled) BOOL cardScanButtonAvailable;

/**
 A flag that is used to set the Apple Pay Button Type. Default is 'PKPaymentButtonTypePlain'.
 */
@property (nonatomic) PKPaymentButtonType applePayType;

/**
A flag that Disable's Card expiry date validation. Default is 'No'.
*/
@property (nonatomic) BOOL disableCardExpiryDateValidation;

/**
 WPWL Java Script options for CopyAndPay integration.
 */
@property (nonatomic, copy) NSDictionary<NSString *, OPPWpwlOptions *> *wpwlOptions;

/**
 Property which holds MBWay brand specific configuration.
 */
@property (nonatomic, copy) OPPMBWayConfig *mbwayConfig;

/**
A flag that enable/disable OTP field to be presented on the Payment Details for BLIK. Default is 'YES'.
*/
@property (nonatomic, getter=isShowOtpEnabled) BOOL showOtpEnabled;

/**
 The country for ACI Instant Pay payment method.
 It should be one of these values NL, DE, FR, BE, LV, EE, LT, ES, AT, IT, PT, GB, US.
 Default is 'US'.
 */
@property (nonatomic, copy) NSString *aciInstantPayCountry;

/**
 The configuration for AFTERPAY_PACIFIC payment method if it is set.
 */
@property (nonatomic, strong, nullable) OPPAfterpayConfig *afterpayConfig;

/**
 The configuration for AmazonPay payment method if it is set.
 */
@property (nonatomic, strong, nullable) OPPAmazonPayConfig *amazonPayConfig;

/**
The payment parameters for IDEAL 2.0 payment brand.
 */
@property (nonatomic, copy, nullable) NSString *idealBankAccountCountry;

/**
The bit mask holding Apple Pay contacts types.
 */
@property (nonatomic, assign) OPPCheckoutApplePayContactType applePayContactTypes;


@property (nonatomic, copy) NSDictionary<OPPViewController, UIViewController *> *customControllers;

/**
 Configure view controllers for UI Component integration.
 */
- (BOOL)customController:(OPPViewController)controllerType withUiController:(nonnull UIViewController *)controller;

/**
 Set brand configuration
 */
- (void)setBrandConfig:(OPPBrandConfig *)brandConfig;

/// :nodoc:
- (nullable OPPBrandConfig*)getBrandConfig:(NSString *)brand;

@end
NS_ASSUME_NONNULL_END
