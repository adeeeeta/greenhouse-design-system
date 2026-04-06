import Radio from "@/components/Radio"
import Divider from "@/components/Divider"

export default function RadioDocsPage() {
  return (
    <>
      <h1>Radio</h1>
      <p>
        Radio buttons allow users to select a single option from a set. Group
        them using the same <code>name</code> attribute.
      </p>

      <Divider />

      <h2>Default</h2>
      <p>
        A standard radio group. Only one option can be selected at a time
        within the same <code>name</code> group.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        <Radio label="Tropical zone" name="zone" value="tropical" />
        <Radio label="Succulent zone" name="zone" value="succulent" />
        <Radio label="Herb garden" name="zone" value="herb" />
      </div>

      <Divider />

      <h2>With hint</h2>
      <p>
        Use <code>hint</code> to provide additional context below a radio option.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        <Radio
          label="Daily watering"
          name="schedule"
          value="daily"
          hint="Best for seedlings and tropical plants."
        />
        <Radio
          label="Weekly watering"
          name="schedule"
          value="weekly"
          hint="Suitable for most established plants."
        />
        <Radio
          label="Fortnightly watering"
          name="schedule"
          value="fortnightly"
          hint="Ideal for succulents and cacti."
        />
      </div>

      <Divider />

      <h2>Disabled</h2>
      <p>
        Add <code>disabled</code> to prevent interaction on individual options.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        <Radio label="Available zone" name="zone-disabled" value="available" />
        <Radio label="Unavailable zone" name="zone-disabled" value="unavailable" disabled />
      </div>

      <Divider />

      <h2>Usage</h2>
      <p>
        Group radio buttons by giving them the same <code>name</code> prop.
        Each option needs a unique <code>value</code>. Use <code>hint</code>{" "}
        for helper text below individual options.
      </p>
    </>
  )
}