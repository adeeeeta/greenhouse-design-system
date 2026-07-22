"use client"

import { useState } from "react"
import ComponentDemo from "../_demo/ComponentDemo"
import { SelectControl, ToggleControl, TextControl } from "../_demo/DemoControls"
import { Tag, CheckCircle, AlertCircle, InfoCircle, Divider } from "@adeeeeta/greenhouse";

const iconMap: Record<string, React.ReactNode | null> = {
  none: null,
  CheckCircle: <CheckCircle size={12} />,
  AlertCircle: <AlertCircle size={12} />,
  InfoCircle: <InfoCircle size={12} />,
}

function generateCode(props: {
  variant: string
  size: string
  label: string
  icon: string
  dismissible: boolean
}) {
  const parts: string[] = []

  parts.push(`label="${props.label}"`)
  if (props.variant !== "neutral") parts.push(`variant="${props.variant}"`)
  if (props.size !== "md") parts.push(`size="${props.size}"`)
  if (props.icon !== "none") parts.push(`icon={<${props.icon} size={12} />}`)
  if (props.dismissible) parts.push(`onDismiss={() => {}}`)

  return `<Tag ${parts.join(" ")} />`
}

export default function TagDemo() {
  const [variant, setVariant] = useState("neutral")
  const [size, setSize] = useState("md")
  const [label, setLabel] = useState("Monstera")
  const [icon, setIcon] = useState("none")
  const [dismissible, setDismissible] = useState(false)

  const code = generateCode({ variant, size, label, icon, dismissible })

  return (
    <>
      <p>
        Explore the Tag component by adjusting its properties below. Changes
        are reflected in the live preview and code snippet in real time.
      </p>
      <ComponentDemo
        preview={
          <Tag
            label={label}
            variant={variant as "neutral" | "success" | "warning" | "error" | "info"}
            size={size as "sm" | "md"}
            icon={iconMap[icon] ?? undefined}
            onDismiss={dismissible ? () => {} : undefined}
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
            <SelectControl
              label="Icon"
              value={icon}
              options={[
                { value: "none", label: "None" },
                { value: "CheckCircle", label: "Check circle" },
                { value: "AlertCircle", label: "Alert circle" },
                { value: "InfoCircle", label: "Info circle" },
              ]}
              onChange={setIcon}
            />
            <Divider />
            <ToggleControl
              label="Dismissible"
              checked={dismissible}
              onChange={setDismissible}
            />
            <Divider />
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