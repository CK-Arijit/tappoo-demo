# Registration Page Mockup Specification

## Overview

This specification defines the registration flow for a two-step user registration page. The experience should feel simple, guided, and trustworthy, with a clear step-by-step layout and strong validation.

The registration process is split into:

1. **Step 1: Personal Information**
2. **Step 2: Contact Information & Verification**

After successful submission, the user should see a confirmation screen indicating that the application has been received and is under review.

---

## Goals

- Create a simple and intuitive registration experience.
- Break the process into two manageable steps.
- Ensure phone number and email are both verified through OTP before final submission.
- Provide a smart, user-friendly verification UI.
- Prevent final submission unless both phone and email are successfully verified.

---

## User Flow

1. User lands on the registration page.
2. User completes **Step 1: Personal Information**.
3. User clicks **Next** to proceed to **Step 2: Contact Information**.
4. User enters phone number and email address.
5. User verifies both phone number and email using OTP.
6. User can request **Resend Code** if OTP is not received.
7. Final **Submit** button remains disabled until both verifications are complete.
8. After submission, user sees the confirmation screen.

---

## Page Structure

### Header

- Page title: **Registration**
- Optional subtitle: **Complete your application in 2 steps**
- Step indicator/progress tracker:
  - **Step 1: Personal Information**
  - **Step 2: Contact Information**

---

## Step 1: Personal Information

### Description

User must enter personal details before moving to the next step.

### Fields

The following input fields must be shown:

1. **Title**
2. **First Name**
3. **Middle Name**
4. **Last Name**
5. **DOB**
6. **Marital Status**

### Field Recommendations

- **Title**: Dropdown
  - Example options: Mr, Ms, Mrs, Dr

- **First Name**: Text input
- **Middle Name**: Text input
- **Last Name**: Text input
- **DOB**: Date picker
- **Marital Status**: Dropdown
  - Example options: Single, Married, Divorced, Widowed

### Validation Rules

- **Title**: Required
- **First Name**: Required
- **Middle Name**: Optional unless business rules say otherwise
- **Last Name**: Required
- **DOB**: Required
- **Marital Status**: Required

### Primary Action

- Button label: **Next**
- When clicked:
  - Validate all required fields
  - If valid, move user to **Step 2**
  - If invalid, show inline validation messages

### UX Notes

- Use clear spacing between fields.
- Show validation errors directly below the related field.
- Keep the primary CTA fixed and visible on mobile if possible.

---

## Step 2: Contact Information & Verification

### Description

User must enter phone number and email address, then verify both via OTP.

### Fields

1. **Phone Number**
2. **Email Address**

### Validation Rules

- **Phone Number**: Required, valid format
- **Email Address**: Required, valid email format

---

## OTP Verification Requirements

### Mandatory Verification

Both of the following must be verified before the final submit action is enabled:

- **Phone Number Verification**
- **Email Verification**

If either one is not verified, the user must not be allowed to submit the form.

### Verification Flow

For both phone number and email:

1. User enters the value.
2. User clicks **Send OTP** or equivalent action.
3. System sends OTP.
4. User enters OTP in the verification UI.
5. User clicks **Verify**.
6. On successful verification, the field shows a verified state.

### Resend Code

- A **Resend Code** action must be available for both phone and email OTP flows.
- Resend should appear with a timer or cooldown state.
- Example behavior:
  - Disable resend for 30 seconds after OTP is sent
  - Show countdown text such as: **Resend code in 00:30**
  - Enable **Resend Code** after countdown ends

---

## Smart UI Recommendations for OTP

The OTP verification UI should be modern, minimal, and easy to understand.

### Suggested Smart UI Patterns

- Show phone and email verification as separate cards or sections.
- After entering phone/email, show a **Send OTP** button inline.
- Once OTP is sent:
  - Reveal OTP input area dynamically
  - Use 4-digit or 6-digit segmented OTP boxes
  - Show status text such as:
    - **OTP sent successfully**
    - **Verified**
    - **Invalid code, try again**

- Show verified fields with:
  - Green check icon
  - Verified badge or label

- Disable editing once verified, or allow **Edit** which resets verification status
- Provide inline help text such as:
  - **We sent a code to your phone number**
  - **Check your email inbox for the verification code**

### Recommended UI States

For each verification item:

- Default state
- OTP sent state
- Verifying state
- Verified state
- Error state
- Resend available state

### Accessibility Considerations

- OTP input must support keyboard navigation.
- Error messages should be clear and readable.
- Timer and verification status should be easy to identify.

---

## Step 2 Layout Suggestion

### Contact Section

- Phone Number input

- Send OTP button

- OTP input area

- Verify button

- Resend Code link/button

- Verification status

- Email Address input

- Send OTP button

- OTP input area

- Verify button

- Resend Code link/button

- Verification status

### Final Action

- Button label: **Submit**
- Default state: Disabled
- Enabled only when:
  - Phone number is verified
  - Email address is verified

### Submission Rules

- User can click **Submit** only after both verifications are complete.
- If verification is incomplete, show clear guidance such as:
  - **Please verify both phone number and email address to continue**

---

## Final Success Screen

### Title

**Application Received**

### Message

**Your application is under progress and you will be notified once it is approved.**

### UI Recommendations

- Show success icon or illustration
- Center align content
- Keep the message simple and reassuring
- Optional CTA:
  - **Back to Home**
  - **Close**
  - **Track Application** (only if part of future scope)

---

## Functional Requirements

- The registration must be split into two steps.
- Step 1 must be completed before Step 2 is accessible.
- Required fields must be validated before moving to the next step.
- Phone number and email must each support OTP verification.
- Resend code feature must exist for both verification types.
- Final submit must remain disabled until both verifications are completed.
- On successful submission, confirmation screen must be shown.

---

## Non-Functional Requirements

- Responsive design for desktop, tablet, and mobile.
- Fast and clear UI feedback for all actions.
- Validation and error handling should be inline and easy to understand.
- The design should be clean, modern, and low-friction.

---

## Suggested Error Messages

- **Please enter your title**
- **Please enter your first name**
- **Please enter your last name**
- **Please select your date of birth**
- **Please select your marital status**
- **Please enter a valid phone number**
- **Please enter a valid email address**
- **Invalid OTP. Please try again**
- **OTP expired. Please resend code**
- **Please verify both phone number and email address before submitting**

---

## Design Notes for Mockup

- Use a stepper at the top to clearly communicate progress.
- Keep form width comfortable for readability.
- Use dropdowns and date picker where appropriate.
- Use card-based or section-based design for verification flows.
- Highlight verified status visually.
- Keep CTA buttons prominent and consistent across steps.

---

## Out of Scope

- Backend API behavior
- OTP delivery provider details
- Approval workflow after submission
- User login or password creation

---
