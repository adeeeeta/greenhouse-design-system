"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { SidebarSearchProvider } from "@/components/SidebarSearch/SidebarSearchContext";

export default function DocShell({ children }: { children: React.ReactNode }) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1025px)");
    const handleChange = () => {
      if (mq.matches) setMobileNavOpen(false);
    };
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

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

  useEffect(() => {
    if (mobileNavOpen) {
      const sidebar = document.querySelector(".sidebar");
      if (sidebar) sidebar.scrollTop = 0;
    }
  }, [mobileNavOpen]);

  const handleSidebarClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("[data-close-nav]")) {
      setMobileNavOpen(false);
    }
  }, []);

  return (
    <SidebarSearchProvider>
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
    </SidebarSearchProvider>
  );
}