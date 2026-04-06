import Spinner from "@/components/Spinner"
import Button from "@/components/Button"
import Divider from "@/components/Divider"

export default function SpinnerPage() {
  return (
    <>
      <h1>Spinner</h1>
      <p>
        Spinners communicate that content or an action is loading. Use them
        when the wait time is unknown or likely to be short.
      </p>

      <Divider />

      <h2>Sizes</h2>
      <p>
        Two sizes are available. Use <code>sm</code> for inline or compact
        contexts and <code>md</code> as the default.
      </p>
      <div style={{ display: "flex", gap: "var(--space-6)", alignItems: "center" }}>
        <Spinner size="sm" />
        <Spinner size="md" />
      </div>

      <Divider />

      <h2>With label</h2>
      <p>
        Pass a <code>label</code> to display descriptive text below the spinner.
      </p>
      <div style={{ display: "flex", gap: "var(--space-8)", alignItems: "flex-start" }}>
        <Spinner size="sm" label="Loading" />
        <Spinner size="md" label="Loading" />
      </div>

      <Divider />

      <h2>Inside a button</h2>
      <p>
        Spinners inherit the current color, so they adapt automatically when
        placed inside other components. Use the <code>icon</code> prop on{" "}
        <code>Button</code> to show a loading state.
      </p>
      <div style={{ display: "flex", gap: "var(--space-3)", alignItems: "center" }}>
        <Button kind="primary" icon={<Spinner size="sm" />}>Saving changes</Button>
        <Button kind="secondary" icon={<Spinner size="sm" />}>Loading</Button>
        <Button kind="primary" icon={<Spinner size="sm" />} iconOnly aria-label="Loading" />
      </div>

      <Divider />

      <h2>Greenhouse examples</h2>
      <p>
        Use spinners alongside status text to give users context on what is
        loading.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <Spinner size="sm" />
          <span style={{ fontSize: "var(--type-body-size)", color: "var(--color-text-muted)" }}>
            Syncing plant data
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)" }}>
          <Spinner size="sm" />
          <span style={{ fontSize: "var(--type-body-size)", color: "var(--color-text-muted)" }}>
            Updating care schedule
          </span>
        </div>
        <Spinner size="md" label="Loading your greenhouse" />
      </div>

      <Divider />

      <h2>Usage</h2>
      <p>
        Use <code>size</code> to control the spinner dimensions. Pass a{" "}
        <code>label</code> to display descriptive text below the spinner.
        The spinner inherits the current text color, so it adapts automatically
        to any context it is placed in. When used inside a <code>Button</code>,
        pass it via the <code>icon</code> prop.
      </p>
    </>
  )
}