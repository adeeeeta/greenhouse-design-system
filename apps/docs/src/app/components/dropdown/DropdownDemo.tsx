"use client"

import { useState } from "react"
import ComponentDemo from "../_demo/ComponentDemo"
import { ToggleControl, TextControl } from "../_demo/DemoControls"
import { Dropdown, Divider } from "@adeeeeta/greenhouse";

const demoOptions = [
  { value: "tropical", label: "Tropical zone" },
  { value: "succulent", label: "Succulent zone" },
  { value: "herb", label: "Herb garden" },
  { value: "fern", label: "Fern corner" },
]

function generateCode(props: {
  label: string
  placeholder: string
  hint: string
  error: string
  disabled: boolean
}) {
  const parts: string[] = []

  parts.push(`label="${props.label}"`)
  if (props.placeholder) parts.push(`placeholder="${props.placeholder}"`)
  parts.push("options={options}")
  parts.push("value={value}")
  parts.push("onChange={setValue}")
  if (props.hint) parts.push(`hint="${props.hint}"`)
  if (props.error) parts.push(`error="${props.error}"`)
  if (props.disabled) parts.push("disabled")

  return `<Dropdown\n  ${parts.join("\n  ")}\n/>`
}

export default function DropdownDemo() {
  const [value, setValue] = useState("")
  const [label, setLabel] = useState("Growing zone")
  const [placeholder, setPlaceholder] = useState("Select a zone")
  const [hint, setHint] = useState("")
  const [error, setError] = useState("")
  const [disabled, setDisabled] = useState(false)

  const code = generateCode({ label, placeholder, hint, error, disabled })

  return (
    <>
      <p>
        Explore the Dropdown component by adjusting its properties below. Changes
        are reflected in the live preview and code snippet in real time.
      </p>
      <ComponentDemo
        preview={
          <Dropdown
            label={label}
            placeholder={placeholder || undefined}
            options={demoOptions}
            value={value}
            onChange={setValue}
            hint={hint || undefined}
            error={error || undefined}
            disabled={disabled}
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