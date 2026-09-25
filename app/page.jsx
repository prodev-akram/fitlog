import Hero from "@/components/Hero.jsx";
import Library from "@/components/Library.jsx";
import { getWorkouts } from "@/lib/api.js";

export default async function HomePage() {
  const workouts = await getWorkouts();

  return (
    <>
      <Hero />
      <Library workouts={workouts} />
    </>
  );
}
