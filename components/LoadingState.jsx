export default function LoadingState({ label = "Loading workouts…" }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-24 text-ink-400">
      <span className="h-9 w-9 animate-spin rounded-full border-4 border-base-border border-t-accent" />
      <p className="text-sm font-semibold uppercase tracking-wide">{label}</p>
    </div>
  );
}
