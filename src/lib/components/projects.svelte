<script>
    let { project } = $props();
</script>

<div class="card bg-dark text-light shadow">
    <img src={project.poster} class="card-img-top" alt={project.name} />
    <div class="card-body">
        <h5>
            <a href={`/projects/${project._id}`} class="card-title no-underline">{project.name}</a>
          </h5>
        <p><strong>Beschreibung:</strong> {project.description}</p>
        <p><strong>Startdatum:</strong> {project.startDate}</p>
        <p><strong>Enddatum:</strong> {project.endDate}</p>
        <p class="card-status"><strong>Status:</strong> {project.status}</p>
    </div>
    <div class="card-footer">
        {#if project.projectlist}
            <form method="POST" action="?/removeFromFav" use:enhance>
                <input type="hidden" name="id" value={project._id} />
                <button class="btn btn-danger">Von Favoritenliste entfernen</button>
            </form>
        {:else}
            <form method="POST" action="?/addToFav" use:enhance>
                <input type="hidden" name="id" value={project._id} />
                <button class="btn btn-success">Auf die Favoritenliste</button>
            </form>
        {/if}
    </div>
</div>

<style>
    .container {
      max-width: 1200px;
    }
  
    .no-underline {
      text-decoration: none;
    }
  
  
    .no-underline:hover {
      text-decoration: underline;
    }
   .card-status
    {
      color: rgb(160, 151, 154);
    }
  </style>
