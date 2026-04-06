"use client";

import { useState } from "react";
import Checkbox from "@/components/Checkbox";

export default function CheckboxDocsPage() {
  const [checked, setChecked] = useState(true);

  return (
    <>
      <h1>Checkbox</h1>
      <p>Checkboxes let users toggle a setting on/off.</p>

      <div className="card">
        <h2>Default</h2>
        <Checkbox
          label="Enable greenhouse mode"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          hint="Applies chlorophyll accents across interactive elements."
        />

        <div style={{ height: 24 }} />

        <h2>Error</h2>
        <Checkbox
          label="Accept terms"
          checked={false}
          onChange={() => {}}
          error="You must accept to continue."
        />

        <div style={{ height: 24 }} />

        <h2>Disabled</h2>
        <Checkbox
          label="Email notifications"
          checked={true}
          onChange={() => {}}
          disabled
          hint="This setting is managed by your admin."
        />
      </div>
    </>
  );
}