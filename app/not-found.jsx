import Link from "next/link";
import { DumbbellIcon } from "@/components/icons.jsx";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center gap-4 px-4 py-28 text-center">
      <span className="grid h-16 w-16 place-items-center rounded-full bg-base-surface border border-base-border">
        <DumbbellIcon className="h-8 w-8 text-accent" />
      </span>
      <p className="font-display text-5xl font-bold text-accent">404</p>
      <h1 className="font-display text-2xl font-bold uppercase tracking-wide text-ink-100">
        Set Not Found
      </h1>
      <p className="text-sm text-ink-400">
        That page doesn&apos;t exist — it might have been moved, or the link
        is off by a rep.
      </p>
      <Link
        href="/"
        className="focus-ring mt-2 rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-base-bg"
      >
        Back to Workouts
      </Link>
    </div>
  );
}
