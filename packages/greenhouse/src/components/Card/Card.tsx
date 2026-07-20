"use client"
import React from "react"
import styles from "./Card.module.css"

type CardVariant = "flat" | "elevated" | "outlined"

interface CardProps {
    variant?: CardVariant
    href?: string
    onClick?: () => void
    cover?: React.ReactNode
    header?: React.ReactNode
    footer?: React.ReactNode
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
  }

  export default function Card({
    variant = "elevated",
    href,
    onClick,
    cover,
    header,
    footer,
    children,
    className,
    style,
  }: CardProps) {
  const classes = [
    styles.card,
    styles[variant],
    href || onClick ? styles.interactive : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  const content = (
    <>
      {cover && (
        <div className={styles.cover}>
          {cover}
        </div>
      )}
      {header && (
        <div className={styles.header}>
          {header}
        </div>
      )}
      <div className={styles.body}>
        {children}
      </div>
      {footer && (
        <div className={styles.footer}>
          {footer}
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} style={style}>
        {content}
      </a>
    )
  } 

  if (onClick) {
    return (
      <button className={classes} onClick={onClick} style={style}>
        {content}
      </button>
    )
  }

  return (
    <div className={classes} style={style}>
      {content}
    </div>
  )
}