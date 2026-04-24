"use client"

import Dropdown from "@/components/Dropdown"
import type { DropdownOption } from "@/components/Dropdown/Dropdown"
import TextInput from "@/components/TextInput"
import Toggle from "@/components/Toggle"
import styles from "./DemoControls.module.css"

interface SelectControlProps {
  label: string
  value: string
  options: string[] | { value: string; label: string }[]
  onChange: (value: string) => void
}

export function SelectControl({ label, value, options, onChange }: SelectControlProps) {
  const dropdownOptions: DropdownOption[] = options.map((opt) =>
    typeof opt === "string"
      ? { value: opt, label: opt }
      : opt
  )

  return (
    <div className={styles.control}>
      <Dropdown
        label={label}
        options={dropdownOptions}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

interface ToggleControlProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export function ToggleControl({ label, checked, onChange }: ToggleControlProps) {
  return (
    <div className={styles.control}>
      <div className={styles.toggleRow}>
        <span className={styles.toggleLabel}>{label}</span>
        <Toggle
          checked={checked}
          onChange={(val) => onChange(val)}
          ariaLabel={label}
        />
      </div>
    </div>
  )
}

interface TextControlProps {
  label: string
  value: string
  onChange: (value: string) => void
}

export function TextControl({ label, value, onChange }: TextControlProps) {
  return (
    <div className={styles.control}>
      <TextInput
        label={label}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}