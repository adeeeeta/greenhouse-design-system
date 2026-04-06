// src/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { ToastProvider } from "@/components/Toast";
import "./globals.css";
import "./docs.css";
import "../styles/typography.css";
import "../styles/spacing.css";
import "../styles/rhythm.css";

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
    <html lang="en">
      <body className="gh-text">
        <ToastProvider>
          <a className="skipLink" href="#main-content">
            Skip to content
          </a>
          <div className="app">
            <aside className="sidebar">
              <div className="brand">Greenhouse Design System</div>
              <div className="sidebarFooter">
                <ThemeToggle />
              </div>
              <nav className="nav" aria-label="Primary">
                <div className="navGroup">
                  <div className="navLabel">Foundations</div>
                  <Link className="navLink" href="/foundations/color">Color</Link>
                  <Link className="navLink" href="/foundations/typography">Typography</Link>
                  <Link className="navLink" href="/foundations/spacing">Spacing</Link>
                  <Link className="navLink" href="/foundations/icons">Icons</Link>
                </div>
                <div className="navGroup">
                  <div className="navLabel">Components</div>
                    <Link className="navLink" href="/components/alert">Alert</Link>
                    <Link className="navLink" href="/components/avatar">Avatar</Link>
                    <Link className="navLink" href="/components/badge">Badge</Link>
                    <Link className="navLink" href="/components/button">Button</Link>
                    <Link className="navLink" href="/components/card">Card</Link>
                    <Link className="navLink" href="/components/checkbox">Checkbox</Link>
                    <Link className="navLink" href="/components/divider">Divider</Link>
                    <Link className="navLink" href="/components/dropdown">Dropdown</Link>
                    <Link className="navLink" href="/components/modal">Modal</Link>
                    <Link className="navLink" href="/components/radio">Radio</Link>
                    <Link className="navLink" href="/components/spinner">Spinner</Link>
                    <Link className="navLink" href="/components/tabs">Tabs</Link>
                    <Link className="navLink" href="/components/tag">Tag</Link>
                    <Link className="navLink" href="/components/text-input">Text Input</Link>
                    <Link className="navLink" href="/components/toast">Toast</Link>
                    <Link className="navLink" href="/components/toggle">Toggle</Link>
                    <Link className="navLink" href="/components/tooltip">Tooltip</Link>
                  </div>
                </nav>
              </aside>
              <main id="main-content" className="content" tabIndex={-1}>
                {children}
              </main>
            </div>
          </ToastProvider>
        </body>
      </html>
    );
  }