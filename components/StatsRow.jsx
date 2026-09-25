import { ClockIcon, FlameIcon, StarIcon } from "./icons.jsx";

export default function StatsRow({ duration, caloriesBurned, rating, className = "" }) {
  return (
    <div className={`flex items-center gap-4 text-xs font-medium text-ink-400 ${className}`}>
      <span className="flex items-center gap-1.5">
        <ClockIcon className="h-3.5 w-3.5" />
        {duration} min
      </span>
      <span className="flex items-center gap-1.5">
        <FlameIcon className="h-3.5 w-3.5 text-accent" />
        {caloriesBurned} kcal
      </span>
      <span className="flex items-center gap-1.5 text-ink-100">
        <StarIcon className="h-3.5 w-3.5 text-accent" />
        {rating}
      </span>
    </div>
  );
}
