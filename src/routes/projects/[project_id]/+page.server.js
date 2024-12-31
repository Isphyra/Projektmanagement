import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
    return {
        project: await db.getProject(params.project_id),
    }
}

//Update Project
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
    //Delete Project
    delete: async ({ request }) => {
        const data = await request.formData();

        await db.deleteProject(data.get("id"));
        redirect(303, "/projects");
    }
}

