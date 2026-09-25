const API_URL = "https://api.abcz.workers.dev/api/fitlog";

/**
 * Fetches every workout from the FitLog API.
 * Always hits the network (no cache) so the site reflects
 * whatever the API currently returns.
 */
export async function getWorkouts() {
  const response = await fetch(API_URL, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Failed to fetch workouts: ${response.status}`);
  }

  return response.json();
}

/**
 * Finds a single workout by id. Returns null when no workout
 * matches, so callers can trigger a 404 (notFound()).
 */
export async function getWorkoutById(id) {
  const workouts = await getWorkouts();
  const numericId = Number(id);
  return workouts.find((workout) => workout.id === numericId) ?? null;
}
