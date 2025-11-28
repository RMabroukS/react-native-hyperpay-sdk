//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import <Foundation/Foundation.h>

@class OPPTransaction;

/// :nodoc:
NS_ASSUME_NONNULL_BEGIN

@interface OPPAfterpayUtil : NSObject

+ (nullable NSError *)configureAfterPayFamilyBrandsWithTransaction:(nonnull OPPTransaction *)transaction;
+ (void)showAfterPayViewController:(nonnull NSURL *)url
                       transaction:(nonnull OPPTransaction *)transaction
                        completion:(void (^ _Nonnull)(NSString * _Nonnull))completion;

@end

NS_ASSUME_NONNULL_END
