"use client";

import { useSidebarSearch } from "./SidebarSearchContext";
import styles from "./SidebarSearchInput.module.css";
import { TextInput } from "@greenhouse/react";

export default function SidebarSearchInput() {
  const { query, setQuery } = useSidebarSearch();

  return (
    <div className={styles.wrapper}>
      <TextInput
        placeholder="Search…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.input}
      />
    </div>
  );
}