import { DumbbellIcon } from "./icons.jsx";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-base-border bg-base-bg">
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent">
            Workout Library
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-ink-100 sm:text-5xl lg:text-6xl">
            Train With Intent.
            <br />
            Log Every Set.
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-400 sm:text-base">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <a
            href="#library"
            className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold uppercase tracking-wide text-base-bg transition-transform hover:scale-[1.03]"
          >
            <DumbbellIcon className="h-4 w-4" />
            Browse Workouts
          </a>
        </div>

        <div className="relative mx-auto grid w-full max-w-sm place-items-center lg:max-w-md">
          <div className="aspect-square w-full rounded-xl2 border border-base-border bg-base-surface p-10">
            <div className="grid h-full place-items-center rounded-xl border border-dashed border-base-border">
              <DumbbellIcon className="h-20 w-20 text-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
