//  © Copyright ACI Worldwide, Inc. 2018, 2026


#import "OPPCardDetailsViewModel.h"

NS_ASSUME_NONNULL_BEGIN

/// :nodoc:

@interface OPPCardDetailsViewModel (TextDelegate)
- (void)cvt_assignTextDelegate;
- (void)textFieldDidBeginEditing:(UITextField *)textField;
- (void)textFieldDidEndEditing:(UITextField *)textField;
- (BOOL)textFieldShouldReturn:(UITextField *)textField;
- (BOOL)textField:(UITextField *)textField shouldChangeCharactersInRange:(NSRange)range replacementString:(NSString *)string;

@end

NS_ASSUME_NONNULL_END
