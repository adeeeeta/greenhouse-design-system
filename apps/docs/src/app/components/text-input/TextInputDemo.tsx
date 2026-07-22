"use client"

import { useState } from "react"
import ComponentDemo from "../_demo/ComponentDemo"
import { ToggleControl, TextControl } from "../_demo/DemoControls"
import { TextInput, Divider } from "@adeeeeta/greenhouse";

function generateCode(props: {
  label: string
  placeholder: string
  hint: string
  error: string
  disabled: boolean
  required: boolean
}) {
  const parts: string[] = []

  parts.push(`label="${props.label}"`)
  if (props.placeholder) parts.push(`placeholder="${props.placeholder}"`)
  if (props.hint) parts.push(`hint="${props.hint}"`)
  if (props.error) parts.push(`error="${props.error}"`)
  if (props.disabled) parts.push("disabled")
  if (props.required) parts.push("required")

  return `<TextInput ${parts.join(" ")} />`
}

export default function TextInputDemo() {
  const [label, setLabel] = useState("Plant name")
  const [placeholder, setPlaceholder] = useState("e.g. Monstera Deliciosa")
  const [hint, setHint] = useState("")
  const [error, setError] = useState("")
  const [disabled, setDisabled] = useState(false)
  const [required, setRequired] = useState(false)

  const code = generateCode({ label, placeholder, hint, error, disabled, required })

  return (
    <>
      <p>
        Explore the Text Input component by adjusting its properties below. Changes
        are reflected in the live preview and code snippet in real time.
      </p>
      <ComponentDemo
        preview={
          <TextInput
            label={label}
            placeholder={placeholder || undefined}
            hint={hint || undefined}
            error={error || undefined}
            disabled={disabled}
            required={required}
          />
        }
        code={code}
        controls={
          <>
            <ToggleControl
              label="Disabled"
              checked={disabled}
              onChange={setDisabled}
            />
            <ToggleControl
              label="Required"
              checked={required}
              onChange={setRequired}
            />
            <Divider />
            <TextControl
              label="Label"
              value={label}
              onChange={setLabel}
            />
            <TextControl
              label="Placeholder"
              value={placeholder}
              onChange={setPlaceholder}
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