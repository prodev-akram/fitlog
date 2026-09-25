"use client";

import { useMemo, useState } from "react";
import WorkoutCard from "./WorkoutCard.jsx";
import SortDropdown from "./SortDropdown.jsx";

export default function Library({ workouts }) {
  const [sortBy, setSortBy] = useState("duration");

  const sorted = useMemo(() => {
    return [...workouts].sort((a, b) => b[sortBy] - a[sortBy]);
  }, [workouts, sortBy]);

  return (
    <section id="library" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-ink-100">
            The Library
          </h2>
          <p className="mt-1 text-sm text-ink-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <SortDropdown value={sortBy} onChange={setSortBy} />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}
