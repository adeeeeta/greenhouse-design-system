"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function DocShell({ children }: { children: React.ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  // Close the nav whenever the route changes (user tapped a link)
  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  // Close the nav when the screen resizes to desktop width
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1025px)");
    const handleChange = () => {
      if (mq.matches) setMobileNavOpen(false);
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
}, [mobileNavOpen]);

// Reset sidebar scroll position when opened
useEffect(() => {
  if (mobileNavOpen) {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) sidebar.scrollTop = 0;
  }
}, [mobileNavOpen]);

// Close sidebar when any nav link or close button is clicked
  const handleSidebarClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("[data-close-nav]")) {
      setMobileNavOpen(false);
    }
  }, []);

  return (
    <div
      className="app"
      data-mobile-nav={mobileNavOpen ? "open" : "closed"}
      onClick={mobileNavOpen ? handleSidebarClick : undefined}
    >
      <header className="mobileHeader">
        <button
          className="hamburger"
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          aria-expanded={mobileNavOpen}
          aria-label={mobileNavOpen ? "Close navigation" : "Open navigation"}
        >
          <span className="hamburgerLine" />
          <span className="hamburgerLine" />
          <span className="hamburgerLine" />
        </button>
        <span className="mobileTitle">Greenhouse Design System</span>
      </header>

      {children}
    </div>
  );
}