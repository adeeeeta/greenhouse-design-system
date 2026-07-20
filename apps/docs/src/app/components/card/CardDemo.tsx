"use client"

import { useState } from "react"
import ComponentDemo from "../_demo/ComponentDemo"
import { SelectControl, ToggleControl } from "../_demo/DemoControls"
import { Card, Badge, Button, Divider } from "@greenhouse/react";

function generateCode(props: {
  variant: string
  showHeader: boolean
  showFooter: boolean
  showCover: boolean
  interactive: boolean
}) {
  const parts: string[] = []

  if (props.variant !== "elevated") parts.push(`variant="${props.variant}"`)
  if (props.interactive) parts.push(`onClick={() => {}}`)

  const sections: string[] = []

  if (props.showCover) {
    sections.push(`  cover={<div>...</div>}`)
  }
  if (props.showHeader) {
    sections.push(`  header={<div>Monstera Deliciosa</div>}`)
  }
  if (props.showFooter) {
    sections.push(`  footer={<div><Button>Action</Button></div>}`)
  }

  const allProps = [...parts.map(p => `  ${p}`), ...sections]
  const propsString = allProps.length > 0 ? "\n" + allProps.join("\n") + "\n" : ""

  return `<Card${propsString}>\n  Card content goes here.\n</Card>`
}

export default function CardDemo() {
  const [variant, setVariant] = useState("elevated")
  const [showHeader, setShowHeader] = useState(false)
  const [showFooter, setShowFooter] = useState(false)
  const [showCover, setShowCover] = useState(false)
  const [interactive, setInteractive] = useState(false)

  const code = generateCode({ variant, showHeader, showFooter, showCover, interactive })

  return (
    <>
      <p>
        Explore the Card component by adjusting its properties below. Changes
        are reflected in the live preview and code snippet in real time.
      </p>
      <ComponentDemo
        preview={
          <div style={{ width: "100%", maxWidth: "360px" }}>
            <Card
              variant={variant as "flat" | "elevated" | "outlined"}
              onClick={interactive ? () => {} : undefined}
              cover={showCover ? (
                <div style={{
                  height: "120px",
                  background: "var(--color-primary-subtle)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-primary)",
                  fontSize: "var(--type-h2-size)"
                }}>
                  🌿
                </div>
              ) : undefined}
              header={showHeader ? (
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontWeight: "var(--font-weight-semibold)", fontSize: "var(--type-body-size)" }}>
                    Monstera Deliciosa
                  </span>
                  <Badge label="Established" variant="success" />
                </div>
              ) : undefined}
              footer={showFooter ? (
                <div style={{ display: "flex", gap: "var(--space-2)" }}>
                  <Button kind="primary" size="sm">Log watering</Button>
                  <Button kind="secondary" size="sm">Details</Button>
                </div>
              ) : undefined}
            >
              <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>
                Last watered 3 days ago. Next watering due in 4 days.
              </p>
            </Card>
          </div>
        }
        code={code}
        controls={
          <>
            <SelectControl
              label="Variant"
              value={variant}
              options={[
                { value: "flat", label: "Flat" },
                { value: "elevated", label: "Elevated" },
                { value: "outlined", label: "Outlined" },
              ]}
              onChange={setVariant}
            />
            <Divider />
            <ToggleControl
              label="Header"
              checked={showHeader}
              onChange={setShowHeader}
            />
            <ToggleControl
              label="Footer"
              checked={showFooter}
              onChange={setShowFooter}
            />
            <ToggleControl
              label="Cover image"
              checked={showCover}
              onChange={setShowCover}
            />
            <ToggleControl
              label="Interactive"
              checked={interactive}
              onChange={setInteractive}
            />
          </>
        }
      />
    </>
  )
}