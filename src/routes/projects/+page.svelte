<script>
    export let projects;
</script>

<h1>Projektliste</h1>
<ul>
    {#each projects as project}
        <li>
            <a href={`/projects/${project._id}`}>{project.name}</a>
        </li>
    {/each}
</ul>

<a href="/projects/create">Neues Projekt erstellen</a>
