"use client"

import { useEffect, useState } from "react"
import styles from "./CodeBlock.module.css"
import { Check, Copy } from "@adeeeeta/greenhouse";

interface CodeBlockProps {
  code: string
  caption?: string
}

export default function CodeBlock({ code, caption }: CodeBlockProps) {
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
    <div className={styles.block}>
      {caption ? <span className={styles.caption}>{caption}</span> : null}
      <div className={styles.wrapper} data-theme={inverseTheme}>
        <div className={styles.codeHeader}>
          <button
            className={styles.copyButton}
            onClick={handleCopy}
            aria-label="Copy code"
            data-theme={inverseTheme}
          >
            {copied ? <Check/> : <Copy/>}
          </button>
        </div>
        <pre className={styles.pre}>{code}</pre>
      </div>
    </div>
  )
}