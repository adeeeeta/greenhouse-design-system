"use client"

import { useState } from "react"
import { Dropdown, Divider } from "@adeeeeta/greenhouse";

const zoneOptions = [
  { value: "tropical", label: "Tropical zone" },
  { value: "succulent", label: "Succulent zone" },
  { value: "herb", label: "Herb garden" },
  { value: "fern", label: "Fern corner", description: "Shaded, high humidity" },
]

const stageOptions = [
  { value: "seedling", label: "Seedling" },
  { value: "sprout", label: "Sprout" },
  { value: "established", label: "Established" },
  { value: "mature", label: "Mature" },
]

export default function DropdownOverview() {
  const [zone, setZone] = useState("")
  const [stage, setStage] = useState("")

  return (
    <>
      <Divider />

      <h2 id="default">Default</h2>
      <p>
        A standard dropdown with a label and placeholder. Options are revealed
        on click or by pressing Enter or Space.
      </p>
      <Dropdown
        label="Growing zone"
        placeholder="Select a zone"
        options={zoneOptions}
        value={zone}
        onChange={setZone}
      />

      <Divider />

      <h2 id="with-descriptions">With descriptions</h2>
      <p>
        Add a <code>description</code> to individual options to provide
        additional context below the option label.
      </p>
      <Dropdown
        label="Growth stage"
        placeholder="Select a stage"
        options={stageOptions}
        value={stage}
        onChange={setStage}
      />

      <Divider />

      <h2 id="hint">Hint</h2>
      <p>
        Use <code>hint</code> to provide additional context below the dropdown.
      </p>
      <Dropdown
        label="Growing zone"
        placeholder="Select a zone"
        options={zoneOptions}
        value={zone}
        onChange={setZone}
        hint="Plants will be grouped by their assigned zone."
      />

      <Divider />

      <h2 id="error">Error</h2>
      <p>
        Use <code>error</code> to show a validation message below the dropdown.
      </p>
      <Dropdown
        label="Growing zone"
        placeholder="Select a zone"
        options={zoneOptions}
        value=""
        onChange={setZone}
        error="Please select a growing zone."
      />

      <Divider />

      <h2 id="disabled">Disabled</h2>
      <p>
        Add <code>disabled</code> to prevent interaction.
      </p>
      <Dropdown
        label="Growing zone"
        placeholder="Select a zone"
        options={zoneOptions}
        value=""
        onChange={setZone}
        disabled
      />

      <Divider />

      <h2 id="usage">Usage</h2>
      <p>
        Pass an <code>options</code> array where each item has a{" "}
        <code>value</code> and <code>label</code>. Control the selected value
        with <code>value</code> and <code>onChange</code>. Use{" "}
        <code>hint</code> for helper text and <code>error</code> for
        validation messages.
      </p>
    </>
  )
}