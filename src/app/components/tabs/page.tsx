"use client"

import Tabs from "@/components/Tabs"
import TabsOverview from "./TabsOverview"
import TabsDemo from "./TabsDemo"

export default function TabsPage() {
  return (
    <>
      <h1>Tabs</h1>
      <p>
        Tabs organize content into distinct sections, allowing users to switch
        between them without leaving the page.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: <TabsOverview />,
          },
          {
            id: "demo",
            label: "Demo",
            content: <TabsDemo />,
          },
        ]}
      />
    </>
  )
}