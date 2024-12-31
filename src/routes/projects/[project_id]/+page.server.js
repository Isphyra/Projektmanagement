import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

//Load Project von der Datenbank
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
        let project = {
            _id: data.get("id"),
            name: data.get("name"),
            description: data.get("description"),
            startDate: data.get("startDate"),
            endDate: data.get("endDate"),
            teamMembers: data.get("teamMembers")
        }

        console.log(project)
        await db.updateProject(project);
        return { success: true };

    },

    //Delete Project
    delete: async ({ request }) => {
        const data = await request.formData();

        await db.deleteProject(data.get("id"));
        redirect(303, "/projects");
    }
}

