"use client";

import { ChevronDownIcon } from "./icons.jsx";

const OPTIONS = [
  { value: "duration", label: "Duration" },
  { value: "caloriesBurned", label: "Calories" },
  { value: "rating", label: "Rating" },
];

export default function SortDropdown({ value, onChange }) {
  return (
    <div className="relative inline-flex items-center">
      <span className="pointer-events-none absolute left-4 text-xs font-semibold uppercase tracking-wide text-ink-500">
        Sort By
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-label="Sort workouts by"
        className="focus-ring appearance-none rounded-full border border-base-border bg-base-surface py-2.5 pl-[5.5rem] pr-9 text-sm font-semibold text-ink-100"
      >
        {OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-3 h-4 w-4 text-ink-400" />
    </div>
  );
}
