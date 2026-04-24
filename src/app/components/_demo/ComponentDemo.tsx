"use client"

import { useEffect, useState } from "react"
import styles from "./ComponentDemo.module.css"

interface ComponentDemoProps {
  preview: React.ReactNode
  code: string
  controls: React.ReactNode
}

export default function ComponentDemo({ preview, code, controls }: ComponentDemoProps) {
  const [inverseTheme, setInverseTheme] = useState<string>("dark")

  useEffect(() => {
    const root = document.documentElement
    const currentTheme = root.getAttribute("data-theme") || "light"
    setInverseTheme(currentTheme === "dark" ? "light" : "dark")

    const observer = new MutationObserver(() => {
      const updated = root.getAttribute("data-theme") || "light"
      setInverseTheme(updated === "dark" ? "light" : "dark")
    })
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] })

    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.previewArea}>
        <div className={styles.preview}>
          {preview}
        </div>
        <div className={styles.codeBlockInverse} data-theme={inverseTheme}>
          <pre>{code}</pre>
        </div>
      </div>
      <div className={styles.controls}>
        <p className={styles.controlsTitle}>Properties</p>
        {controls}
      </div>
    </div>
  )
}