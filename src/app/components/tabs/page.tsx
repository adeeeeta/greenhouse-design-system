"use client"

import Tabs from "@/components/Tabs"
import Badge from "@/components/Badge"
import Divider from "@/components/Divider"

export default function TabsPage() {
  return (
    <>
      <h1>Tabs</h1>
      <p>
        Tabs organize content into distinct sections, allowing users to switch
        between them without leaving the page.
      </p>

      <Divider />

      <h2>Underline</h2>
      <p>
        The default tab style. Use for primary navigation within a page or
        content area.
      </p>
      <Tabs
        variant="underline"
        tabs={[
          {
            id: "overview",
            label: "Overview",
            content: (
              <div>
                <h3>Monstera Deliciosa</h3>
                <p>A tropical plant native to southern Mexico and Panama. Known for its dramatic, glossy leaves with natural holes and splits.</p>
                <Divider />
                <div style={{ display: "flex", gap: "var(--space-2)", marginTop: "var(--space-4)" }}>
                  <Badge label="Sprout" variant="success" />
                  <Badge label="Tropical" variant="info" />
                </div>
              </div>
            ),
          },
          {
            id: "care",
            label: "Care schedule",
            content: (
              <div>
                <h3>Care schedule</h3>
                <p>Water every 7–10 days in spring and summer. Reduce to every 14 days in autumn and winter.</p>
                <Divider label="Light requirements" />
                <p>Thrives in bright, indirect light. Avoid direct sunlight which can scorch the leaves.</p>
              </div>
            ),
          },
          {
            id: "history",
            label: "Growth history",
            content: (
              <div>
                <h3>Growth history</h3>
                <p>Added to your greenhouse on 12 March 2024. Has produced 4 new leaves since tracking began.</p>
                <Divider label="Milestones" />
                <p>First aerial root spotted June 2024. Repotted into a larger container August 2024.</p>
              </div>
            ),
          },
        ]}
      />

      <Divider />

      <h2>Pill</h2>
      <p>
        Use the pill variant for secondary navigation or filtering within a
        section.
      </p>
      <Tabs
        variant="pill"
        tabs={[
          {
            id: "all",
            label: "All plants",
            content: (
              <div>
                <h3>All plants</h3>
                <p>You have 12 plants across 3 growing zones in your greenhouse.</p>
              </div>
            ),
          },
          {
            id: "tropical",
            label: "Tropical",
            content: (
              <div>
                <h3>Tropical</h3>
                <p>5 tropical plants currently in your collection. Next watering due in 2 days.</p>
              </div>
            ),
          },
          {
            id: "succulents",
            label: "Succulents",
            content: (
              <div>
                <h3>Succulents</h3>
                <p>4 succulents in your collection. All healthy — last watered 3 days ago.</p>
              </div>
            ),
          },
          {
            id: "herbs",
            label: "Herbs",
            content: (
              <div>
                <h3>Herbs</h3>
                <p>3 herbs currently growing. Basil is ready for harvesting.</p>
              </div>
            ),
          },
        ]}
      />

      <Divider />

      <h2>Usage</h2>
      <p>
        Pass a <code>tabs</code> array where each item has an <code>id</code>,{" "}
        <code>label</code>, and <code>content</code>. Use <code>variant</code> to
        switch between <code>underline</code> and <code>pill</code> styles.
        The first tab is active by default, or pass <code>defaultTab</code> with
        a tab <code>id</code> to set a different starting tab.
      </p>
    </>
  )
}