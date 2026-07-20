"use client"

import CardOverview from "./CardOverview"
import CardDemo from "./CardDemo"
import { Tabs } from "@greenhouse/react";

export default function CardPage() {
  return (
    <>
      <h1>Card</h1>
      <p>
        Cards group related content and actions into a single container. They
        come in three visual styles and support optional header, footer, and
        cover image sections.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: <CardOverview />,
          },
          {
            id: "demo",
            label: "Demo",
            content: <CardDemo />,
          },
        ]}
      />
    </>
  )
}