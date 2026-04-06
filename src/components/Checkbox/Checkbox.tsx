"use client";

import React, { useId } from "react";
import FormField from "@/components/FormField";
import Text from "@/components/Text";
import styles from "./Checkbox.module.css";

type CheckboxProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> & {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
};

export default function Checkbox({
  label,
  hint,
  error,
  required,
  id,
  className,
  disabled,
  ...props
}: CheckboxProps) {
  const reactId = useId();
  const inputId = id ?? props.name ?? `checkbox-${reactId}`;

  return (
    <FormField
      id={inputId}
      label={label}
      hint={undefined}
      error={error}
      required={required}
      disabled={disabled}
      layout="inline"
      hideLabel
    >
      <label className={[styles.row, className].filter(Boolean).join(" ")}>
        <input
          id={inputId}
          type="checkbox"
          className={styles.native}
          aria-invalid={error ? true : undefined}
          aria-describedby={hint || error ? `${inputId}-help` : undefined}
          disabled={disabled}
          {...props}
        />

        <span
          className={[styles.box, error ? styles.box_error : ""]
            .filter(Boolean)
            .join(" ")}
          aria-hidden="true"
        />

        {label ? (
          <span className={styles.labelBlock}>
            <Text as="span" variant="label" className={styles.inlineLabel}>
              {label}
            </Text>

            {hint ? (
              <Text as="span" variant="caption" className={styles.inlineDesc}>
                {hint}
              </Text>
            ) : null}
          </span>
        ) : null}
      </label>
    </FormField>
  );
}
