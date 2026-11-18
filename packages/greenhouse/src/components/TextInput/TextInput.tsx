import styles from "./TextInput.module.css";
import FormField from "../FormField";
import { useId } from "react";

type TextInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
};

export default function TextInput({
  label,
  hint,
  error,
  required,
  id,
  className,
  disabled,
  ...props
}: TextInputProps) {
  const reactId = useId();
  // Never fall back to name: two forms on one page can share a name, which would duplicate ids.
  const inputId = id ?? `text-input-${reactId}`;

  return (
    <FormField
      id={inputId}
      label={label}
      hint={hint}
      error={error}
      required={required}
      disabled={disabled}
    >
      <input
        id={inputId}
        className={[styles.input, error ? styles.input_error : "", className]
          .filter(Boolean)
          .join(" ")}
        aria-invalid={error ? true : undefined}
        aria-describedby={hint || error ? `${inputId}-help` : undefined}
        disabled={disabled}
        {...props}
      />
    </FormField>
  );
}