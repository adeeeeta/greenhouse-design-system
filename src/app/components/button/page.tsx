import Button from "@/components/Button";
import Spinner from "@/components/Spinner";
import Divider from "@/components/Divider";
import { CaretDown, X, Check, InfoCircle } from "@/components/Icons/index";
import React from "react";

export default function ButtonDocsPage() {
  return (
    <>
      <h1>Button</h1>
      <p>
        Buttons trigger actions. This component supports kinds, sizes, icons,
        and standard states like hover, focus, and disabled.
      </p>

      <Divider />

      <h2>Kinds</h2>
      <p>
        Use <code>primary</code> for the main action, <code>secondary</code> for
        supporting actions, and <code>ghost</code> for low-emphasis actions.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button kind="primary">Primary</Button>
        <Button kind="secondary">Secondary</Button>
        <Button kind="ghost">Ghost</Button>
      </div>

      <Divider />

      <h2>Sizes</h2>
      <p>
        Three sizes are available. Use <code>sm</code> for compact interfaces,{" "}
        <code>md</code> as the default, and <code>lg</code> for prominent calls
        to action.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>

      <Divider />

      <h2>With icon</h2>
      <p>
        Pass an icon component via the <code>icon</code> prop to display it to
        the left of the label.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <Button kind="primary" icon={<Check />}>Confirm</Button>
        <Button kind="secondary" icon={<InfoCircle />}>Learn more</Button>
        <Button kind="ghost" icon={<CaretDown />}>Expand</Button>
      </div>

      <Divider />

      <h2>Icon only</h2>
      <p>
        Use <code>iconOnly</code> for actions that don't need a label. Always
        provide an <code>aria-label</code> for accessibility.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <Button kind="primary" icon={<Check />} iconOnly aria-label="Confirm" />
        <Button kind="secondary" icon={<X />} iconOnly aria-label="Close" size="sm" />
        <Button kind="ghost" icon={<CaretDown />} iconOnly aria-label="Expand" size="lg" />
      </div>

      <Divider />

      <h2>Loading state</h2>
      <p>
        Pass a <code>Spinner</code> via the <code>icon</code> prop to indicate
        a loading state. The spinner inherits the button's color automatically.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
        <Button kind="primary" icon={<Spinner size="sm" />}>Saving changes</Button>
        <Button kind="secondary" icon={<Spinner size="sm" />}>Loading</Button>
        <Button kind="primary" icon={<Spinner size="sm" />} iconOnly aria-label="Loading" />
      </div>

      <Divider />

      <h2>Disabled</h2>
      <p>
        Add the <code>disabled</code> prop to prevent interaction. Disabled
        buttons retain their visual style at reduced opacity.
      </p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Button disabled>Disabled</Button>
        <Button kind="secondary" disabled>Disabled</Button>
        <Button kind="primary" icon={<Check />} disabled>Disabled</Button>
      </div>
    </>
  );
}