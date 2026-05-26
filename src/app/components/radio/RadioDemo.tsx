"use client"

import { useState } from "react"
import Radio from "@/components/Radio"
import ComponentDemo from "../_demo/ComponentDemo"
import { ToggleControl, TextControl } from "../_demo/DemoControls"
import Divider from "@/components/Divider"

function generateCode(props: {
  label: string
  hint: string
  disabled: boolean
}) {
  const parts: string[] = []

  parts.push(`label="${props.label}"`)
  parts.push(`name="zone"`)
  parts.push(`value="tropical"`)
  if (props.hint) parts.push(`hint="${props.hint}"`)
  if (props.disabled) parts.push("disabled")

  return `<Radio ${parts.join(" ")} />`
}

export default function RadioDemo() {
  const [label, setLabel] = useState("Tropical zone")
  const [hint, setHint] = useState("")
  const [disabled, setDisabled] = useState(false)

  const code = generateCode({ label, hint, disabled })

  return (
    <>
      <p>
        Explore the Radio component by adjusting its properties below. Changes
        are reflected in the live preview and code snippet in real time.
      </p>
      <ComponentDemo
        preview={
          <Radio
            label={label}
            name="demo-zone"
            value="demo"
            hint={hint || undefined}
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
              label="Hint"
              value={hint}
              onChange={setHint}
            />
          </>
        }
      />
    </>
  )
}