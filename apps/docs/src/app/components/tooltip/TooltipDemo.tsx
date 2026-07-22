"use client"

import { useState } from "react"
import ComponentDemo from "../_demo/ComponentDemo"
import { SelectControl, TextControl } from "../_demo/DemoControls"
import { Tooltip, Button, Divider } from "@adeeeeta/greenhouse";

function generateCode(props: {
  position: string
  content: string
}) {
  const parts: string[] = []

  parts.push(`content="${props.content}"`)
  if (props.position !== "above") parts.push(`position="${props.position}"`)

  return `<Tooltip ${parts.join(" ")}>\n  <Button kind="secondary">Hover me</Button>\n</Tooltip>`
}

export default function TooltipDemo() {
  const [position, setPosition] = useState("above")
  const [content, setContent] = useState("Helpful tooltip text")

  const code = generateCode({ position, content })

  return (
    <>
      <p>
        Explore the Tooltip component by adjusting its properties below. Hover
        over the button in the preview to see the tooltip appear.
      </p>
      <ComponentDemo
        preview={
          <div style={{ padding: "var(--space-10)" }}>
            <Tooltip
              content={content}
              position={position as "above" | "below" | "left" | "right"}
            >
              <Button kind="secondary">Hover me</Button>
            </Tooltip>
          </div>
        }
        code={code}
        controls={
          <>
            <SelectControl
              label="Position"
              value={position}
              options={[
                { value: "above", label: "Above" },
                { value: "below", label: "Below" },
                { value: "left", label: "Left" },
                { value: "right", label: "Right" },
              ]}
              onChange={setPosition}
            />
            <Divider />
            <TextControl
              label="Content"
              value={content}
              onChange={setContent}
            />
          </>
        }
      />
    </>
  )
}