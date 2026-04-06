import Tooltip from "@/components/Tooltip"
import Button from "@/components/Button"
import Divider from "@/components/Divider"

export default function TooltipPage() {
  return (
    <>
      <h1>Tooltip</h1>
      <p>
        Tooltips display short, informational text when a user hovers, focuses,
        or taps a trigger element.
      </p>

      <Divider />

      <h2>Positions</h2>
      <p>
        Use the <code>position</code> prop to control which side of the trigger
        the tooltip appears on.
      </p>
      <div style={{ display: "flex", gap: "48px", flexWrap: "wrap", padding: "32px 0" }}>
        <Tooltip content="Appears above" position="above">
          <Button kind="secondary" size="md">Above</Button>
        </Tooltip>
        <Tooltip content="Appears below" position="below">
          <Button kind="secondary" size="md">Below</Button>
        </Tooltip>
        <Tooltip content="Appears left" position="left">
          <Button kind="secondary" size="md">Left</Button>
        </Tooltip>
        <Tooltip content="Appears right" position="right">
          <Button kind="secondary" size="md">Right</Button>
        </Tooltip>
      </div>

      <Divider />

      <h2>Usage</h2>
      <p>
        Wrap any element with a Tooltip and pass a <code>content</code> string.
        The <code>position</code> prop defaults to <code>above</code> if not specified.
      </p>
    </>
  )
}