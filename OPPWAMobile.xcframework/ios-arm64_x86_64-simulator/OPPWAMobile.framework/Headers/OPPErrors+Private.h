//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import "OPPErrors.h"

@interface OPPErrors (Private)
+ (nonnull NSError *)epr_errorWithCode:(OPPErrorCode)code;
+ (nonnull NSError *)epr_errorWithCode:(OPPErrorCode)code description:(nullable NSString *)description userInfo:(nullable NSDictionary *)userInfo;
@end
