import TextInput from "@/components/TextInput"
import Divider from "@/components/Divider"

export default function TextInputDocsPage() {
  return (
    <>
      <h1>Text Input</h1>
      <p>
        Text inputs collect short-form user input. This component supports
        label, hint text, disabled, and error states.
      </p>

      <Divider />

      <h2>Default</h2>
      <p>
        A standard text input with a label. Use the <code>placeholder</code>{" "}
        prop to provide an example value.
      </p>
      <TextInput
        label="Plant name"
        placeholder="e.g. Monstera Deliciosa"
      />

      <Divider />

      <h2>Hint</h2>
      <p>
        Use <code>hint</code> to provide additional context below the input.
      </p>
      <TextInput
        label="Species"
        placeholder="e.g. Monstera deliciosa"
        hint="Enter the scientific name if known."
      />

      <Divider />

      <h2>Error</h2>
      <p>
        Use <code>error</code> to show a validation message below the input.
        The border and text turn red to draw attention to the issue.
      </p>
      <TextInput
        label="Watering interval"
        placeholder="e.g. 7"
        error="Please enter a valid number of days."
      />

      <Divider />

      <h2>Disabled</h2>
      <p>
        Add <code>disabled</code> to prevent interaction. Disabled inputs
        are visually dimmed and cannot be focused.
      </p>
      <TextInput
        label="Greenhouse ID"
        placeholder="GH-00142"
        disabled
        hint="This field is managed automatically."
      />

      <Divider />

      <h2>Required</h2>
      <p>
        Add <code>required</code> to mark a field as mandatory. A visual
        indicator is shown alongside the label.
      </p>
      <TextInput
        label="Plant name"
        placeholder="e.g. Monstera Deliciosa"
        required
      />

      <Divider />

      <h2>Usage</h2>
      <p>
        Always provide a <code>label</code> for accessibility. Use{" "}
        <code>hint</code> for helper text and <code>error</code> for
        validation messages — only one will show at a time, with{" "}
        <code>error</code> taking priority.
      </p>
    </>
  )
}