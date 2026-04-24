"use client"

import { useState } from "react"
import Button from "@/components/Button"
import { Check, X, CaretDown, InfoCircle } from "@/components/Icons/index"
import ComponentDemo from "../_demo/ComponentDemo"
import { SelectControl, ToggleControl, TextControl } from "../_demo/DemoControls"
import Divider from "@/components/Divider"

const iconMap: Record<string, React.ReactNode | null> = {
  none: null,
  Check: <Check />,
  X: <X />,
  CaretDown: <CaretDown />,
  InfoCircle: <InfoCircle />,
}

function generateCode(props: {
  kind: string
  size: string
  disabled: boolean
  iconOnly: boolean
  icon: string
  label: string
}) {
  const parts: string[] = []

  if (props.kind !== "primary") parts.push(`kind="${props.kind}"`)
  if (props.size !== "md") parts.push(`size="${props.size}"`)
  if (props.icon !== "none") parts.push(`icon={<${props.icon}/>}`)
  if (props.iconOnly) parts.push("iconOnly")
  if (props.disabled) parts.push("disabled")
  if (props.iconOnly) parts.push(`aria-label="${props.label}"`)

  const propsString = parts.length > 0 ? " " + parts.join(" ") : ""

  if (props.iconOnly) {
    return `<Button${propsString} />`
  }

  return `<Button${propsString}>\n  ${props.label}\n</Button>`
}

export default function ButtonDemo() {
  const [kind, setKind] = useState("primary")
  const [size, setSize] = useState("md")
  const [disabled, setDisabled] = useState(false)
  const [iconOnly, setIconOnly] = useState(false)
  const [icon, setIcon] = useState("none")
  const [label, setLabel] = useState("Add to greenhouse")

  const code = generateCode({ kind, size, disabled, iconOnly, icon, label })


  return (
    <>
      <p>
        This demo is a work in progress. Explore the Button component by adjusting its properties below. Changes
        are reflected in the live preview and code snippet in real time.
      </p>
      <ComponentDemo
      preview={
        <Button
          kind={kind as "primary" | "secondary" | "ghost"}
          size={size as "sm" | "md" | "lg"}
          disabled={disabled}
          iconOnly={iconOnly}
          icon={iconMap[icon]}
          aria-label={iconOnly ? label : undefined}
        >
          {iconOnly ? undefined : label}
        </Button>
      }
      code={code}
      controls={
        <>
          <SelectControl
            label="Kind"
            value={kind}
            options={[
              { value: "primary", label: "Primary" },
              { value: "secondary", label: "Secondary" },
              { value: "ghost", label: "Ghost" },
            ]}
            onChange={setKind}
          />
          <SelectControl
            label="Size"
            value={size}
            options={[
              { value: "sm", label: "Small" },
              { value: "md", label: "Default" },
              { value: "lg", label: "Large" },
            ]}
            onChange={setSize}
          />
          <SelectControl
            label="Icon"
            value={icon}
            options={[
              { value: "none", label: "None" },
              { value: "Check", label: "Check" },
              { value: "X", label: "X" },
              { value: "CaretDown", label: "Caret down" },
              { value: "InfoCircle", label: "Info circle" },
            ]}
            onChange={setIcon}
          />

          <Divider></Divider>

          <ToggleControl
            label="Disabled"
            checked={disabled}
            onChange={setDisabled}
          />
          <ToggleControl
            label="iconOnly"
            checked={iconOnly}
            onChange={setIconOnly}
          />

          <Divider></Divider>
          
          <TextControl
            label="Button text"
            value={label}
            onChange={setLabel}
          />
        </>
      }
    />
    </>
  )
}