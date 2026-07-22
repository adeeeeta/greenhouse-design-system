import React from "react";
import styles from "./Text.module.css";

type TextVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body"
  | "bodyMedium"
  | "bodySm"
  | "bodySmMedium"
  | "label"
  | "labelStrong"
  | "caption";

const variantClass: Record<TextVariant, string> = {
  display: styles.display,
  h1: styles.h1,
  h2: styles.h2,
  h3: styles.h3,
  h4: styles.h4,
  body: styles.body,
  bodyMedium: styles.bodyMedium,
  bodySm: styles.bodySm,
  bodySmMedium: styles.bodySmMedium,
  label: styles.label,
  labelStrong: styles.labelStrong,
  caption: styles.caption,
};

type TextProps<T extends React.ElementType> = {
  as?: T;
  variant?: TextVariant;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export default function Text<T extends React.ElementType = "p">({
  as,
  variant = "body",
  className = "",
  children,
  ...rest
}: TextProps<T>) {
  const Comp = (as ?? "p") as React.ElementType;
  const cls = `${variantClass[variant]} ${className}`.trim();
  return (
    <Comp className={cls} {...rest}>
      {children}
    </Comp>
  );
}