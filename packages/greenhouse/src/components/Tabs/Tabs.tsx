"use client"

import { useState, useRef, useId } from "react"
import styles from "./Tabs.module.css"

type TabsVariant = "underline" | "pill"

export interface Tab {
  id: string
  label: string
  content: React.ReactNode
}

interface TabsProps {
  tabs: Tab[]
  variant?: TabsVariant
  defaultTab?: string
  /** Names the tab list for screen readers, e.g. "Plant details". */
  ariaLabel?: string
}

export default function Tabs({
  tabs,
  variant = "underline",
  defaultTab,
  ariaLabel,
}: TabsProps) {
  // Unique per Tabs instance, so two Tabs on one page never share element ids.
  const uid = useId()
  const tabId = (id: string) => `${uid}-tab-${id}`
  const panelId = (id: string) => `${uid}-panel-${id}`
  const [activeTab, setActiveTab] = useState(defaultTab ?? tabs[0]?.id)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let newIndex: number | null = null

    if (e.key === "ArrowRight") {
      newIndex = (index + 1) % tabs.length
    } else if (e.key === "ArrowLeft") {
      newIndex = (index - 1 + tabs.length) % tabs.length
    } else if (e.key === "Home") {
      newIndex = 0
    } else if (e.key === "End") {
      newIndex = tabs.length - 1
    }

    if (newIndex !== null) {
      e.preventDefault()
      setActiveTab(tabs[newIndex].id)
      tabRefs.current[newIndex]?.focus()
    }
  }

  return (
    <div className={styles.wrapper}>
      {/* Tab list */}
      <div
        role="tablist"
        aria-label={ariaLabel}
        className={`${styles.tablist} ${styles[variant]}`}
      >
        {tabs.map((tab, index) => {
          const isActive = tab.id === activeTab
          return (
            <button
              key={tab.id}
              ref={(el) => { tabRefs.current[index] = el }}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={panelId(tab.id)}
              id={tabId(tab.id)}
              tabIndex={isActive ? 0 : -1}
              className={`${styles.tab} ${styles[variant]} ${isActive ? styles.active : ""}`}
              onClick={() => setActiveTab(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* Tab panels */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={panelId(tab.id)}
          aria-labelledby={tabId(tab.id)}
          hidden={tab.id !== activeTab}
          className={styles.panel}
        >
          {tab.content}
        </div>
      ))}
    </div>
  )
}