"use client"

import RadioOverview from "./RadioOverview"
import RadioDemo from "./RadioDemo"
import { Tabs } from "@adeeeeta/greenhouse";

export default function RadioDocsPage() {
  return (
    <>
      <h1>Radio</h1>
      <p>
        Radio buttons allow users to select a single option from a set. Group
        them using the same <code>name</code> attribute.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: <RadioOverview />,
          },
          {
            id: "demo",
            label: "Demo",
            content: <RadioDemo />,
          },
        ]}
      />
    </>
  )
}