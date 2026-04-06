import Divider from "@/components/Divider"

const tokens = [
  { name: "--space-1", value: "4px" },
  { name: "--space-2", value: "8px" },
  { name: "--space-3", value: "12px" },
  { name: "--space-4", value: "16px" },
  { name: "--space-5", value: "20px" },
  { name: "--space-6", value: "24px" },
  { name: "--space-8", value: "32px" },
  { name: "--space-10", value: "40px" },
  { name: "--space-12", value: "48px" },
]

export default function SpacingPage() {
  return (
    <>
      <h1>Spacing</h1>
      <p>
        Spacing tokens keep layouts consistent and prevent arbitrary padding
        values. All components reference these tokens — never raw pixel values.
      </p>

      <Divider />

      <h2>Scale</h2>
      <p>
        The spacing scale is based on a 4px grid. Each step is a multiple of
        4px, giving layouts a consistent rhythm.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        {tokens.map(({ name, value }) => (
          <div
            key={name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-4)",
            }}
          >
            <div
              style={{
                width: value,
                height: "24px",
                background: "var(--color-primary)",
                borderRadius: "var(--radius-sm)",
                flexShrink: 0,
              }}
            />
            <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
              <code>{name}</code>
              <span style={{
                fontSize: "var(--type-caption-size)",
                color: "var(--color-text-muted)",
              }}>
                {value}
              </span>
            </div>
          </div>
        ))}
      </div>

      <Divider />

      <h2>Usage rules</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <div>
          <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Always use tokens</p>
          <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>
            Never use raw pixel values for spacing. Reference a token instead —
            this keeps layouts consistent and makes future updates easier.
          </p>
        </div>
        <div>
          <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Component padding</p>
          <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>
            Use <code>--space-3</code> and <code>--space-4</code> for internal
            component padding. Use <code>--space-6</code> and above for section
            and layout spacing.
          </p>
        </div>
        <div>
          <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Gap and margin</p>
          <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>
            Use <code>--space-2</code> for tight groupings like icon and label
            pairs. Use <code>--space-4</code> for related items. Use{" "}
            <code>--space-8</code> and above to separate distinct sections.
          </p>
        </div>
      </div>

      <Divider />

      <h2>Usage</h2>
      <p>
        Reference spacing tokens in CSS via <code>var(--space-*)</code> or
        inline in JSX via{" "}
        <code>style={`{{ gap: "var(--space-4)" }}`}</code>. Avoid hardcoding
        pixel values — if a value isn't in the scale, check whether an adjacent
        token would work instead.
      </p>
    </>
  )
}