import React from "react";
import styles from "./Link.module.css";
import ArrowSquareOut from "../Icons/ArrowSquareOut";

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "default" | "subtle";
  external?: boolean;
};

export default function Link({
  variant = "default",
  external = false,
  children,
  className,
  ...rest
}: LinkProps) {
  const cls = [
    styles.link,
    variant === "subtle" ? styles.subtle : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      className={cls}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...rest}
    >
      {children}
      {external ? (
        <span className={styles.externalIcon}>
          <ArrowSquareOut size={12}/>
        </span>
      ) : null}
    </a>
  );
}
