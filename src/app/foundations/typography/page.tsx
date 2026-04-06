import Text from "@/components/Text"
import Divider from "@/components/Divider"

export default function TypographyPage() {
  return (
    <>
      <h1>Typography</h1>
      <p>
        Greenhouse type is calm, legible, and aligned to a 4px baseline.
        Typography is applied through the <code>Text</code> component and{" "}
        <code>--type-*</code> tokens.
      </p>

      <Divider />

      <h2>Scale</h2>
      <p>
        The type scale covers display, headings, body, and utility sizes.
        Each step has a paired line height token.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <div>
          <Text variant="display">Display</Text>
          <p style={{ margin: "var(--space-1) 0 0 0", fontSize: "var(--type-caption-size)", color: "var(--color-text-muted)" }}>
            2.5rem / line 1.2 — <code>--type-display-size</code>
          </p>
        </div>
        <Divider weight="subtle" />
        <div>
          <Text as="div" variant="h1">Heading 1</Text>
          <p style={{ margin: "var(--space-1) 0 0 0", fontSize: "var(--type-caption-size)", color: "var(--color-text-muted)" }}>
            2rem / line 1.25 — <code>--type-h1-size</code>
          </p>
        </div>
        <Divider weight="subtle" />
        <div>
          <Text as="div" variant="h2">Heading 2</Text>
          <p style={{ margin: "var(--space-1) 0 0 0", fontSize: "var(--type-caption-size)", color: "var(--color-text-muted)" }}>
            1.5rem / line 1.333 — <code>--type-h2-size</code>
          </p>
        </div>
        <Divider weight="subtle" />
        <div>
          <Text as="div" variant="h3">Heading 3</Text>
          <p style={{ margin: "var(--space-1) 0 0 0", fontSize: "var(--type-caption-size)", color: "var(--color-text-muted)" }}>
            1.25rem / line 1.4 — <code>--type-h3-size</code>
          </p>
        </div>
        <Divider weight="subtle" />
        <div>
          <Text as="div" variant="h4">Heading 4</Text>
          <p style={{ margin: "var(--space-1) 0 0 0", fontSize: "var(--type-caption-size)", color: "var(--color-text-muted)" }}>
            1rem / line 1.5 — <code>--type-h4-size</code>
          </p>
        </div>
        <Divider weight="subtle" />
        <div>
          <Text variant="body">Body</Text>
          <p style={{ margin: "var(--space-1) 0 0 0", fontSize: "var(--type-caption-size)", color: "var(--color-text-muted)" }}>
            1rem / line 1.5 — <code>--type-body-size</code>
          </p>
        </div>
        <Divider weight="subtle" />
        <div>
          <Text variant="bodySm">Body small</Text>
          <p style={{ margin: "var(--space-1) 0 0 0", fontSize: "var(--type-caption-size)", color: "var(--color-text-muted)" }}>
            0.875rem / line 1.429 — <code>--type-bodySm-size</code>
          </p>
        </div>
        <Divider weight="subtle" />
        <div>
          <Text variant="label">Label</Text>
          <p style={{ margin: "var(--space-1) 0 0 0", fontSize: "var(--type-caption-size)", color: "var(--color-text-muted)" }}>
            0.8125rem / line 1.231 — <code>--type-label-size</code>
          </p>
        </div>
        <Divider weight="subtle" />
        <div>
          <Text variant="caption">Caption</Text>
          <p style={{ margin: "var(--space-1) 0 0 0", fontSize: "var(--type-caption-size)", color: "var(--color-text-muted)" }}>
            0.75rem / line 1.333 — <code>--type-caption-size</code>
          </p>
        </div>
      </div>

      <Divider />

      <h2>Component rules</h2>
      <p>
        Components never set font sizes directly. Typography is always applied
        via the <code>Text</code> component or <code>--type-*</code> tokens.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <div>
          <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Forms</p>
          <p style={{ margin: "0 0 var(--space-1) 0", fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>Field label — <code>variant="label"</code></p>
          <p style={{ margin: "0 0 var(--space-1) 0", fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>Input text — body tokens (<code>--type-body-*</code>)</p>
          <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>Helper and error — <code>variant="bodySm"</code></p>
        </div>
        <div>
          <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Buttons</p>
          <p style={{ margin: "0 0 var(--space-1) 0", fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>Button text — <code>variant="label"</code></p>
          <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>Size variants change height and padding, not font size</p>
        </div>
        <div>
          <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Selection controls</p>
          <p style={{ margin: "0 0 var(--space-1) 0", fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>Checkbox/Radio label — <code>variant="label"</code></p>
          <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>Description — <code>variant="caption"</code></p>
        </div>
        <div>
          <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Dropdown</p>
          <p style={{ margin: "0 0 var(--space-1) 0", fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>Trigger text — body tokens</p>
          <p style={{ margin: "0 0 var(--space-1) 0", fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>Option label — <code>variant="label"</code></p>
          <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>Option description — <code>variant="caption"</code></p>
        </div>
      </div>

      <Divider />

      <h2>Usage</h2>
      <p>
        Use the <code>Text</code> component with a <code>variant</code> prop
        to apply typographic styles. Use the <code>as</code> prop to control
        the rendered HTML element independently of the visual style.
      </p>
    </>
  )
}