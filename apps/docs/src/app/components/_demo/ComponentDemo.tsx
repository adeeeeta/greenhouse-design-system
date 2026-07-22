"use client"

import { useEffect, useState } from "react"
import styles from "./ComponentDemo.module.css"
import { Check, Copy } from "@adeeeeta/greenhouse";

interface ComponentDemoProps {
  preview: React.ReactNode
  code: string
  controls: React.ReactNode
}

export default function ComponentDemo({ preview, code, controls }: ComponentDemoProps) {
  const [inverseTheme, setInverseTheme] = useState<string>("dark")
  const [copied, setCopied] = useState(false)

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

  function handleCopy() {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.preview}>
        {preview}
      </div>
      <div className={styles.bottomRow}>
        <div className={styles.controls}>
          <p className={styles.controlsTitle}>Properties</p>
          {controls}
        </div>
        <div className={styles.codeBlockWrapper} data-theme={inverseTheme}>
          <div className={styles.codeHeader}>
            <button
              className={styles.copyButton}
              onClick={handleCopy}
              aria-label="Copy code"
              data-theme={inverseTheme}
            >
              {copied ? <Check /> : <Copy />}
            </button>
          </div>
          <pre className={styles.codeBlockPre}>{code}</pre>
        </div>
      </div>
    </div>
  )
}