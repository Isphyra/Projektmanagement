// Import der Datenbank-Instanz aus der Datei "$lib/db.js"
import db from "$lib/db.js";
// Import der "redirect"-Funktion aus dem SvelteKit-Paket
import { redirect } from "@sveltejs/kit";

//Load Personal von der Datenbank
//async function macht es einfacher, mit asynchronem Code zu arbeiten
//params ist ein Objekt, das die URL-Parameter enthält
export async function load({ params }) {
    return {
        personal: await db.getPersonal(params.personal_id),
    }
}

//Update Personal
export const actions = {
    update: async ({ request }) => {
        const data = await request.formData();
        console.log(data);
        let personal = {
            _id: data.get("id"),
            name: data.get("name"),
            role: data.get("role"),
            email: data.get("email")
        }

        console.log(personal)
        await db.updatePersonal(personal);
        return { success: true };

    },
    
    //Delete Personal
    delete: async ({ request }) => {
        const data = await request.formData();

        await db.deletePersonal(data.get("id"));
        redirect(303, "/personals");
    }
}