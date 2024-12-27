import db from "$lib/db.js";

export const actions = {
    create: async ({ request }) => {
        // Formulardaten abrufen
        const formData = await request.formData();

        // Daten aus dem Formular extrahieren
        const personal = {
            name: formData.get('name'),
            role: formData.get('role'),
            email: formData.get('email'),
        };

        try {
            // Personal in der Datenbank erstellen
            const id = await db.createPersonal(personal);

            if (id) {
                return {
                    success: true,
                    id,
                };
            } else {
                return {
                    success: false,
                    error: 'Das Personal konnte nicht erstellt werden.',
                };
            }
        } catch (error) {
            console.error("Fehler beim Erstellen des Personals:", error);
            return {
                success: false,
                error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.',
            };
        }
    },
};
