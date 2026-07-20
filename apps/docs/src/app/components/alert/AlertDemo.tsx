"use client"

import { useState } from "react"
import ComponentDemo from "../_demo/ComponentDemo"
import { SelectControl, ToggleControl, TextControl } from "../_demo/DemoControls"
import { Alert, Divider } from "@greenhouse/react";

function generateCode(props: {
  variant: string
  title: string
  message: string
  dismissible: boolean
}) {
  const parts: string[] = []

  parts.push(`variant="${props.variant}"`)
  if (props.title) parts.push(`title="${props.title}"`)
  if (props.dismissible) parts.push(`onDismiss={() => {}}`)

  const propsString = parts.join(" ")

  return `<Alert ${propsString}>\n  ${props.message}\n</Alert>`
}

export default function AlertDemo() {
  const [variant, setVariant] = useState("success")
  const [title, setTitle] = useState("Watering complete")
  const [message, setMessage] = useState("All plants in the tropical zone have been watered successfully.")
  const [dismissible, setDismissible] = useState(false)

  const code = generateCode({ variant, title, message, dismissible })

  return (
    <>
      <p>
        Explore the Alert component by adjusting its properties below. Changes
        are reflected in the live preview and code snippet in real time.
      </p>
      <ComponentDemo
        preview={
          <Alert
            variant={variant as "success" | "warning" | "error" | "info"}
            title={title || undefined}
            onDismiss={dismissible ? () => {} : undefined}
          >
            {message}
          </Alert>
        }
        code={code}
        controls={
          <>
            <SelectControl
              label="Variant"
              value={variant}
              options={[
                { value: "success", label: "Success" },
                { value: "warning", label: "Warning" },
                { value: "error", label: "Error" },
                { value: "info", label: "Info" },
              ]}
              onChange={setVariant}
            />
            <Divider />
            <ToggleControl
              label="Dismissible"
              checked={dismissible}
              onChange={setDismissible}
            />
            <Divider />
            <TextControl
              label="Title"
              value={title}
              onChange={setTitle}
            />
            <TextControl
              label="Message"
              value={message}
              onChange={setMessage}
            />
          </>
        }
      />
    </>
  )
}