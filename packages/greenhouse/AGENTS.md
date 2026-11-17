# Greenhouse — notes for AI agents

<!-- Generated from docs/*.dsds.yaml by npm run docs:build. Do not edit by hand. -->

Read `README.md` first. This file adds what agents most often get wrong, and a checklist to run before you finish.

## Ground truth

- Prop names, values and defaults: the `.d.ts` files. If a prop isn't in the types, it doesn't exist.
- Token values: `tokens.css`.

## Known gaps

- **Must not:** Do not use scale tokens such as --green-600 or --amber-600 for success, warning or info colors. No semantic tokens exist for them yet; use the Badge, Alert or Tag variants instead.
- **Must not:** Do not invent elevation tokens. --shadow-1 is the only shadow in code, although the Figma file defines more levels.
- **Must not:** Do not use legacy tokens (--text-1 to --text-4, --control-font-size) or component tokens (--button-*, --badge-* and similar) in your own CSS.

## By component

### Button

- **Must:** Set the visual style with the kind prop. There is no variant prop.
- **Must not:** Do not use a danger kind, loading prop or iconEnd prop; none exist.

### Card

- **Must:** Expect Card's element to follow its props. With href it renders a link, with onClick a button, and with neither a plain div. Use href for navigation and onClick for an in-page action.
- **Should:** Pass target="_blank" only for links to other sites. Card adds rel="noopener noreferrer" automatically unless you pass your own rel.
- **Must not:** Do not pass both href and onClick. When href is set, onClick is ignored.
- **Must not:** Do not expect an href card to look like Link. The card isn't underlined and keeps its own text color.
- **Must not:** Do not set a size or disabled prop. Neither exists. variant is the only visual option, and elevated is its default.

### Link

- **Must:** Set emphasis with the variant prop. Its values are default and subtle. There is no size prop.
- **Must not:** Do not assume external wins over other anchor props. target and rel are applied before the remaining props, so a passed target or rel replaces them. The icon still renders whenever external is true.

### Alert

- **Must:** Always pass variant. It is required and has no default.
- **Must:** Remove the alert yourself when onDismiss fires. The component shows the close button but does not hide itself.

### Toast

- **Must:** Show a toast by calling showToast from useToast. Do not render the Toast component directly.
- **Must:** Wrap the app in ToastProvider once. useToast throws an error outside it.
- **Must:** Call useToast only in a client component, because it is a React hook.

### Modal

- **Must:** Keep the open state yourself. Pass isOpen, and set it to false inside onClose. The modal does not close itself.
- **Must:** Pass only label and onClick in primaryAction and secondaryAction. Their style, disabled state and loading state can't be set. For custom footer buttons, leave both out and put your own Buttons in children.
- **Must not:** Do not add your own Escape handling, focus trap or scroll lock. Modal already does all three, and returns focus to the trigger when it closes.

### TextInput

- **Must:** Expect only one message below the field. When both error and hint are set, error replaces hint.
- **Must:** Validate required fields yourself. The required prop adds the asterisk but does not turn on browser validation.
- **Must:** Pass native input props such as name, value, onChange, type and autoComplete straight to TextInput. They reach the input element.
- **Must not:** Do not wrap TextInput in FormField. It already includes one.

### Dropdown

- **Must:** Control the selection yourself. Pass value and update it in onChange, which receives the option's value string, not an event.
- **Must:** Read the selected value from your own state. Dropdown has no name prop and isn't included when a form is submitted.
- **Must:** Give each Dropdown on a page a different label. The label is used to build the element's id.
- **Must:** Type the options array as DropdownOption[], which is exported from the package.
- **Must not:** Do not wrap Dropdown in FormField. It already includes one.

### Checkbox

- **Must:** Give each Checkbox in a group its own id. Without one, every checkbox that shares a name gets the same id.
- **Must:** Expect hint to appear beside the label and error to appear below the checkbox.
- **Must not:** Do not wrap Checkbox in FormField. It already includes one.

### Radio

- **Must:** Give each Radio its own id. Without one, every Radio in the group gets the same id, because the id falls back to the shared name.
- **Must not:** Do not label the group with a plain paragraph above it. Screen readers only announce the group name from a legend.
- **Must not:** Do not wrap Radio in FormField. It already includes one.

### Toggle

- **Must:** Pass ariaLabel in camelCase. Toggle does not accept aria-label or label.
- **Must:** Expect onChange to receive true or false, not an event.
- **Must:** Read the value from your own state. Toggle has no name prop and isn't included when a form is submitted.
- **Must not:** Do not pass both checked and defaultChecked. Use checked with onChange when the parent owns the value, or defaultChecked alone when the toggle manages itself.

### FormField

- **Must:** Pass FormField the same id as the input inside it. The label points at the input by that id.
- **Must:** Connect the message yourself. When hint or error is set, give the input aria-describedby set to the id followed by "-help", and set aria-invalid when there's an error.
- **Must:** Expect hideLabel to remove the label completely, not just hide it visually.

### Badge

- **Must:** Pass the text as the label prop, not as children. Badge ignores children.
- **Must not:** Do not add onClick or onDismiss. Badge is not interactive.

### Tag

- **Must:** Remove the tag from your list when onDismiss fires. Tag shows the remove button but does not hide itself.
- **Must:** Pass the text as the label prop, not as children.
- **Must not:** Do not make a Tag clickable to select it. Tag has no onClick or selected state; only its remove button is interactive.
- **Must not:** Do not pass className. Tag does not accept it.

### Tabs

- **Must:** Pass tabs as an array of objects with id, label and content. Do not write Tab children.
- **Must:** Set the starting tab with defaultTab. Tabs is uncontrolled; there is no activeTab or onTabChange, so a URL or parent state can't change the open tab.
- **Must:** Use tab ids that are unique on the whole page, not just within one Tabs. The ids become element ids.
- **Must:** Expect every tab's content to be rendered at once and hidden. Keep heavy content, such as large images or data fetches, out of tabs that may never be opened.

### Tooltip

- **Must:** Wrap exactly one element that can receive focus, such as a Button or Link. Tooltip opens on hover and on keyboard focus.
- **Must:** Pass content as a plain string. Tooltip does not accept elements.
- **Must not:** Do not wrap a disabled button. Disabled buttons don't receive hover or focus, so the tooltip never opens.
- **Must not:** Do not add your own collision handling. Tooltip already flips and shifts to stay on screen, and renders in a portal so containers can't clip it.

### Text

- **Must:** Set as when the text isn't a paragraph. Text renders a p element by default, and a p inside a button, label or another p is invalid HTML.
- **Must:** Expect only the display variant to use Fraunces. h1 to h4 use Plus Jakarta Sans. There is no gh-heading-display class in the package.
- **Must:** Use the exact variant names, which are camelCase, such as bodySm and labelStrong. Names like body-sm or small don't exist.

### Spinner

- **Must:** To show loading in a Button, pass Spinner with size sm as the Button's icon and set disabled on the Button. Button has no loading prop.
- **Must:** Expect Spinner to take the color of the surrounding text. It has no color prop.
- **Must:** Expect screen readers to announce "Loading" when no label is passed.

### Divider

- **Must:** Expect Divider to be horizontal only. There is no vertical option.
- **Must not:** Do not add margin or padding around Divider. It already has --space-6 above and below.

### Avatar

- **Must:** Expect the fallback order image, then initials, then a generic person icon. It switches automatically when the image fails to load.
- **Must:** Expect initials to be cut to two letters and capitalised.
- **Must not:** Do not make Avatar clickable. It has no onClick; wrap it in a Link or Button that has its own accessible name.

## Tokens

- **Must not:** Do not use --space-7, --space-9 or --space-11. They don't exist; the scale skips from 6 to 8, 8 to 10 and 10 to 12.
- **Must not:** Do not use raw pixel values for spacing. If a value isn't on the scale, use the nearest step.
- **Must not:** Do not use this token in component CSS. Use the matching font-sans, font-display or font-mono token, which include fallbacks.
- **Must not:** Do not use this token in component CSS. Use the matching font-sans, font-display or font-mono token, which include fallbacks.
- **Must not:** Do not use this token in component CSS. Use the matching font-sans, font-display or font-mono token, which include fallbacks.
- **Must not:** Do not use font weights other than these four tokens. The set is limited on purpose.
- **Must not:** Do not use the legacy --text-1 to --text-4 sizes. Use the --type-* tokens.
- **Must not:** Do not invent other shadow values or names such as --shadow-2. Greenhouse has one elevation level in code.
- **Must not:** Do not use --control-font-size. It is legacy; use --type-body-size.

## Themes

- **Must:** Also set color-scheme to dark on the same element. Greenhouse doesn't set it, so without it native scrollbars and form controls stay light.
- **Must not:** Do not use a dark class, Tailwind-style dark variants or a ThemeProvider. The only switch is the data-theme attribute.

## Before you finish

- [ ] Import tokens.css and styles.css once at the app root.
- [ ] Load Plus Jakarta Sans, Fraunces and Fira Code and set --font-sans-face, --font-display-face and --font-mono-face.
- [ ] Wrap the app in ToastProvider inside a client component. (if you use it)
- [ ] Do not add padding to content placed directly inside Card, Alert or Modal; they pad themselves.
- [ ] Every prop you used exists in the `.d.ts` files
- [ ] The page works with `data-theme="dark"` on `<html>`
