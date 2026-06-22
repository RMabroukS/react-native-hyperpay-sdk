//  © Copyright ACI Worldwide, Inc. 2018, 2026


#import "OPPCardDetailsModel.h"

NS_ASSUME_NONNULL_BEGIN

/// :nodoc:

@interface OPPCardDetailsModel (Validation)
- (nullable NSString *)cmv_validateCardNumber:(NSString *)cardNumber paymentBrand:(NSString *)paymentBrand;
- (nullable NSString *)cmv_validateCardHolderName:(NSString *)cardHolderName;
- (nullable NSString *)cmv_validateCardExpiryDate:(NSString *)expiryDate paymentBrand:(NSString *)paymentBrand;
- (nullable NSString *)cmv_validateCVV:(NSString *)cvv paymentBrand:(NSString *)paymentBrand;
- (nullable NSString *)cmv_validateCountryCode:(NSString *)countryCode;
- (nullable NSString *)cmv_validateMobilePhone:(NSString *)mobilePhone;
@end



NS_ASSUME_NONNULL_END
