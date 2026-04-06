"use client"

import { useEffect } from "react"
import styles from "./Toast.module.css"
import { CheckCircle, AlertCircle, AlertTriangle, InfoCircle, X } from "@/components/Icons"

interface ToastProps {
  id: string
  message: string
  variant: "success" | "error" | "warning" | "info"
  autoDismiss?: boolean
  onDismiss: (id: string) => void
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  warning: AlertTriangle,
  info: InfoCircle,
}

export default function Toast({
  id,
  message,
  variant,
  autoDismiss = true,
  onDismiss,
}: ToastProps) {
  const Icon = icons[variant]

  useEffect(() => {
    if (!autoDismiss) return
    const timer = setTimeout(() => onDismiss(id), 4000)
    return () => clearTimeout(timer)
  }, [id, autoDismiss, onDismiss])

  return (
    <div
      role="status"
      aria-live="polite"
      className={`${styles.toast} ${styles[variant]}`}
      style={{ pointerEvents: "all" }}
    >
      <span className={styles.icon}>
        <Icon size={16} />
      </span>
      <span className={styles.message}>{message}</span>
      <button
        className={styles.close}
        onClick={() => onDismiss(id)}
        aria-label="Dismiss notification"
      >
        <X size={14} />
      </button>
    </div>
  )
}