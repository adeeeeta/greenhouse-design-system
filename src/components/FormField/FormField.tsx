import React from "react";
import styles from "./FormField.module.css";
import Text from "@/components/Text";

type FormFieldProps = {
  id: string;
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  layout?: "stacked" | "inline";
  hideLabel?: boolean;
  children: React.ReactNode;
};

export default function FormField({
  id,
  label,
  hint,
  error,
  required,
  disabled,
  layout = "stacked",
  hideLabel = false,
  children,
}: FormFieldProps) {
  const helpText = error ?? hint;
  const hasHelp = Boolean(helpText);

  return (
    <div
      className={[styles.field, layout === "inline" ? styles.field_inline : ""]
        .filter(Boolean)
        .join(" ")}
      data-disabled={disabled ? "true" : "false"}
      data-invalid={error ? "true" : "false"}
    >
      <div className={styles.row}>
        {label && !hideLabel ? (
          <Text
            as="label"
            variant="label"
            className={styles.label}
            htmlFor={id}
          >
            {label}
            {required ? <span className={styles.required}> *</span> : null}
          </Text>
        ) : null}

        <div className={styles.control}>{children}</div>
      </div>

      {hasHelp ? (
        <Text
          as="div"
          variant="bodySm"
          id={`${id}-help`}
          className={[styles.help, error ? styles.help_error : ""]
            .filter(Boolean)
            .join(" ")}
        >
          {helpText}
        </Text>
      ) : null}
    </div>
  );
}
