//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import <OPPWAMobile/OPPWAMobile.h>
#import "OPPBillingAddress.h"

NS_ASSUME_NONNULL_BEGIN

@interface OPPBillingAddress (Validation)
+ (BOOL)bav_isAddressValid:(nullable OPPBillingAddress *)address;
@end

NS_ASSUME_NONNULL_END
