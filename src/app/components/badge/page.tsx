import Badge from "@/components/Badge"
import Divider from "@/components/Divider"

export default function BadgeDocsPage() {
  return (
    <>
      <h1>Badge</h1>
      <p>
        Badges communicate status or category at a glance. They are non-interactive
        and should always be accompanied by a text label.
      </p>

      <Divider />

      <h2>Variants</h2>
      <p>
        Five variants are available to match the semantic meaning of the status
        being communicated.
      </p>
      <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
        <Badge label="Neutral" variant="neutral" />
        <Badge label="Success" variant="success" />
        <Badge label="Warning" variant="warning" />
        <Badge label="Error" variant="error" />
        <Badge label="Info" variant="info" />
      </div>

      <Divider />

      <h2>Sizes</h2>
      <p>
        Two sizes are available. Use <code>sm</code> for compact contexts like
        table cells or tags, and <code>md</code> as the default.
      </p>
      <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center", flexWrap: "wrap" }}>
        <Badge label="Small" variant="neutral" size="sm" />
        <Badge label="Medium" variant="neutral" size="md" />
      </div>

      <Divider />

      <h2>Greenhouse examples</h2>
      <p>
        Badges work well for communicating plant health, growth stage, or care
        status at a glance.
      </p>
      <div style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
        <Badge label="Seedling" variant="info" />
        <Badge label="Established" variant="success" />
        <Badge label="Needs water" variant="warning" />
        <Badge label="Root rot" variant="error" />
        <Badge label="Dormant" variant="neutral" />
      </div>

      <Divider />

      <h2>Usage</h2>
      <p>
        Pass a <code>label</code> string and a <code>variant</code> to control
        the color. Use <code>size</code> to switch between <code>sm</code> and{" "}
        <code>md</code>. The default variant is <code>neutral</code> and the
        default size is <code>md</code>.
      </p>
    </>
  )
}