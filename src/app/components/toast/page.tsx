"use client"

import { useToast } from "@/components/Toast"
import Button from "@/components/Button"
import Divider from "@/components/Divider"

export default function ToastPage() {
  const { showToast } = useToast()

  return (
    <>
      <h1>Toast</h1>
      <p>
        Toasts are brief, non-disruptive notifications that appear at the
        bottom right of the screen. They communicate feedback on an action
        without interrupting the user's workflow.
      </p>

      <Divider />

      <h2>Variants</h2>
      <p>
        Four variants are available to match the nature of the notification —
        success, error, warning, and info.
      </p>
      <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
        <Button
          kind="secondary"
          onClick={() => showToast({ message: "Plant saved successfully.", variant: "success" })}
        >
          Success
        </Button>
        <Button
          kind="secondary"
          onClick={() => showToast({ message: "Something went wrong. Please try again.", variant: "error" })}
        >
          Error
        </Button>
        <Button
          kind="secondary"
          onClick={() => showToast({ message: "Review your care schedule before continuing.", variant: "warning" })}
        >
          Warning
        </Button>
        <Button
          kind="secondary"
          onClick={() => showToast({ message: "Your greenhouse syncs every 24 hours.", variant: "info" })}
        >
          Info
        </Button>
      </div>

      <Divider />

      <h2>Auto dismiss</h2>
      <p>
        Toasts dismiss automatically after 4 seconds by default. Pass{" "}
        <code>autoDismiss: false</code> to keep them on screen until manually
        dismissed.
      </p>
      <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
        <Button
          kind="secondary"
          onClick={() => showToast({ message: "This will disappear in 4 seconds.", variant: "info", autoDismiss: true })}
        >
          Auto dismiss
        </Button>
        <Button
          kind="secondary"
          onClick={() => showToast({ message: "This will stay until you dismiss it.", variant: "warning", autoDismiss: false })}
        >
          Manual dismiss
        </Button>
      </div>

      <Divider />

      <h2>Greenhouse examples</h2>
      <p>
        Toasts work well for confirming actions like logging a watering, or
        surfacing time-sensitive alerts like frost warnings.
      </p>
      <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
        <Button
          kind="secondary"
          onClick={() => showToast({ message: "Monstera Deliciosa watering logged.", variant: "success" })}
        >
          Log watering
        </Button>
        <Button
          kind="secondary"
          onClick={() => showToast({ message: "Failed to sync plant data. Check your connection.", variant: "error", autoDismiss: false })}
        >
          Sync failed
        </Button>
        <Button
          kind="secondary"
          onClick={() => showToast({ message: "Frost alert: temperature dropping below 5°C tonight.", variant: "warning", autoDismiss: false })}
        >
          Frost alert
        </Button>
        <Button
          kind="secondary"
          onClick={() => showToast({ message: "Your next scheduled pruning is in 3 days.", variant: "info" })}
        >
          Pruning reminder
        </Button>
      </div>

      <Divider />

      <h2>Usage</h2>
      <p>
        Import <code>useToast</code> and call <code>showToast</code> with a{" "}
        <code>message</code> and <code>variant</code>. The{" "}
        <code>ToastProvider</code> is already wired into the root layout so
        toasts work on every page automatically.
      </p>
    </>
  )
}