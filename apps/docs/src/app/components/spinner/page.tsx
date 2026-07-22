"use client"

import SpinnerOverview from "./SpinnerOverview"
import SpinnerDemo from "./SpinnerDemo"
import { Tabs } from "@adeeeeta/greenhouse";

export default function SpinnerPage() {
  return (
    <>
      <h1>Spinner</h1>
      <p>
        Spinners communicate that content or an action is loading. Use them
        when the wait time is unknown or likely to be short.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: <SpinnerOverview />,
          },
          {
            id: "demo",
            label: "Demo",
            content: <SpinnerDemo />,
          },
        ]}
      />
    </>
  )
}