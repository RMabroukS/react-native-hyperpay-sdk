//  © Copyright ACI Worldwide, Inc. 2018, 2026


#import "OPPCardDetailsModel.h"

NS_ASSUME_NONNULL_BEGIN

/// :nodoc:

@interface OPPCardDetailsModel (Visibility)
- (BOOL)cmv_shouldHideHolderName;
- (BOOL)cmv_shouldHideCVV;
- (BOOL)cmv_shouldHidePhone;
@end

NS_ASSUME_NONNULL_END
