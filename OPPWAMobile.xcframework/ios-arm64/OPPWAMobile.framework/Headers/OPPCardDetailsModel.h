//  © Copyright ACI Worldwide, Inc. 2018, 2026


#import <Foundation/Foundation.h>
@class OPPCheckoutProvider;
@class OPPToken;
@class OPPCheckoutSettings;
@class OPPBillingAddress;
@import SafariServices;
@class OPPPaymentParams;
@class OPPTokenPaymentParams;

NS_ASSUME_NONNULL_BEGIN

/// :nodoc:

@interface OPPCardDetailsModel : NSObject

- (instancetype)init NS_UNAVAILABLE;
- (nullable instancetype)initWithCheckoutProvider:(OPPCheckoutProvider *)checkoutProvider
                                     paymentBrand:(NSString *)paymentBrand;
- (nullable instancetype)initWithCheckoutProvider:(OPPCheckoutProvider *)checkoutProvider
                                            token:(OPPToken *)token;

@property (nonatomic, nullable) OPPCheckoutProvider *checkoutProvider;
@property (nonatomic) OPPCheckoutSettings *checkoutSettings;
@property (nonatomic, copy) NSString *paymentBrand;
@property (nonatomic, nullable) OPPToken *token;
@property (nonatomic, nullable) OPPBillingAddress *address;
@property (nonatomic, assign) NSUInteger numberOfInstallments;
@property (nonatomic, copy) NSString *initialPaymentBrand;
@property (nonatomic, assign) BOOL storePaymentDetails;
@property (nonatomic, copy) NSArray<NSString *> *detectedBrands;

- (void)resetBinCache;
- (nullable OPPPaymentParams *)preparePaymentParamsWithCardNumber:(NSString *)cardNumber
                                                       holderName:(nullable NSString *)holderName
                                                      expiryMonth:(nullable NSString *)expiryMonth
                                                       expiryYear:(nullable NSString *)expiryYear
                                                              CVV:(nullable NSString *)CVV
                                                      countryCode:(nullable NSString *)countryCode
                                                      phoneNumber:(nullable NSString *)phoneNumber;

- (nullable OPPPaymentParams *)prepareTokenPaymentParamsWithCVV:(nullable NSString *)CVV;

@end
NS_ASSUME_NONNULL_END
