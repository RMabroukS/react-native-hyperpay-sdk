//  © Copyright ACI Worldwide, Inc. 2018, 2025


#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
@protocol OPPCardControllerDelegate;
@class OPPBillingAddress;
@class OPPCheckoutSettings;
@class OPPToken;

/**
 Class to encapsulate the CardDetails ViewController protocols,
 */

NS_ASSUME_NONNULL_BEGIN

/**
 A protocol collects card details and additional information required for card payment.
 */
@protocol OPPCardDetailsDataSource <NSObject>

/**
 CardDetails ViewController delegate.
 */
@property (nonatomic, nullable) id<OPPCardControllerDelegate> cardControllerDelegate;

/**
 A method to get custom View Controller card number TextField.
 @return an `UITextField` object to the view model.
*/
- (UITextField *)cardControllerCardNumberTextField;

/**
 A method to get custom View Controller card holder TextField.
 @return an `UITextField` object to the view model.
*/
- (UITextField *)cardControllerCardHolderTextField;

/**
 A method to get custom View Controller expiration date TextField.
 @return an `UITextField` object to the view model.
*/
- (UITextField *)cardControllerExpirationDateTextField;

/**
 A method to get custom View Controller CVV TextField.
 @return an `UITextField` object to the view model.
*/
- (UITextField *)cardControllerCVVTextField;
@optional

/**
 A method to get custom View Controller country code TextField.
 @return an `UITextField` object to the view model.
*/
- (UITextField *)cardControllerCountryCodeField;

/**
 A method to get custom View Controller phone number TextField.
 @return an `UITextField` object to the view model.
*/
- (UITextField *)cardControllerMobilePhoneField;

/**
 A method to listen for TextViews validation errors.
 @param textField Validated TextField.
 @param error error object.
*/
- (void)cardControllerTextField:(UITextField *)textField errorDidHappen:(nullable NSError *)error;

/**
 A method to listen for TextViews visibility changes.
 @param textField changed TextField.
 @param hidden indecates if TextField is changed visibility.
*/
- (void)cardControllerTextField:(UITextField *)textField shouldChangeVisibility:(BOOL)hidden;

/**
 A method to listen for detected payment brands..
 @param paymentBrands an array of detected payment brands..
 @param error error object, `nil` payment brands detected successfully.
*/
- (void)cardControllerOnPaymentBrandsDetected:(nullable NSArray<NSString *> *)paymentBrands error:(nullable NSError *)error;
@end

/**
 A protocol for CardDetails ViewModel delegate.
*/
@protocol OPPCardControllerDelegate <NSObject>

/**
 A method intended to run right after custom View Controller viewDidLoad method.
*/
- (void)viewControllerDidLoaded;

/**
 A method for canceling current checkout session.
*/
- (void)cancelCheckout;

/**
 A method for submitting payment transaction.
 @param completionHandler for handling payment parameters preparation status.
*/
- (void)submitPaymentTransactionWithCompletionHandler:(nullable void (^)(BOOL result))completionHandler;

/**
 A method for checking if card scanning capability is enabled.
 @return BOOL status.
*/
- (BOOL)isCardScanAvailable;

/**
 A method to start card scanning View Controller.
*/
- (void)startCardScan;

/**
 A method to get current payment brand.
 @return an `NSString` object.
*/
- (NSString *)paymentBrand;

/**
 A method to get checkout settings.
 @returns an `OPPCheckoutSettings` object.
*/
- (OPPCheckoutSettings *)checkoutSettings;

/**
 A method to get a token.
 @returns an `OPPToken` object, or `nil` if token is empty.
*/
- (nullable OPPToken *)token;

/**
 A method to set number of installments.
 @param numberOfInstallments set number of installments.
*/
- (void)updateNumberOfInstallments:(NSUInteger)numberOfInstallments;

/**
 A method to set billing address.
 @param billingAddress set payment billing address.
*/
- (void)updateBillingAddress:(nullable OPPBillingAddress *)billingAddress;

/**
 A method to change current payment brand.
 @param paymentBrand set payment brand.
*/
- (void)changePaymentBrand:(NSString *)paymentBrand;

/**
 A method to enable storing payment details.
 @param store set YES to store payment details.
*/
- (void)storePaymentDetails:(BOOL)store;
@end

NS_ASSUME_NONNULL_END
