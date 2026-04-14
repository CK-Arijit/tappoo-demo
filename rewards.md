# Reward Page Mockup Specification (Mobile Only)

## Overview

This specification defines the **mobile-only Reward page** for the application. The page should help users quickly understand their reward points status and review the detailed history of point-related activities.

The page must present:

- **Total lifetime points collected**
- **Available points**
- **Points already redeemed**
- A **graphical representation** of the points summary
- A **list of reward point records**
- A **filter drawer** for refining records by type and date

The overall experience should feel modern, informative, and easy to use on mobile devices.

---

## Goals

- Provide a clear mobile dashboard for reward points.
- Visually summarize the user’s points using a graph.
- Allow the user to browse reward point records in a simple list format.
- Enable fast filtering through a mobile-friendly drawer.
- Support quick date filters such as today, yesterday, last week, and last month.

---

## Scope

This specification is for:

- **Reward page mockup**
- **Mobile layout only**

This specification does not cover:

- Desktop layout
- Backend logic
- Rewards calculation engine
- Redemption workflows outside the page

---

## Page Structure

The mobile Reward page should include the following sections in top-to-bottom order:

1. **Header**
2. **Points Summary Section**
3. **Graphical Representation Section**
4. **Filter Trigger**
5. **Points Records List**

---

## Header

### Content

- Page title: **Rewards**
- Optional subtitle: **Track your points and redemption history**

### Mobile Behavior

- Sticky header is recommended for easier navigation.
- The filter action may be placed in the header or just below the summary section.

---

## Points Summary Section

### Purpose

This section should clearly communicate the user’s overall reward status at a glance.

### Required Metrics

The following summary values must be displayed:

1. **Total Lifetime Points Collected**
2. **Available Points**
3. **Points Already Redeemed**

### UI Recommendation

Use compact summary cards or tiles optimized for mobile.

### Suggested Layout Options

#### Option A: Stacked Cards

- One card per metric
- Full-width or two-column compact card design

#### Option B: Summary Block + Mini Cards

- Large primary card for **Available Points**
- Two smaller secondary cards for:
  - Total Lifetime Points Collected
  - Points Already Redeemed

### UX Notes

- Available Points should be visually emphasized.
- Values should be large and highly readable.
- Labels should be short and clear.

---

## Graphical Representation Section

### Requirement

A **graphical representation is mandatory**.

### Purpose

The graph should help users understand the relationship between:

- Total lifetime points collected
- Available points
- Points already redeemed

### Recommended Graph Types

Any one of the following can be used:

#### Option A: Donut Chart

- Best for showing proportion of:
  - Available Points
  - Redeemed Points

- Total lifetime points can be shown in the center or as supporting text

#### Option B: Bar Chart

- Three bars for:
  - Lifetime Points
  - Available Points
  - Redeemed Points

#### Option C: Stacked Progress Visualization

- Total lifetime points as the full range
- Split into:
  - Available
  - Redeemed

### Mobile Design Notes

- Chart must be easy to understand on a small screen.
- Avoid overloading with too many labels.
- Use a compact legend if required.
- The chart should sit inside a card or panel with enough spacing.

### Supporting Text

Optional helper text can be shown under the graph, such as:

- **Your current available points can be used for future redemptions**
- **Track how many points you have earned and used over time**

---

## Filter Trigger

### Requirement

A filter option must be available.

### Mobile Interaction

- Tapping the filter action opens a **drawer**.
- Drawer should slide from the **bottom** or **right side**.
- Bottom sheet drawer is recommended for mobile.

### Placement

- Filter button in header, or
- Filter button above the records list

### Button Label

- **Filter**
- Optional icon may be used alongside text

---

## Filter Drawer

### Purpose

Allows the user to refine the points records list.

### Filter Criteria

The filter drawer must support:

1. **Point Type**
2. **From Date**
3. **To Date**
4. **Quick Date Filters**

### Quick Date Filters Required

- **Today**
- **Yesterday**
- **Last Week**
- **Last Month**

### Filter Drawer Content

#### 1. Point Type Selector

This can be implemented as:

- Radio list
- Checkbox list
- Select dropdown
- Pill/chip selection

#### 2. Date Range

- **From Date** picker
- **To Date** picker

#### 3. Quick Date Presets

Quick-tap chips or buttons for:

- Today
- Yesterday
- Last Week
- Last Month

### Drawer Actions

- **Apply Filters**
- **Reset**
- **Close**

### UX Notes

- Selected filter state should be visible after applying.
- Active filters may be shown as chips above the records list.
- Reset should clear all filters.

---

## Points Records List

### Description

Display a list of all reward point activity records.

### Each Record Must Contain

- **Date and Time**
- **Point Type**
- **Points**
- **Equivalent Currency**
- **Docket Number**

### Mobile Layout Recommendation

Use a **card-based list** for mobile.

### Suggested Card Structure

#### Top Row

- Point Type
- Points value

#### Middle Row

- Date and time
- Equivalent currency

#### Bottom Row

- Docket Number

### Additional UI Notes

- Keep cards compact but readable.
- Maintain clear visual separation between records.
- Use short labels to reduce clutter.

---

## Point Types

The following point types must be supported in the records list and in filters.

### Required Point Types

1. **Points received - Bonus points**
2. **Claim/Redeemed**
3. **Points received - Sales point by purchasing product**
4. **Dispute points**
5. **Transferred points**

### Recommended Short Text Labels

Use short, mobile-friendly labels for display:

| Full Type                                           | Short Text   |
| --------------------------------------------------- | ------------ |
| Points received - Bonus points                      | **Bonus**    |
| Claim/Redeemed                                      | **Redeemed** |
| Points received - Sales point by purchasing product | **Sales**    |
| Dispute points                                      | **Dispute**  |
| Transferred points                                  | **Transfer** |

### Label Usage

- Use short labels in cards and filter chips.
- Full labels may be shown inside the filter drawer if needed.

---

## Visual Treatment for Record Types

Since point records represent different reward actions, lightweight visual distinction is recommended.

### Suggested UI Treatments

- Show point type as a small badge or label
- Keep the style subtle and mobile-friendly
- Do not overcrowd cards with excessive color or icons

### Points Value Display

- Positive and redeemed values can be displayed clearly using text formatting
- Example:
  - **+120 pts**
  - **-80 pts**

Color use can be subtle and optional depending on design system rules.

---

## Records List States

### Default State

- List of all points records shown in reverse chronological order

### Filtered State

- Show only records matching the selected filters
- Active filters may appear as removable chips

### Empty State

If no records match the selected filters, show:

- **No reward records found**
- Optional helper text: **Try changing your filters**

### Loading State

- Use skeleton cards or spinner while data is loading

### Error State

- Show message: **Unable to load reward records. Please try again.**

---

## Functional Requirements

- The page must be designed for **mobile only**.
- The page must show:
  - Total lifetime points collected
  - Available points
  - Points already redeemed

- A graphical representation is mandatory.
- The page must include a list of reward records.
- Each record must contain:
  - Date and time
  - Point type
  - Points
  - Equivalent currency
  - Docket number

- A filter option must be present.
- The filter must open as a drawer.
- Filtering must support:
  - Point type
  - From date
  - To date
  - Today
  - Yesterday
  - Last week
  - Last month

---

## Non-Functional Requirements

- Optimized for mobile responsiveness
- Clean and modern UI
- Readable typography on small screens
- Smooth drawer interaction
- Quick chart readability
- Easy tap targets for filters and actions

---

## Suggested Labels

- **Rewards**
- **Total Lifetime Points**
- **Available Points**
- **Redeemed Points**
- **Filter**
- **Apply Filters**
- **Reset**
- **Today**
- **Yesterday**
- **Last Week**
- **Last Month**
- **No reward records found**
- **Try changing your filters**

---

## Design Notes for Mockup

- Prioritize a clean mobile hierarchy.
- Put the most important value, **Available Points**, in the most prominent position.
- Use a simple, compact chart that works well on smaller screens.
- Keep the filter drawer intuitive and touch-friendly.
- Use cards for records to improve scanning on mobile.
- Use short point type labels in the list to reduce visual clutter.

---

## Out of Scope

- Point redemption checkout flow
- Transfer points workflow
- Dispute resolution workflow
- Backend calculation or real-time sync behavior

---

## Summary

The mobile Reward page should provide a clear and visually engaging experience by combining:

- Key reward summaries
- A mandatory graph for points overview
- A list of detailed points records
- A filter drawer with point type and date-based filtering options

The design should be optimized for mobile usability, quick scanning, and easy interaction.
