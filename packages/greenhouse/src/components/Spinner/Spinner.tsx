import styles from "./Spinner.module.css"

type SpinnerSize = "sm" | "md"

interface SpinnerProps {
  size?: SpinnerSize
  label?: string
}

export default function Spinner({
  size = "md",
  label,
}: SpinnerProps) {
  return (
    <div
      className={`${styles.wrapper} ${label ? styles.hasLabel : ""}`}
      role="status"
      aria-label={label ?? "Loading"}
    >
      <div className={`${styles.spinner} ${styles[size]}`} />
      {label && (
        <span className={styles.label}>{label}</span>
      )}
    </div>
  )
}