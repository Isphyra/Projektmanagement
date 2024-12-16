<script>
    let { data } = $props();
</script>

<div class="container mt-4">
    <a href="/projects" class="btn btn-link text-light mb-4">Back</a>
    <h1>{data.project.title}</h1>
    <div class="row">
        <div class="col-md-4">
            <img src={data.project.poster} alt={data.project.name} class="img-fluid" />
        </div>
        <div class="col-md-8">
            <p>Beschreibung: {data.project.description}</p>
            <p>Startdatum: {data.project.startDate}</p>
            <p>Enddatum: {project.endDate}</p>
            <p>Status: {project.status}</p>
            <p><b>Mitarbeiter/innen:</b></p>
            <ul>
                {#each data.project.teamMembers as member}
                    <li>{actor}</li>
                {/each}
            </ul>
        </div>
    </div>
</div>
