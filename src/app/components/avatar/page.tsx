"use client"

import Tabs from "@/components/Tabs"
import AvatarOverview from "./AvatarOverview"
import AvatarDemo from "./AvatarDemo"

export default function AvatarPage() {
  return (
    <>
      <h1>Avatar</h1>
      <p>
        Avatars represent a person or entity. They support images, initials,
        and a generic icon fallback.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: <AvatarOverview />,
          },
          {
            id: "demo",
            label: "Demo",
            content: <AvatarDemo />,
          },
        ]}
      />
    </>
  )
}