export default function KeySpecs({ workout }) {
  const rows = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", workout.sets],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.caloriesBurned} kcal`],
    ["Rating", workout.rating],
  ];

  return (
    <dl className="divide-y divide-base-border rounded-xl2 border border-base-border bg-base-surface">
      {rows.map(([label, value]) => (
        <div key={label} className="flex items-center justify-between px-5 py-3">
          <dt className="text-xs font-bold uppercase tracking-wide text-ink-500">{label}</dt>
          <dd className="text-sm font-semibold text-ink-100">{value}</dd>
        </div>
      ))}
    </dl>
  );
}
