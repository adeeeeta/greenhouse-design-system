"use client"

import { useState } from "react"
import ComponentDemo from "../_demo/ComponentDemo"
import { SelectControl, ToggleControl, TextControl } from "../_demo/DemoControls"
import { useToast, Button, Divider } from "@adeeeeta/greenhouse";

function generateCode(props: {
  variant: string
  message: string
  autoDismiss: boolean
}) {
  const parts: string[] = []

  parts.push(`message: "${props.message}"`)
  parts.push(`variant: "${props.variant}"`)
  if (!props.autoDismiss) parts.push("autoDismiss: false")

  return `showToast({\n  ${parts.join(",\n  ")}\n})`
}

export default function ToastDemo() {
  const { showToast } = useToast()
  const [variant, setVariant] = useState("success")
  const [message, setMessage] = useState("Plant saved successfully.")
  const [autoDismiss, setAutoDismiss] = useState(true)

  const code = generateCode({ variant, message, autoDismiss })

  return (
    <>
      <p>
        Explore the Toast component by adjusting its properties below. Press
        the button in the preview to fire a toast with your current settings.
      </p>
      <ComponentDemo
        preview={
          <Button
            kind="primary"
            onClick={() => showToast({
              message,
              variant: variant as "success" | "error" | "warning" | "info",
              autoDismiss,
            })}
          >
            Show toast
          </Button>
        }
        code={code}
        controls={
          <>
            <SelectControl
              label="Variant"
              value={variant}
              options={[
                { value: "success", label: "Success" },
                { value: "error", label: "Error" },
                { value: "warning", label: "Warning" },
                { value: "info", label: "Info" },
              ]}
              onChange={setVariant}
            />
            <Divider />
            <ToggleControl
              label="Auto dismiss"
              checked={autoDismiss}
              onChange={setAutoDismiss}
            />
            <Divider />
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