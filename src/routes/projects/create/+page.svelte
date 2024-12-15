<script>
    let name = '';
    let description = '';
    let startDate = '';
    let endDate = '';
    let teamMembers = '';
    let status = 'In Progress';
</script>

<form method="post">
    <label>Projektname: <input type="text" name="name" bind:value={name} /></label>
    <label>Beschreibung: <textarea name="description" bind:value={description}></textarea></label>
    <label>Startdatum: <input type="date" name="startDate" bind:value={startDate} /></label>
    <label>Enddatum: <input type="date" name="endDate" bind:value={endDate} /></label>
    <label>Teammitglieder: <input type="text" name="teamMembers" bind:value={teamMembers} /></label>
    <label>Status: <input type="text" name="status" bind:value={status} /></label>
    <button type="submit">Erstellen</button>
</form>
