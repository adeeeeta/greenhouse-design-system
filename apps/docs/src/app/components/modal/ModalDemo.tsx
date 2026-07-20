"use client"

import { useState } from "react"
import ComponentDemo from "../_demo/ComponentDemo"
import { SelectControl, ToggleControl, TextControl } from "../_demo/DemoControls"
import { Modal, Button, Divider } from "@greenhouse/react";

function generateCode(props: {
  size: string
  title: string
  showPrimary: boolean
  showSecondary: boolean
}) {
  const parts: string[] = []

  parts.push("isOpen={isOpen}")
  parts.push("onClose={() => setIsOpen(false)}")
  parts.push(`title="${props.title}"`)
  if (props.size !== "md") parts.push(`size="${props.size}"`)
  if (props.showPrimary) parts.push(`primaryAction={{ label: "Confirm", onClick: () => {} }}`)
  if (props.showSecondary) parts.push(`secondaryAction={{ label: "Cancel", onClick: () => {} }}`)

  return `<Modal\n  ${parts.join("\n  ")}\n>\n  Modal content goes here.\n</Modal>`
}

export default function ModalDemo() {
  const [size, setSize] = useState("md")
  const [title, setTitle] = useState("Add a new plant")
  const [showPrimary, setShowPrimary] = useState(true)
  const [showSecondary, setShowSecondary] = useState(true)
  const [isOpen, setIsOpen] = useState(false)

  const code = generateCode({ size, title, showPrimary, showSecondary })

  return (
    <>
      <p>
        Explore the Modal component by adjusting its properties below. Use the
        button in the preview to open the modal with your current settings.
      </p>
      <ComponentDemo
        preview={
          <>
            <Button kind="primary" onClick={() => setIsOpen(true)}>
              Open modal
            </Button>
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              title={title}
              size={size as "sm" | "md" | "lg"}
              primaryAction={showPrimary ? { label: "Confirm", onClick: () => setIsOpen(false) } : undefined}
              secondaryAction={showSecondary ? { label: "Cancel", onClick: () => setIsOpen(false) } : undefined}
            >
              <p>This is a preview of the modal with your current settings. Adjust the properties on the right to see how they affect the modal.</p>
            </Modal>
          </>
        }
        code={code}
        controls={
          <>
            <SelectControl
              label="Size"
              value={size}
              options={[
                { value: "sm", label: "Small" },
                { value: "md", label: "Medium" },
                { value: "lg", label: "Large" },
              ]}
              onChange={setSize}
            />
            <Divider />
            <ToggleControl
              label="Primary action"
              checked={showPrimary}
              onChange={setShowPrimary}
            />
            <ToggleControl
              label="Secondary action"
              checked={showSecondary}
              onChange={setShowSecondary}
            />
            <Divider />
            <TextControl
              label="Title"
              value={title}
              onChange={setTitle}
            />
          </>
        }
      />
    </>
  )
}