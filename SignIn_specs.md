# Sign In Mockup Specifications

## Overview

This document defines the screen-level UI and interaction requirements needed to create mockups for the complete Sign In experience for first-time users of the app.

This version is intended for design and mockup creation only.

### Out of Scope

- Backend logic
- API contracts
- OTP generation logic
- Data persistence rules
- Security implementation details

## Goal

Create complete mockups for all screens involved in the first-time sign-in journey and future login journey, including all major states, validation messages, prompts, and success/error feedback.

The mockups should clearly represent the user journey from entering contact details to OTP verification, biometric setup, PIN setup, and future sign-in options.

---

## Design Scope

The mockups must cover all screens and key UI states in the Sign In journey.

### Screens to Cover

1. Sign In screen
2. OTP Verification screen
3. Resend OTP state
4. Incorrect OTP state
5. OTP success state
6. Biometric setup prompt screen
7. PIN setup screen
8. Confirm PIN screen
9. PIN mismatch/error state
10. Setup completion/success screen
11. Returning user login screen
12. PIN login screen
13. Biometric login prompt state
14. Login error state (invalid PIN / authentication failed)

---

## Core Sign In Flow

### 1. Screen: Sign In / User Identification

On the Sign In page, the user must be able to enter either:

- Email address
- Phone number

### UI Requirements

- The screen must include a title such as `Sign In` or `Welcome`.
- The screen must include a single input field that accepts either email address or phone number.
- The screen must include a primary CTA button such as `Continue` or `Get OTP`.
- Helper text should indicate that the user can enter either email or phone number.
- Space must be reserved for inline validation or toast feedback.

### Mockup States to Include

- Default empty state
- Active input state
- Valid email entered
- Valid phone number entered
- Invalid input state with error message
- Loading state after tapping CTA

### Example Error Messages

- `Please enter a valid email address or phone number.`
- `Unable to send OTP. Please check your contact details and try again.`

---

### 2. Screen: OTP Sent / OTP Verification Entry

After the user submits a valid email address or phone number:

- An OTP must be sent to the provided contact method.
- If the user entered an email, the OTP must be sent to the email.
- If the user entered a phone number, the OTP must be sent via SMS.

### UI Requirements

- The screen must confirm that an OTP was sent.
- The destination must be shown in masked format.
- The screen must include OTP input fields or a single OTP entry component.
- The screen must include a primary CTA such as `Verify OTP`.
- The screen must include a secondary action for editing contact details or going back.

### Mockup States to Include

- OTP sent via email
- OTP sent via phone
- Empty OTP state
- Partially filled OTP state
- Fully filled OTP state

### Example Success Message

- `OTP sent successfully.`

---

### 3. Screen: OTP Verification Result

### Resend OTP Feature

The user must have the ability to request a new OTP if they did not receive the original one or if it expires.

This section is for UI mockup behavior only.

### UI Requirements

- A `Resend OTP` option must be visible on the OTP screen.
- A disabled resend state must be shown during cooldown.
- A countdown timer must be shown during cooldown.
- An enabled resend state must be shown after cooldown ends.
- A success toast/message must be shown after resend is triggered.
- An error state for excessive resend attempts should be represented in mockups if needed.

### Mockup States to Include

- Resend disabled with timer
- Resend enabled
- OTP resent success toast
- Too many resend attempts error state

### Example Messages

- `OTP resent successfully.`
- `Please wait before requesting another OTP.`
- `Maximum resend attempts reached. Please try again later.`

---

## 3. OTP Verification

The user must enter the received OTP to continue.

### UI Requirements

- The screen must support display of both success and error feedback.
- Incorrect OTP state must be visually clear.
- Expired OTP state must be visually clear.
- Correct OTP state must show a success confirmation before proceeding.

### Mockup States to Include

- Incorrect OTP error toast
- Expired OTP error toast
- Invalid OTP error toast
- OTP verified success message
- Transition/loading state after successful verification

### Example Error Messages

- `Incorrect OTP. Please try again.`
- `OTP expired. Please request a new one.`

### Example Success Message

- `OTP verified successfully.`

---

## Mandatory First-Time Post-Login Setup

After successful OTP verification, the mockups must continue into the required setup flow for future login methods.

The design should treat this as a guided mandatory setup journey.
After successful OTP verification on first login, the user must be required to configure future login access.

This setup is mandatory.

### Required Setup Steps

The app must prompt the user to:

1. Enable Face ID or fingerprint authentication, if supported by the device
2. Set a 4-digit PIN for login access

The user must complete PIN setup.
Biometric setup should be offered based on device capability.

---

## 4. Screen: Biometric Authentication Setup

### Supported Methods

Depending on device support, the app should offer:

- Face ID
- Fingerprint authentication

### UI Requirements

- The screen must explain the benefit of enabling Face ID or fingerprint login.
- The design must support Face ID and fingerprint variants depending on device type.
- The screen must include a primary action to enable biometrics.
- The screen may include a secondary action such as `Maybe Later` or `Skip` only if the product wants biometrics to remain optional.
- PIN setup must still follow regardless of biometric decision.

### Mockup States to Include

- Face ID available state
- Fingerprint available state
- Biometric not available state
- Biometric enabled success state
- Biometric skipped state

### Notes

- Biometric authentication is an optional convenience method, but the setup prompt must be shown after first successful login.
- PIN setup is mandatory even when biometric authentication is enabled.

---

## 5. Screen: 4-Digit PIN Setup

The user must create a 4-digit PIN after OTP verification.

### UI Requirements

- The screen must clearly indicate that a 4-digit PIN is required.
- Numeric keypad UI may be shown in the mockup.
- PIN entry indicators should be visible.
- The design must include an initial PIN creation screen and a confirm PIN screen.
- Mismatch and invalid format states must be represented.

### Mockup States to Include

- Enter PIN state
- Confirm PIN state
- Incomplete PIN state
- Invalid PIN format state
- PIN mismatch error state
- PIN set success state

### Example Error Messages

- `PIN must be 4 digits.`
- `PINs do not match. Please try again.`

### Example Success Message

- `PIN set successfully.`

---

## 6. Screen: Setup Complete / Login Methods Available

After completing first-time setup, the user should see a success or completion state that communicates available future login methods.

## 7. Screen: Returning User Login Options

After the first-time setup is completed, the user must be able to log in using any of the following methods:

- 4-digit PIN
- Face ID
- Fingerprint authentication

### UI Requirements

- The returning user screen must clearly present available login methods.
- PIN login must always be available.
- Biometric option should be shown only when enabled and supported.
- The UI should support different combinations:
  - PIN only
  - PIN + Face ID
  - PIN + fingerprint

### Mockup States to Include

- Returning user with PIN only
- Returning user with Face ID + PIN
- Returning user with fingerprint + PIN
- Authentication failed state
- Invalid PIN error state
- Biometric failed state

---

## Toast and Feedback Requirements

Mockups should include representative examples of toasts, inline validation, and success banners wherever applicable.

### Error Toasts

Error toast messages must be shown for:

- Invalid email or phone number
- Failed OTP send attempt
- Incorrect OTP
- Expired OTP
- Invalid OTP
- Invalid PIN format
- PIN mismatch

### Success Messages

Success messages must be shown for:

- OTP sent successfully
- OTP verified successfully
- PIN set successfully
- Biometric authentication enabled successfully

---

## Mockup Deliverables Summary

### Mandatory Mockup Coverage

- Sign In screen with email/phone input
- Validation error states for invalid contact entry
- OTP sent screen
- OTP entry screen
- Resend OTP states
- Incorrect OTP and expired OTP states
- OTP success state
- Biometric setup screen variants
- PIN creation screen
- Confirm PIN screen
- PIN mismatch/error state
- Setup complete state
- Returning user login screen
- PIN login state
- Biometric login state
- Authentication failure states

### Conditional Mockup Coverage

- Face ID variant if supported
- Fingerprint variant if supported
- Biometric unavailable state
- Optional skip state for biometrics if allowed by product rules

---

## Suggested Mockup Flow

1. User opens Sign In page
2. User enters email or phone number
3. System validates input
4. OTP is sent to email or phone number
5. User enters OTP
6. System verifies OTP
7. On success, user is prompted to:
   - Enable Face ID or fingerprint (if available)
   - Set and confirm a 4-digit PIN

8. Setup completes
9. On future logins, user can authenticate using:
   - PIN
   - Face ID
   - Fingerprint

---

## Acceptance Criteria for Mockup Completion

- All major screens in the first-time sign-in journey are represented.
- All required success, error, empty, and active states are represented.
- Mockups clearly show the user path from contact entry to OTP verification to setup completion.
- Mockups include biometric setup variants and PIN setup screens.
- Mockups include future login options for returning users.
- Backend behavior is not described beyond what is necessary for screen context.

---

## Designer Notes

- Focus on screen composition, content hierarchy, CTA labels, helper text, and feedback states.
- Use consistent patterns for toast messages, success states, and error handling.
- Ensure all screens are connected as a complete experience.
- The mockups should be suitable for handoff to product and engineering later, but no backend logic is required at this stage.

## Open Considerations

- Final CTA labels may be refined by product/content design.
- OTP length and timer values can be shown as placeholders in mockups.
- Whether biometric setup is skippable should be confirmed by product.
- Forgotten PIN and account recovery can be added in a later version if needed.
