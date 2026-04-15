# Profile Screen Mockup Specification (Mobile Only)

## Overview

This specification defines the **mobile-only Profile experience** for the application. It includes:

1. The main **Profile screen**
2. The **profile update flow**
3. The **change request flow** for phone number and email
4. A **hamburger menu entry point**
5. A separate **menu page** with secondary features
6. Drawer-based flows for:
   - Transfer Points
   - Referral
   - Rate Us / Feedback
   - Contact Us

7. Logout action

The overall experience should feel simple, trustworthy, and easy to use on mobile devices.

---

## Goals

- Allow the user to view their profile details clearly.
- Allow the user to update editable profile fields.
- Prevent direct editing of phone number and email on the profile form.
- Provide a request-based flow for changing phone and email.
- Use verification code flow for requested phone/email changes.
- Clearly communicate that phone/email change requests are not instant.
- Provide a clean mobile navigation pattern through a hamburger menu.
- Support drawer-based utility features from the menu page.

---

## Scope

This specification is for:

- **Mobile devices only**
- **Profile screen mockup**
- **Hamburger menu-linked utility page mockup**
- **Drawer interactions for related actions**

This specification does not cover:

- Desktop or tablet layouts
- Backend processing logic
- Admin approval workflows
- Real-time notification implementation

---

## Primary Navigation Structure

### Mobile Entry Points

The mobile profile experience contains two connected surfaces:

#### 1. Profile Screen

The main screen where the user can:

- View profile details
- Edit allowed fields
- Raise request for phone/email changes
- Open the hamburger menu

#### 2. Menu Page

Opened from the hamburger button. This is a separate page with:

- Back button at top left
- A list of menu actions

---

## Main Profile Screen

### Header

- Page title: **Profile**
- Top right: **Hamburger button**

### Hamburger Behavior

- On tap, open a **separate page**
- That page must show a **Back button** on the top left

---

## Profile Information Section

### Purpose

Allow the user to review their current profile information.

### Fields to Display

The user should be able to check the following details:

- **Title**
- **Name**
- **Date of Birth**
- **Marital Status**
- **Phone Number**
- **Email**

### Display Recommendation

Use a mobile-friendly form or stacked info cards.

### Suggested Layout

- Field label on top
- Field value below
- Clear spacing between fields

### Name Handling

The spec mentions **Name** as one field. This can be shown as a single combined value in the Profile screen, even if the registration flow stores multiple name parts.

---

## Profile Edit Capability

### Editable Fields

The user should be able to update:

- **Title**
- **Name**
- **Date of Birth**
- **Marital Status**

### Non-Editable Fields

The following fields must be **non-editable** on the profile form:

- **Phone Number**
- **Email**

### UI Recommendation

For non-editable fields:

- Show the current value
- Show a secondary action such as:
  - **Request Change**
  - **Change Request**

### Primary Action

- Button label: **Save Changes**
- Saves updates for editable profile fields only

---

## Phone and Email Change Request Flow

### Overview

Phone number and email cannot be edited directly in the profile form.
Instead, the user must raise a request to change them.

### Trigger

On the profile screen, beside phone number and email:

- Show **Request Change** action

### Interaction Pattern

- Tapping **Request Change** opens a **separate drawer**
- The drawer can be used for:
  - Phone number change request
  - Email change request

### Drawer Title Examples

- **Change Phone Number**
- **Change Email Address**

### Drawer Content

For either phone or email change request:

1. Current value (read-only)
2. New value input
3. Send verification code action
4. Verification code input
5. Verify action
6. Submit request button

### Verification Requirement

The new phone number or email must be verified using a **verification code** before the request can be submitted.

### Verification Flow

1. User enters new phone number or email
2. User taps **Send Code**
3. Verification code is sent
4. User enters the code
5. User taps **Verify**
6. Once verified, user can submit the change request

### Resend Option

A **Resend Code** option should be present.

### Submit Behavior

After verification and submit:

- The change is **not instant**
- The system should show a status/confirmation screen

### Confirmation Message

Show a screen or state with messaging such as:

**Change request has been sent**

**You will be notified once it is verified by the backend team.**

### UX Notes

- User must understand that this is a request, not an immediate update
- Show a calm waiting-state confirmation screen
- Optional success icon or illustration may be used

---

## Profile Screen UI Notes

- Use a clean mobile layout with clear sections
- Keep read-only phone/email visually distinct from editable fields
- Use strong CTA hierarchy:
  - Save Changes
  - Request Change

- Keep labels simple and readable

---

## Hamburger Menu

### Entry Point

- Top right icon on Profile screen
- Standard hamburger icon

### Destination

- Opens a **separate page**
- Back button on top left

### Page Title

Recommended title:

- **More**
- or **Menu**

### Listed Menu Items

The following features must be listed on that page:

1. **Transfer Points**
2. **Referral**
3. **Rate Us / Feedback**
4. **Contact Us**
5. **Logout**

Each item should be presented as a tappable row or menu tile.

---

## Menu Page Layout

### Header

- Back button at top left
- Page title: **More** or **Menu**

### Menu List Style

Use a simple mobile list with:

- Row title
- Optional icon
- Chevron on the right

### Recommended Order

1. Transfer Points
2. Referral
3. Rate Us / Feedback
4. Contact Us
5. Logout

---

## Transfer Points Flow

### Trigger

Tap on **Transfer Points** from the menu page.

### Interaction

- Opens a **drawer**

### Purpose

Allows the user to request transfer of points to another user.

### Drawer Content

The user must be able to:

- Enter **email or phone number** of the target user
- Verify the entered contact using a **verification code**
- Enter transfer-related details

### Minimum Required Fields

1. **Recipient Email or Phone Number**
2. **Points to Transfer**
3. **Verification Code**

### Verification Flow

1. User enters recipient email or phone
2. User taps **Send Code**
3. User receives verification code
4. User enters code
5. User taps **Verify**
6. User submits transfer request

### Resend Option

- **Resend Code** must be available

### Submit Result

After submission, show confirmation message:

**Request has been raised**

**You will be notified once it is completed.**

### UX Notes

- Make clear that this is not instant
- Keep the flow lightweight and mobile-friendly

---

## Referral Flow

### Trigger

Tap on **Referral** from the menu page.

### Interaction

- Opens a **drawer**

### Purpose

Allow the user to invite friends through a generated invite code.

### Drawer Content

The drawer should include:

- Section title: **Invite your friends**
- Generated **Invite Code**
- Supporting message explaining the reward
- **Share** action

### Required Message

Inform the user that:

- If someone uses the invite code,
- The user will receive **100 points as a bonus**

### UI Elements

- Invite code in a highlighted box/card
- Copy icon or copy button (optional)
- Share button

### Suggested Supporting Text

**Share this invite code with your friends. If they use it, you will receive 100 points as a bonus.**

---

## Rate Us / Feedback Flow

### Trigger

Tap on **Rate Us / Feedback** from the menu page.

### Interaction

- Opens a **drawer**

### Purpose

Allow the user to submit a rating and optional written feedback.

### Drawer Content

1. **Star Rating** input
2. **Description / Feedback Text Area**
3. **Submit** button

### Rating Input

- 5-star format recommended
- User can tap to select rating

### Feedback Field

- Multiline text area
- Optional helper text such as:
  - **Tell us about your experience**

### Submit Result

After submission, show success confirmation such as:

**Thank you for your feedback**

---

## Contact Us Flow

### Trigger

Tap on **Contact Us** from the menu page.

### Interaction

- Opens a **drawer**

### Purpose

Provide support contact details and expected response time.

### Drawer Content

The following must be shown:

1. **Support Email**
2. Message saying user can expect a reply **within 24 hours**
3. **Support Phone Number**
4. Support phone timing / calling hours

### Suggested Content Structure

#### Support Email

- Label: **Support Email**
- Example placeholder for design: [support@example.com](mailto:support@example.com)

#### Response Expectation

- Text: **Expect a reply within 24 hours**

#### Support Number

- Label: **Support Number**
- Example placeholder for design: +00 1234 567890

#### Calling Hours

- Example text: **Available Mon–Fri, 9:00 AM – 6:00 PM**

### UX Notes

- Email and phone number may include tap actions
- Keep the layout simple and helpful

---

## Logout

### Trigger

Tap on **Logout** from the menu page.

### Behavior

Recommended behavior:

- Show confirmation bottom sheet or modal

### Confirmation Content

- Title: **Logout**
- Message: **Are you sure you want to logout?**
- Actions:
  - **Cancel**
  - **Logout**

---

## Screen States

### Profile Default State

- Profile details visible
- Editable fields enabled
- Phone/email shown as read-only
- Request Change action visible

### Change Request Success State

For phone/email change requests:

- Show request submitted confirmation
- Communicate waiting period clearly

### Transfer Request Success State

- Show request raised confirmation
- Communicate completion will happen later

### Feedback Success State

- Show thank-you message

### Empty / Error States

If needed for mockup completeness:

- Generic error state for failed submission
- Inline validation for forms and verification code

---

## Functional Requirements

- The Profile screen must be designed for **mobile only**.
- The user must be able to view:
  - Title
  - Name
  - Date of Birth
  - Marital Status
  - Phone Number
  - Email

- The user must be able to edit profile details except phone number and email.
- Phone number and email must be non-editable from the main profile form.
- The user must be able to raise a request for changing phone/email.
- Phone/email change requests must use a verification code flow.
- After submitting a change request, the user must see a waiting/confirmation message.
- The Profile screen must include a hamburger icon at the top right.
- The hamburger icon must open a separate page with a back button at the top left.
- The menu page must include:
  - Transfer Points
  - Referral
  - Rate Us / Feedback
  - Contact Us
  - Logout

- Transfer Points must open in a drawer and require recipient verification by code.
- Referral must open in a drawer and include invite code and share action.
- Rate Us / Feedback must open in a drawer and include star rating plus description.
- Contact Us must open in a drawer and show support email, support response time, support number, and calling hours.
- Logout must be available from the menu page.

---

## Non-Functional Requirements

- Mobile-first design
- Clear tap targets and spacing
- Fast and understandable drawer interactions
- Clear validation and verification states
- Readable text and form hierarchy
- Clean and modern visual style

---

## Suggested Labels

- **Profile**
- **Save Changes**
- **Request Change**
- **Send Code**
- **Verify**
- **Resend Code**
- **Change request has been sent**
- **You will be notified once it is verified by the backend team**
- **Transfer Points**
- **Referral**
- **Rate Us / Feedback**
- **Contact Us**
- **Logout**
- **Request has been raised**
- **You will be notified once it is completed**
- **Invite your friends**
- **Share**
- **Thank you for your feedback**
- **Expect a reply within 24 hours**

---

## Design Notes for Mockup

- Keep the Profile screen lightweight and readable.
- Use drawers for secondary tasks to avoid leaving the current context too often.
- Keep the menu page simple and scannable.
- Use confirmation states generously to reduce user uncertainty.
- Make sure the waiting-state messaging is prominent for request-based flows.
- Optimize all interactions for one-hand mobile use where possible.

---

## Out of Scope

- Backend approval workflow details
- Notification delivery implementation
- Actual share integration behavior
- Authentication flow after logout
- Validation rules for phone/email formats beyond mockup level

---

## Summary

The mobile Profile experience should allow the user to:

- View and update profile information
- Raise verified requests for phone/email changes
- Access additional utility features from a hamburger menu page
- Use drawer-based flows for transfer, referral, feedback, and contact support
- Receive clear confirmation whenever a request is submitted and pending backend processing
