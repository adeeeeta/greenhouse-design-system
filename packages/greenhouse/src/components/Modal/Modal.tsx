"use client"

import { useEffect, useId, useRef, useState } from "react"
import { createPortal } from "react-dom"
import styles from "./Modal.module.css"
import Button from "../Button"
import { X } from "../Icons"

type ModalSize = "sm" | "md" | "lg"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  size?: ModalSize
  primaryAction?: { label: string; onClick: () => void }
  secondaryAction?: { label: string; onClick: () => void }
  closeOnBackdropClick?: boolean
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  primaryAction,
  secondaryAction,
  closeOnBackdropClick = true,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const titleId = useId()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock page scroll when modal is open
  useEffect(() => {
    if (!isOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  // Move focus into the dialog on open; return it to the trigger on close
  useEffect(() => {
    if (!isOpen || !mounted) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    dialogRef.current?.focus()
    return () => {
      previouslyFocused?.focus?.()
    }
  }, [isOpen, mounted])

  // Trap Tab focus inside the dialog
  useEffect(() => {
    if (!isOpen) return
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !dialogRef.current) return
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])'
        )
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    document.addEventListener("keydown", handleTab)
    return () => document.removeEventListener("keydown", handleTab)
  }, [isOpen])

  if (!isOpen || !mounted) return null

  return createPortal(
    <div className={styles.overlay}>
      <div
        className={styles.backdrop}
        onClick={closeOnBackdropClick ? onClose : undefined}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className={`${styles.dialog} ${styles[size]}`}
      >
        <div className={styles.header}>
          <h2 id={titleId} className={styles.title}>{title}</h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        <div className={styles.content}>{children}</div>

        {(primaryAction || secondaryAction) && (
          <div className={styles.footer}>
            {secondaryAction && (
              <Button kind="secondary" onClick={secondaryAction.onClick}>
                {secondaryAction.label}
              </Button>
            )}
            {primaryAction && (
              <Button kind="primary" onClick={primaryAction.onClick}>
                {primaryAction.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}