import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

//Load Personal von der Datenbank
export async function load({ params }) {
    return {
        personal: await db.getPersonal(params.personal_id),
    };
}
/*Delete Personal
export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();

        await db.deletePersonal(data.get("id"));
        redirect(303, "/personals");
    }
}*/

//Update Personal
export const actions = {
    update: async ({request}) => {
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

        return {success: true};

    }
}

