//  © Copyright ACI Worldwide, Inc. 2018, 2025


#import <Foundation/Foundation.h>

/**
 Class to encapsulate configuration for MBWAY payment method.
 */
NS_ASSUME_NONNULL_BEGIN
@interface OPPMBWayConfig : NSObject

/// @name Initialization

/// :nodoc:
- (instancetype)init NS_UNAVAILABLE;

/**
 Creates an object representing MBWAY configuration.
 
 @param visible Indicates whether country code input field is displayed on the MBWAY form or not. The default value is `YES`.
 @param countryCode The country code.
 @return Returns an object representing MBWAY configuration.
 */
- (nullable instancetype)initWithCountryCodeVisible:(BOOL)visible countryCode:(NSString *)countryCode;

/// @name Properties

/** The flag that defines whether country code input field is visible. */
@property (nonatomic, assign) BOOL countryCodeVisible;

/** The country code in the following format [0-9]{1,4}. */
@property (nonatomic, copy) NSString *countryCode;

/// @name Constant

/** Default country code value */
FOUNDATION_EXPORT NSString *const OPPMBWayConfigDefaultCountryCode;

@end
NS_ASSUME_NONNULL_END
