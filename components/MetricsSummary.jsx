export default function MetricsSummary({ exercises, minutes, calories }) {
  const stats = [
    { label: "Exercises", value: exercises },
    { label: "Minutes", value: minutes },
    { label: "Calories", value: calories },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl2 border border-base-border bg-base-surface px-4 py-5 text-center sm:text-left"
        >
          <p className="font-display text-3xl font-bold text-accent sm:text-4xl">{stat.value}</p>
          <p className="mt-1 text-xs font-bold uppercase tracking-wide text-ink-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
