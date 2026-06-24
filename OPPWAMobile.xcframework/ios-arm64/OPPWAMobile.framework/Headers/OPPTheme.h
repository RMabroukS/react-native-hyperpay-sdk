//  © Copyright ACI Worldwide, Inc. 2018, 2026

@import Foundation;
@import UIKit;

/**
 Base class of OPPCheckoutTheme
 */

NS_ASSUME_NONNULL_BEGIN
@interface OPPTheme : NSObject

/**
 Indicator view processing style that is shown over primary background color.
 */
@property (nonatomic) UIActivityIndicatorViewStyle activityIndicatorPrimaryStyle;

/**
 Indicator view processing style that is shown over secondary background color.
 */
@property (nonatomic) UIActivityIndicatorViewStyle activityIndicatorSecondaryStyle;

@end
NS_ASSUME_NONNULL_END
