<script>
    import ComponentFilme from "$lib/components/projects.svelte";
    let { data } = $props();
  </script>
  
  <header class="container mb-5 mt-3">
    <div class="container text-center">
      <h1>Projektliste</h1>
      <p>Diese Seite dient zur Verwaltung von Projekten. Sie bietet eine Übersicht über aktuelle Projekte, einschließlich 
      einer kurzen Beschreibung und ansprechender Visualisierungen. Über die Schaltfläche "Neues Projekt erstellen" können neue 
      Projekte hinzugefügt werden.
    </p>
      <a href="/projects/create" class="btn btn-dark">Neues Projekt erstellen</a>
    </div>
  </header>

  <div class="container text-left mt-3">
    <div class="row">
      {#each data.projects as project}
        <div class="col-md-3 mb-4">
          <div class="card bg-dark text-light shadow">
            <img src={project.poster} class="card-img-top" alt={project.name} />
            <div class="card-body">
              <h5>
                <a href={`/projects/${project._id}`} class="card-title no-underline">{project.name}</a>
              </h5>
              <p class="card-text">Beschreibung: {project.description}</p>
              <p class="card-text">Status: {project.status}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
    <p><em>Daten und Bilder generiert von ChatGPT und DALL-E</em></p>
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
  </style>