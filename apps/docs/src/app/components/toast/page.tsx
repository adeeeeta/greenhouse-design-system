"use client"

import ToastOverview from "./ToastOverview"
import ToastDemo from "./ToastDemo"
import { Tabs } from "@adeeeeta/greenhouse";

export default function ToastPage() {
  return (
    <>
      <h1>Toast</h1>
      <p>
        Toasts are brief, non-disruptive notifications that appear at the
        bottom right of the screen. They communicate feedback on an action
        without interrupting the user's workflow.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: <ToastOverview />,
          },
          {
            id: "demo",
            label: "Demo",
            content: <ToastDemo />,
          },
        ]}
      />
    </>
  )
}