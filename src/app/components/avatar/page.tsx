import Avatar from "@/components/Avatar"
import Divider from "@/components/Divider"

export default function AvatarPage() {
  return (
    <>
      <h1>Avatar</h1>
      <p>
        Avatars represent a person or entity. They support images, initials,
        and a generic icon fallback.
      </p>

      <Divider />

      <h2>Sizes</h2>
      <p>
        Three sizes are available — <code>sm</code>, <code>md</code>, and{" "}
        <code>lg</code>. The default is <code>md</code>.
      </p>
      <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
        <Avatar size="sm" initials="GH" />
        <Avatar size="md" initials="GH" />
        <Avatar size="lg" initials="GH" />
      </div>

      <Divider />

      <h2>Shapes</h2>
      <p>
        Use <code>circle</code> for people and <code>square</code> for
        entities like plants, teams, or organisations.
      </p>
      <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
        <Avatar shape="circle" initials="GH" />
        <Avatar shape="square" initials="GH" />
      </div>

      <Divider />

      <h2>Fallbacks</h2>
      <p>
        When no image is provided, Avatar falls back to initials. When neither
        is provided, it shows a generic person icon.
      </p>
      <div style={{ display: "flex", gap: "var(--space-4)", alignItems: "center" }}>
        <Avatar
          src="https://images.unsplash.com/photo-1664615407709-fcdbdf0289b5?w=200"
          alt="Green plant in white pot"
        />
        <Avatar initials="MD" />
        <Avatar />
      </div>

      <Divider />

      <h2>Greenhouse examples</h2>
      <p>
        Avatars work well in lists of team members or plant profiles where a
        visual identifier helps with scanning.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <Avatar size="md" initials="AP" shape="circle" />
          <div>
            <p style={{ margin: 0, fontWeight: "var(--font-weight-semibold)", fontSize: "var(--type-body-size)" }}>
              Aditya Patel
            </p>
            <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>
              Houseplant enthusiast
            </p>
          </div>
        </div>
        <Divider />
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <Avatar size="md" initials="MD" shape="circle" />
          <div>
            <p style={{ margin: 0, fontWeight: "var(--font-weight-semibold)", fontSize: "var(--type-body-size)" }}>
              Monstera Deliciosa
            </p>
            <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>
              Chlorophyll collector
            </p>
          </div>
        </div>
        <Divider />
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <Avatar size="md" shape="circle" />
          <div>
            <p style={{ margin: 0, fontWeight: "var(--font-weight-semibold)", fontSize: "var(--type-body-size)" }}>
              Invited member
            </p>
            <p style={{ margin: 0, fontSize: "var(--type-bodySm-size)", color: "var(--color-text-muted)" }}>
              Pending acceptance
            </p>
          </div>
        </div>
      </div>

      <Divider />

      <h2>Usage</h2>
      <p>
        Pass <code>src</code> and <code>alt</code> for an image avatar. Pass{" "}
        <code>initials</code> as a fallback when no image is available. If
        neither is provided, a generic person icon is shown. Use{" "}
        <code>size</code> to control dimensions and <code>shape</code> to
        switch between <code>circle</code> and <code>square</code>.
      </p>
    </>
  )
}