<script>
    let {project} = $props();
</script>
<div>
    <img src={project.poster} alt={project.name} />
    <h3>{project.name}</h3>
    <p>Beschreibung: {project.description}</p>
    <p>Beschreibung: {project.startDate}</p>
    <p>Beschreibung: {project.endDate}</p>
    <p>Status: {project.status}</p>
</div>
