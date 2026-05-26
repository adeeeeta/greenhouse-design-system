"use client"

import Tabs from "@/components/Tabs"
import CheckboxOverview from "./CheckboxOverview"
import CheckboxDemo from "./CheckboxDemo"

export default function CheckboxDocsPage() {
  return (
    <>
      <h1>Checkbox</h1>
      <p>
        Checkboxes allow users to select one or more options from a set. They
        support hint text, error states, and disabled states.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: <CheckboxOverview />,
          },
          {
            id: "demo",
            label: "Demo",
            content: <CheckboxDemo />,
          },
        ]}
      />
    </>
  )
}