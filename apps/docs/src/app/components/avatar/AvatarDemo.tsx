"use client"

import { useState } from "react"
import ComponentDemo from "../_demo/ComponentDemo"
import { SelectControl, ToggleControl, TextControl } from "../_demo/DemoControls"
import { Avatar, Divider } from "@adeeeeta/greenhouse";

function generateCode(props: {
  size: string
  shape: string
  useImage: boolean
  initials: string
}) {
  const parts: string[] = []

  if (props.size !== "md") parts.push(`size="${props.size}"`)
  if (props.shape !== "circle") parts.push(`shape="${props.shape}"`)

  if (props.useImage) {
    parts.push(`src="https://images.unsplash.com/photo-1664615407709-fcdbdf0289b5?w=200"`)
    parts.push(`alt="Green plant in white pot"`)
  } else if (props.initials) {
    parts.push(`initials="${props.initials}"`)
  }

  const propsString = parts.length > 0 ? " " + parts.join(" ") : ""

  return `<Avatar${propsString} />`
}

export default function AvatarDemo() {
  const [size, setSize] = useState("md")
  const [shape, setShape] = useState("circle")
  const [useImage, setUseImage] = useState(false)
  const [initials, setInitials] = useState("GH")

  const code = generateCode({ size, shape, useImage, initials })

  return (
    <>
      <p>
        Explore the Avatar component by adjusting its properties below. Changes
        are reflected in the live preview and code snippet in real time.
      </p>
      <ComponentDemo
        preview={
          <Avatar
            size={size as "sm" | "md" | "lg"}
            shape={shape as "circle" | "square"}
            src={useImage ? "https://images.unsplash.com/photo-1664615407709-fcdbdf0289b5?w=200" : undefined}
            alt={useImage ? "Green plant in white pot" : undefined}
            initials={useImage ? undefined : initials || undefined}
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
                { value: "lg", label: "Large" },
              ]}
              onChange={setSize}
            />
            <SelectControl
              label="Shape"
              value={shape}
              options={[
                { value: "circle", label: "Circle" },
                { value: "square", label: "Square" },
              ]}
              onChange={setShape}
            />
            <Divider />
            <ToggleControl
              label="Use image"
              checked={useImage}
              onChange={setUseImage}
            />
            <TextControl
              label="Initials"
              value={initials}
              onChange={setInitials}
            />
          </>
        }
      />
    </>
  )
}