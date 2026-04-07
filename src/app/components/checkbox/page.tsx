"use client";
import { useState } from "react";
import Checkbox from "@/components/Checkbox";
import Divider from "@/components/Divider";

export default function CheckboxDocsPage() {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <h1>Checkbox</h1>
      <p>
        Checkboxes allow users to select one or more options from a set. They
        support hint text, error states, and disabled states.
      </p>

      <Divider />

      <h2>Default</h2>
      <p>
        A standard checkbox with a label and hint text.
      </p>
      <Checkbox
        label="Enable greenhouse mode"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        hint="Applies chlorophyll accents across interactive elements."
      />

      <Divider />

      <h2>Error</h2>
      <p>
        Use <code>error</code> to show a validation message below the checkbox.
      </p>
      <Checkbox
        label="Accept terms"
        checked={false}
        onChange={() => {}}
        error="You must accept to continue."
      />

      <Divider />

      <h2>Disabled</h2>
      <p>
        Add <code>disabled</code> to prevent interaction. Both checked and
        unchecked states are shown.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        <Checkbox label="Disabled unchecked" checked={false} onChange={() => {}} disabled />
        <Checkbox
          label="Email notifications"
          checked={true}
          onChange={() => {}}
          disabled
          hint="This setting is managed by your admin."
        />
      </div>

      <Divider />

      <h2>Usage</h2>
      <p>
        Always provide a <code>label</code> for accessibility. Use{" "}
        <code>hint</code> for helper text and <code>error</code> for validation
        messages — only one will show at a time, with <code>error</code> taking
        priority.
      </p>
    </>
  );
}