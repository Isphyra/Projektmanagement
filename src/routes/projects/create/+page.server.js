import db from "$lib/db.js";

export const actions = {
    create: async ({ request }) => {
        // Formulardaten abrufen
        const formData = await request.formData();

        // Daten aus dem Formular extrahieren
        const project = {
            name: formData.get('name'),
            description: formData.get('description'),
            startDate: formData.get('startDate'), // Startdatum aus dem Formular
            endDate: formData.get('endDate'), // Enddatum aus dem Formular
            teamMembers: formData.getAll('teamMembers'), // Mehrere Personalien als Array (falls Checkbox oder Multi-Select)
        };

        try {
            // Projekt in der Datenbank erstellen
            const id = await db.createProject(project);

            if (id) {
                return {
                    success: true,
                    id,
                };
            } else {
                return {
                    success: false,
                    error: 'Das Projekt konnte nicht erstellt werden.',
                };
            }
        } catch (error) {
            console.error("Fehler beim Erstellen des Projekts:", error);
            return {
                success: false,
                error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
            };
        }
    },
};
