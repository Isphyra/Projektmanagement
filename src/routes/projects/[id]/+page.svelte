<script>
    export let project;
</script>

<h1>Projekt: {project.name}</h1>
<p><strong>Beschreibung:</strong> {project.description}</p>
<p><strong>Startdatum:</strong> {project.startDate}</p>
<p><strong>Enddatum:</strong> {project.endDate}</p>
<p><strong>Teammitglieder:</strong> 
    {#each project.teamMembers as member, i}
        {member}{#if i < project.teamMembers.length - 1}, {/if}
    {/each}
</p>
<p><strong>Status:</strong> {project.status}</p>

<a href="/projects/{project._id}/edit">Projekt bearbeiten</a>
<a href="/projects">Zurück zur Übersicht</a>
