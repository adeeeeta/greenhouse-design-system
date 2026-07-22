"use client"

import { useState } from "react"
import {
  Button,
  Card,
  Badge,
  Alert,
  Divider,
  Dropdown,
  Tooltip,
  Modal,
  useToast,
} from "@adeeeeta/greenhouse"

export default function Home() {
  const { showToast } = useToast()
  const [modalOpen, setModalOpen] = useState(false)
  const [bay, setBay] = useState("east")

  return (
    <main
      style={{
        maxWidth: "480px",
        margin: "0 auto",
        padding: "var(--space-6) var(--space-4)",
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-6)",
      }}
    >
      <header>
        <div style={{ marginBottom: "var(--space-3)" }}>
          <Badge label="Playground" variant="info" size="sm" />
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display-face)",
            fontSize: "var(--type-display-size)",
            lineHeight: "var(--type-display-line)",
            margin: "0 0 var(--space-2) 0",
          }}
        >
          Greenhouse, standalone.
        </h1>
        <p
          style={{
            fontSize: "var(--type-body-size)",
            lineHeight: "var(--type-body-line)",
            color: "var(--color-text-muted)",
            margin: 0,
          }}
        >
          Every component here renders from the <code>@adeeeeta/greenhouse</code>{" "}
          package, styled entirely by its own tokens.
        </p>
      </header>

      <Divider />

      <Alert variant="success" title="Package linked">
        Components, tokens, and the Floating UI dependency all resolved across
        the package boundary.
      </Alert>

      <Card variant="elevated">
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <strong style={{ fontSize: "var(--type-body-size)" }}>Monstera Deliciosa</strong>
            <Badge label="Established" variant="success" size="sm" />
          </div>
          <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>
            Last watered 3 days ago. Next watering due in 4.
          </p>
          <Dropdown
            label="Move to bay"
            placeholder="Select a bay…"
            value={bay}
            onChange={setBay}
            options={[
              { value: "east", label: "East bay" },
              { value: "north", label: "North bay" },
              { value: "south", label: "South bay" },
            ]}
          />
          <div style={{ display: "flex", gap: "var(--space-2)" }}>
            <Tooltip content="Records today's watering" position="above">
              <Button kind="primary" size="sm">Log watering</Button>
            </Tooltip>
            <Button
              kind="secondary"
              size="sm"
              onClick={() => showToast({ message: "Saved to your greenhouse.", variant: "success" })}
            >
              Save
            </Button>
          </div>
        </div>
      </Card>

      <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
        <Button kind="primary" onClick={() => setModalOpen(true)}>Open modal</Button>
        <Button
          kind="secondary"
          onClick={() => showToast({ message: "Just a toast.", variant: "info" })}
        >
          Fire toast
        </Button>
      </div>

      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Repot this plant?"
        primaryAction={{ label: "Repot", onClick: () => setModalOpen(false) }}
        secondaryAction={{ label: "Cancel", onClick: () => setModalOpen(false) }}
      >
        <p style={{ margin: 0, fontSize: "var(--type-body-size)", lineHeight: "var(--type-body-line)" }}>
          This moves the plant into a larger container and resets its watering schedule.
        </p>
      </Modal>
    </main>
  )
}