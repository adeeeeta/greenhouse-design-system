import styles from "./field-notes.module.css";
import { Divider, Card, Badge } from "@adeeeeta/greenhouse";

export const metadata = {
  title: "Field Notes — Greenhouse Design System",
};

const entries = [
  {
    version: "v1.7.0",
    tag: "Minor",
    tagType: "minor",
    date: "July 25, 2026",
    added: [
      "Resources page — install and setup instructions plus links to the npm package, GitHub repo, and Figma file",
      "Reusable CodeBlock component with copy-to-clipboard and inverse-theme code display",
      "Card now supports target and rel props for external links, opening in a new tab with safe rel defaults",
    ],
    changed: [],
    fixed: [],
  },
  {
    version: "v1.6.3",
    tag: "Patch",
    tagType: "patch",
    date: "July 19, 2026",
    added: [],
    changed: [],
    fixed: [
      "Identified and fixed critical accessibility issues with the Modal and Tooltip components.",
    ],
  },
  {
    version: "v1.6.2",
    tag: "Patch",
    tagType: "patch",
    date: "July 5, 2026",
    added: [],
    changed: [],
    fixed: [
      "Fixed mobile resizing issues for cards on the Field Notes page",
    ],
  },
  {
    version: "v1.6.1",
    tag: "Patch",
    tagType: "patch",
    date: "June 19, 2026",
    added: [],
    changed: [],
    fixed: [
      "Fixed mobile resizing issues for cards on the Homepage",
    ],
  },
  {
    version: "v1.6.0",
    tag: "Minor",
    tagType: "minor",
    date: "May 30, 2026",
    added: [
      "Field Notes page - a versioned changelog of all work shipped to the Greenhouse",
      "Field Notes entry in the sidebar navigation with a current version badge",
    ],
    changed: [],
    fixed: [],
  },
  {
    version: "v1.5.1",
    tag: "Patch",
    tagType: "patch",
    date: "May 27, 2026",
    added: [],
    fixed: ["Bug fixes to demo page"],
    changed: [],
  },
  {
    version: "v1.5.0",
    tag: "Minor",
    tagType: "minor",
    date: "May 27, 2026",
    added: [
      "Sidebar search — client-side type-ahead filtering across Foundations and Components",
      "Subsection-level search results powered by per-page meta.ts files",
      "SidebarSearchContext to share search state between the input and the nav",
    ],
    fixed: [],
    changed: [],
  },
  {
    version: "v1.4.0",
    tag: "Minor",
    tagType: "minor",
    date: "May 26, 2026",
    added: ["Interactive demo playground extended to all 17 component pages"],
    fixed: [],
    changed: [],
  },
  {
    version: "v1.3.0",
    tag: "Minor",
    tagType: "minor",
    date: "April 24, 2026",
    added: [
      "Interactive demo playground introduced on the Button page as a proof of concept",
      "Tabbed Overview + Demo layout with live prop controls and an inverse-theme JSX code block",
      "Demo controls dogfood the system — built using Dropdown, Toggle, and TextInput",
    ],
    fixed: [],
    changed: [],
  },
  {
    version: "v1.2.0",
    tag: "Minor",
    tagType: "minor",
    date: "April 16, 2026",
    added: [
      "Typography system — Plus Jakarta Sans (body and UI), Fraunces (expressive headings), Fira Code (code blocks)",
      "All three typefaces wired up via next/font/google with semantic CSS variables",
      "Typefaces section and pill-variant Tabs font switcher added to the typography documentation page",
    ],
    fixed: [
      "Fira Code now applies to inline code (previously bypassed by a hardcoded system monospace stack)",
    ],
    changed: [],
  },
  {
    version: "v1.1.1",
    tag: "Patch",
    tagType: "patch",
    date: "April 9, 2026",
    added: [
      "Active state highlighting on sidebar navigation links",
      "aria-current support for assistive technologies",
    ],
    fixed: [],
    changed: [],
  },
  {
    version: "v1.1.0",
    tag: "Minor",
    tagType: "minor",
    date: "April 9, 2026",
    added: [
      "Mobile-responsive docsite — full-screen drawer navigation below the 1024px breakpoint",
      "DocShell client component to manage mobile nav state",
      "NavLink component to replace raw Link usage in the sidebar",
    ],
    fixed: [],
    changed: [],
  },
  {
    version: "v1.0.1",
    tag: "Patch",
    tagType: "patch",
    date: "April 7, 2026",
    added: [],
    fixed: [],
    changed: [
      "Checkbox documentation page reformatted to match the divider-based layout used across other component pages",
    ],
  },
  {
    version: "v1.0.0",
    tag: "Initial release",
    tagType: "minor",
    date: "April 7, 2026",
    added: [
      "17 components — Alert, Avatar, Badge, Button (with icon prop and icon-only variant), Card, Checkbox, Divider, Dropdown, Modal, Radio, Spinner, Tabs, Tag, Text Input, Toast, Toggle, Tooltip (Stage 1 positioning)",
      "Three-layer color token architecture — scales, named palette, semantic tokens — with full dark mode support",
      "Spacing system on a 4px grid",
      "64 Phosphor icons hand-selected across 9 categories",
      "Sticky sidebar navigation with dark mode toggle",
      "Landing page and standardized divider-based component documentation pages",
    ],
    fixed: [],
    changed: [],
  },
];

export default function FieldNotes() {
  return (
    <main className={styles.page}>
      <div className={styles.header}>
        <h1>Field Notes</h1>
        <p className={styles.description}>
          A record of what's been planted, pruned, and tended to in the Greenhouse.
        </p>
      </div>

      <Divider />

      <div className={styles.entries}>
        {entries.map((entry) => (
          <Card
            key={entry.version}
            variant="outlined"
            header={
              <div className={styles.entryMeta}>
                <span className={styles.version}>{entry.version}</span>
                <Badge
                  label={entry.tag}
                  variant={
                    entry.tagType === "minor" ? "info" :
                    entry.tagType === "patch" ? "neutral" : "info"
                  }
                  size="sm"
                />
                <span className={styles.date}>{entry.date}</span>
              </div>
            }
          >
            {entry.added.length > 0 && (
              <div className={styles.changeGroup}>
                <p className={`${styles.changeType} ${styles.added}`}>Added</p>
                <ul className={styles.changeList}>
                  {entry.added.map((item, i) => (
                    <li key={i} className={styles.changeItem}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {entry.fixed.length > 0 && (
              <div className={styles.changeGroup}>
                <p className={`${styles.changeType} ${styles.fixed}`}>Fixed</p>
                <ul className={styles.changeList}>
                  {entry.fixed.map((item, i) => (
                    <li key={i} className={styles.changeItem}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {entry.changed.length > 0 && (
              <div className={styles.changeGroup}>
                <p className={`${styles.changeType} ${styles.changed}`}>Changed</p>
                <ul className={styles.changeList}>
                  {entry.changed.map((item, i) => (
                    <li key={i} className={styles.changeItem}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        ))}
      </div>
    </main>
  );
}