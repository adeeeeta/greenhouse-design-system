import Divider from "@/components/Divider"

export default function DividerPage() {
  return (
    <>
      <h1>Divider</h1>
      <p>
        Dividers separate content into clear sections. They come in three
        weights and support an optional centered label.
      </p>

      <Divider />

      <h2>Weight</h2>
        <p>
        Visual weight is a combination of border color and thickness.
        </p>
        <p>
          Subtle uses <code>--color-border</code> at <code>1px</code> with
          50% opacity.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <p style={{ margin: 0, fontSize: "var(--type-caption-size)", color: "var(--color-text-muted)" }}>Subtle</p>
        <Divider weight="subtle" />
        </div>

        <p>
          Default uses <code>--color-border</code> at{" "}
          <code>1px</code>.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <p style={{ margin: 0, fontSize: "var(--type-caption-size)", color: "var(--color-text-muted)" }}>Default</p>
        <Divider />
        </div>

        <p>
          Strong uses <code>--color-border-strong</code>{" "}
        at <code>2px</code>.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
        <p style={{ margin: 0, fontSize: "var(--type-caption-size)", color: "var(--color-text-muted)" }}>Strong</p>
        <Divider weight="strong" />
        </div>

      <Divider />

      <h2>Labeled</h2>
      <p>
        Add a <code>label</code> to display centered text between two lines.
        Useful for separating form sections or grouping options.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <Divider label="Or" />
        <Divider label="Section title" weight="subtle" />
        <Divider label="Section title" weight="strong" />
      </div>

      <Divider />

      <h2>Usage</h2>
      <p>
        Use <code>weight</code> to control visual prominence. Add a{" "}
        <code>label</code> to display centered text between two lines.
        Weight defaults to <code>default</code> if not specified.
      </p>
    </>
  )
}