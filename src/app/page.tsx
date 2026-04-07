"use client"

import Link from "next/link"
import Divider from "@/components/Divider"
import Badge from "@/components/Badge"
import { Leaf } from "@/components/Icons"

const foundations = [
  {
    title: "Color",
    description: "A three-layer token system built on neutral foundations with chlorophyll greens for action.",
    href: "/foundations/color",
  },
  {
    title: "Typography",
    description: "A calm, legible type scale aligned to a 4px baseline.",
    href: "/foundations/typography",
  },
  {
    title: "Spacing",
    description: "A 4px grid-based spacing scale that keeps layouts consistent across all components.",
    href: "/foundations/spacing",
  },
  {
    title: "Icons",
    description: "64 Phosphor icons across 9 categories. They inherit color from their surroundings.",
    href: "/foundations/icons",
  },
]

const components = [
  { title: "Alert", href: "/components/alert", status: "stable" },
  { title: "Avatar", href: "/components/avatar", status: "stable" },
  { title: "Badge", href: "/components/badge", status: "stable" },
  { title: "Button", href: "/components/button", status: "stable" },
  { title: "Card", href: "/components/card", status: "stable" },
  { title: "Checkbox", href: "/components/checkbox", status: "stable" },
  { title: "Divider", href: "/components/divider", status: "stable" },
  { title: "Dropdown", href: "/components/dropdown", status: "stable" },
  { title: "Modal", href: "/components/modal", status: "stable" },
  { title: "Radio", href: "/components/radio", status: "stable" },
  { title: "Spinner", href: "/components/spinner", status: "stable" },
  { title: "Tabs", href: "/components/tabs", status: "stable" },
  { title: "Tag", href: "/components/tag", status: "stable" },
  { title: "Text Input", href: "/components/text-input", status: "stable" },
  { title: "Toast", href: "/components/toast", status: "stable" },
  { title: "Toggle", href: "/components/toggle", status: "stable" },
  { title: "Tooltip", href: "/components/tooltip", status: "stable" },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <div style={{
        paddingBottom: "var(--space-10)",
      }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--space-2)",
          color: "var(--color-primary)",
          marginBottom: "var(--space-4)",
        }}>
          <Leaf size={20} />
          <span style={{
            fontSize: "var(--type-label-size)",
            fontWeight: "var(--font-weight-medium)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}>
            Greenhouse Design System
          </span>
        </div>
        <h1 style={{ fontSize: "var(--type-display-size)", lineHeight: "var(--type-display-line)", margin: "0 0 var(--space-4) 0" }}>
          Good systems start<br />with good roots.
        </h1>
        <p style={{
          fontSize: "var(--type-body-size)",
          lineHeight: 1.6,
          color: "var(--color-text-muted)",
          maxWidth: "480px",
          margin: "0 0 var(--space-6) 0",
        }}>
          The Greenhouse is where I'm teaching myself the architecture and development behind design systems. 
          Every component here is a plant I tend to, learn from, and help grow.
        </p>
        
      </div>

      <Divider />

      {/* Foundations */}
      <h2>Foundations</h2>
      <p>
      What every component is rooted in: color, type, spacing, and icons.
      </p>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "var(--space-4)",
      }}>
        {foundations.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{ textDecoration: "none" }}
          >
            <div style={{
              padding: "var(--space-4)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              background: "var(--color-surface)",
              transition: "border-color 120ms ease, box-shadow 120ms ease",
              height: "100%",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-primary)"
                e.currentTarget.style.boxShadow = "var(--shadow-1)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)"
                e.currentTarget.style.boxShadow = "none"
              }}
            >
              <p style={{
                margin: "0 0 var(--space-2) 0",
                fontWeight: "var(--font-weight-semibold)",
                fontSize: "var(--type-body-size)",
                color: "var(--color-text)",
              }}>
                {item.title}
              </p>
              <p style={{
                margin: 0,
                fontSize: "var(--type-bodySm-size)",
                color: "var(--color-text-muted)",
                lineHeight: 1.5,
              }}>
                {item.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <Divider />

      {/* Components */}
      <h2>Components</h2>
      <p>
        {components.length} production-ready components, each documented with
        usage guidance, variants, and examples.
      </p>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "var(--space-3)",
      }}>
        {components.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{ textDecoration: "none" }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "var(--space-3) var(--space-4)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              background: "var(--color-surface)",
              transition: "border-color 120ms ease",
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-primary)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-border)"
              }}
            >
              <span style={{
                fontSize: "var(--type-bodySm-size)",
                fontWeight: "var(--font-weight-medium)",
                color: "var(--color-text)",
              }}>
                {item.title}
              </span>
              <Badge label="Stable" variant="success" size="sm" />
            </div>
          </Link>
        ))}
      </div>

      <Divider />

      {/* Footer note */}
      <p style={{ color: "var(--color-text-muted)", fontSize: "var(--type-bodySm-size)" }}>
      Greenhouse is always growing. New components and foundations get added as I learn. Built with Next.js, React, TypeScript, CSS Modules, and a whole lot of help from Claude and Cursor. 
      </p>
    </>
  )
}