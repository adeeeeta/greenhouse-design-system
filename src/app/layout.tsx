// src/layout.tsx
import { Plus_Jakarta_Sans, Fira_Code, Fraunces } from 'next/font/google';
import type { Metadata } from "next";
import Link from "next/link";
import { NavLink } from "@/components/NavLink";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { ToastProvider } from "@/components/Toast";
import { DocShell } from "@/components/DocShell";
import "./globals.css";
import "./docs.css";
import "../styles/typography.css";
import "../styles/spacing.css";
import "../styles/rhythm.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans-face',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono-face',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display-face',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Greenhouse Design System",
  description:
    "Like plants in a greenhouse, this design system will slowly grow and mature over time.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${firaCode.variable} ${fraunces.variable}`}>
      <body>
        <ToastProvider>
          <a className="skipLink" href="#main-content">
            Skip to content
          </a>
          <DocShell>
          <aside className="sidebar">
          <div className="sidebarHeader">
            <div className="sidebarHeaderRow">
              <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                <div className="brand">Greenhouse Design System</div>
              </Link>
              <button
                className="sidebarClose"
                data-close-nav
                aria-label="Close navigation"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </svg>
              </button>
            </div>
            <div className="sidebarFooter">
              <ThemeToggle />
            </div>
          </div>
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
                </nav>
              </aside>
              <main id="main-content" className="content" tabIndex={-1}>
                {children}
              </main>
            </DocShell>
        </ToastProvider>
      </body>
    </html>
  );
}