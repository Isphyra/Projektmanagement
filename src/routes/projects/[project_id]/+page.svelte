<script>
    export let data;
    let project = data.project;
  </script>
  
  <div class="container mt-4">
    <a href="/projects" class="btn btn-primary">Zurück zu Liste</a>
    <div>
  </div>
  <h1>{project.name}</h1>
  <h3>Status: {project.status}</h3>
  <div class="row mt-3">
    <div class="col-3">
      <img class="img-fluid" src={project.poster} alt="" />
    </div>
  
    <div class="col">
      <p> {project.description}</p>
      <p>Startdatum: {project.startDate}</p>
      <p>Enddatum: {project.endDate}</p>
      <p>Mitarbeiter:</p>
      <ul>
        {#each project.teamMembers as member}
          <li>{member}</li>
        {/each}
      </ul>
      <form method="POST" action="?/delete">
        <input type="hidden" name="id" value={project._id}>
        <button class="btn btn-danger">Projekt löschen</button>
      </form>
    </div>
  </div>
</div>
  