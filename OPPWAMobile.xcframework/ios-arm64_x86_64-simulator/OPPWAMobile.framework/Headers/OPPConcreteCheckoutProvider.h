//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import <Foundation/Foundation.h>
#import "OPPCheckoutProvider.h"

/// :nodoc:

NS_ASSUME_NONNULL_BEGIN

@interface OPPConcreteCheckoutProvider : OPPCheckoutProvider

/// :nodoc:
@property (nonatomic, copy) NSDictionary<NSString *, UIViewController *> *componentControllers;

+ (nonnull UINavigationController *)navigationControllerWithViewController:(nonnull UIViewController<UINavigationControllerDelegate, UIViewControllerTransitioningDelegate> *)viewController;
@end

NS_ASSUME_NONNULL_END
