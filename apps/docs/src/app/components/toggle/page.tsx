"use client"

import ToggleOverview from "./ToggleOverview"
import ToggleDemo from "./ToggleDemo"
import { Tabs } from "@greenhouse/react";

export default function TogglePage() {
  return (
    <>
      <h1>Toggle</h1>
      <p>
        Toggles allow users to switch a setting on or off instantly. They are
        best used for binary actions that take effect immediately.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: <ToggleOverview />,
          },
          {
            id: "demo",
            label: "Demo",
            content: <ToggleDemo />,
          },
        ]}
      />
    </>
  )
}