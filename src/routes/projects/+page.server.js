import db from '$lib/db.js';
// `load`-Funktion, die beim Laden der Seite ausgeführt wird
export async function load() {
    return {
        // Ruft die Liste der Projekte aus der Datenbank ab und gibt sie an die Seite zurück
        projects: await db.getProjects()
    }
}
// Exportiert die Aktionen, die vom Frontend ausgelöst werden können
export const actions = {
    addToFav: async ({request}) => {
      let data = await request.formData();
      
      let id = data.get("id");
      let project = { 
        _id: id,
        projectlist: true
      } 
      // Aktualisiert in der Datenbank
      await db.updateProject(project);
    },
    //Entfernen eines Projekts aus den Favoriten
    removeFromFav: async ({request}) => {
      let data = await request.formData();
      let id = data.get("id");
      let project = { 
        _id: id,
        projectlist: false
      } 
      // Aktualisiert in der Datenbank
      await db.updateProject(project);
    }
  }