// Importiert die Datenbankinstanz oder das Modul aus "$lib/db"
import db from "$lib/db";

// Exportiert die `load`-Funktion, die von SvelteKit verwendet wird, um Daten beim Laden einer Seite zu liefern
export async function load() {
  return {
    // Holt die Liste der Mitarbeiter (Personals) aus der Datenbank und gibt sie zurück
    personals: await db.getPersonals()
  };
}
