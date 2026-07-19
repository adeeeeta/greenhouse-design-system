"use client";

import { NavLink } from "@/components/NavLink";
import { useSidebarSearch } from "@/components/SidebarSearch/SidebarSearchContext";
import { meta as colorMeta } from "@/app/foundations/color/meta";
import { meta as iconsMeta } from "@/app/foundations/icons/meta";
import { meta as typographyMeta } from "@/app/foundations/typography/meta";
import { meta as spacingMeta } from "@/app/foundations/spacing/meta";
import { meta as alertMeta } from "@/app/components/alert/meta";
import { meta as avatarMeta } from "@/app/components/avatar/meta";
import { meta as badgeMeta } from "@/app/components/badge/meta";
import { meta as buttonMeta } from "@/app/components/button/meta";
import { meta as cardMeta } from "@/app/components/card/meta";
import { meta as checkboxMeta } from "@/app/components/checkbox/meta";
import { meta as dividerMeta } from "@/app/components/divider/meta";
import { meta as dropdownMeta } from "@/app/components/dropdown/meta";
import { meta as modalMeta } from "@/app/components/modal/meta";
import { meta as radioMeta } from "@/app/components/radio/meta";
import { meta as spinnerMeta } from "@/app/components/spinner/meta";
import { meta as tabsMeta } from "@/app/components/tabs/meta";
import { meta as tagMeta } from "@/app/components/tag/meta";
import { meta as textInputMeta } from "@/app/components/text-input/meta";
import { meta as toastMeta } from "@/app/components/toast/meta";
import { meta as toggleMeta } from "@/app/components/toggle/meta";
import { meta as tooltipMeta } from "@/app/components/tooltip/meta";
import styles from "./SidebarNav.module.css";
import Badge from "@/components/Badge/Badge";

const pages = [
  colorMeta, iconsMeta, typographyMeta, spacingMeta,
  alertMeta, avatarMeta, badgeMeta, buttonMeta,
  cardMeta, checkboxMeta, dividerMeta, dropdownMeta,
  modalMeta, radioMeta, spinnerMeta, tabsMeta,
  tagMeta, textInputMeta, toastMeta, toggleMeta, tooltipMeta,
];

type Result =
  | { kind: "page"; title: string; section: string; href: string }
  | { kind: "subsection"; title: string; section: string; pageTitle: string; href: string };

export default function SidebarNav() {
  const { query, setQuery } = useSidebarSearch();
  const trimmed = query.trim().toLowerCase();

  const results: Result[] = trimmed
    ? pages.flatMap((page) => {
        const matches: Result[] = [];
        if (page.title.toLowerCase().includes(trimmed)) {
          matches.push({
            kind: "page",
            title: page.title,
            section: page.section,
            href: page.href,
          });
        }
        page.subsections.forEach((sub) => {
          if (sub.label.toLowerCase().includes(trimmed)) {
            matches.push({
              kind: "subsection",
              title: sub.label,
              section: page.section,
              pageTitle: page.title,
              href: `${page.href}#${sub.anchor}`,
            });
          }
        });
        return matches;
      })
    : [];

  return (
    <>
      {trimmed ? (
        <div className={styles.results}>
          {results.length === 0 ? (
            <p className={styles.empty}>No results</p>
          ) : (
            results.map((result) => (
              <a
                key={result.href}
                href={result.href}
                className={styles.result}
                onClick={() => setQuery("")}
              >
                <span className={styles.resultLabel}>
                  {result.kind === "subsection"
                    ? `${result.pageTitle} · ${result.title}`
                    : result.title}
                </span>
                <span className={styles.resultSection}>{result.section}</span>
              </a>
            ))
          )}
        </div>
      ) : (
        <nav className="nav" aria-label="Primary">
          <div className="navGroup">
            <div className="navLabel">Foundations</div>
            <NavLink href="/foundations/color">Color</NavLink>
            <NavLink href="/foundations/typography">Typography</NavLink>
            <NavLink href="/foundations/spacing">Spacing</NavLink>
            <NavLink href="/foundations/icons">Icons</NavLink>
          </div>
          <div className="navGroup">
            <div className="navLabel">Components</div>
            <NavLink href="/components/alert">Alert</NavLink>
            <NavLink href="/components/avatar">Avatar</NavLink>
            <NavLink href="/components/badge">Badge</NavLink>
            <NavLink href="/components/button">Button</NavLink>
            <NavLink href="/components/card">Card</NavLink>
            <NavLink href="/components/checkbox">Checkbox</NavLink>
            <NavLink href="/components/divider">Divider</NavLink>
            <NavLink href="/components/dropdown">Dropdown</NavLink>
            <NavLink href="/components/modal">Modal</NavLink>
            <NavLink href="/components/radio">Radio</NavLink>
            <NavLink href="/components/spinner">Spinner</NavLink>
            <NavLink href="/components/tabs">Tabs</NavLink>
            <NavLink href="/components/tag">Tag</NavLink>
            <NavLink href="/components/text-input">Text Input</NavLink>
            <NavLink href="/components/toast">Toast</NavLink>
            <NavLink href="/components/toggle">Toggle</NavLink>
            <NavLink href="/components/tooltip">Tooltip</NavLink>
          </div>
          <hr className="navDivider" />
          <NavLink href="/field-notes">
            <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            Field Notes
            <Badge label="v1.6.3" variant="info" size="sm" />
            </span>
          </NavLink>
        </nav>
      )}
    </>
  );
}