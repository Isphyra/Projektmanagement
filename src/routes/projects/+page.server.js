import { connectToDatabase } from '$lib/db';

export async function load() {
    const db = await connectToDatabase();
    const projects = await db.collection('projects').find({}).toArray();

    return { projects };
}
