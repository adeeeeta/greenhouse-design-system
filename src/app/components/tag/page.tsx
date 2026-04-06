"use client"

import { useState } from "react"
import Tag from "@/components/Tag"
import Divider from "@/components/Divider"
import { CheckCircle, AlertCircle, InfoCircle } from "@/components/Icons"

export default function TagPage() {
  const [tags, setTags] = useState([
    { id: 1, label: "Monstera", variant: "neutral" as const },
    { id: 2, label: "Tropical", variant: "info" as const },
    { id: 3, label: "Established", variant: "success" as const },
    { id: 4, label: "Needs water", variant: "warning" as const },
    { id: 5, label: "Root rot", variant: "error" as const },
  ])

  const removeTag = (id: number) => {
    setTags((prev) => prev.filter((t) => t.id !== id))
  }

  return (
    <>
      <h1>Tag</h1>
      <p>
        Tags represent user-applied labels or filters. Unlike badges, tags are
        interactive — they can be dismissed and typically represent something
        the user has actively added.
      </p>

      <Divider />

      <h2>Variants</h2>
      <p>
        Five variants are available, matching the same semantic meanings as
        Badge. Use the variant that best reflects the nature of the tag.
      </p>
      <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
        <Tag label="Neutral" variant="neutral" />
        <Tag label="Success" variant="success" />
        <Tag label="Warning" variant="warning" />
        <Tag label="Error" variant="error" />
        <Tag label="Info" variant="info" />
      </div>

      <Divider />

      <h2>Sizes</h2>
      <p>
        Two sizes are available. Use <code>sm</code> for compact contexts like
        input fields and <code>md</code> as the default.
      </p>
      <div style={{ display: "flex", gap: "var(--space-2)", alignItems: "center", flexWrap: "wrap" }}>
        <Tag label="Small" variant="neutral" size="sm" />
        <Tag label="Medium" variant="neutral" size="md" />
      </div>

      <Divider />

      <h2>With icon</h2>
      <p>
        Pass an icon via the <code>icon</code> prop to add a leading visual
        that helps identify the type of tag at a glance.
      </p>
      <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
        <Tag label="Established" variant="success" icon={<CheckCircle size={12} />} />
        <Tag label="Root rot" variant="error" icon={<AlertCircle size={12} />} />
        <Tag label="Tropical" variant="info" icon={<InfoCircle size={12} />} />
      </div>

      <Divider />

      <h2>Dismissible</h2>
      <p>
        Pass <code>onDismiss</code> to show a remove button. The parent
        component is responsible for removing the tag from its list when
        dismissed. Try removing tags below.
      </p>
      <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
        {tags.length > 0 ? (
          tags.map((tag) => (
            <Tag
              key={tag.id}
              label={tag.label}
              variant={tag.variant}
              onDismiss={() => removeTag(tag.id)}
            />
          ))
        ) : (
          <p style={{ margin: 0, color: "var(--color-text-muted)", fontSize: "var(--type-bodySm-size)" }}>
            All tags dismissed — refresh to reset.
          </p>
        )}
      </div>

      <Divider />

      <h2>Greenhouse examples</h2>
      <p>
        Tags work well for plant attributes, applied filters, and care labels
        that users can add and remove.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <div>
          <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Plant labels</p>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            <Tag label="Tropical" variant="info" icon={<InfoCircle size={12} />} onDismiss={() => {}} />
            <Tag label="Low light" variant="neutral" onDismiss={() => {}} />
            <Tag label="Pet safe" variant="success" icon={<CheckCircle size={12} />} onDismiss={() => {}} />
            <Tag label="Toxic" variant="error" icon={<AlertCircle size={12} />} onDismiss={() => {}} />
          </div>
        </div>
        <div>
          <p style={{ margin: "0 0 var(--space-2) 0", fontWeight: "var(--font-weight-medium)" }}>Applied filters</p>
          <div style={{ display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            <Tag label="Zone: Tropical" variant="neutral" size="sm" onDismiss={() => {}} />
            <Tag label="Stage: Seedling" variant="neutral" size="sm" onDismiss={() => {}} />
            <Tag label="Needs water" variant="warning" size="sm" onDismiss={() => {}} />
          </div>
        </div>
      </div>

      <Divider />

      <h2>Usage</h2>
      <p>
        Pass a <code>label</code> and optional <code>variant</code> to control
        appearance. Add <code>onDismiss</code> to show a remove button — the
        parent is responsible for updating the list. Use <code>icon</code> for
        a leading visual and <code>size</code> to switch between{" "}
        <code>sm</code> and <code>md</code>.
      </p>
    </>
  )
}