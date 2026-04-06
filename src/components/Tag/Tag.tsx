import styles from "./Tag.module.css"
import { X } from "@/components/Icons"

type TagVariant = "neutral" | "success" | "warning" | "error" | "info"
type TagSize = "sm" | "md"

interface TagProps {
  label: string
  variant?: TagVariant
  size?: TagSize
  icon?: React.ReactNode
  onDismiss?: () => void
}

export default function Tag({
  label,
  variant = "neutral",
  size = "md",
  icon,
  onDismiss,
}: TagProps) {
  return (
    <span className={`${styles.tag} ${styles[variant]} ${styles[size]}`}>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      <span className={styles.label}>{label}</span>
      {onDismiss && (
        <button
          className={styles.dismiss}
          onClick={onDismiss}
          aria-label={`Remove ${label}`}
          type="button"
        >
          <X size={10} />
        </button>
      )}
    </span>
  )
}