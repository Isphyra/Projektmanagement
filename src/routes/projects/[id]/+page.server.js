import db from "$lib/db.js";

export async function load({ params }) {
    return {
        movie: await db.getProjects(params.project_id),
    };
}