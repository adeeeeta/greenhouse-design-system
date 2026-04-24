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

      {/* ================================
          LAYER 1 — SCALES
          ================================ */}

      <h2>Scales</h2>
      <p>
        Raw color ramps that power light and dark mode. These have no
        assigned meaning — palette and semantic tokens reference them so
        components never need to touch scale values directly.
      </p>

      <Swatch
        title="Neutral"
        description="The structural backbone. Surfaces, text, borders, and dividers all pull from this ramp."
        tokens={[
          { name: "--neutral-0", label: "0 — Surface" },
          { name: "--neutral-50", label: "50 — Elevated surface" },
          { name: "--neutral-100", label: "100 — Muted surface" },
          { name: "--neutral-200", label: "200 — Soft divider" },
          { name: "--neutral-300", label: "300 — Subtle border" },
          { name: "--neutral-600", label: "600 — Strong border" },
          { name: "--neutral-800", label: "800 — Secondary text" },
          { name: "--neutral-900", label: "900 — Primary ink" },
        ]}
      />

      <Swatch
        title="Chlorophyll"
        description="The action ramp. Primary buttons, links, focus rings, and interactive emphasis."
        tokens={[
          { name: "--green-50", label: "50 — Subtle background" },
          { name: "--green-200", label: "200 — Success border" },
          { name: "--green-600", label: "600 — Primary action" },
          { name: "--green-700", label: "700 — Hover / active" },
        ]}
      />

      <Swatch
        title="Soil Red"
        description="Error and destructive states."
        tokens={[
          { name: "--red-50", label: "50 — Alert background" },
          { name: "--red-200", label: "200 — Alert border" },
          { name: "--red-600", label: "600 — Primary error" },
          { name: "--red-700", label: "700 — Error hover" },
        ]}
      />

      <Swatch
        title="Amber"
        description="Warning states and caution signals."
        tokens={[
          { name: "--amber-50", label: "50 — Warning background" },
          { name: "--amber-200", label: "200 — Warning border" },
          { name: "--amber-600", label: "600 — Warning text / icon" },
          { name: "--amber-700", label: "700 — Warning hover" },
        ]}
      />

      <Swatch
        title="Slate Blue"
        description="Informational states and neutral callouts."
        tokens={[
          { name: "--blue-50", label: "50 — Info background" },
          { name: "--blue-200", label: "200 — Info border" },
          { name: "--blue-600", label: "600 — Info text / icon" },
          { name: "--blue-700", label: "700 — Info hover" },
        ]}
      />

      <Divider />

      {/* ================================
          LAYER 2 — PALETTE
          ================================ */}

      <h2>Palette</h2>
      <p>
        Greenhouse vocabulary tokens that map scale values to design intent.
        These sit between the raw ramps and the semantic layer — useful for
        understanding how the system is wired, but components should still
        prefer semantic tokens.
      </p>

      <Swatch
        title="Surfaces"
        tokens={[
          { name: "--surface-primary", label: "Primary surface" },
          { name: "--surface-muted", label: "Muted surface" },
        ]}
      />

      <Swatch
        title="Text"
        tokens={[
          { name: "--text-primary", label: "Primary text" },
          { name: "--text-secondary", label: "Secondary text" },
        ]}
      />

      <Swatch
        title="Borders"
        tokens={[
          { name: "--border-subtle", label: "Subtle" },
          { name: "--border-strong", label: "Strong" },
        ]}
      />

      <Swatch
        title="Actions"
        tokens={[
          { name: "--action-primary", label: "Primary action" },
          { name: "--action-hover", label: "Hover" },
          { name: "--action-subtle", label: "Subtle background" },
        ]}
      />

      <Swatch
        title="Accents"
        description="Supporting tones used sparingly. Never for interactive elements."
        tokens={[
          { name: "--accent-moss", label: "Moss" },
          { name: "--accent-soil", label: "Soil" },
          { name: "--accent-leaf", label: "Leaf" },
        ]}
      />

      <Divider />

      {/* ================================
          LAYER 3 — SEMANTIC TOKENS
          ================================ */}

      <h2>Semantic tokens</h2>
      <p>
        The tokens components should consume directly. These cascade
        automatically in dark mode — no component-level overrides needed.
      </p>

      <Swatch
        title="Core"
        description="Surfaces, text, borders, and primary action — the essentials for any component."
        tokens={[
          { name: "--color-surface", label: "Surface" },
          { name: "--color-surface-muted", label: "Surface muted" },
          { name: "--color-text", label: "Text" },
          { name: "--color-text-muted", label: "Text muted" },
          { name: "--color-border", label: "Border" },
          { name: "--color-border-strong", label: "Border strong" },
          { name: "--color-primary", label: "Primary" },
          { name: "--color-primary-hover", label: "Primary hover" },
          { name: "--color-primary-subtle", label: "Primary subtle" },
        ]}
      />

      <Swatch
        title="Selection & focus"
        description="Used by checkboxes, radios, toggle switches, and focus rings."
        tokens={[
          { name: "--color-selection", label: "Selection fill" },
          { name: "--color-selection-contrast", label: "Selection contrast" },
          { name: "--color-focus-ring", label: "Focus ring" },
        ]}
      />

      <Swatch
        title="Accents"
        description="Semantic aliases for the accent palette. Use intentionally."
        tokens={[
          { name: "--color-accent-moss", label: "Moss" },
          { name: "--color-accent-soil", label: "Soil" },
          { name: "--color-accent-leaf", label: "Leaf" },
        ]}
      />

      <Divider />

      {/* ================================
          STATUS
          ================================ */}

      <h2>Status</h2>
      <p>
        Semantic status colors grouped by meaning. Each status has a
        background, border, and foreground token — enough to build badges,
        alerts, and inline validation without reaching for raw scale values.
      </p>

      <Swatch
        title="Success"
        description="Confirmations, completed actions, and positive states."
        tokens={[
          { name: "--green-50", label: "Background" },
          { name: "--green-200", label: "Border" },
          { name: "--green-600", label: "Text / icon" },
        ]}
      />

      <Swatch
        title="Warning"
        description="Caution states and non-blocking alerts."
        tokens={[
          { name: "--amber-50", label: "Background" },
          { name: "--amber-200", label: "Border" },
          { name: "--amber-600", label: "Text / icon" },
        ]}
      />

      <Swatch
        title="Error"
        description="Destructive actions, validation failures, and blocking states."
        tokens={[
          { name: "--red-50", label: "Background" },
          { name: "--red-200", label: "Border" },
          { name: "--red-600", label: "Text / icon" },
          { name: "--color-error", label: "Semantic error" },
          { name: "--color-error-strong", label: "Semantic error strong" },
        ]}
      />

      <Swatch
        title="Info"
        description="Neutral informational callouts and contextual guidance."
        tokens={[
          { name: "--blue-50", label: "Background" },
          { name: "--blue-200", label: "Border" },
          { name: "--blue-600", label: "Text / icon" },
        ]}
      />

      <Divider />

      {/* ================================
          COMPONENT TOKENS
          ================================ */}

      <h2>Component tokens</h2>
      <p>
        Scoped tokens that individual components consume. These reference
        semantic tokens under the hood, so dark mode cascades automatically.
        Showing them here makes it easy to audit the full color contract each
        component depends on.
      </p>

      <Swatch
        title="Button — Primary"
        tokens={[
          { name: "--button-primary-bg", label: "Background" },
          { name: "--button-primary-bg-hover", label: "Background hover" },
          { name: "--button-primary-text", label: "Text" },
        ]}
      />

      <Swatch
        title="Button — Secondary"
        tokens={[
          { name: "--button-secondary-bg", label: "Background" },
          { name: "--button-secondary-bg-hover", label: "Background hover" },
          { name: "--button-secondary-text", label: "Text" },
          { name: "--button-secondary-border", label: "Border" },
        ]}
      />

      <Swatch
        title="Button — Ghost"
        tokens={[
          { name: "--button-ghost-bg", label: "Background" },
          { name: "--button-ghost-bg-hover", label: "Background hover" },
          { name: "--button-ghost-text", label: "Text" },
        ]}
      />

      <Swatch
        title="Input"
        tokens={[
          { name: "--input-bg", label: "Background" },
          { name: "--input-text", label: "Text" },
          { name: "--input-placeholder", label: "Placeholder" },
          { name: "--input-border", label: "Border" },
          { name: "--input-border-hover", label: "Border hover" },
          { name: "--input-focus-ring", label: "Focus ring" },
          { name: "--input-disabled-bg", label: "Disabled background" },
          { name: "--input-disabled-text", label: "Disabled text" },
          { name: "--input-error-border", label: "Error border" },
          { name: "--input-error-ring", label: "Error ring" },
        ]}
      />

      <Swatch
        title="Dropdown"
        tokens={[
          { name: "--dropdown-trigger-bg", label: "Trigger background" },
          { name: "--dropdown-trigger-text", label: "Trigger text" },
          { name: "--dropdown-trigger-border", label: "Trigger border" },
          { name: "--dropdown-menu-bg", label: "Menu background" },
          { name: "--dropdown-menu-border", label: "Menu border" },
          { name: "--dropdown-menu-shadow", label: "Menu shadow" },
          { name: "--dropdown-item-bg-hover", label: "Item hover" },
          { name: "--dropdown-item-text", label: "Item text" },
          { name: "--dropdown-item-text-muted", label: "Item text muted" },
          { name: "--dropdown-selected-icon", label: "Selected icon" },
        ]}
      />

      <Swatch
        title="Badge"
        tokens={[
          { name: "--badge-neutral-bg", label: "Neutral background" },
          { name: "--badge-neutral-text", label: "Neutral text" },
          { name: "--badge-neutral-border", label: "Neutral border" },
          { name: "--badge-success-bg", label: "Success background" },
          { name: "--badge-success-text", label: "Success text" },
          { name: "--badge-success-border", label: "Success border" },
          { name: "--badge-warning-bg", label: "Warning background" },
          { name: "--badge-warning-text", label: "Warning text" },
          { name: "--badge-warning-border", label: "Warning border" },
          { name: "--badge-error-bg", label: "Error background" },
          { name: "--badge-error-text", label: "Error text" },
          { name: "--badge-error-border", label: "Error border" },
          { name: "--badge-info-bg", label: "Info background" },
          { name: "--badge-info-text", label: "Info text" },
          { name: "--badge-info-border", label: "Info border" },
        ]}
      />

      <Swatch
        title="Alert"
        tokens={[
          { name: "--alert-success-bg", label: "Success background" },
          { name: "--alert-success-border", label: "Success border" },
          { name: "--alert-success-icon", label: "Success icon" },
          { name: "--alert-warning-bg", label: "Warning background" },
          { name: "--alert-warning-border", label: "Warning border" },
          { name: "--alert-warning-icon", label: "Warning icon" },
          { name: "--alert-error-bg", label: "Error background" },
          { name: "--alert-error-border", label: "Error border" },
          { name: "--alert-error-icon", label: "Error icon" },
          { name: "--alert-info-bg", label: "Info background" },
          { name: "--alert-info-border", label: "Info border" },
          { name: "--alert-info-icon", label: "Info icon" },
        ]}
      />

      <Swatch
        title="Link"
        tokens={[
          { name: "--link-text", label: "Text" },
          { name: "--link-text-hover", label: "Text hover" },
          { name: "--link-underline", label: "Underline" },
          { name: "--link-subtle-text", label: "Subtle text" },
          { name: "--link-subtle-text-hover", label: "Subtle text hover" },
          { name: "--link-focus-ring", label: "Focus ring" },
        ]}
      />
    </>
  )
}