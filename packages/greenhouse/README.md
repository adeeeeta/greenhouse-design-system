# @adeeeeta/greenhouse

A React component library and design token system built for learning design-system architecture.

[![npm version](https://img.shields.io/npm/v/@adeeeeta/greenhouse)](https://www.npmjs.com/package/@adeeeeta/greenhouse)
[![license](https://img.shields.io/npm/l/@adeeeeta/greenhouse)](./LICENSE)

## Install

```bash
npm i @adeeeeta/greenhouse
```

### Peer dependencies

Greenhouse requires React 19 or later. Both must be installed in your project:

```bash
npm i react react-dom
```

A bundler that handles CSS imports (Vite, Next.js, Webpack, etc.) is also required.

## Setup

Import the two required stylesheets once at the root of your app. `tokens.css` defines every design token (color, spacing, typography, radii). `styles.css` carries the component styles. **Both are required — components render unstyled without them.**

```tsx
// app/layout.tsx (or your root entry)
import "@adeeeeta/greenhouse/tokens.css";
import "@adeeeeta/greenhouse/styles.css";
```

## Usage

Every component is a named export from the package root:

```tsx
import { Button } from "@adeeeeta/greenhouse";

export default function Page() {
  return <Button kind="primary">Add to greenhouse</Button>;
}
```

## Components

### Actions

| Component | Description |
|-----------|-------------|
| `Button` | Primary, secondary, and ghost variants. Supports icons and icon-only mode. |

### Data display

| Component | Description |
|-----------|-------------|
| `Avatar` | User image or initials with circle/square shape and sm/md/lg sizes. |
| `Badge` | Status indicator with neutral, success, warning, error, and info variants. |
| `Tag` | Categorical label. |
| `Text` | Typographic primitive for body, heading, and caption text. Polymorphic via `as` prop. |
| `Tooltip` | Floating label on hover/focus. Built on Floating UI with portal rendering. |

### Feedback

| Component | Description |
|-----------|-------------|
| `Alert` | Inline message with success, warning, error, and info variants. |
| `Spinner` | Loading indicator. |
| `Toast` | Notification system. Exports `Toast`, `ToastProvider`, and `useToast`. |

### Form

| Component | Description |
|-----------|-------------|
| `Checkbox` | Single or grouped checkboxes. |
| `Dropdown` | Select menu. Also exports the `DropdownOption` type. |
| `FormField` | Label, helper text, and error wrapper for form inputs. Used internally by form components and available for custom inputs. |
| `Radio` | Radio button group. |
| `TextInput` | Single-line text field with error and disabled states. |
| `Toggle` | On/off switch. |

### Layout

| Component | Description |
|-----------|-------------|
| `Card` | Container with flat, elevated, and outlined variants. Supports links via `href`. |
| `Divider` | Horizontal rule for visual separation. |
| `Modal` | Dialog overlay with focus trapping. |
| `Tabs` | Tabbed content panels. |

### Icons

64 hand-picked [Phosphor](https://phosphoricons.com/) icons, organized into 9 categories (plants, tools, garden, weather, and more). All icons are named exports:

```tsx
import { Leaf, Sun, Thermometer } from "@adeeeeta/greenhouse";
```

## Documentation

Full usage guidance, interactive demos, and design foundations:

**[greenhouse-design-system.vercel.app](https://greenhouse-design-system.vercel.app/)**

## License

[MIT](./LICENSE)
