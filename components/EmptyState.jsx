import Link from "next/link";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-xl2 border border-dashed border-base-border py-20 text-center">
      <h3 className="font-display text-xl font-bold uppercase tracking-wide text-ink-100">
        Nothing Here Yet
      </h3>
      <p className="max-w-xs text-sm text-ink-400">
        Browse the library and add a lift to get today moving.
      </p>
      <Link
        href="/"
        className="focus-ring mt-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-base-bg"
      >
        Go to Workouts
      </Link>
    </div>
  );
}
