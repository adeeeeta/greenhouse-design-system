"use client";

import { createContext, useContext, useState } from "react";

type SidebarSearchContextType = {
  query: string;
  setQuery: (query: string) => void;
};

const SidebarSearchContext = createContext<SidebarSearchContextType>({
  query: "",
  setQuery: () => {},
});

export function SidebarSearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("");

  return (
    <SidebarSearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SidebarSearchContext.Provider>
  );
}

export function useSidebarSearch() {
  return useContext(SidebarSearchContext);
}