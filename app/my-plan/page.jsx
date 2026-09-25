"use client";

import { useEffect, useMemo, useState } from "react";
import { usePlan } from "@/context/PlanContext.jsx";
import { getWorkouts } from "@/lib/api.js";
import LoadingState from "@/components/LoadingState.jsx";
import MetricsSummary from "@/components/MetricsSummary.jsx";
import PlanItemCard from "@/components/PlanItemCard.jsx";
import EmptyState from "@/components/EmptyState.jsx";

const TABS = [
  { key: "plan", label: "Today's Plan" },
  { key: "saved", label: "Saved" },
];

export default function MyPlanPage() {
  const { planIds, savedIds } = usePlan();
  const [workouts, setWorkouts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("plan");

  useEffect(() => {
    let isCancelled = false;

    async function loadWorkouts() {
      try {
        const data = await getWorkouts();
        if (!isCancelled) setWorkouts(data);
      } finally {
        if (!isCancelled) setIsLoading(false);
      }
    }

    loadWorkouts();
    return () => {
      isCancelled = true;
    };
  }, []);

  const planWorkouts = useMemo(
    () => planIds.map((id) => workouts.find((w) => w.id === id)).filter(Boolean),
    [planIds, workouts]
  );

  const savedWorkouts = useMemo(
    () => savedIds.map((id) => workouts.find((w) => w.id === id)).filter(Boolean),
    [savedIds, workouts]
  );

  const metrics = useMemo(
    () => ({
      exercises: planWorkouts.length,
      minutes: planWorkouts.reduce((total, w) => total + w.duration, 0),
      calories: planWorkouts.reduce((total, w) => total + w.caloriesBurned, 0),
    }),
    [planWorkouts]
  );

  const activeList = activeTab === "plan" ? planWorkouts : savedWorkouts;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold uppercase tracking-tight text-ink-100 sm:text-4xl">
        My Plan
      </h1>
      <p className="mt-1 text-sm text-ink-400">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-6">
        <MetricsSummary
          exercises={metrics.exercises}
          minutes={metrics.minutes}
          calories={metrics.calories}
        />
      </div>

      <div className="mt-8 flex gap-2 border-b border-base-border">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActiveTab(tab.key)}
            className={`focus-ring -mb-px border-b-2 px-4 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
              activeTab === tab.key
                ? "border-accent text-accent"
                : "border-transparent text-ink-500 hover:text-ink-100"
            }`}
          >
            {tab.label}
            <span className="ml-1.5 text-xs text-ink-500">
              ({tab.key === "plan" ? planWorkouts.length : savedWorkouts.length})
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6">
        {isLoading ? (
          <LoadingState label="Loading workouts…" />
        ) : activeList.length === 0 ? (
          <EmptyState />
        ) : (
          <ul className="flex flex-col gap-3">
            {activeList.map((workout) => (
              <PlanItemCard key={workout.id} workout={workout} tab={activeTab} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
