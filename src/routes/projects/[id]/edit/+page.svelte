<script>
    export let project;

    let name = project.name;
    let description = project.description;
    let startDate = project.startDate;
    let endDate = project.endDate;
    let teamMembers = project.teamMembers.join(", "); // Teammitglieder als String
    let status = project.status;
</script>

<h1>Projekt bearbeiten: {name}</h1>

<form method="post">
    <label>
        Projektname:
        <input type="text" name="name" bind:value={name} required />
    </label>
    <label>
        Beschreibung:
        <textarea name="description" bind:value={description}></textarea>
    </label>
    <label>
        Startdatum:
        <input type="date" name="startDate" bind:value={startDate} required />
    </label>
    <label>
        Enddatum:
        <input type="date" name="endDate" bind:value={endDate} required />
    </label>
    <label>
        Teammitglieder (kommagetrennt):
        <input type="text" name="teamMembers" bind:value={teamMembers} />
    </label>
    <label>
        Status:
        <select name="status" bind:value={status}>
            <option value="Not Started">Nicht gestartet</option>
            <option value="In Progress">In Bearbeitung</option>
            <option value="Completed">Abgeschlossen</option>
        </select>
    </label>
    <button type="submit">Speichern</button>
</form>

<a href="/projects/{project._id}">Zurück zur Detailansicht</a>
