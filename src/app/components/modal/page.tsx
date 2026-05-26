"use client"

import Tabs from "@/components/Tabs"
import ModalOverview from "./ModalOverview"
import ModalDemo from "./ModalDemo"

export default function ModalPage() {
  return (
    <>
      <h1>Modal</h1>
      <p>
        Modals focus the user's attention on a specific task or piece of
        information. They block interaction with the rest of the page until
        dismissed.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: <ModalOverview />,
          },
          {
            id: "demo",
            label: "Demo",
            content: <ModalDemo />,
          },
        ]}
      />
    </>
  )
}