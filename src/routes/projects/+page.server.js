import db from '$lib/db.js';

export async function load() {
    return {
        projects: await db.getProjects()
    }
}