"use client"

import AlertOverview from "./AlertOverview"
import AlertDemo from "./AlertDemo"
import { Tabs } from "@greenhouse/react";

export default function AlertDocsPage() {
  return (
    <>
      <h1>Alert</h1>
      <p>
        Alerts communicate contextual feedback messages to the user. They
        support an optional title, body text, and a dismiss action.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: <AlertOverview />,
          },
          {
            id: "demo",
            label: "Demo",
            content: <AlertDemo />,
          },
        ]}
      />
    </>
  )
}