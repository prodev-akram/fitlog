import Image from "next/image";
import { notFound } from "next/navigation";
import { getWorkoutById } from "@/lib/api.js";
import KeySpecs from "@/components/KeySpecs.jsx";
import DetailActions from "@/components/DetailActions.jsx";

export async function generateMetadata({ params }) {
  const workout = await getWorkoutById(params.id);
  return {
    title: workout ? `${workout.name} | FitLog` : "Workout Not Found | FitLog",
  };
}

export default async function WorkoutDetailPage({ params }) {
  const workout = await getWorkoutById(params.id);

  if (!workout) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl2 border border-base-border bg-base-surface">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="font-display text-3xl font-bold uppercase tracking-tight text-ink-100 sm:text-4xl">
            {workout.name}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-400 sm:text-base">
            {workout.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-accent/15 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-accent"
              >
                {group}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <KeySpecs workout={workout} />
          </div>

          <div className="mt-8">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-ink-100">
              Instructions
            </h2>
            <ol className="mt-3 flex flex-col gap-3">
              {workout.instructions.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm text-ink-400">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-base-surface text-xs font-bold text-accent">
                    {index + 1}
                  </span>
                  <span className="pt-0.5">{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-8">
            <DetailActions workout={workout} />
          </div>
        </div>
      </div>
    </div>
  );
}
