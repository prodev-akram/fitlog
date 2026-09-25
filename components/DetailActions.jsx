"use client";

import { toast } from "react-toastify";
import { usePlan, PLAN_CAP } from "@/context/PlanContext.jsx";
import { PlusIcon, BookmarkIcon } from "./icons.jsx";

export default function DetailActions({ workout }) {
  const { planIds, savedIds, addToPlan, addToSaved, isPlanFull } = usePlan();

  const inPlan = planIds.includes(workout.id);
  const inSaved = savedIds.includes(workout.id);

  function handleAddToPlan() {
    const result = addToPlan(workout.id);
    if (result === "duplicate") {
      toast.warning(`${workout.name} is already in today's plan.`);
    } else if (result === "full") {
      toast.warning(`Today's plan is capped at ${PLAN_CAP} lifts. Finish one first.`);
    } else {
      toast.success(`Added to today's plan.`);
    }
  }

  function handleSave() {
    const result = addToSaved(workout.id);
    if (result === "duplicate") {
      toast.warning(`${workout.name} is already saved.`);
    } else {
      toast.success(`Saved for later.`);
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={handleAddToPlan}
        disabled={inPlan || isPlanFull}
        title={isPlanFull && !inPlan ? `Plan is full (max ${PLAN_CAP})` : undefined}
        className={`focus-ring flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
          inPlan || isPlanFull
            ? "cursor-not-allowed bg-base-raised text-ink-500"
            : "bg-accent text-base-bg hover:opacity-90"
        }`}
      >
        <PlusIcon className="h-4 w-4" />
        {inPlan ? "In Today's Plan" : "Add to Today's Plan"}
      </button>

      <button
        type="button"
        onClick={handleSave}
        disabled={inSaved}
        className={`focus-ring flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
          inSaved
            ? "cursor-not-allowed border-base-border text-ink-500"
            : "border-base-border text-ink-100 hover:border-accent/50"
        }`}
      >
        <BookmarkIcon className="h-4 w-4" />
        {inSaved ? "Saved" : "Save for Later"}
      </button>
    </div>
  );
}
