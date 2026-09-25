"use client";

import { createContext, useContext, useEffect, useState } from "react";

const PlanContext = createContext(null);

const PLAN_KEY = "fitlog:plan";
const SAVED_KEY = "fitlog:saved";
export const PLAN_CAP = 5;

function readIds(key) {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function PlanProvider({ children }) {
  const [planIds, setPlanIds] = useState([]);
  const [savedIds, setSavedIds] = useState([]);
  const [hydrated, setHydrated] = useState(false);

  // Read persisted ids once on mount (client only — localStorage
  // doesn't exist on the server, so this can't run during SSR).
  useEffect(() => {
    setPlanIds(readIds(PLAN_KEY));
    setSavedIds(readIds(SAVED_KEY));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(PLAN_KEY, JSON.stringify(planIds));
  }, [planIds, hydrated]);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(SAVED_KEY, JSON.stringify(savedIds));
  }, [savedIds, hydrated]);

  function addToPlan(id) {
    if (planIds.includes(id)) return "duplicate";
    if (planIds.length >= PLAN_CAP) return "full";
    setPlanIds((current) => [...current, id]);
    return "added";
  }

  function addToSaved(id) {
    if (savedIds.includes(id)) return "duplicate";
    setSavedIds((current) => [...current, id]);
    return "added";
  }

  function removeFromPlan(id) {
    setPlanIds((current) => current.filter((existing) => existing !== id));
  }

  function removeFromSaved(id) {
    setSavedIds((current) => current.filter((existing) => existing !== id));
  }

  const value = {
    planIds,
    savedIds,
    addToPlan,
    addToSaved,
    removeFromPlan,
    removeFromSaved,
    isPlanFull: planIds.length >= PLAN_CAP,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) {
    throw new Error("usePlan must be used within a PlanProvider");
  }
  return context;
}
