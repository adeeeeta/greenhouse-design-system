"use client"

import ButtonOverview from "./ButtonOverview"
import ButtonDemo from "./ButtonDemo"
import { Tabs } from "@adeeeeta/greenhouse";

export default function ButtonDocsPage() {
  return (
    <>
      <h1>Button</h1>
      <p>
        Buttons trigger actions. This component supports kinds, sizes, icons,
        and standard states like hover, focus, and disabled.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: <ButtonOverview />,
          },
          {
            id: "demo",
            label: "Demo",
            content: <ButtonDemo />,
          },
        ]}
      />
    </>
  )
}