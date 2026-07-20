"use client"

import TextInputOverview from "./TextInputOverview"
import TextInputDemo from "./TextInputDemo"
import { Tabs } from "@greenhouse/react";

export default function TextInputDocsPage() {
  return (
    <>
      <h1>Text Input</h1>
      <p>
        Text inputs collect short-form user input. This component supports
        label, hint text, disabled, and error states.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: <TextInputOverview />,
          },
          {
            id: "demo",
            label: "Demo",
            content: <TextInputDemo />,
          },
        ]}
      />
    </>
  )
}