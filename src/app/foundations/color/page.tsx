import Swatch from "@/components/Swatch/Swatch"
import Divider from "@/components/Divider"

export default function ColorPage() {
  return (
    <>
      <h1>Color</h1>
      <p>
        Greenhouse uses a minimalist neutral foundation for structure, with
        chlorophyll greens reserved for meaning — actions, focus, and emphasis.
        Accents are supporting tones used sparingly.
      </p>

      <Divider />

      <h2>Token layers</h2>
      <p>
        Colors are organized into three layers so components stay stable as the
        theme evolves. Components should always consume semantic tokens, never
        raw hex values or scale steps directly.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <div>
          <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>1. Scales</p>
          <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "var(--type-bodySm-size)" }}>
            Raw color ramps with no assigned meaning — for example{" "}
            <code>--neutral-0</code> through <code>--neutral-900</code>.
            Light and dark mode swaps happen primarily at this layer.
          </p>
        </div>
        <div>
          <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>2. Palette</p>
          <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "var(--type-bodySm-size)" }}>
            Named tokens using Greenhouse language — surfaces, text, borders,
            actions, and accents. These map scale values to design intent.
          </p>
        </div>
        <div>
          <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>3. Semantic tokens</p>
          <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "var(--type-bodySm-size)" }}>
            UI-facing roles that components consume directly — like{" "}
            <code>--color-surface</code>, <code>--color-text</code>,{" "}
            <code>--color-border</code>, and <code>--color-primary</code>.
          </p>
        </div>
      </div>

      <Divider />

      <h2>Usage rules</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <div>
          <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Neutrals first</p>
          <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "var(--type-bodySm-size)" }}>
            Use neutrals for most UI structure — surfaces, typography, and borders.
          </p>
        </div>
        <div>
          <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Green for action</p>
          <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "var(--type-bodySm-size)" }}>
            Use chlorophyll greens for primary actions, interactive emphasis,
            and focus indication.
          </p>
        </div>
        <div>
          <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Accents are intentional</p>
          <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "var(--type-bodySm-size)" }}>
            Moss, soil, and leaf are supporting tones. Use them sparingly and
            never for interactive elements.
          </p>
        </div>
        <div>
          <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Accessibility</p>
          <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "var(--type-bodySm-size)" }}>
            Primary text on surfaces is designed to meet WCAG AAA. Borders use
            a subtle/strong split — subtle for separators, strong for
            interactive control boundaries.
          </p>
        </div>
      </div>

      <Divider />

      <Swatch
        title="Semantic tokens"
        description="These are the tokens components should consume. They cascade automatically in dark mode."
        tokens={[
          { name: "--color-surface", label: "Surface" },
          { name: "--color-surface-muted", label: "Surface muted" },
          { name: "--color-text", label: "Text primary" },
          { name: "--color-text-muted", label: "Text muted" },
          { name: "--color-border", label: "Border subtle" },
          { name: "--color-border-strong", label: "Border strong" },
          { name: "--color-primary", label: "Action primary" },
          { name: "--color-primary-hover", label: "Action hover" },
        ]}
      />

      <Swatch
        title="Supporting accents"
        description="Use intentionally and sparingly. Never for interactive elements."
        tokens={[
          { name: "--color-accent-moss", label: "Moss" },
          { name: "--color-accent-soil", label: "Soil" },
          { name: "--color-accent-leaf", label: "Leaf" },
        ]}
      />

      <Swatch
        title="Scale samples"
        description="A few anchor steps from the raw color ramps. These power light and dark mode theme swaps."
        tokens={[
          { name: "--neutral-0", label: "Neutral 0" },
          { name: "--neutral-100", label: "Neutral 100" },
          { name: "--neutral-300", label: "Neutral 300" },
          { name: "--neutral-800", label: "Neutral 800" },
          { name: "--neutral-900", label: "Neutral 900" },
          { name: "--green-50", label: "Chlorophyll 50" },
          { name: "--green-600", label: "Chlorophyll 600" },
          { name: "--green-700", label: "Chlorophyll 700" },
        ]}
      />
    </>
  )
}