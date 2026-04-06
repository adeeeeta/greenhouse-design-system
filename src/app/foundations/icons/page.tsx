import { AlertCircle, AlertTriangle, Check, CheckCircle, ChevronDown, InfoCircle, X } from "@/components/Icons"

const icons = [
  { name: "Check", component: Check },
  { name: "CheckCircle", component: CheckCircle },
  { name: "AlertCircle", component: AlertCircle },
  { name: "AlertTriangle", component: AlertTriangle },
  { name: "InfoCircle", component: InfoCircle },
  { name: "ChevronDown", component: ChevronDown },
  { name: "X", component: X },
]

const sizes = [16, 20, 24]

export default function IconsPage() {
  return (
    <>
      <h1>Icons</h1>
      <p>
        Greenhouse uses a small set of purpose-built icons. All icons accept a{" "}
        <code>size</code> prop and inherit the current text color via{" "}
        <code>currentColor</code>.
      </p>

      <h2>Icon set</h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "var(--space-4)",
      }}>
        {icons.map(({ name, component: Icon }) => (
          <div
            key={name}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-3)",
              padding: "var(--space-4)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-md)",
              background: "var(--color-surface)",
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--space-4)",
            }}>
              {sizes.map((size) => (
                <div
                  key={size}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "var(--space-2)",
                    color: "var(--color-text)",
                  }}
                >
                  <Icon size={size} />
                  <span style={{
                    fontSize: "var(--type-caption-size)",
                    color: "var(--color-text-muted)",
                  }}>
                    {size}
                  </span>
                </div>
              ))}
            </div>
            <span style={{
              fontSize: "var(--type-label-size)",
              fontWeight: "var(--font-weight-medium)",
              color: "var(--color-text)",
            }}>
              {name}
            </span>
          </div>
        ))}
      </div>

      <h2>Usage</h2>
      <p>
        Import icons by name from <code>@/components/Icons</code>. Use the{" "}
        <code>size</code> prop to control dimensions — the default is{" "}
        <code>16</code>. Icons inherit color from their parent element via{" "}
        <code>currentColor</code>, so set color on the parent.
      </p>
      <p>
        All icons include <code>aria-hidden="true"</code> by default since they
        are decorative. If an icon conveys meaning without accompanying text,
        wrap it in an element with an <code>aria-label</code>.
      </p>
    </>
  )
}