import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
    return {
        project: await db.getProject(params.project_id),
    };
}

export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();

        await db.deleteProject(data.get("id"));
        redirect(303, "/projects");
    },
};

