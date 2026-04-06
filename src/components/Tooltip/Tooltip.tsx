"use client"

import { useState, useRef, useEffect } from "react"
import styles from "./Tooltip.module.css"

export type TooltipPosition = "above" | "below" | "left" | "right"

interface TooltipProps {
  content: string
  position?: TooltipPosition
  children: React.ReactNode
}

export default function Tooltip({
  content,
  position = "above",
  children,
}: TooltipProps) {
  const [visible, setVisible] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null)

  // Hide tooltip if user presses Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setVisible(false)
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div
      className={styles.wrapper}
      ref={triggerRef}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      onTouchStart={() => setVisible((v) => !v)}
    >
      {children}
      {visible && (
        <div
          role="tooltip"
          className={`${styles.tooltip} ${styles[position]}`}
        >
          {content}
        </div>
      )}
    </div>
  )
}