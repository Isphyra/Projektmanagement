import { connectToDatabase } from '$lib/db';
import { ObjectId } from 'mongodb';

export const actions = {
    default: async ({ request, params }) => {
        const data = await request.formData();
        const updateData = {
            name: data.get('name'),
            description: data.get('description'),
            startDate: data.get('startDate'),
            endDate: data.get('endDate'),
            teamMembers: data.getAll('teamMembers'),
            status: data.get('status')
        };

        const db = await connectToDatabase();
        await db.collection('projects').updateOne(
            { _id: new ObjectId(params.id) },
            { $set: updateData }
        );

        return { success: true };
    }
};
