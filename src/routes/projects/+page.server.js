import db from '$lib/db.js';
// load-Funktion
export async function load() {
    return {
        projects: await db.getProjects()
    }
}
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
    //Entfernen
    removeFromFav: async ({request}) => {
      let data = await request.formData();
      let id = data.get("id");
      let project = { 
        _id: id,
        projectlist: false
      } 

      await db.updateProject(project);
    }
  }