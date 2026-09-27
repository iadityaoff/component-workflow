/**
 * Quota Management — UIForge
 * Tracks daily free copies (2 free copies/day for free users)
 */
import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "uiforge_quota_v1";
const MAX_FREE_COPIES = 2;

interface QuotaState {
  date: string;
  copiesUsed: number;
}

function getTodayString(): string {
  return new Date().toISOString().split("T")[0];
}

function loadQuota(): QuotaState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed: QuotaState = JSON.parse(raw);
      if (parsed.date === getTodayString()) {
        return parsed;
      }
    }
  } catch {
    /* ignore */
  }
  return { date: getTodayString(), copiesUsed: 0 };
}

function saveQuota(state: QuotaState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent("uiforge:quota-change", { detail: state }));
  } catch {
    /* ignore */
  }
}

export function useCopyQuota() {
  const [quota, setQuota] = useState<QuotaState>(loadQuota);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);

  useEffect(() => {
    function handleChange(e: Event) {
      const custom = e as CustomEvent<QuotaState>;
      if (custom.detail) {
        setQuota(custom.detail);
      }
    }
    window.addEventListener("uiforge:quota-change", handleChange);
    return () => window.removeEventListener("uiforge:quota-change", handleChange);
  }, []);

  const remaining = Math.max(0, MAX_FREE_COPIES - quota.copiesUsed);
  const isLimitReached = quota.copiesUsed >= MAX_FREE_COPIES;

  const recordCopy = useCallback((): boolean => {
    const current = loadQuota();
    if (current.copiesUsed >= MAX_FREE_COPIES) {
      setIsUpgradeOpen(true);
      return false;
    }
    const updated = {
      date: getTodayString(),
      copiesUsed: current.copiesUsed + 1,
    };
    saveQuota(updated);
    setQuota(updated);
    return true;
  }, []);

  return {
    copiesUsed: quota.copiesUsed,
    maxFree: MAX_FREE_COPIES,
    remainingCopies: remaining,
    isLimitReached,
    recordCopy,
    isUpgradeOpen,
    openUpgradeModal: () => setIsUpgradeOpen(true),
    closeUpgradeModal: () => setIsUpgradeOpen(false),
  };
}
