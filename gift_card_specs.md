# Gift Card Page Mockup Spec

## Overview

This document defines the product and UX specifications for an **E-Gift Card** experience. The scope includes:

- Purchasing a gift card from a dedicated page
- Selecting a gift card template and amount
- Entering recipient details
- Paying using **coins**, **card payment via Windcave**, or **UPI via Vodafone M-PAiSA**
- Rewarding the purchaser with coins after successful payment
- Viewing gift card balance, validity, transaction history, and unredeemed gift cards

The output of this spec is intended to support **UI mockups, product design, and engineering implementation**.

---

## Goals

- Allow users to easily purchase and send e-gift cards online
- Support multiple gifting occasions using selectable templates
- Allow flexible payment using wallet coins and external payment providers
- Provide transparency into gift card status, balances, validity, and redemption history
- Support offline redemption for unredeemed gift cards using barcode or serial number

---

## Primary User Stories

1. As a user, I want to choose a gift card design for an occasion so the gift feels personalized.
2. As a user, I want to choose a gift amount or enter a custom amount so I can send the right value.
3. As a user, I want to send the gift card to a recipient via email or phone number.
4. As a user, I want to pay using coins, card, or UPI.
5. As a user, I want to redeem all or part of my coins toward the purchase.
6. As a user, I want to see a clear payment breakdown before confirming payment.
7. As a user, I will receive reward coins after a successful purchase.
8. As a user, I want to check gift card balance, validity, transactions, and unredeemed gift cards.
9. As a recipient or gift card holder, I want a barcode or serial number for offline redemption.

---

## Core Features

### 1. Gift Card Purchase Page

A dedicated page where the user can:

- Browse and select a gift card template from a carousel
- Choose a gift amount
- Enter recipient details
- Review order summary
- Choose payment method
- Complete payment
- See success confirmation

### 2. Gift Card Management / Balance Page

A separate page where the user can:

- Check current gift card balance
- View validity date
- View all transactions made using gift cards
- View gift cards not yet redeemed
- Access barcode or serial number for offline redemption

---

## Information Architecture

### Main Screens

1. **Gift Card Landing / Purchase Screen**
2. **Template Selection Carousel State**
3. **Amount Selection State**
4. **Recipient Details Entry Screen**
5. **Payment Method Selection Screen**
6. **Coins Redemption Bottom Sheet / Panel**
7. **Windcave Card Payment Screen**
8. **Vodafone M-PAiSA UPI Payment Screen**
9. **Payment Processing / Loading Screen**
10. **Payment Success Screen**
11. **Payment Failure / Retry Screen**
12. **Gift Card Balance & History Screen**
13. **Unredeemed Gift Card Detail Screen**
14. **Barcode / Serial Number View**

---

## Screen-by-Screen Specs

## Screen 1: Gift Card Landing / Purchase Screen

### Purpose

Allow the user to start the gift card purchase flow.

### UI Components

- Header with title: **Gift Cards**
- Subtext: “Send a gift instantly by email or phone”
- Gift card template carousel
- Amount selection tiles
- Custom amount input shown conditionally
- Continue CTA

### Template Carousel

Display a horizontal carousel of pre-designed cards.

#### Example templates

- Happy Birthday
- Happy Anniversary
- Happy Women’s Day
- Congratulations
- Thank You
- Festive Wishes
- General Celebration

#### Template card content

- Preview image / artwork
- Template title
- Selected state indicator

### Amount Selection

Preset amount chips/buttons:

- $50
- $60
- $100
- Other

#### Other amount behavior

When **Other** is selected:

- Show numeric input field
- Placeholder: “Enter amount”
- Currency prefix: `$`
- Allow only numeric values and valid decimal format if decimals are supported

### Validation

- A template must be selected
- An amount must be selected
- If `Other` is selected, custom amount is required
- Custom amount must be greater than 0
- Custom amount must follow allowed min/max rules if configured by business

### CTA

- Button label: **Continue**
- Disabled until required fields are valid

---

## Screen 2: Recipient Details Entry Screen

### Purpose

Collect recipient delivery information before payment.

### UI Components

- Selected template preview
- Selected gift amount summary
- Recipient email field
- Recipient phone number field
- Optional sender name field
- Optional message field
- Delivery note / helper text
- Continue to Payment CTA

### Field Rules

#### Recipient Email

- Optional if phone number is provided
- Validate email format

#### Recipient Phone Number

- Optional if email is provided
- Validate phone number format based on country rules

#### Recipient requirement

At least one of the following is required:

- Valid email
  n- Valid phone number

### Optional fields

- **Sender Name**
- **Personal Message** (example max 250 characters)

### Validation

- At least one recipient channel is required: email or phone
- If both are empty, show inline error
- Invalid email/phone formats must block progress

### CTA

- Button label: **Proceed to Payment**

---

## Screen 3: Payment Method Selection Screen

### Purpose

Allow the user to choose how to pay and optionally redeem coins.

### UI Components

- Order summary card
- Gift amount
- Coins available in wallet
- Coin redemption section
- Payment method options
- Final payable amount section
- Pay Now CTA

### Order Summary

Display:

- Selected template name
- Gift amount
- Recipient delivery channel(s)
- Optional fee/tax rows if applicable
- Total payable amount

### Coin Redemption Rules

- Conversion: **4000 coins = $50**
- Equivalent value per coin: **$0.0125**
- User can:
  - Redeem all available eligible coins
  - Redeem partial coins

### Coin Redemption UX

Options:

- Toggle: **Use Coins**
- Quick actions:
  - Redeem All
  - Redeem Partial
- Partial redemption input:
  - Enter coin amount
  - Or use slider / stepper

### Coin Validation Rules

- Redeemed coins cannot exceed user’s wallet balance
- Redeemed coin value cannot exceed order total
- Partial redemption must be greater than 0 if enabled
- Coin redemption should update final payable amount in real time

### Example Calculation

- Gift card value = $50
- User wallet coins = 4000
- If user redeems all 4000 coins, payable amount = $0
- If user redeems 2000 coins, coin value applied = $25, remaining payable = $25

### Payment Methods

#### Option A: Coins only

Shown only if redeemed coins fully cover purchase amount.

#### Option B: Credit/Debit Card

Provider: **Windcave**

#### Option C: UPI

Provider: **Vodafone M-PAiSA**

### CTA states

- If payable amount = $0 → **Confirm Purchase**
- If payable amount > $0 → **Pay Now**

---

## Screen 4: Coins Redemption Panel / Bottom Sheet

### Purpose

Provide a focused UI for redeeming coins.

### UI Components

- Current wallet coin balance
- Conversion helper text: `4000 coins = $50`
- Redeem all option
- Partial redemption input / slider
- Applied value preview in dollars
- Remaining payable amount
- Apply button

### States

- Default
- Redeem all selected
- Partial amount entered
- Invalid input state

### Error cases

- Entered coins exceed available balance
- Entered coins exceed payable amount equivalent
- Non-numeric input
- Zero or negative input

---

## Screen 5: Windcave Card Payment Screen

### Purpose

Allow the user to pay remaining amount using credit/debit card through Windcave.

### UI Components

- Header: **Pay with Card**
- Provider branding: Windcave
- Amount to pay
- Cardholder name
- Card number
- Expiry date
- CVV
- Billing country (optional, based on gateway flow)
- Save card checkbox (optional, only if supported and compliant)
- Pay button

### UX Notes

- This may be shown as:
  - A hosted payment page mockup, or
  - A secure redirect / webview style payment screen
- Include trust/security messaging
- Show order summary link or accordion

### Validation

- Cardholder name required
- Card number format valid
- Expiry date valid and not expired
- CVV valid

### CTA

- Button label: **Pay $X.XX**

### Loading State

After submission, show:

- Processing spinner
- Message: “Processing your payment…”

### Error Handling

- Payment declined
- Invalid card details
- Network timeout
- Session expired

### Failure CTAs

- Retry Payment
- Change Payment Method
- Back to Order Summary

---

## Screen 6: Vodafone M-PAiSA UPI Payment Screen

### Purpose

Allow the user to pay remaining amount using UPI-like flow through Vodafone M-PAiSA.

### UI Components

- Header: **Pay with UPI** or **Pay with M-PAiSA**
- Provider branding: Vodafone M-PAiSA
- Amount to pay
- UPI / wallet identifier input if required by flow
- QR code area if supported by payment flow
- “Open M-PAiSA” CTA if deep linking is possible
- Payment confirmation instructions

### UX Variants

Support the mockup for one or more of these states depending on final implementation:

1. **Enter mobile / wallet ID flow**
2. **QR scan flow**
3. **App redirect flow**
4. **Pending confirmation screen**

### Validation

- Valid wallet / account / mobile identifier required if manually entered
- Amount should be shown clearly

### Pending State

After initiation:

- Message: “Awaiting payment confirmation”
- Countdown / polling state (optional)
- Secondary CTA: “I have completed payment”

### Failure Handling

- Payment not completed
- Payment timed out
- User cancelled

### Failure CTAs

- Retry UPI Payment
- Choose Another Payment Method

---

## Screen 7: Payment Processing Screen

### Purpose

Show status while payment is being confirmed.

### UI Components

- Full-page loader or modal
- Status message
- Provider-specific reference text if needed

### Messages

- Processing payment
- Verifying transaction
- Sending gift card

---

## Screen 8: Payment Success Screen

### Purpose

Confirm successful purchase and gift delivery initiation.

### UI Components

- Success illustration/icon
- Message: **Gift Card Sent Successfully**
- Transaction summary
- Recipient details
- Gift amount
- Selected template name
- Payment method used
- Coins redeemed
- Coins earned
- CTA to View Gift Cards
- CTA to Buy Another Gift Card

### Reward Coins Rule

After successful payment, the user earns coins.

#### Example rule from requirement

- If user pays **$100**, they receive **100 coins**

### Proposed reward logic for mockup

- **1 USD paid = 1 coin earned**
- Reward coins are based on **actual paid amount**, not gift amount covered by coins

### Example scenarios

- Gift card $100 paid fully by card → earn 100 coins
- Gift card $100 with $25 covered by coins and $75 paid externally → earn 75 coins
- Gift card fully covered by coins → earn 0 coins unless business wants rewards on coin-funded purchases

> Note: Product/business should confirm the final reward rule. Mockup should visibly show earned coins on success.

---

## Screen 9: Payment Failure Screen

### Purpose

Help the user recover from unsuccessful payment.

### UI Components

- Failure icon
- Error title
- Provider-specific or generic error message
- Order summary snapshot
- CTA: Retry
- CTA: Change Payment Method
- CTA: Contact Support (optional)

---

## Screen 10: Gift Card Balance & History Screen

### Purpose

Provide a dashboard for all gift card-related records.

### Sections

1. **Gift Card Summary**
2. **Gift Card Balance**
3. **Valid Till**
4. **Transactions**
5. **Unredeemed Gift Cards**

### UI Components

- Search / filter (optional)
- Tabs or segmented control:
  - Active
  - Unredeemed
  - Redeemed
  - Expired
- Summary cards
- Transaction list
- Gift card list

### Summary Card Fields

- Gift Card Name / Occasion
- Current Balance
- Original Value
- Status
- Valid Till date

### Transaction List Fields

- Transaction date
- Merchant / location
- Transaction type
- Amount debited / credited
- Remaining balance after transaction
- Transaction status

### Example transaction types

- Purchase using gift card
- Partial redemption
- Full redemption
- Refund / adjustment (if supported)

---

## Screen 11: Unredeemed Gift Card Detail Screen

### Purpose

Show details for a gift card that has not yet been redeemed.

### UI Components

- Gift card design preview
- Gift card amount
- Status badge: **Unredeemed**
- Valid till date
- Recipient info
- Delivery channel
- Barcode view button
- Serial number section
- Share / resend CTA (optional)

### Offline Purchase Support

For unredeemed gift cards, provide:

- **Barcode** and/or
- **Serial Number**

This can be presented to a merchant/store during offline purchase.

---

## Screen 12: Barcode / Serial Number View

### Purpose

Display scannable and manual redemption information.

### UI Components

- Full barcode / QR / code block area
- Serial number in readable text
- Copy serial number CTA
- Helper text: “Show this barcode or serial number at checkout for offline purchase”
- Expiry / validity note

### Security Considerations

- Mask serial number partially on list screens
- Show full value only on detail screen
- Optional re-authentication before displaying barcode if needed

---

## Key Business Rules

### Template Selection

- One template must be selected before proceeding

### Amount Selection

- Supported preset amounts: $50, $60, $100, Other
- If `Other` is selected, user must manually input amount

### Recipient Delivery

- Gift must be deliverable via at least one channel:
  - Email
  - Phone number

### Payment Methods

Supported methods:

- Coins
- Windcave card payment
- Vodafone M-PAiSA payment

### Coin Conversion

- **4000 coins = $50**

### Coin Redemption

- Full redemption allowed
- Partial redemption allowed
- Redeemed coin value cannot exceed payable amount

### Reward Coins

- After successful payment, user is rewarded with coins
- Example requirement: **$100 payment = 100 coins**

### Gift Card Statuses

- Draft
- Payment Pending
- Sent
- Active
- Unredeemed
- Partially Redeemed
- Redeemed
- Expired
- Failed
- Cancelled (optional)

---

## Validation Rules

### Purchase Flow Validation

#### Template

- Required

#### Amount

- Required
- Preset or custom
- Custom amount required if `Other` selected
- Custom amount must be valid currency amount

#### Recipient

- At least one valid contact method required
- Email format validation
- Phone number format validation

#### Coins

- Cannot exceed wallet balance
- Cannot exceed total payable value

#### Payment

- Relevant payment method fields must validate before submission

---

## Suggested Empty States

### No gift cards

- “You don’t have any gift cards yet.”
- CTA: Buy a Gift Card

### No transactions

- “No gift card transactions found.”

### No unredeemed gift cards

- “No unredeemed gift cards available.”

---

## Suggested Error States

- Invalid custom amount
- Missing recipient information
- Invalid email format
- Invalid phone number
- Insufficient coin balance
- Payment provider unavailable
- Payment declined
- Gift sending failed after payment

---

## Notifications / Messaging

### On successful purchase

- In-app success message
- Email confirmation to buyer
- Gift delivery message to recipient via email and/or phone

### Recipient message should include

- Gift card occasion/template
- Gift amount
- Redemption instructions
- Barcode or serial number link if applicable
- Valid till date

---

## Mockup Notes for Designers

### Visual Priorities

- Template selection should feel festive and visual
- Amount chips should be prominent and easy to tap
- Payment summary should be transparent and trustworthy
- Coin redemption should feel rewarding and easy to understand
- Success screen should reinforce gifting and earned coins
- Barcode screen should be clean and highly legible

### Recommended Components

- Carousel cards
- Chip selectors
- Sticky bottom CTA
- Summary cards
- Payment accordion / method cards
- Timeline or list for transactions
- Status badges
- Barcode module

---

## Suggested Data Model (High Level)

### Gift Card

- giftCardId
- templateId
- templateName
- amount
- currency
- senderName
- recipientEmail
- recipientPhone
- message
- status
- barcode
- serialNumber
- validTill
- createdAt
- sentAt
- redeemedAt
- currentBalance

### Payment

- paymentId
- giftCardId
- totalAmount
- coinsRedeemed
- coinValueApplied
- payableAmount
- paymentMethod
- providerName
- providerReference
- paymentStatus
- rewardCoinsEarned
- createdAt

### Transaction

- transactionId
- giftCardId
- transactionType
- amount
- balanceAfter
- merchantName
- transactionDate
- status

---

## API / Integration Considerations

### Payment Providers

- **Windcave** for credit/debit card payments
- **Vodafone M-PAiSA** for UPI/mobile wallet style payments

### Integration Notes

- Payment provider UI may be hosted, embedded, or redirect-based
- Final mockup should account for both native-app-like and hosted checkout-like experiences
- Payment success must trigger:
  1. gift card creation
  2. recipient delivery
  3. reward coin crediting
  4. transaction history update

---

## Analytics Events

Suggested tracking events:

- gift_card_page_viewed
- gift_card_template_selected
- gift_card_amount_selected
- gift_card_custom_amount_entered
- recipient_details_submitted
- payment_method_selected
- coins_redeemed
- payment_initiated
- payment_succeeded
- payment_failed
- gift_card_sent
- gift_card_balance_viewed
- gift_card_barcode_viewed

---

## Open Questions

1. What is the minimum and maximum value allowed for `Other` amount?
2. Are decimals allowed for custom amount?
3. Should sender name and personal message be mandatory or optional?
4. Are rewards calculated on total gift value or only externally paid value?
5. Should users earn reward coins when purchase is fully funded by coins?
6. What is the exact validity rule for gift cards?
7. Can buyers resend an unredeemed gift card?
8. Is barcode only enough, or is serial number always also required?
9. Will M-PAiSA use redirect, QR, or manual identifier flow in the final product?
10. Are there any processing fees or taxes to show in payment summary?

---

## Deliverables for Mockup

The mockup should include at minimum:

1. Gift card purchase landing page
2. Template carousel states
3. Amount selection with `Other` input state
4. Recipient details screen
5. Payment method selection screen
6. Coin redemption state
7. Windcave card payment screen
8. Vodafone M-PAiSA payment screen
9. Payment processing state
10. Payment success screen
11. Payment failure screen
12. Gift card balance and history screen
13. Unredeemed gift card detail screen
14. Barcode / serial number screen

---

## Acceptance Criteria

- User can select a template from a carousel
- User can select preset amount or input custom amount
- User cannot proceed without valid template and amount
- User must provide valid email or phone number
- User can choose full or partial coin redemption
- Remaining amount updates correctly after coin redemption
- User can pay via Windcave card flow or Vodafone M-PAiSA flow
- Successful payment results in gift card creation and reward coins
- User can view balance, validity, transactions, and unredeemed gift cards
- Unredeemed gift cards display barcode or serial number for offline redemption
