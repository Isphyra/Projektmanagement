import { connectToDatabase } from '$lib/db';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const project = {
            name: data.get('name'),
            description: data.get('description'),
            startDate: data.get('startDate'),
            endDate: data.get('endDate'),
            teamMembers: data.getAll('teamMembers'),
            status: data.get('status')
        };

        const db = await connectToDatabase();
        await db.collection('projects').insertOne(project);

        return { success: true };
    }
};
