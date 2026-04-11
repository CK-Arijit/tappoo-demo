# SPECS.MD

## 📱 Project: Tappoo Frequent Shopper (TFS) Mobile App

**Company:** Tappoo Group
**Platforms:** iOS, Android
**Version:** 1.0
**Source:** Business Requirements Document

---

## 1. 🎯 Objective

Build a scalable mobile application for the TFS loyalty program with:

- Customer onboarding & account management
- Digital membership card
- Loyalty points & rewards system
- Customer engagement & personalization

---

## 2. 👤 User Roles

### 2.1 Customer

- New User
- Existing TFS Member

## 3. 📦 Core Features

---

## 3.1 Customer Onboarding & Accounts

### Functional Specs

- Users can:
  - Sign up with:
    - Name (required)
    - Email (required)
    - Mobile (required)
    - DOB (required)
    - Gender (required)

  - Login via email/mobile + OTP/password

- Existing members:
  - Validate identity
  - Sync:
    - Points
    - Transaction history

- Profile completion:
  - Trigger: `$10 voucher`

---

## 3.2 Digital Membership

### Functional Specs

- Digital TFS Card:
  - Barcode / QR code
  - Used for in-store scanning

- Display:
  - Transaction history
  - Points history
  - Digital dockets (receipts)

---

## 3.3 Loyalty & Rewards

### Functional Specs

- Show:
  - Real-time points balance
  - Claimable dollar balance

- Rewards:
  - Birthday voucher:
    - 10% discount
    - Valid during birthday month

- E-Gift Cards:
  - Browse
  - Purchase
  - Store in app

---

## 3.4 Customer Engagement

### Functional Specs

- Push Notifications:
  - Promotions
  - Voucher reminders
  - Sales campaigns

- Email Automation:
  - Birthday emails
  - Coupon/voucher alerts
  - Purchase thank-you
  - Product recommendations

- Feedback System:
  - Ratings
  - Surveys

---

## 3.5 Customer Portal (Dashboard)

### Components

- Points balance
- Points history
- Digital membership card
- Promotions/ads
- Points store (redeem items)
- Claimable dollar value
- Notifications feed

---

## 4. ⚙️ Non-Functional Requirements

### Performance & Scalability

- Must support:
  - Tiered loyalty (future)
  - Online store integration

### Real-Time Sync

- Sync with loyalty backend instantly

### Security

- Secure authentication (JWT/OAuth/OTP)
- Data encryption (at rest + in transit)

### Platform

- Cross-platform (iOS + Android)

---

## 7. 📐 Mockup Guidance (Important for You)

Use this structure for screens:

1. **Login / Signup**
2. **Home Dashboard**
3. **Digital Card Screen**
4. **Points & Rewards**
5. **E-Gift Store**
6. **Notifications**
7. **Profile**
8. **Voucher Wallet**
9. **Transaction History**

---
