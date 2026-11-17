# @adeeeeta/greenhouse

A React component library and token system for calm, plant-themed interfaces. 20 components, 64 icons, light and dark themes.

[![npm version](https://img.shields.io/npm/v/@adeeeeta/greenhouse)](https://www.npmjs.com/package/@adeeeeta/greenhouse)
[![license](https://img.shields.io/npm/l/@adeeeeta/greenhouse)](./LICENSE)

> **Building with an AI agent?** Also read [`AGENTS.md`](./AGENTS.md). It lists the mistakes agents make most often with Greenhouse, and a checklist to run before you finish.

<!--
  HOW THIS FILE IS MADE
  Sections between "dsds:start" and "dsds:end" markers are generated from docs/*.dsds.yaml
  by `npm run docs:build`. Edit the YAML, not those sections. Everything else is hand-written.
-->

## Contents

1. [Install](#install)
2. [Setup](#setup)
3. [Rules](#rules)
4. [Components](#components)
5. [Tokens](#tokens)
6. [Theming](#theming)
7. [Icons](#icons)
8. [TypeScript](#typescript)
9. [Where everything else lives](#where-everything-else-lives)

---

## Install

```bash
npm i @adeeeeta/greenhouse
```

Greenhouse needs **React 19** and **react-dom 19**, and a bundler that handles CSS imports (Vite, Next.js, Webpack).

## Setup

Do all four steps. If you skip one, the app looks wrong but nothing reports an error.

### 1. Import both stylesheets once, at the root

```tsx
// app/layout.tsx (Next.js) or your root entry
import "@adeeeeta/greenhouse/tokens.css"; // every design token
import "@adeeeeta/greenhouse/styles.css"; // component styles
```

### 2. Load the three typefaces

Greenhouse doesn't ship font files. Load them yourself and set the CSS variable each one fills. Without this step, all text falls back to system fonts.

| Typeface | Role | Set this variable |
|---|---|---|
| Plus Jakarta Sans | Body, UI and headings | `--font-sans-face` |
| Fraunces | Expressive display headings only | `--font-display-face` |
| Fira Code | Code | `--font-mono-face` |

```tsx
// app/layout.tsx
import { Plus_Jakarta_Sans, Fraunces, Fira_Code } from "next/font/google";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-sans-face" });
const display = Fraunces({ subsets: ["latin"], variable: "--font-display-face" });
const mono = Fira_Code({ subsets: ["latin"], variable: "--font-mono-face" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
```

### 3. Wrap the app in `ToastProvider` (only if you use toasts)

`useToast()` throws an error outside `ToastProvider`. In the Next.js App Router, providers must live in a client component:

```tsx
// app/providers.tsx
"use client";
import { ToastProvider } from "@adeeeeta/greenhouse";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}
```

### 4. Know what needs a client component

Interactive components already include `"use client"`, so you can import them anywhere. The exception is `useToast()`: any file that calls it must be a client component.

---

## Rules

These apply everywhere. Rules for a single component are listed under that component.

<!-- dsds:start rules -->
<!-- Generated from docs/*.dsds.yaml. Edit the YAML, then run npm run docs:build. -->

**Spacing**

- **Should:** Space children inside a component with gap on a flex or grid wrapper, not margins.
- **Must not:** Do not add padding to content placed directly inside Card, Alert or Modal; they pad themselves.

<!-- dsds:end rules -->

---

## Components

Props, types and defaults are in the TypeScript definitions; hover a component in your editor to see them. This section covers what each component is for, what to use instead, and the rules the types can't express.

### Choosing a component

<!-- dsds:start component-table -->
<!-- Generated from docs/*.dsds.yaml. Edit the YAML, then run npm run docs:build. -->

| Component | Use it for | Don't use it when… |
|---|---|---|
| [Button](#button) | Triggers an in-page action, such as saving, opening a dialog or submitting a form. | Do not use Button for navigation to another URL; use Link. |
| [Card](#card) | Use Card to group related content and actions into a single container. | Do not use Card for a text navigation on its own; use [Link](#link).<br>Do not use Card for a single action with no grouped content; use [Button](#button). |
| [Link](#link) | Use Link to navigate to another URL. | Do not use Link to group a destination with supporting content; use [Card](#card) with href.<br>Do not use Link to trigger an in-page action; use [Button](#button). |
| [Alert](#alert) | Use Alert for a message that stays on the page until the problem is fixed or the user dismisses it. | Do not use Alert to confirm an action that just finished; use [Toast](#toast).<br>Do not use Alert when the user must make a decision before continuing; use [Modal](#modal). |
| [Toast](#toast) | Use a toast to confirm an action the user just took, such as logging a watering. | Do not use a toast for an error the user has to fix; use [Alert](#alert) next to the problem.<br>Do not use a toast when the user must decide something; use [Modal](#modal). |
| [Modal](#modal) | Use Modal for a short form or a decision the user must make before continuing. | Do not use Modal for information that doesn't need a response; use [Alert](#alert).<br>Do not use Modal to confirm an action that already happened; use [Toast](#toast). |
| [TextInput](#textinput) | Use TextInput for short free-text answers, such as a plant name or an email address. | Do not use TextInput when the answer comes from a fixed list; use [Dropdown](#dropdown) or [Radio](#radio). |
| [Dropdown](#dropdown) | Use Dropdown to choose one option from a longer list, such as a growing zone. | Do not use Dropdown for five or fewer options that fit on screen; use [Radio](#radio) so every choice stays visible. |
| [Checkbox](#checkbox) | Use Checkbox for choices that are saved when a form is submitted, or when the user can pick several options from a list. | Do not use Checkbox for a setting that takes effect immediately; use [Toggle](#toggle).<br>Do not use Checkbox when only one option in a group can be chosen; use [Radio](#radio). |
| [Radio](#radio) | Use Radio when the user must pick exactly one option from a short list, such as a growth stage. | Do not use Radio for a long list of options; use [Dropdown](#dropdown).<br>Do not use Radio when the user can pick more than one option; use [Checkbox](#checkbox). |
| [Toggle](#toggle) | Use Toggle for settings that apply immediately, such as turning on automatic watering. | Do not use Toggle for a choice that is saved when a form is submitted; use [Checkbox](#checkbox). |
| [FormField](#formfield) | Use FormField only around a custom input, such as a date picker or a slider, so it matches the other fields. | Do not wrap TextInput, Dropdown, Checkbox or Radio in FormField. They already include one. |
| [Badge](#badge) | Use Badge to show a status at a glance, such as Healthy, Needs water or Dormant. | Do not use Badge for a label the user can remove or filter by; use [Tag](#tag).<br>Do not use Badge for a message that needs explaining; use [Alert](#alert). |
| [Tag](#tag) | Use Tag for plant attributes, care labels and applied filters, especially ones the user can add and remove. | Do not use Tag to show a status; use [Badge](#badge). |
| [Tabs](#tabs) | Use Tabs to switch between peer views of one subject without leaving the page. | Do not use Tabs when each view needs its own URL or should work with the back button; use [Link](#link) to separate pages.<br>Do not use Tabs for steps the user must complete in order. |
| [Tooltip](#tooltip) | Use Tooltip to name an icon-only button or add a brief hint to a control. | Do not use Tooltip for content with links or buttons; use [Modal](#modal). |
| [Text](#text) | Set all text with Text, or with --type-* tokens in your own CSS. Do not use ad-hoc font sizes. | — |
| [Spinner](#spinner) | Use Spinner while content or an action is loading and you can't tell how long it will take. | Do not show a spinner for waits shorter than about one second. A flash of spinner feels slower than no spinner. |
| [Divider](#divider) | Use Divider to separate groups when spacing alone doesn't make the break clear. | Do not add a divider between every item. Try spacing with --space-* tokens first. |
| [Avatar](#avatar) | Use Avatar to identify a person or a plant in lists, comments and profiles, where a picture helps people scan. | Do not use Avatar for decoration, or for an image that doesn't identify someone or something. |

<!-- dsds:end component-table -->

<!-- dsds:start components -->
<!-- Generated from docs/*.dsds.yaml. Edit the YAML, then run npm run docs:build. -->

### Button

Triggers an in-page action, such as saving, opening a dialog or submitting a form.

```tsx
import { Button } from "@adeeeeta/greenhouse";
```

**Props to know:** `kind`: `primary` · `secondary` · `ghost`; `size`: `sm` · `md` · `lg`; `iconOnly`; `disabled`. Full props are in the TypeScript types.

- **Must:** Give an icon-only button an aria-label.
- **Should:** Use one primary button per surface.

[Live demo](https://greenhouse-design-system.vercel.app/components/button)

### Card

Groups related content and actions into one container, with flat, elevated, and outlined styles.

```tsx
import { Card } from "@adeeeeta/greenhouse";
```

**Props to know:** `variant`: `elevated` · `flat` · `outlined`. Full props are in the TypeScript types.

- **Must:** Include text in an interactive card so the anchor or button has an accessible name.
- **Should:** Use flat for low-emphasis content, elevated as the default, and outlined for a bordered style without shadow.
- **Should:** Pass header and footer to add structured sections above and below the body.
- **Should:** Use cover for an image or visual at the top. The cover spans the full width of the card.
- **Should:** Add href or onClick to make the whole card clickable. Interactive cards lift on hover.
- **Must not:** Do not add padding to content in the header, body, or footer. Those regions already include padding.
- **Must not:** Do not put links, buttons, or other interactive controls inside a card that sets href or onClick. It’s invalid HTML, and keyboard and screen-reader users can’t reliably reach the inner control.
- **Must not:** Do not put an onClick card inside a form. It renders a button with no type, so activating it submits the form.

[Live demo](https://greenhouse-design-system.vercel.app/components/card)

### Link

Navigates to a URL inline, with an underlined default style and a quieter subtle style.

```tsx
import { Link } from "@adeeeeta/greenhouse";
```

**Props to know:** `variant`: `default` · `subtle`; `external`. Full props are in the TypeScript types.

- **Must:** Give every link visible text. The external icon is aria-hidden and does not name the link.
- **Must:** Pass href. external does not set the destination.
- **Should:** Use the default variant for links inside body text. The underline identifies it as a link, and color alone isn’t enough (WCAG 1.4.1).
- **Should:** Use the subtle variant in link lists where the layout already signals links, such as navigation, footers and card metadata.
- **Should:** Use external only for links to other sites. Opening internal pages in a new tab breaks the back button.
- **Should not:** Do not use the subtle variant for links inside a paragraph.

### Alert

Shows a persistent message about the page or a form, in success, warning, error or info styles.

```tsx
import { Alert } from "@adeeeeta/greenhouse";
```

**Props to know:** `variant`: `success` · `warning` · `error` · `info`. Full props are in the TypeScript types.

- **Must:** Set variant to match the message. Use error for something that failed, warning for something that needs attention soon, success for a completed outcome and info for neutral context.
- **Should:** Place an error alert next to the form or content it describes, not only at the top of the page.
- **Should not:** Do not make error alerts dismissible. They should disappear when the problem is fixed.
- **Must not:** Do not add padding to content inside an Alert. It already pads itself.
- **Must not:** Do not pass paragraphs, lists or other block content as children. The body renders inside a span, so keep it to a sentence or two of text.

[Live demo](https://greenhouse-design-system.vercel.app/components/alert)

### Toast

A brief notification that confirms an action or flags something time-sensitive, shown in the corner of the screen.

```tsx
import { ToastProvider, useToast } from "@adeeeeta/greenhouse";
```

**Props to know:** `variant`: `success` · `error` · `warning` · `info`; `autoDismiss`. Full props are in the TypeScript types.

- **Must:** Set autoDismiss to false for any warning or error the user needs to read. Four seconds is not long enough for everyone.
- **Should:** Keep the message to one short sentence that names what happened.

[Live demo](https://greenhouse-design-system.vercel.app/components/toast)

### Modal

A dialog that opens over the page for a decision or a short focused task, and blocks the page until it closes.

```tsx
import { Modal } from "@adeeeeta/greenhouse";
```

**Props to know:** `size`: `sm` · `md` · `lg`; `closeOnBackdropClick`; `isOpen`. Full props are in the TypeScript types.

- **Must:** Give every modal a title that names the task, such as "Add a new plant".
- **Should:** Label primaryAction with the specific action, such as "Add plant", not "OK".
- **Should:** Use sm for confirmations, md (the default) for most content and lg for longer forms.
- **Should:** For a destructive confirmation, name the consequence in the primary action label, such as "Delete plant".
- **Should not:** Do not open a modal from inside another modal.
- **Must not:** Do not add padding to content inside a Modal. The header, body and footer pad themselves.

[Live demo](https://greenhouse-design-system.vercel.app/components/modal)

### TextInput

A single-line text field with a built-in label, hint and error message.

```tsx
import { TextInput } from "@adeeeeta/greenhouse";
```

**Props to know:** `required`; `disabled`. Full props are in the TypeScript types.

- **Must:** Give every TextInput a label.
- **Should:** Use placeholder only for an example value. It disappears when the user types, so it can't replace the label or the hint.
- **Should:** Set type to match the content, such as email, number or search, so phones show the right keyboard.
- **Should:** Write error messages that say how to fix the problem, such as "Enter a watering interval in days".

[Live demo](https://greenhouse-design-system.vercel.app/components/text-input)

### Dropdown

A select menu for choosing one option from a list, with an optional description under each option.

```tsx
import { Dropdown, type DropdownOption } from "@adeeeeta/greenhouse";
```

**Props to know:** `disabled`. Full props are in the TypeScript types.

- **Must:** Give every Dropdown a label.
- **Should:** Add an option description only when the label alone is not enough to choose, such as the temperature range of a zone.

[Live demo](https://greenhouse-design-system.vercel.app/components/dropdown)

### Checkbox

A box the user ticks to turn one choice on or off, usually submitted with a form.

```tsx
import { Checkbox } from "@adeeeeta/greenhouse";
```

**Props to know:** `checked`; `disabled`; `required`. Full props are in the TypeScript types.

- **Must:** Give every Checkbox a label.
- **Must:** Wrap a group of related checkboxes in a fieldset with a legend that names the group.
- **Should:** Write labels as positive statements, such as "Send frost alerts", not "Don't send frost alerts".

[Live demo](https://greenhouse-design-system.vercel.app/components/checkbox)

### Radio

One option in a group where the user can choose exactly one, with every option visible.

```tsx
import { Radio } from "@adeeeeta/greenhouse";
```

**Props to know:** `checked`; `disabled`. Full props are in the TypeScript types.

- **Must:** Give every Radio in a group the same name and a different value.
- **Must:** Wrap the group in a fieldset with a legend that asks the question, such as "Growth stage".
- **Should:** Preselect the most common option unless choosing nothing is a valid answer.

[Live demo](https://greenhouse-design-system.vercel.app/components/radio)

### Toggle

An on/off switch for a setting that takes effect as soon as it changes.

```tsx
import { Toggle } from "@adeeeeta/greenhouse";
```

**Props to know:** `checked`; `disabled`; `showLabel`. Full props are in the TypeScript types.

- **Must:** Always pass ariaLabel with the name of the setting. Toggle has no visible label of its own.
- **Should:** Show the setting's name as text beside the toggle, using the same words as ariaLabel.
- **Should not:** Do not use showLabel by default. Add it only when the setting's name doesn't make on and off obvious.

[Live demo](https://greenhouse-design-system.vercel.app/components/toggle)

### FormField

Adds a label, hint and error message around a custom input that Greenhouse doesn't provide.

```tsx
import { FormField } from "@adeeeeta/greenhouse";
```

**Props to know:** `layout`: `stacked` · `inline`; `hideLabel`; `required`; `disabled`. Full props are in the TypeScript types.

- **Must:** Give FormField a label, or give the input its own aria-label when hideLabel is set.
- **Should:** Use the stacked layout (the default) unless the field sits in a row of short inline settings.

[Live demo](https://greenhouse-design-system.vercel.app/components/text-input)

### Badge

A small read-only label that shows the status of something, such as a plant's health.

```tsx
import { Badge } from "@adeeeeta/greenhouse";
```

**Props to know:** `variant`: `neutral` · `success` · `warning` · `error` · `info`; `size`: `sm` · `md`. Full props are in the TypeScript types.

- **Must:** Say the status in words in label. Color alone must not carry the meaning.
- **Should:** Match variant to meaning. Use success for good, warning for needs attention, error for a problem, info for neutral facts and neutral for everything else.
- **Should:** Keep label to one or two words.
- **Should:** Use sm in compact places such as table cells, and md (the default) elsewhere.

[Live demo](https://greenhouse-design-system.vercel.app/components/badge)

### Tag

A small label for a category, attribute or applied filter, which the user can optionally remove.

```tsx
import { Tag } from "@adeeeeta/greenhouse";
```

**Props to know:** `variant`: `neutral` · `success` · `warning` · `error` · `info`; `size`: `sm` · `md`. Full props are in the TypeScript types.

- **Should:** Use the neutral variant for most tags. Use a colored variant only when the color means something, such as a frost-sensitive label in warning.
- **Should:** Add an icon only when it helps tell tag types apart at a glance.
- **Should:** Use sm inside compact places such as input fields, and md (the default) elsewhere.

[Live demo](https://greenhouse-design-system.vercel.app/components/tag)

### Tabs

Switches between related views of the same content in place, such as a plant's overview, care schedule and history.

```tsx
import { Tabs } from "@adeeeeta/greenhouse";
```

**Props to know:** `variant`: `underline` · `pill`. Full props are in the TypeScript types.

- **Should:** Use underline (the default) for the main views of a page or area, and pill for secondary navigation or filtering within a section.
- **Should:** Keep tab labels to one or two words, and use no more than five tabs.

[Live demo](https://greenhouse-design-system.vercel.app/components/tabs)

### Tooltip

A short text hint that appears when the user hovers over or focuses an element.

```tsx
import { Tooltip } from "@adeeeeta/greenhouse";
```

**Props to know:** `position`: `above` · `below` · `left` · `right`. Full props are in the TypeScript types.

- **Must:** On an icon-only button, still set aria-label, using the same words as the tooltip.
- **Should:** Keep the content to a few words, such as "Water now".
- **Must not:** Do not put information the user needs only in a tooltip. It never appears on touch screens.

[Live demo](https://greenhouse-design-system.vercel.app/components/tooltip)

### Text

Sets all typography, from display headings to captions, separating the HTML element from how it looks.

```tsx
import { Text } from "@adeeeeta/greenhouse";
```

**Props to know:** `variant`: `display` · `h1` · `h2` · `h3` · `h4` · `body` · `bodyMedium` · `bodySm` · `bodySmMedium` · `label` · `labelStrong` · `caption`. Full props are in the TypeScript types.

- **Must:** Choose the element with as and the look with variant, separately. A card title can be an h3 element styled as h4.
- **Should:** Use one h1 per page, naming the page.
- **Should:** Use the display variant, which is set in Fraunces, only for expressive moments such as page heroes. Do not use it on utility screens such as settings, forms or tables.
- **Must not:** Do not skip heading levels in the page outline, such as an h2 followed by an h4. Use variant to change the size instead.

[Live demo](https://greenhouse-design-system.vercel.app/foundations/typography)

### Spinner

An animated indicator that something is loading and the wait time is unknown.

```tsx
import { Spinner } from "@adeeeeta/greenhouse";
```

**Props to know:** `size`: `sm` · `md`. Full props are in the TypeScript types.

- **Should:** Pass label to say what is loading, such as "Syncing plant data".
- **Should:** Use sm inline or in compact places, such as inside a Button, and md (the default) elsewhere.
- **Should not:** Do not show several spinners for one loading task. Use one per area that loads separately.

[Live demo](https://greenhouse-design-system.vercel.app/components/spinner)

### Divider

A horizontal line that separates groups of content, with an optional centered label.

```tsx
import { Divider } from "@adeeeeta/greenhouse";
```

**Props to know:** `weight`: `subtle` · `default` · `strong`. Full props are in the TypeScript types.

- **Should:** Use subtle inside a component such as a Card, default between sections of a page, and strong only for a major break.
- **Should:** Add label to name the next group, such as a form section or "or" between two options.

[Live demo](https://greenhouse-design-system.vercel.app/components/divider)

### Avatar

A small image or initials that identifies a person or a thing, such as a plant or a team.

```tsx
import { Avatar } from "@adeeeeta/greenhouse";
```

**Props to know:** `size`: `sm` · `md` · `lg`; `shape`: `circle` · `square`. Full props are in the TypeScript types.

- **Must:** Pass alt with the full name, such as "Aditya Patel", even when the avatar shows initials.
- **Should:** Use the circle shape for people and the square shape for things such as plants, teams or organisations.
- **Should:** Pass initials as well as src, so the avatar still identifies the person if the image fails to load.
- **Should:** Use the same size for every avatar in one list.

[Live demo](https://greenhouse-design-system.vercel.app/components/avatar)

<!-- dsds:end components -->

---

## Tokens

Use only these semantic tokens in your own CSS. Values live in [`tokens.css`](./dist/tokens.css); scale tokens (`--green-600`) and component tokens (`--button-*`) are internal.

<!-- dsds:start tokens -->
<!-- Generated from docs/*.dsds.yaml. Edit the YAML, then run npm run docs:build. -->

**Color**

| Token | Use for |
|---|---|
| `--color-text` | Use for all text the user needs to read, unless it is secondary. |
| `--color-text-muted` | Use for supporting text that sits beside main text, such as form hints, captions and timestamps. |
| `--color-surface` | Use as the background for most surfaces. |
| `--color-surface-muted` | Use for secondary areas such as card headers, hover states and wells inside a surface. |
| `--color-border` | Use for separators and the outlines of containers such as Card and Tooltip. |
| `--color-border-strong` | Use for the edges of controls the user interacts with, such as checkboxes, radios and toggles, so they stand out from the surface. |
| `--color-primary` | Use for primary actions, links and selected or active states. |
| `--color-primary-hover` | Use only for the hover or pressed state of something that uses color-primary. |
| `--color-primary-subtle` | Use as a background for selected or highlighted items, with color-text or color-primary on top. |
| `--color-error` | Use for validation messages and the borders of fields with an error. |
| `--color-error-strong` | Use for error text or icons that sit on a tinted error background, where color-error has too little contrast. |
| `--color-focus-ring` | Use only for focus indicators. |
| `--color-overlay` | Use only for backdrops behind blocking overlays such as Modal. |
| `--color-selection` | Use for the fill of custom selected controls so they match Checkbox and Radio. |
| `--color-selection-contrast` | Use only on top of color-selection. |
| `--color-accent-moss` | Use sparingly, for decoration only. |
| `--color-accent-soil` | Use sparingly, for decoration only. |
| `--color-accent-leaf` | Use sparingly, for decoration only. |

**Space**

| Token | Use for |
|---|---|
| `--space-1` | Use for hairline gaps, such as between a label and its required mark. |
| `--space-2` | Use for tight groupings, such as an icon and its label. |
| `--space-3` | Use for space inside components, such as between fields or list rows. |
| `--space-4` | Use for component padding and the gap between related items. |
| `--space-5` | Use for an in-between step when 16px is too tight and 24px too loose. |
| `--space-6` | Use for page and layout padding; the space around Divider. |
| `--space-8` | Use for separation between distinct sections. |
| `--space-10` | Use for large layout spacing between major page regions. |
| `--space-12` | Use for the largest layout spacing, such as around page heroes. |

**Type**

| Token | Use for |
|---|---|
| `--type-display-size` | Prefer the Text component. Use this token only in your own CSS. |
| `--type-display-line` | Unitless line height for the display step. |
| `--type-h1-size` | Prefer the Text component. Use this token only in your own CSS. |
| `--type-h1-line` | Unitless line height for the h1 step. |
| `--type-h2-size` | Prefer the Text component. Use this token only in your own CSS. |
| `--type-h2-line` | Unitless line height for the h2 step. |
| `--type-h3-size` | Prefer the Text component. Use this token only in your own CSS. |
| `--type-h3-line` | Unitless line height for the h3 step. |
| `--type-h4-size` | Prefer the Text component. Use this token only in your own CSS. |
| `--type-h4-line` | Unitless line height for the h4 step. |
| `--type-body-size` | Prefer the Text component. Use this token only in your own CSS. |
| `--type-body-line` | Unitless line height for the body step. |
| `--type-bodySm-size` | Prefer the Text component. Use this token only in your own CSS. |
| `--type-bodySm-line` | Unitless line height for the bodySm step. |
| `--type-label-size` | Prefer the Text component. Use this token only in your own CSS. |
| `--type-label-line` | Unitless line height for the label step. |
| `--type-caption-size` | Prefer the Text component. Use this token only in your own CSS. |
| `--type-caption-line` | Unitless line height for the caption step. |

**Font**

| Token | Use for |
|---|---|
| `--font-sans` | Use for all text except code and expressive display headings. |
| `--font-display` | Use only for expressive display headings such as page heroes. |
| `--font-mono` | Use only for code and technical values. |
| `--font-sans-face` | Set this variable when you load the font, for example through next/font with variable set to this name. |
| `--font-display-face` | Set this variable when you load the font, for example through next/font with variable set to this name. |
| `--font-mono-face` | Set this variable when you load the font, for example through next/font with variable set to this name. |
| `--font-weight-regular` | Use for body text. |
| `--font-weight-medium` | Use for labels and emphasis within body text. |
| `--font-weight-semibold` | Use for headings and strong labels. |
| `--font-weight-bold` | Font weight 700. |

**Radius**

| Token | Use for |
|---|---|
| `--radius-sm` | Use for small elements such as buttons, inputs, badges and checkboxes. |
| `--radius-md` | Use for containers such as cards, modals, menus, toasts and tooltips. |

**Shadow**

| Token | Use for |
|---|---|
| `--shadow-1` | Use for anything raised above the page, such as cards, menus, tooltips and modals. |

**Control**

| Token | Use for |
|---|---|
| `--control-height` | Make every custom interactive control at least this tall, so it is easy to tap. |
| `--control-padding-x` | Use in custom inputs so their text lines up with TextInput and Dropdown. |
| `--control-radius` | Use for the corners of custom inputs so they match TextInput and Dropdown. |

<!-- dsds:end tokens -->

## Theming

```html
<html data-theme="dark">                        <!-- whole app dark -->
  <aside data-theme="light">Stays light</aside>  <!-- light area inside a dark page -->
</html>
```

<!-- dsds:start themes -->
<!-- Generated from docs/*.dsds.yaml. Edit the YAML, then run npm run docs:build. -->

**Light** — The default Greenhouse theme, with a white surface and chlorophyll green for actions.

- **Should:** Expect light to apply by default. You don't need to set any attribute.
- **Should:** Set data-theme="light" on an element inside a dark page to keep that area light, such as a preview of printed material.

**Dark** — A dark theme for low-light use. Every semantic token is remapped to keep the same roles and contrast.

- **Must:** Turn on dark mode by setting data-theme="dark" on html, or on any element to make only that area dark. No JavaScript is needed.
- **Should:** Follow the user's system setting (prefers-color-scheme) unless they have chosen a theme in your app. Greenhouse does not do this automatically; your app sets the attribute.
- **Must not:** Do not hardcode light or dark colors, or add per-component dark overrides. Use semantic tokens and they switch automatically.

<!-- dsds:end themes -->

---

## Icons

64 hand-picked [Phosphor](https://phosphoricons.com/) icons, exported by name.

```tsx
import { Leaf, Drop, Thermometer } from "@adeeeeta/greenhouse";
```

- Icons accept `size` (in px, default 16) and `className`.
- Icons use `currentColor`. To color one, set `color` on its parent. There is no `color` prop.
- Icons are hidden from screen readers. Put the meaning in visible text or in the parent's `aria-label`.

See the full set on the [Icons page](https://greenhouse-design-system.vercel.app/foundations/icons).

## TypeScript

Prop types are inferred automatically. This type is exported for your own code:

```tsx
import type { DropdownOption } from "@adeeeeta/greenhouse";
```

---

## Where everything else lives

| What | Where |
|---|---|
| Props, types, defaults | TypeScript definitions in `dist/*.d.ts` |
| Token values | `dist/tokens.css` |
| Live demos | [greenhouse-design-system.vercel.app](https://greenhouse-design-system.vercel.app/) |
| Agent notes and checklist | [`AGENTS.md`](./AGENTS.md) |
| Everything in one file for AI tools | [`llms-full.txt`](https://greenhouse-design-system.vercel.app/llms-full.txt) |
| Source docs (DSDS) | [`docs/`](https://github.com/adeeeeta/greenhouse-design-system/tree/main/packages/greenhouse/docs) |
| Source code | [GitHub](https://github.com/adeeeeta/greenhouse-design-system) |
| What changed | [Field Notes](https://greenhouse-design-system.vercel.app/field-notes) |

## License

[MIT](./LICENSE)