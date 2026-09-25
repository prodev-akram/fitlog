"use client";

import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import StatsRow from "./StatsRow.jsx";
import { CheckIcon, XIcon, EyeIcon } from "./icons.jsx";
import { usePlan } from "@/context/PlanContext.jsx";

export default function PlanItemCard({ workout, tab }) {
  const { removeFromPlan, removeFromSaved } = usePlan();

  function handleRemove() {
    if (tab === "plan") {
      removeFromPlan(workout.id);
      toast.info(`Removed ${workout.name} from today's plan.`);
    } else {
      removeFromSaved(workout.id);
      toast.info(`Removed ${workout.name} from saved.`);
    }
  }

  function handleMarkDone() {
    removeFromPlan(workout.id);
    toast.success(`${workout.name} marked as done. Nice work!`);
  }

  return (
    <li className="flex flex-col gap-4 rounded-xl2 border border-base-border bg-base-surface p-4 sm:flex-row sm:items-center">
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-base-raised">
        <Image src={workout.image} alt={workout.name} fill className="object-cover" />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate font-display text-sm font-bold uppercase tracking-wide text-ink-100">
          {workout.name}
        </h3>
        <p className="truncate text-xs text-ink-500">{workout.equipment}</p>
        <StatsRow
          duration={workout.duration}
          caloriesBurned={workout.caloriesBurned}
          rating={workout.rating}
          className="mt-1.5"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Link
          href={`/workout/${workout.id}`}
          className="focus-ring flex items-center gap-1.5 rounded-full border border-base-border px-3 py-2 text-xs font-bold uppercase tracking-wide text-ink-100 hover:border-accent/50"
        >
          <EyeIcon className="h-3.5 w-3.5" />
          View
        </Link>

        {tab === "plan" && (
          <button
            type="button"
            onClick={handleMarkDone}
            className="focus-ring flex items-center gap-1.5 rounded-full bg-accent px-3 py-2 text-xs font-bold uppercase tracking-wide text-base-bg"
          >
            <CheckIcon className="h-3.5 w-3.5" />
            Done
          </button>
        )}

        <button
          type="button"
          onClick={handleRemove}
          aria-label={`Remove ${workout.name}`}
          className="focus-ring grid h-8 w-8 place-items-center rounded-full text-ink-500 hover:bg-base-raised hover:text-ink-100"
        >
          <XIcon className="h-4 w-4" />
        </button>
      </div>
    </li>
  );
}
