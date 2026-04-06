"use client"

import styles from "./Toggle.module.css"

interface ToggleProps {
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  showLabel?: boolean
  ariaLabel?: string
}

export default function Toggle({
  checked,
  defaultChecked,
  onChange,
  disabled = false,
  showLabel = false,
  ariaLabel,
}: ToggleProps) {
  return (
    <label className={`${styles.wrapper} ${disabled ? styles.disabled : ""}`}>
      <input
        type="checkbox"
        role="switch"
        className={styles.input}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        aria-label={ariaLabel}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <span className={styles.track}>
        <span className={styles.thumb} />
      </span>
      {showLabel && (
        <span className={styles.stateLabel} aria-hidden="true" />
      )}
    </label>
  )
}