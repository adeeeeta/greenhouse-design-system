import styles from "./Badge.module.css";

type BadgeVariant = "neutral" | "success" | "warning" | "error" | "info";
type BadgeSize = "sm" | "md";

type BadgeProps = {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
};

export default function Badge({
  label,
  variant = "neutral",
  size = "md",
  className,
}: BadgeProps) {
  const classes = [
    styles.badge,
    styles[`variant_${variant}`],
    styles[`size_${size}`],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return <span className={classes}>{label}</span>;
}
