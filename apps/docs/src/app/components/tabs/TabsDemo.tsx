"use client"

import { useState } from "react"
import ComponentDemo from "../_demo/ComponentDemo"
import { SelectControl } from "../_demo/DemoControls"
import { Tabs } from "@adeeeeta/greenhouse";

function generateCode(props: {
  variant: string
  tabCount: string
}) {
  const count = parseInt(props.tabCount)
  const tabNames = ["First", "Second", "Third", "Fourth"].slice(0, count)

  const tabsArray = tabNames.map((name) =>
    `  { id: "${name.toLowerCase()}", label: "${name}", content: <div>...</div> }`
  ).join(",\n")

  const parts: string[] = []
  if (props.variant !== "underline") parts.push(`variant="${props.variant}"`)
  parts.push(`tabs={[\n${tabsArray}\n]}`)

  return `<Tabs\n  ${parts.join("\n  ")}\n/>`
}

export default function TabsDemo() {
  const [variant, setVariant] = useState("underline")
  const [tabCount, setTabCount] = useState("3")

  const count = parseInt(tabCount)
  const tabNames = ["First", "Second", "Third", "Fourth"].slice(0, count)

  const code = generateCode({ variant, tabCount })

  return (
    <>
      <p>
        Explore the Tabs component by adjusting its properties below. Changes
        are reflected in the live preview and code snippet in real time.
      </p>
      <ComponentDemo
        preview={
          <div style={{ width: "50%" }}>
          <Tabs
            variant={variant as "underline" | "pill"}
            tabs={tabNames.map((name) => ({
              id: name.toLowerCase(),
              label: name,
              content: (
                <div style={{ minHeight: 60 }}>
                  <p>Content for the {name.toLowerCase()} tab.</p>
                </div>
              ),
            }))}
          />
          </div>
        }
        code={code}
        controls={
          <>
            <SelectControl
              label="Variant"
              value={variant}
              options={[
                { value: "underline", label: "Underline" },
                { value: "pill", label: "Pill" },
              ]}
              onChange={setVariant}
            />
            <SelectControl
              label="Number of tabs"
              value={tabCount}
              options={[
                { value: "2", label: "2 tabs" },
                { value: "3", label: "3 tabs" },
                { value: "4", label: "4 tabs" },
              ]}
              onChange={setTabCount}
            />
          </>
        }
      />
    </>
  )
}