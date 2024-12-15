import { connectToDatabase } from '$lib/db';
import { ObjectId } from 'mongodb';

export async function load({ params }) {
    const db = await connectToDatabase();
    const project = await db.collection('projects').findOne({ _id: new ObjectId(params.id) });

    return { project };
}
