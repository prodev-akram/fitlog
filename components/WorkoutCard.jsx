import Image from "next/image";
import Link from "next/link";
import StatsRow from "./StatsRow.jsx";

export default function WorkoutCard({ workout }) {
  const { id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = workout;

  return (
    <Link
      href={`/workout/${id}`}
      className="focus-ring group flex flex-col overflow-hidden rounded-xl2 border border-base-border bg-base-surface transition-colors hover:border-accent/40"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-base-raised">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex flex-wrap gap-1.5">
          {muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent"
            >
              {group}
            </span>
          ))}
        </div>

        <h3 className="font-display text-base font-bold uppercase leading-tight text-ink-100">
          {name}
        </h3>

        <p className="text-xs text-ink-500">{equipment}</p>

        <StatsRow
          duration={duration}
          caloriesBurned={caloriesBurned}
          rating={rating}
          className="mt-auto pt-1"
        />
      </div>
    </Link>
  );
}
