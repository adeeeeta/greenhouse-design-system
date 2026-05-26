"use client"

import { useState } from "react"
import Checkbox from "@/components/Checkbox"
import ComponentDemo from "../_demo/ComponentDemo"
import { ToggleControl, TextControl } from "../_demo/DemoControls"
import Divider from "@/components/Divider"

function generateCode(props: {
  label: string
  hint: string
  error: string
  disabled: boolean
  checked: boolean
}) {
  const parts: string[] = []

  parts.push(`label="${props.label}"`)
  if (props.checked) parts.push("checked")
  if (props.hint) parts.push(`hint="${props.hint}"`)
  if (props.error) parts.push(`error="${props.error}"`)
  if (props.disabled) parts.push("disabled")
  parts.push("onChange={(e) => {}}")

  return `<Checkbox ${parts.join(" ")} />`
}

export default function CheckboxDemo() {
  const [label, setLabel] = useState("Enable greenhouse mode")
  const [hint, setHint] = useState("Applies chlorophyll accents across interactive elements.")
  const [error, setError] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [checked, setChecked] = useState(false)

  const code = generateCode({ label, hint, error, disabled, checked })

  return (
    <>
      <p>
        Explore the Checkbox component by adjusting its properties below. Changes
        are reflected in the live preview and code snippet in real time.
      </p>
      <ComponentDemo
        preview={
          <Checkbox
            label={label}
            hint={hint || undefined}
            error={error || undefined}
            disabled={disabled}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        }
        code={code}
        controls={
          <>
            <ToggleControl
              label="Checked"
              checked={checked}
              onChange={setChecked}
            />
            <ToggleControl
              label="Disabled"
              checked={disabled}
              onChange={setDisabled}
            />
            <Divider />
            <TextControl
              label="Label"
              value={label}
              onChange={setLabel}
            />
            <TextControl
              label="Hint"
              value={hint}
              onChange={setHint}
            />
            <TextControl
              label="Error"
              value={error}
              onChange={setError}
            />
          </>
        }
      />
    </>
  )
}