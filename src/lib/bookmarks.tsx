import React, { createContext, useContext, useEffect, useState, useMemo, useCallback } from "react";
import type { ComponentItem } from "../data/components";
import { COMPONENT_BY_ID } from "../data/components";

interface BookmarksContextValue {
  savedIds: string[];
  savedComponents: ComponentItem[];
  isSaved: (id: string) => boolean;
  toggleSave: (id: string) => boolean;
  removeSave: (id: string) => void;
  clearAll: () => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
}

const STORAGE_KEY = "twentyfirst-bookmarks";

const BookmarksContext = createContext<BookmarksContextValue | null>(null);

function readInitialBookmarks(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return ["btn-shiny-01", "scroll-expansion-hero"]; // default favorites
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function BookmarksProvider({ children }: { children: React.ReactNode }) {
  const [savedIds, setSavedIds] = useState<string[]>(readInitialBookmarks);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(savedIds));
    } catch {
      /* ignore quota */
    }
  }, [savedIds]);

  const isSaved = useCallback((id: string) => savedIds.includes(id), [savedIds]);

  const toggleSave = useCallback((id: string) => {
    let nextSaved = false;
    setSavedIds((prev) => {
      if (prev.includes(id)) {
        nextSaved = false;
        return prev.filter((item) => item !== id);
      } else {
        nextSaved = true;
        return [id, ...prev];
      }
    });
    return nextSaved;
  }, []);

  const removeSave = useCallback((id: string) => {
    setSavedIds((prev) => prev.filter((item) => item !== id));
  }, []);

  const clearAll = useCallback(() => {
    setSavedIds([]);
  }, []);

  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const savedComponents = useMemo(() => {
    return savedIds.map((id) => COMPONENT_BY_ID[id]).filter(Boolean);
  }, [savedIds]);

  const value = useMemo(
    () => ({
      savedIds,
      savedComponents,
      isSaved,
      toggleSave,
      removeSave,
      clearAll,
      isDrawerOpen,
      setIsDrawerOpen,
      openDrawer,
      closeDrawer,
    }),
    [savedIds, savedComponents, isSaved, toggleSave, removeSave, clearAll, isDrawerOpen, openDrawer, closeDrawer]
  );

  return <BookmarksContext.Provider value={value}>{children}</BookmarksContext.Provider>;
}

export function useBookmarks(): BookmarksContextValue {
  const ctx = useContext(BookmarksContext);
  if (!ctx) {
    throw new Error("useBookmarks must be used within a BookmarksProvider");
  }
  return ctx;
}
