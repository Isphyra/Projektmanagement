<script>
    let {project} = $props();
</script>
<div>
    <img src={project.poster} alt={project.name} />
    <h3>{project.name}</h3>
    <p>Beschreibung: {project.description}</p>
    <p>Startdatum: {project.startDate}</p>
    <p>Enddatum: {project.endDate}</p>
    <p>Status: {project.status}</p>
</div>
