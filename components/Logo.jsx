import { DumbbellIcon } from "./icons.jsx";

export default function Logo({ className = "" }) {
  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-base-bg">
        <DumbbellIcon className="h-5 w-5" />
      </span>
      <span className="font-display text-lg font-bold uppercase tracking-wide text-ink-100">
        Fit<span className="text-accent">Log</span>
      </span>
    </span>
  );
}
