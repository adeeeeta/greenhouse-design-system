"use client"

import { useState } from "react"
import styles from "./Avatar.module.css"

type AvatarSize = "sm" | "md" | "lg"
type AvatarShape = "circle" | "square"

interface AvatarProps {
  src?: string
  alt?: string
  initials?: string
  size?: AvatarSize
  shape?: AvatarShape
}

export default function Avatar({
  src,
  alt,
  initials,
  size = "md",
  shape = "circle",
}: AvatarProps) {
  const [imgError, setImgError] = useState(false)

  const showImage = src && !imgError
  const showInitials = !showImage && initials
  const showIcon = !showImage && !initials

  return (
    <div
      className={`${styles.avatar} ${styles[size]} ${styles[shape]}`}
      aria-label={alt ?? initials ?? "Avatar"}
      role="img"
    >
      {showImage && (
        <img
          src={src}
          alt={alt ?? ""}
          className={styles.image}
          onError={() => setImgError(true)}
        />
      )}
      {showInitials && (
        <span className={styles.initials} aria-hidden="true">
          {initials.slice(0, 2).toUpperCase()}
        </span>
      )}
      {showIcon && (
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M4 20c0-4 3.6-7 8-7s8 3 8 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  )
}