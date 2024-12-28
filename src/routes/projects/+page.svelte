<script>
  import Project from "$lib/components/projects.svelte";
    //import { derived } from "svelte/store";
  let { data, filterByFavList = false } = $props();

  let projects = $derived.by(() => {

    if (filterByFavList) {

      let projectsFiltered = data.projects.filter((project) => movie.projectlist);
      return projectsFiltered;
    }
    return data.projects;
  });
</script>

<div class="container mb-5 mt-5">
<div class="container text-center">
  <h1>Projektliste</h1>
  <p>Diese Seite dient zur Verwaltung von Projekten. Sie bietet eine Übersicht über aktuelle Projekte, einschließlich 
  einer kurzen Beschreibung. Über die Schaltfläche "Neues Projekt erstellen" können neue Projekte hinzugefügt werden.
</p>
  <a href="/projects/create" class="btn btn-dark">Neues Projekt erstellen</a>
</div>

<!-- Favoriten -->
<div class="form-check mt-3">
  <input
    class="form-check-input"
    type="checkbox"
    id="filter"
    bind:checked={filterByFavList}
  />
  <label class="form-check-label" for="filter" >
    Meine Favoriten anzeigen
  </label>
</div>
</div>
<!--Divider-->


<!--Auflistung-->
<div class="container text-left mt-3">
  <hr>
<div class="row">
  {#each data.projects as project}
    <div class="col-md-3 mb-4">
      <Project {project} />
    </div>
  {/each}
</div>
<hr>
<p><em>Daten und Bilder generiert von ChatGPT und DALL-E</em></p>
</div>
<style>
.container {
  max-width: 1400px;
}
</style>