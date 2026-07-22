"use client"

import TagOverview from "./TagOverview"
import TagDemo from "./TagDemo"
import { Tabs } from "@adeeeeta/greenhouse";

export default function TagPage() {
  return (
    <>
      <h1>Tag</h1>
      <p>
        Tags represent user-applied labels or filters. Unlike badges, tags are
        interactive — they can be dismissed and typically represent something
        the user has actively added.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: <TagOverview />,
          },
          {
            id: "demo",
            label: "Demo",
            content: <TagDemo />,
          },
        ]}
      />
    </>
  )
}