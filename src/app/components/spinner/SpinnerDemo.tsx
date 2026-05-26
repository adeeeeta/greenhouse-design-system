"use client"

import { useState } from "react"
import Spinner from "@/components/Spinner"
import ComponentDemo from "../_demo/ComponentDemo"
import { SelectControl, TextControl } from "../_demo/DemoControls"

function generateCode(props: {
  size: string
  label: string
}) {
  const parts: string[] = []

  if (props.size !== "md") parts.push(`size="${props.size}"`)
  if (props.label) parts.push(`label="${props.label}"`)

  const propsString = parts.length > 0 ? " " + parts.join(" ") : ""

  return `<Spinner${propsString} />`
}

export default function SpinnerDemo() {
  const [size, setSize] = useState("md")
  const [label, setLabel] = useState("")

  const code = generateCode({ size, label })

  return (
    <>
      <p>
        Explore the Spinner component by adjusting its properties below. Changes
        are reflected in the live preview and code snippet in real time.
      </p>
      <ComponentDemo
        preview={
          <Spinner
            size={size as "sm" | "md"}
            label={label || undefined}
          />
        }
        code={code}
        controls={
          <>
            <SelectControl
              label="Size"
              value={size}
              options={[
                { value: "sm", label: "Small" },
                { value: "md", label: "Default" },
              ]}
              onChange={setSize}
            />
            <TextControl
              label="Label"
              value={label}
              onChange={setLabel}
            />
          </>
        }
      />
    </>
  )
}