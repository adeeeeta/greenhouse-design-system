"use client"

import { useState } from "react"
import ComponentDemo from "../_demo/ComponentDemo"
import { ToggleControl } from "../_demo/DemoControls"
import { Toggle, Divider } from "@greenhouse/react";

function generateCode(props: {
  checked: boolean
  showLabel: boolean
  disabled: boolean
}) {
  const parts: string[] = []

  if (props.checked) parts.push("checked")
  if (props.showLabel) parts.push("showLabel")
  if (props.disabled) parts.push("disabled")
  parts.push("onChange={(checked) => {}}")

  const propsString = parts.length > 0 ? " " + parts.join(" ") : ""

  return `<Toggle${propsString} />`
}

export default function ToggleDemo() {
  const [checked, setChecked] = useState(false)
  const [showLabel, setShowLabel] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const code = generateCode({ checked, showLabel, disabled })

  return (
    <>
      <p>
        Explore the Toggle component by adjusting its properties below. Changes
        are reflected in the live preview and code snippet in real time.
      </p>
      <ComponentDemo
        preview={
          <Toggle
            checked={checked}
            onChange={setChecked}
            showLabel={showLabel}
            disabled={disabled}
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
              label="Show label"
              checked={showLabel}
              onChange={setShowLabel}
            />
            <Divider />
            <ToggleControl
              label="Disabled"
              checked={disabled}
              onChange={setDisabled}
            />
          </>
        }
      />
    </>
  )
}