"use client";

import React, { useId } from "react";
import FormField from "@/components/FormField";
import Text from "@/components/Text";
import styles from "./Radio.module.css";

type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
};

export default function Radio({
  label,
  hint,
  error,
  required,
  id,
  className,
  disabled,
  ...props
}: RadioProps) {
  const reactId = useId();
  const inputId = id ?? props.name ?? `radio-${reactId}`;

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
          type="radio"
          className={styles.native}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${inputId}-help` : undefined}
          disabled={disabled}
          {...props}
        />

        <span
          className={[styles.circle, error ? styles.circle_error : ""]
            .filter(Boolean)
            .join(" ")}
          aria-hidden="true"
        >
          <span className={styles.dot} />
        </span>

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
