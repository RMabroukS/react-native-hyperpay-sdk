//  © Copyright ACI Worldwide, Inc. 2018, 2026


#import "OPPCardDetailsModel.h"

NS_ASSUME_NONNULL_BEGIN

/// :nodoc:

@interface OPPCardDetailsModel (BrandDetection)
- (void)cmb_detectBrandsForCardNumber:(nullable NSString *)cardNumber
                           completion:(void(^)(NSArray<NSString *> * _Nullable detectedBrands, NSError * _Nullable error))completion;

@end

NS_ASSUME_NONNULL_END
