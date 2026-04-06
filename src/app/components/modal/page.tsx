"use client"

import { useState } from "react"
import Modal from "@/components/Modal"
import Button from "@/components/Button"
import TextInput from "@/components/TextInput"
import Divider from "@/components/Divider"
import Badge from "@/components/Badge"

export default function ModalPage() {
  const [basicOpen, setBasicOpen] = useState(false)
  const [smallOpen, setSmallOpen] = useState(false)
  const [largeOpen, setLargeOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)

  return (
    <>
      <h1>Modal</h1>
      <p>
        Modals focus the user's attention on a specific task or piece of
        information. They block interaction with the rest of the page until
        dismissed.
      </p>

      <Divider />

      <h2>Sizes</h2>
      <p>
        Three sizes are available — <code>sm</code>, <code>md</code>, and{" "}
        <code>lg</code>. The default is <code>md</code>.
      </p>
      <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
        <Button kind="secondary" onClick={() => setSmallOpen(true)}>Open small</Button>
        <Button kind="secondary" onClick={() => setBasicOpen(true)}>Open medium</Button>
        <Button kind="secondary" onClick={() => setLargeOpen(true)}>Open large</Button>
      </div>

      <Modal
        isOpen={smallOpen}
        onClose={() => setSmallOpen(false)}
        title="Small modal"
        size="sm"
        primaryAction={{ label: "Confirm", onClick: () => setSmallOpen(false) }}
        secondaryAction={{ label: "Cancel", onClick: () => setSmallOpen(false) }}
      >
        <p>This is a small modal. Good for simple confirmations or short messages.</p>
      </Modal>

      <Modal
        isOpen={basicOpen}
        onClose={() => setBasicOpen(false)}
        title="Medium modal"
        size="md"
        primaryAction={{ label: "Save", onClick: () => setBasicOpen(false) }}
        secondaryAction={{ label: "Cancel", onClick: () => setBasicOpen(false) }}
      >
        <p>This is a medium modal. The default size — works for most use cases.</p>
      </Modal>

      <Modal
        isOpen={largeOpen}
        onClose={() => setLargeOpen(false)}
        title="Large modal"
        size="lg"
        primaryAction={{ label: "Save", onClick: () => setLargeOpen(false) }}
        secondaryAction={{ label: "Cancel", onClick: () => setLargeOpen(false) }}
      >
        <p>This is a large modal. Useful for complex forms or detailed content.</p>
      </Modal>

      <Divider />

      <h2>Examples</h2>
      <p>
        Modals work well for forms and destructive confirmations where the user
        needs to make a deliberate decision before continuing.
      </p>
      <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
        <Button kind="secondary" onClick={() => setFormOpen(true)}>Form modal</Button>
        <Button kind="secondary" onClick={() => setConfirmOpen(true)}>Confirmation modal</Button>
      </div>

      <Modal
        isOpen={formOpen}
        onClose={() => setFormOpen(false)}
        title="Add a new plant"
        size="md"
        primaryAction={{ label: "Add plant", onClick: () => setFormOpen(false) }}
        secondaryAction={{ label: "Cancel", onClick: () => setFormOpen(false) }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <p style={{ color: "var(--color-text-muted)", fontSize: "var(--type-bodySm-size)", margin: 0 }}>
            Add a new plant to your greenhouse. Once added, it will appear in
            your collection and be available for care scheduling.
          </p>
          <Divider />
          <TextInput label="Plant name" placeholder="e.g. Groot" required />
          <TextInput
            label="Species"
            placeholder="e.g. Flora Colossi"
            hint="Enter the scientific name if known."
          />
          <div>
            <p style={{
              fontSize: "var(--type-label-size)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--color-text)",
              margin: "0 0 var(--space-2) 0"
            }}>
              Growth stage
            </p>
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
              <Badge label="Seedling" variant="info" />
              <Badge label="Sprout" variant="success" />
              <Badge label="Mature" variant="neutral" />
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        title="Remove plant"
        size="sm"
        primaryAction={{ label: "Yes, remove it", onClick: () => setConfirmOpen(false) }}
        secondaryAction={{ label: "Keep plant", onClick: () => setConfirmOpen(false) }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
          <p style={{ margin: 0 }}>
            Are you sure you want to remove <strong>Monstera Deliciosa</strong> from
            your greenhouse? This action cannot be undone.
          </p>
          <div style={{
            background: "var(--color-surface-muted)",
            border: "1px solid var(--color-border)",
            borderRadius: "var(--radius-md)",
            padding: "var(--space-4)"
          }}>
            <p style={{ fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)", margin: 0 }}>
              The following will be permanently removed:
            </p>
            <ul style={{
              fontSize: "var(--type-bodySm-size)",
              color: "var(--color-text-muted)",
              margin: "var(--space-2) 0 0 0",
              paddingLeft: "var(--space-4)"
            }}>
              <li>All care history and watering logs</li>
              <li>Growth tracking and photos</li>
              <li>Custom care schedule</li>
            </ul>
          </div>
        </div>
      </Modal>

      <Divider />

      <h2>Usage</h2>
      <p>
        Control the modal with <code>isOpen</code> and <code>onClose</code>.
        Pass <code>primaryAction</code> and <code>secondaryAction</code> to
        render footer buttons. Size defaults to <code>md</code> if not specified.
      </p>
    </>
  )
}