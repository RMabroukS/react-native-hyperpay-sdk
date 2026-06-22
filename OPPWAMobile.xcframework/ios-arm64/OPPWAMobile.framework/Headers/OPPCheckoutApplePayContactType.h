//  © Copyright ACI Worldwide, Inc. 2018, 2026

#import <Foundation/Foundation.h>
#import <PassKit/PassKit.h>

/// An enumeration for the ApplePay contact types
typedef NS_OPTIONS(NSInteger, OPPCheckoutApplePayContactType) {
    /// ApplePay billing contact type
    OPPCheckoutApplePayContactTypeBillingAddress = 1,
    /// ApplePay shipping contact type
    OPPCheckoutApplePayContactTypeCustomer = 2
};
