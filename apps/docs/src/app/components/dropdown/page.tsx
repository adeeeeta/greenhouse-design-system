"use client"

import DropdownOverview from "./DropdownOverview"
import DropdownDemo from "./DropdownDemo"
import { Tabs } from "@greenhouse/react";

export default function DropdownDocsPage() {
  return (
    <>
      <h1>Dropdown</h1>
      <p>
        Dropdowns allow users to select a single option from a list. This
        component is a custom listbox with full keyboard navigation support.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: <DropdownOverview />,
          },
          {
            id: "demo",
            label: "Demo",
            content: <DropdownDemo />,
          },
        ]}
      />
    </>
  )
}