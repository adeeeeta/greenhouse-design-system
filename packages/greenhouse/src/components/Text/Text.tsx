import React from "react";

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
  display: "gh-display",
  h1: "gh-h1",
  h2: "gh-h2",
  h3: "gh-h3",
  h4: "gh-h4",
  body: "gh-body",
  bodyMedium: "gh-bodyMedium",
  bodySm: "gh-bodySm",
  bodySmMedium: "gh-bodySmMedium",
  label: "gh-label",
  labelStrong: "gh-labelStrong",
  caption: "gh-caption",
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
