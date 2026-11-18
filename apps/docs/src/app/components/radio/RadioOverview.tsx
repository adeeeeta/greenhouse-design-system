import { Radio, Divider, Text } from "@adeeeeta/greenhouse";

// A fieldset gives the group its name for screen readers; these styles remove the browser's default border.
const groupStyle = { border: 0, padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: "var(--space-3)" };
const legendStyle = { padding: 0, marginBottom: "var(--space-3)" };

export default function RadioOverview() {
  return (
    <>
      <Divider />

      <h2 id="default">Default</h2>
      <p>
        A standard radio group. Only one option can be selected at a time
        within the same <code>name</code> group.
      </p>
      <fieldset style={groupStyle}>
        <Text as="legend" variant="label" style={legendStyle}>Growing zone</Text>
        <Radio label="Tropical zone" name="zone" value="tropical" />
        <Radio label="Succulent zone" name="zone" value="succulent" />
        <Radio label="Herb garden" name="zone" value="herb" />
      </fieldset>

      <Divider />

      <h2 id="with-hint">With hint</h2>
      <p>
        Use <code>hint</code> to provide additional context below a radio option.
      </p>
      <fieldset style={groupStyle}>
        <Text as="legend" variant="label" style={legendStyle}>Watering schedule</Text>
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
      </fieldset>

      <Divider />

      <h2 id="disabled">Disabled</h2>
      <p>
        Add <code>disabled</code> to prevent interaction on individual options.
      </p>
      <fieldset style={groupStyle}>
        <Text as="legend" variant="label" style={legendStyle}>Zone availability</Text>
        <Radio label="Available zone" name="zone-disabled" value="available" />
        <Radio label="Unavailable zone" name="zone-disabled" value="unavailable" disabled />
      </fieldset>

      <Divider />

      <h2 id="usage">Usage</h2>
      <p>
        Group radio buttons by giving them the same <code>name</code> prop.
        Each option needs a unique <code>value</code>. Wrap the group in a{" "}
        <code>fieldset</code> with a <code>legend</code> that asks the question,
        so screen readers announce it. Use <code>hint</code> for helper text
        below individual options.
      </p>
    </>
  )
}