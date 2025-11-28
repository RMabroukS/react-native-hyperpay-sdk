//  © Copyright ACI Worldwide, Inc. 2018, 2025


#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface OPPWpwlOptions : NSObject

/// @name Initialization

/// :nodoc:
- (instancetype)init NS_UNAVAILABLE;

/**
 Creates an object representing a web-base solution wpwl configuration.
 
 @param stringConfiguration. Configuration as a string. Must be not `nil` or empty.
 @return Returns an object representing a web-base solution wpwl configuration.
 */
+ (nullable instancetype)initWithConfiguration:(NSString *)stringConfiguration;

/**
 Creates an object representing a web-base solution wpwl configuration.
 
 @param stringConfiguration. Configuration as a string. Must be not `nil` or empty.
 @return Returns an object representing a web-base solution wpwl configuration.
 */
- (nullable instancetype)initWithConfiguration:(NSString *)stringConfiguration;

/**
 Creates an object representing a web-base solution wpwl configuration.
 
 @param configuration. Configuration dictionary. Must be not `nil` or empty.
 @param jsFunctions Additional JavaScript functions dictionary..
 @return Returns an object representing a web-base solution wpwl configuration.
 */
+ (nullable instancetype)initWithConfiguration:(NSDictionary<NSString *, id> *)configuration jsFunctions:(nullable NSDictionary<NSString *, NSString *> *)jsFunctions;

/**
 Creates an object representing a web-base solution wpwl configuration.
 
 @param configuration. Configuration dictionary. Must be not `nil` or empty.
 @param jsFunctions Additional JavaScript functions dictionary..
 @return Returns an object representing a web-base solution wpwl configuration.
 */
- (nullable instancetype)initWithConfiguration:(NSDictionary<NSString *, id> *)configuration jsFunctions:(nullable NSDictionary<NSString *, NSString *> *)jsFunctions;

/**
 Dictionary of brand specific wpwl configuration.
 */
@property (nonatomic, copy, readonly) NSDictionary<NSString *, id> *configuration;

/**
 Dictionary of additional JavaScripts functions.
 */
@property (nonatomic, copy, readonly) NSDictionary<NSString *, NSString *> *jsFunctions;

@end

NS_ASSUME_NONNULL_END
