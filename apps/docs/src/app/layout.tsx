// src/layout.tsx
import { Plus_Jakarta_Sans, Fira_Code, Fraunces } from 'next/font/google';
import type { Metadata } from "next";
import Link from "next/link";
import { NavLink } from "@/components/NavLink";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { DocShell } from "@/components/DocShell";
import "./globals.css";
import "./docs.css";
import "../styles/typography.css";
import "../styles/spacing.css";
import "../styles/rhythm.css";
import SidebarNav from "@/components/SidebarNav/SidebarNav";
import SidebarSearchInput from "@/components/SidebarSearch/SidebarSearchInput";
import { ToastProvider, TextInput } from "@greenhouse/react";

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
            <SidebarSearchInput />
          </div>
          <SidebarNav />
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