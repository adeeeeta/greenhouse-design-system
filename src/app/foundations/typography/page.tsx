"use client"

import Text from "@/components/Text"
import Divider from "@/components/Divider"
import Tabs from "@/components/Tabs"

function ScaleDisplay({ font }: { font: string }) {
  const isDisplay = font === "var(--font-display)"
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
      <div>
  <p style={{
    margin: 0,
    fontFamily: font,
    fontSize: "var(--type-display-size)",
    lineHeight: "var(--type-display-line)",
    fontWeight: isDisplay ? 400 : "var(--font-weight-semibold)",
  }}>
    Display
  </p>
  <p style={{ margin: "var(--space-1) 0 0 0", fontSize: "var(--type-caption-size)", color: "var(--color-text-muted)" }}>
    2.5rem / line 1.2 — <code>--type-display-size</code>{isDisplay && " · Fraunces · 400"}
  </p>
</div>
<Divider weight="subtle" />
<div>
  <p style={{
    margin: 0,
    fontFamily: font,
    fontSize: "var(--type-h1-size)",
    lineHeight: "var(--type-h1-line)",
    fontWeight: isDisplay ? 400 : "var(--font-weight-medium)",
  }}>
    Heading 1
  </p>
  <p style={{ margin: "var(--space-1) 0 0 0", fontSize: "var(--type-caption-size)", color: "var(--color-text-muted)" }}>
    2rem / line 1.25 — <code>--type-h1-size</code>{isDisplay && " · Fraunces · 400"}
  </p>
</div>
<Divider weight="subtle" />
<div>
  <p style={{
    margin: 0,
    fontFamily: font,
    fontSize: "var(--type-h2-size)",
    lineHeight: "var(--type-h2-line)",
    fontWeight: isDisplay ? 400 : "var(--font-weight-medium)",
  }}>
    Heading 2
  </p>
  <p style={{ margin: "var(--space-1) 0 0 0", fontSize: "var(--type-caption-size)", color: "var(--color-text-muted)" }}>
    1.5rem / line 1.333 — <code>--type-h2-size</code>{isDisplay && " · Fraunces · 400"}
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
      <Divider weight="subtle" />
      <div>
        <p style={{
          margin: 0,
          fontFamily: "var(--font-mono)",
          fontSize: "var(--type-bodySm-size)",
          lineHeight: "var(--type-bodySm-line)",
        }}>
          Code
        </p>
        <p style={{ margin: "var(--space-1) 0 0 0", fontSize: "var(--type-caption-size)", color: "var(--color-text-muted)" }}>
          0.875rem / line 1.429 — <code>--font-mono</code> · Fira Code
        </p>
      </div>
    </div>
  )
}

export default function TypographyPage() {
  return (
    <>
      <h1>Typography</h1>
      <p>
        Greenhouse uses three typefaces, each with a clear role.
        Typography is applied through the <code>Text</code> component and{" "}
        <code>--type-*</code> tokens, aligned to a 4px baseline.
      </p>

      <Divider />

      <h2>Typefaces</h2>
      <p>
        Each typeface serves a distinct purpose in the system. Together they
        cover interfaces, expressive headings, and code.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        <div>
          <p style={{
            margin: "0 0 var(--space-1) 0",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--type-h2-size)",
            lineHeight: "var(--type-h2-line)",
            fontWeight: "var(--font-weight-semibold)",
          }}>
            Plus Jakarta Sans
          </p>
          <p style={{ margin: "0 0 var(--space-2) 0", fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>
            The workhorse. Used for body text, UI labels, headings, and everything
            that needs to be calm and legible.
          </p>
          <p style={{
            margin: 0,
            fontFamily: "var(--font-sans)",
            fontSize: "var(--type-body-size)",
            lineHeight: "var(--type-body-line)",
          }}>
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
            a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
            0 1 2 3 4 5 6 7 8 9
          </p>
        </div>
        <Divider weight="subtle" />
        <div>
          <p style={{
            margin: "0 0 var(--space-1) 0",
            fontFamily: "var(--font-display)",
            fontSize: "var(--type-h2-size)",
            lineHeight: "var(--type-h2-line)",
            fontWeight: "var(--font-weight-semibold)",
          }}>
            Fraunces
          </p>
          <p style={{ margin: "0 0 var(--space-2) 0", fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>
            The expressive voice. A soft serif used for display headings and
            landing pages where Greenhouse wants to feel warm and distinctive.
          </p>
          <p style={{
            margin: 0,
            fontFamily: "var(--font-display)",
            fontSize: "var(--type-body-size)",
            lineHeight: "var(--type-body-line)",
          }}>
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
            a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
            0 1 2 3 4 5 6 7 8 9
          </p>
        </div>
        <Divider weight="subtle" />
        <div>
          <p style={{
            margin: "0 0 var(--space-1) 0",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--type-h3-size)",
            lineHeight: "var(--type-h3-line)",
            fontWeight: "var(--font-weight-medium)",
          }}>
            Fira Code
          </p>
          <p style={{ margin: "0 0 var(--space-2) 0", fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>
            The technical voice. A monospace typeface with coding ligatures, used
            for code blocks, inline code, and token references.
          </p>
          <p style={{
            margin: 0,
            fontFamily: "var(--font-mono)",
            fontSize: "var(--type-bodySm-size)",
            lineHeight: "var(--type-bodySm-line)",
          }}>
            A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br />
            a b c d e f g h i j k l m n o p q r s t u v w x y z<br />
            0 1 2 3 4 5 6 7 8 9 {"=> !== <= ++ --"}
          </p>
        </div>
      </div>

      <Divider />

      <h2>Scale</h2>
      <p>
        The type scale covers display, headings, body, and utility sizes.
        Display through H2 can use either Plus Jakarta Sans or Fraunces. Switch between them
        to see the difference.
      </p>
      <Tabs
        variant="pill"
        defaultTab="sans"
        tabs={[
          {
            id: "sans",
            label: "Plus Jakarta Sans",
            content: <ScaleDisplay font="var(--font-sans)" />,
          },
          {
            id: "display",
            label: "Fraunces",
            content: <ScaleDisplay font="var(--font-display)" />,
          },
        ]}
      />

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
        the rendered HTML element independently of the visual style. Add{" "}
        <code>className="gh-heading-display"</code> to any heading to switch
        it to Fraunces.
      </p>
    </>
  )
}