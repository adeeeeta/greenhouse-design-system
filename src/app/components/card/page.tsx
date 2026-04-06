"use client"

import Card from "@/components/Card"
import Badge from "@/components/Badge"
import Button from "@/components/Button"
import Divider from "@/components/Divider"
import { Check } from "@/components/Icons"

export default function CardPage() {
  return (
    <>
      <h1>Card</h1>
      <p>
        Cards group related content and actions into a single container. They
        come in three visual styles and support optional header, footer, and
        cover image sections.
      </p>

      <Divider />

      <h2>Variants</h2>
      <p>
        Use <code>flat</code> for low-emphasis content, <code>elevated</code>{" "}
        as the default, and <code>outlined</code> for a bordered style without
        shadow.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-4)" }}>
        <Card variant="flat">
          <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>Flat</p>
          <p style={{ margin: "var(--space-1) 0 0 0" }}>A quiet surface for low-emphasis content.</p>
        </Card>
        <Card variant="elevated">
          <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>Elevated</p>
          <p style={{ margin: "var(--space-1) 0 0 0" }}>The default style with shadow and border.</p>
        </Card>
        <Card variant="outlined">
          <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>Outlined</p>
          <p style={{ margin: "var(--space-1) 0 0 0" }}>A bordered card without shadow.</p>
        </Card>
      </div>

      <Divider />

      <h2>With header and footer</h2>
      <p>
        Pass <code>header</code> and <code>footer</code> props to add structured
        sections above and below the card body.
      </p>
      <div style={{ maxWidth: "360px" }}>
        <Card
          variant="elevated"
          header={
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: "var(--font-weight-semibold)", fontSize: "var(--type-body-size)" }}>
                Monstera Deliciosa
              </span>
              <Badge label="Established" variant="success" />
            </div>
          }
          footer={
            <div style={{ display: "flex", gap: "var(--space-2)" }}>
              <Button kind="primary" size="sm" icon={<Check />}>Log watering</Button>
              <Button kind="secondary" size="sm">View details</Button>
            </div>
          }
        >
          <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>
            Last watered 3 days ago. Next watering due in 4 days. Placed in
            the east-facing greenhouse bay.
          </p>
        </Card>
      </div>

      <Divider />

      <h2>With cover image</h2>
      <p>
        Use the <code>cover</code> prop for an image or visual at the top of
        the card. The cover always spans the full width.
      </p>
      <div style={{ maxWidth: "360px" }}>
        <Card
          variant="elevated"
          cover={
            <div style={{
              height: "160px",
              background: "var(--color-primary-subtle)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--color-primary)",
              fontSize: "var(--type-h2-size)"
            }}>
              🌿
            </div>
          }
          header={
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: "var(--font-weight-semibold)", fontSize: "var(--type-body-size)" }}>
                Fiddle Leaf Fig
              </span>
              <Badge label="Seedling" variant="info" />
            </div>
          }
        >
          <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>
            Recently propagated. Requires bright indirect light and weekly watering.
          </p>
        </Card>
      </div>

      <Divider />

      <h2>Interactive</h2>
      <p>
        Add <code>onClick</code> or <code>href</code> to make the entire card
        clickable. Interactive cards lift on hover to signal they are actionable.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "var(--space-4)" }}>
        <Card variant="elevated" onClick={() => {}}>
          <p style={{ margin: 0, fontWeight: "var(--font-weight-medium)" }}>Tropical zone</p>
          <p style={{ margin: "var(--space-1) 0 0 0", fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>
            5 plants
          </p>
        </Card>
        <Card variant="elevated" onClick={() => {}}>
          <p style={{ margin: 0, fontWeight: "var(--font-weight-medium)" }}>Succulent zone</p>
          <p style={{ margin: "var(--space-1) 0 0 0", fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>
            4 plants
          </p>
        </Card>
        <Card variant="elevated" onClick={() => {}}>
          <p style={{ margin: 0, fontWeight: "var(--font-weight-medium)" }}>Herb garden</p>
          <p style={{ margin: "var(--space-1) 0 0 0", fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>
            3 plants
          </p>
        </Card>
      </div>

      <Divider />

      <h2>Usage</h2>
      <p>
        Use <code>variant</code> to control the visual style. Pass{" "}
        <code>header</code> and <code>footer</code> as props to add structured
        sections. Use <code>cover</code> for an image or visual at the top. Add{" "}
        <code>onClick</code> or <code>href</code> to make the entire card
        interactive.
      </p>
    </>
  )
}