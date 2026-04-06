"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./Dropdown.module.css";
import ChevronDown from "@/components/Icons/ChevronDown";
import Check from "@/components/Icons/Check";
import FormField from "@/components/FormField";
import Text from "@/components/Text";

export type DropdownOption = {
  value: string;
  label: string;
  description?: string;
};

type DropdownProps = {
  label?: string;
  hint?: string;
  error?: string;
  placeholder?: string;
  options: DropdownOption[];
  value?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
};

export default function Dropdown({
  label,
  hint,
  error,
  placeholder = "Select…",
  options,
  value,
  onChange,
  disabled,
}: DropdownProps) {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const selected = useMemo(
    () => options.find((o) => o.value === value),
    [options, value]
  );

  // Close on outside click
  useEffect(() => {
    function onDocMouseDown(e: MouseEvent) {
      if (!open) return;
      const target = e.target as Node;

      if (
        buttonRef.current?.contains(target) ||
        listRef.current?.contains(target)
      ) {
        return;
      }

      setOpen(false);
      setActiveIndex(-1);
    }

    document.addEventListener("mousedown", onDocMouseDown);
    return () => document.removeEventListener("mousedown", onDocMouseDown);
  }, [open]);

  // When opening, set active to selected (or first)
  useEffect(() => {
    if (!open) return;
    const idx = selected
      ? options.findIndex((o) => o.value === selected.value)
      : 0;
    setActiveIndex(idx >= 0 ? idx : 0);
  }, [open, options, selected]);

  function commitSelection(idx: number) {
    const opt = options[idx];
    if (!opt) return;
    onChange?.(opt.value);
    setOpen(false);
    setActiveIndex(-1);
    buttonRef.current?.focus();
  }

  function onButtonKeyDown(e: React.KeyboardEvent) {
    if (disabled) return;

    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      setOpen(true);
      return;
    }

    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen((v) => !v);
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      setActiveIndex(-1);
    }
  }

  function onListKeyDown(e: React.KeyboardEvent) {
    if (!open) return;

    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
      setActiveIndex(-1);
      buttonRef.current?.focus();
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, options.length - 1));
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0) commitSelection(activeIndex);
      return;
    }
  }

  const controlId = useMemo(
    () => `dropdown-${label?.toLowerCase().replace(/\s+/g, "-") || "field"}`,
    [label]
  );

  return (
    <FormField
      id={controlId}
      label={label}
      hint={hint}
      error={error}
      disabled={disabled}
    >
      <div className={styles.control}>
        <button
          ref={buttonRef}
          id={controlId}
          type="button"
          className={[styles.trigger, error ? styles.trigger_error : ""]
            .filter(Boolean)
            .join(" ")}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-invalid={error ? true : undefined}
          aria-describedby={hint || error ? `${controlId}-help` : undefined}
          disabled={disabled}
          onClick={() => setOpen((v) => !v)}
          onKeyDown={onButtonKeyDown}
        >
          <span className={styles.value}>
            {selected ? (
              selected.label
            ) : (
              <span className={styles.placeholder}>{placeholder}</span>
            )}
          </span>

          <span className={styles.icon}>
            <ChevronDown />
          </span>
        </button>

        {open ? (
          <div
            ref={listRef}
            className={styles.menu}
            role="listbox"
            tabIndex={-1}
            onKeyDown={onListKeyDown}
          >
            {options.map((opt, idx) => {
              const isSelected = opt.value === value;
              const isActive = idx === activeIndex;

              return (
                <div
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  className={[styles.item, isActive ? styles.item_active : ""]
                    .filter(Boolean)
                    .join(" ")}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    commitSelection(idx);
                  }}
                >
                  <div className={styles.itemMain}>
                    <Text as="div" variant="label" className={styles.itemLabel}>
                      {opt.label}
                    </Text>

                    {opt.description ? (
                      <Text
                        as="div"
                        variant="caption"
                        className={styles.itemDesc}
                      >
                        {opt.description}
                      </Text>
                    ) : null}
                  </div>

                  {isSelected ? (
                    <span className={styles.check}>
                      <Check />
                    </span>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </FormField>
  );
}
