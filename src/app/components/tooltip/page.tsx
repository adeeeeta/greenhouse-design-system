"use client"

import Tabs from "@/components/Tabs"
import TooltipOverview from "./TooltipOverview"
import TooltipDemo from "./TooltipDemo"

export default function TooltipPage() {
  return (
    <>
      <h1>Tooltip</h1>
      <p>
        Tooltips display short, informational text when a user hovers, focuses,
        or taps a trigger element.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: <TooltipOverview />,
          },
          {
            id: "demo",
            label: "Demo",
            content: <TooltipDemo />,
          },
        ]}
      />
    </>
  )
}