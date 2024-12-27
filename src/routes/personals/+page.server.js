import db from "$lib/db";

export async function load() {
  return {
    personals: await db.getPersonals()
  };
}
