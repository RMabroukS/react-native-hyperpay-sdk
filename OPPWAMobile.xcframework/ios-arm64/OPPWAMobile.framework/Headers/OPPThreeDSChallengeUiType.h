//  © Copyright ACI Worldwide, Inc. 2018, 2025

#import <Foundation/Foundation.h>

/// An enumeration for the various types of UI for displaying challenge screens.
/// @note An enumeration is represented by bitmask values that may be combined together. For example, it's valid to specify several options in an option set: `[.text, .html]`.
typedef NS_OPTIONS(NSUInteger, OPPThreeDSChallengeUiType) {
    /// Format for a one-time passcode (OTP) or text during a non-payment authentication transaction.
    OPPThreeDSChallengeUiTypeText = 1,
    /// Format that allows multiple options to be presented to the cardholder to obtain single response.
    OPPThreeDSChallengeUiTypeSingleSelect = 2,
    /// Format that allows multiple options to be presented to the Cardholder to obtain multiple response on single screen.
    OPPThreeDSChallengeUiTypeMultiSelect = 4,
    /// Format that allows to complete authentication outside of the merchant app, e.g. in issuer’s mobile app.
    OPPThreeDSChallengeUiTypeOob = 8,
    /// Format that allows to present issuer-specific designed html in a web view.
    OPPThreeDSChallengeUiTypeHtml = 16
};
