//  © Copyright ACI Worldwide, Inc. 2018, 2025

@import Foundation;
#import <WebKit/WebKit.h>

NS_ASSUME_NONNULL_BEGIN

/// :nodoc:
@interface OPPThreeDSMpgs : NSObject

- (instancetype)init NS_UNAVAILABLE;
- (instancetype)initWithShopperResultUrl:(nullable NSString *)shopperResultUrl;

- (void)proceedMpgsChallengeCompletionWithURL:(NSString *)urlString
                                navController:(UINavigationController *)controller
                               challengeError:(nullable NSError *)error
                                   completion:(void (^)(NSError * _Nullable error))completion;

@end

NS_ASSUME_NONNULL_END
