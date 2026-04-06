"use client"

import { useState } from "react"
import Toggle from "@/components/Toggle"
import Divider from "@/components/Divider"

export default function TogglePage() {
  const [controlled, setControlled] = useState(false)

  return (
    <>
      <h1>Toggle</h1>
      <p>
        Toggles allow users to switch a setting on or off instantly. They are
        best used for binary actions that take effect immediately.
      </p>

      <Divider />

      <h2>Default</h2>
      <p>
        A basic uncontrolled toggle that manages its own on/off state.
      </p>
      <Toggle />

      <Divider />

      <h2>With state label</h2>
      <p>
        Pass <code>showLabel</code> to display an <code>On</code> or{" "}
        <code>Off</code> label beside the track.
      </p>
      <Toggle showLabel />

      <Divider />

      <h2>Default checked</h2>
      <p>
        Use <code>defaultChecked</code> to set the initial state to on.
      </p>
      <Toggle defaultChecked />

      <Divider />

      <h2>Controlled</h2>
      <p>
        Use <code>checked</code> and <code>onChange</code> together to control
        the toggle from a parent component. Current state:{" "}
        <code>{controlled ? "On" : "Off"}</code>
      </p>
      <Toggle checked={controlled} onChange={setControlled} showLabel />

      <Divider />

      <h2>Disabled</h2>
      <p>
        Add <code>disabled</code> to prevent interaction. Disabled toggles
        retain their visual style at reduced opacity.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-3)" }}>
        <Toggle disabled />
        <Toggle disabled defaultChecked />
      </div>

      <Divider />

      <h2>Greenhouse examples</h2>
      <p>
        Toggles work well for settings that take effect immediately, like
        enabling or disabling greenhouse automations.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-4)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "320px" }}>
          <span style={{ fontSize: "var(--type-body-size)", color: "var(--color-text)" }}>
            Automatic watering
          </span>
          <Toggle defaultChecked showLabel />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "320px" }}>
          <span style={{ fontSize: "var(--type-body-size)", color: "var(--color-text)" }}>
            Growth notifications
          </span>
          <Toggle showLabel />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "320px" }}>
          <span style={{ fontSize: "var(--type-body-size)", color: "var(--color-text)" }}>
            Frost alerts
          </span>
          <Toggle defaultChecked showLabel />
        </div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "320px" }}>
          <span style={{ fontSize: "var(--type-body-size)", color: "var(--color-text)" }}>
            Humidity monitoring
          </span>
          <Toggle disabled showLabel />
        </div>
      </div>

      <Divider />

      <h2>Usage</h2>
      <p>
        Use <code>defaultChecked</code> for an uncontrolled toggle that manages
        its own state. Use <code>checked</code> with <code>onChange</code> when
        a parent component needs to control the value. Pass{" "}
        <code>showLabel</code> to display an <code>On</code> /{" "}
        <code>Off</code> label beside the track.
      </p>
    </>
  )
}