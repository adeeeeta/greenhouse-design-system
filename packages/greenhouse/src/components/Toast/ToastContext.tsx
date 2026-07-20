"use client"

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react"
import { createPortal } from "react-dom"
import Toast from "./Toast"

export type ToastVariant = "success" | "error" | "warning" | "info"

export interface ToastItem {
  id: string
  message: string
  variant: ToastVariant
  autoDismiss?: boolean
}

interface ToastContextValue {
  showToast: (options: Omit<ToastItem, "id">) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast() {
  const ctx = useContext(ToastContext)
  if (!ctx) throw new Error("useToast must be used inside ToastProvider")
  return ctx
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([])
  const [mounted, setMounted] = useState(false)
  const counterRef = useRef(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  const showToast = useCallback(
    ({ message, variant, autoDismiss = true }: Omit<ToastItem, "id">) => {
      const id = `toast-${counterRef.current++}`
      setToasts((prev) => [...prev, { id, message, variant, autoDismiss }])
    },
    []
  )

  const dismissToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {mounted &&
        createPortal(
          <div
            role="region"
            aria-label="Notifications"
            style={{
              position: "fixed",
              bottom: "var(--space-6)",
              right: "var(--space-6)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-3)",
              zIndex: 300,
              pointerEvents: "none",
            }}
          >
            {toasts.map((toast) => (
              <Toast
                key={toast.id}
                {...toast}
                onDismiss={dismissToast}
              />
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  )
}