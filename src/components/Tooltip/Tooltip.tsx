"use client"

import { useState } from "react"
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
  FloatingPortal,
} from "@floating-ui/react"
import { cloneElement, isValidElement } from "react"
import styles from "./Tooltip.module.css"

export type TooltipPosition = "above" | "below" | "left" | "right"

interface TooltipProps {
  content: string
  position?: TooltipPosition
  children: React.ReactElement<any>
}

export default function Tooltip({
  content,
  position = "above",
  children,
}: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false)

  const placementMap = {
    above: "top",
    below: "bottom",
    left: "left",
    right: "right",
  } as const

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    placement: placementMap[position],
    middleware: [offset(8), flip(), shift({ padding: 8 })],
    whileElementsMounted: autoUpdate,
  })

  const hover = useHover(context, { move: false })
  const focus = useFocus(context)
  const dismiss = useDismiss(context)
  const role = useRole(context, { role: "tooltip" })

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ])

  return (
    <>
      {isValidElement(children) &&
        cloneElement(
          children,
          getReferenceProps({ ref: refs.setReference, ...children.props })
        )}

      {isOpen && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            className={styles.tooltip}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {content}
          </div>
        </FloatingPortal>
      )}
    </>
  )
}