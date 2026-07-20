import styles from "./Divider.module.css"

type DividerWeight = "subtle" | "default" | "strong"

interface DividerProps {
  weight?: DividerWeight
  label?: string
}

export default function Divider({
  weight = "default",
  label,
}: DividerProps) {
  if (label) {
    return (
      <div
        className={`${styles.divider} ${styles[weight]} ${styles.labeled}`}
        role="separator"
        aria-label={label}
      >
        <span className={styles.label}>{label}</span>
      </div>
    )
  }

  return (
    <hr
      className={`${styles.divider} ${styles[weight]}`}
    />
  )
}