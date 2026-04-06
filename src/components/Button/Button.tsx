import React from "react";
import styles from "./Button.module.css";
import Text from "@/components/Text";

type ButtonKind = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: ButtonKind;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconOnly?: boolean;
  unstyledContent?: boolean;
};

export default function Button({
  kind = "primary",
  size = "md",
  icon,
  iconOnly = false,
  className,
  unstyledContent = false,
  children,
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[`kind_${kind}`],
    styles[`size_${size}`],
    iconOnly ? styles.iconOnly : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (iconOnly) {
    return (
      <button className={classes} {...props}>
        <span className={styles.iconWrapper} aria-hidden="true">
          {icon}
        </span>
      </button>
    );
  }

  return (
    <button className={classes} {...props}>
      {unstyledContent ? (
        children
      ) : (
        <>
          {icon && (
            <span className={styles.iconWrapper} aria-hidden="true">
              {icon}
            </span>
          )}
          <Text as="span" variant="label">
            {children}
          </Text>
        </>
      )}
    </button>
  );
}