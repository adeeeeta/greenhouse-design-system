"use client"

import BadgeOverview from "./BadgeOverview"
import BadgeDemo from "./BadgeDemo"
import { Tabs } from "@greenhouse/react";

export default function BadgeDocsPage() {
  return (
    <>
      <h1>Badge</h1>
      <p>
        Badges communicate status or category at a glance. They are non-interactive
        and should always be accompanied by a text label.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: <BadgeOverview />,
          },
          {
            id: "demo",
            label: "Demo",
            content: <BadgeDemo />,
          },
        ]}
      />
    </>
  )
}