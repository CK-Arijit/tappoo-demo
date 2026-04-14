# Transaction Page Mockup Specification

## Overview

This specification defines the transaction listing page where users can view, filter, and manage their transaction records. The page focuses on clarity, accessibility, and actionable insights such as dispute handling and statement extraction.

---

## Goals

- Provide a clear list of all transactions.
- Allow users to easily identify recent transactions (less than 1 month old).
- Enable dispute functionality for eligible transactions.
- Support filtering and quick access to last month’s transactions.
- Allow users to extract monthly statements.

---

## Page Structure

### Header

- Page title: **Transactions**
- Optional subtitle: **View and manage your transaction history**

### Top Action Bar

Contains:

- **Date Filter** (range selector)
- **Quick Filter Button**: _Last Month_
- **Download Statement Button**

---

## Transaction List

### Description

Displays a list of all transactions in a structured format.

### Each Transaction Record Must Contain:

- **Date & Time**
- **Transaction Name**
- **Docket Number**
- **Amount**
- **Points Received**

### Layout Options

- Table layout (recommended for desktop)
- Card/list layout (recommended for mobile)

---

## Transaction Behavior

### Debit Nature

- All transactions are debit type.
- No need to use color coding for debit/credit differentiation.

### Highlight Recent Transactions

- Transactions less than **30 days old** should be visually distinguished.
- Use subtle color highlight or badge (e.g., light background or “Recent” tag).

---

## Dispute Feature

### Eligibility Rule

- A dispute can be raised only if the transaction is **less than 1 month old**.

### UI Behavior

- For eligible transactions:
  - Show **"Raise Dispute"** button or link

- For ineligible transactions:
  - Hide the action OR
  - Show disabled state with tooltip: **"Dispute window expired"**

### Dispute Flow (Mockup Level)

- Clicking **Raise Dispute**:
  - Opens modal or new screen
  - Allows user to:
    - Confirm dispute
    - Optionally enter reason (if included in design)

---

## Filters

### Date Filter

- User can select a custom date range.
- Should support:
  - Start date
  - End date

### Quick Filter: Last Month

- One-click action to fetch transactions from the previous calendar month.
- Should override current filters when applied.

---

## Statement Extraction

### Feature Description

Users can download a statement for a selected month.

### Behavior

- User selects a month (via date picker or filter context).
- Clicks **Download Statement**.
- System generates statement for that month.

### UI Suggestions

- Month selector dropdown OR
- Use selected filter range (if it matches a month)

---

## Empty State

When no transactions are available:

- Show message: **"No transactions found"**
- Optional helper text: **"Try adjusting your filters"**

---

## Loading State

- Show skeleton loaders or spinner while fetching transactions.

---

## Error State

- Show message: **"Unable to load transactions. Please try again."**

---

## Responsive Design

### Desktop

- Table view with columns:
  - Date & Time
  - Transaction Name
  - Docket Number
  - Amount
  - Points
  - Actions

### Mobile

- Card-based layout:
  - Top: Transaction Name + Amount
  - Middle: Date & Time, Docket Number
  - Bottom: Points + Dispute Action (if eligible)

---

## Functional Requirements

- Display list of transaction records.
- Highlight transactions less than 1 month old.
- Allow disputes only for eligible transactions.
- Provide date range filtering.
- Provide quick filter for last month.
- Allow statement extraction for a selected month.

---

## Non-Functional Requirements

- Fast loading and smooth scrolling.
- Responsive across devices.
- Clear visual hierarchy.
- Accessible UI elements (buttons, filters, tables).

---

## Suggested Labels & Messages

- **Raise Dispute**
- **Dispute window expired**
- **Last Month**
- **Download Statement**
- **No transactions found**
- **Try adjusting your filters**

---

## Design Notes

- Use minimal color since all transactions are debit.
- Use highlight only for recent transactions (< 30 days).
- Keep actions clearly visible but not cluttered.
- Ensure filters are easily accessible and intuitive.

---

## Out of Scope

- Backend dispute processing
- Statement file format (PDF/CSV specifics)
- Transaction categorization beyond given fields

---

## Summary

The transaction page should provide:

- A clean list of all transactions
- Highlighting of recent transactions
- Dispute capability for eligible entries
- Easy filtering and quick access to last month’s data
- Statement download functionality for monthly records
