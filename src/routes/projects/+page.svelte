<script>
  import Project from "$lib/components/projects.svelte";
  import CompInfoText from "$lib/components/CompInfoText.svelte";
  //import { derived } from "svelte/store";
  let { data, filterByFavList = false } = $props();

  let projects = $derived.by(() => {
    if (filterByFavList) {
      let projectsFiltered = data.projects.filter(
        (project) => movie.projectlist,
      );
      return projectsFiltered;
    }
    return data.projects;
  });
</script>

<div class="container mb-5 mt-5">
  <div class="container text-center">
    <h1>Projektliste</h1>
    <p>
      Diese Seite dient zur Verwaltung von Projekten. Sie bietet eine Übersicht
      über aktuelle Projekte, einschließlich einer kurzen Beschreibung. Über die
      Schaltfläche "Neues Projekt erstellen" können neue Projekte hinzugefügt
      werden.
    </p>
    <a href="/projects/create" class="btn btn-dark">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-file-earmark-plus"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5"
        ></path>
        <path
          d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z"
        ></path>
      </svg>
      Neues Projekt erstellen
    </a>
    
    
  </div>

  <!-- Favoriten -->
  <div class="form-check mt-5 mb-1">
    <input
      class="form-check-input"
      type="checkbox"
      id="filter"
      bind:checked={filterByFavList}
    />
    <label class="form-check-label" for="filter">
      Meine Favoriten anzeigen
    </label>
  </div>
  <hr/>
</div>
<!--Divider-->

<!--Auflistung-->
<div class="container text-left mt-1">
  <div class="row">
    {#each data.projects as project}
      <div class="col-md-3 mb-4">
        <Project {project} />
      </div>
    {/each}
  </div>
  <hr />
  <CompInfoText />
</div>

<style>
  .container {
    max-width: 1400px;
  }
</style>
