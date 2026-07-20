"use client"

import { useState } from "react"
import ComponentDemo from "../_demo/ComponentDemo"
import { SelectControl, TextControl } from "../_demo/DemoControls"
import { Badge } from "@greenhouse/react";

function generateCode(props: {
  variant: string
  size: string
  label: string
}) {
  const parts: string[] = []

  parts.push(`label="${props.label}"`)
  if (props.variant !== "neutral") parts.push(`variant="${props.variant}"`)
  if (props.size !== "md") parts.push(`size="${props.size}"`)

  return `<Badge ${parts.join(" ")} />`
}

export default function BadgeDemo() {
  const [variant, setVariant] = useState("neutral")
  const [size, setSize] = useState("md")
  const [label, setLabel] = useState("Seedling")

  const code = generateCode({ variant, size, label })

  return (
    <>
      <p>
        Explore the Badge component by adjusting its properties below. Changes
        are reflected in the live preview and code snippet in real time.
      </p>
      <ComponentDemo
        preview={
          <Badge
            label={label}
            variant={variant as "neutral" | "success" | "warning" | "error" | "info"}
            size={size as "sm" | "md"}
          />
        }
        code={code}
        controls={
          <>
            <SelectControl
              label="Variant"
              value={variant}
              options={[
                { value: "neutral", label: "Neutral" },
                { value: "success", label: "Success" },
                { value: "warning", label: "Warning" },
                { value: "error", label: "Error" },
                { value: "info", label: "Info" },
              ]}
              onChange={setVariant}
            />
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