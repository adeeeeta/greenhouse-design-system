"use client"

import { useState } from "react"
import Alert from "@/components/Alert"
import Divider from "@/components/Divider"

export default function AlertDocsPage() {
  const [dismissed, setDismissed] = useState(false)

  return (
    <>
      <h1>Alert</h1>
      <p>
        Alerts communicate contextual feedback messages to the user. They
        support an optional title, body text, and a dismiss action.
      </p>

      <Divider />

      <h2>Variants</h2>
      <p>
        Four variants are available to match the nature of the message:
      </p>
    
       <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
  <div>
    <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Success</p>
    <Alert variant="success">Your greenhouse data has been synced successfully.</Alert>
  </div>
  <div>
    <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Warning</p>
    <Alert variant="warning">Humidity levels in the tropical zone are above the recommended range.</Alert>
  </div>
  <div>
    <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Error</p>
    <Alert variant="error">Failed to connect to the watering system. Please check your network.</Alert>
  </div>
  <div>
    <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Info</p>
    <Alert variant="info">Your next scheduled pruning is in 3 days.</Alert>
  </div>
</div>

      <Divider />

      <h2>With title</h2>
      <p>
        Pass a <code>title</code> to add a heading above the body text. Use
        this when the alert needs extra emphasis or context.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        <Alert variant="success" title="Watering complete">
          All plants in the tropical zone have been watered successfully.
        </Alert>
        <Alert variant="error" title="Sensor offline">
          The humidity sensor in bay 3 is not responding. Check the connection.
        </Alert>
      </div>

      <Divider />

      <h2>With dismiss</h2>
      <p>
        Pass <code>onDismiss</code> to show a close button. Use this for
        non-critical alerts the user can choose to hide.
      </p>
      {dismissed ? (
        <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center" }}>
          <span style={{ color: "var(--color-text-muted)", fontSize: "var(--type-bodySm-size)" }}>
            Alert dismissed.
          </span>
          <button
            onClick={() => setDismissed(false)}
            style={{
              background: "none",
              border: "none",
              color: "var(--color-primary)",
              cursor: "pointer",
              fontSize: "var(--type-bodySm-size)",
              padding: 0,
            }}
          >
            Reset
          </button>
        </div>
      ) : (
        <Alert
          variant="info"
          title="New care guide available"
          onDismiss={() => setDismissed(true)}
        >
          A new care guide for tropical plants has been added to your
          greenhouse library.
        </Alert>
      )}

      <Divider />

      <h2>Usage</h2>
      <p>
        Pass a <code>variant</code> to control the color and icon. Use{" "}
        <code>title</code> for a heading above the body text. Add{" "}
        <code>onDismiss</code> to show a close button — the parent component
        is responsible for removing the alert when dismissed.
      </p>
    </>
  )
}