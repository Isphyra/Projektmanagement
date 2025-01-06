<script>
  import Project from "$lib/components/projects.svelte";
  import CompInfoText from "$lib/components/CompInfoText.svelte";
  import ProjektButton from "$lib/components/ProjektButton.svelte";
  import SuchenInput from "$lib/components/SuchenInput.svelte";
  import { derived } from "svelte/store";

  // Sortierfunktion nach Alphabet
  function sortProjects(order) {
    projects = [...projects].sort((a, b) => {
      if (a.name < b.name) return order === "asc" ? -1 : 1;
      if (a.name > b.name) return order === "asc" ? 1 : -1;
      return 0;
    });
  }

  // Zugriff auf übergebene Eigenschaften (Projektdaten und Favoriten-Filter)
  let { data, filterByFavList = false } = $props();
  
  let projects = $derived.by(() => {
    if (filterByFavList) {
      let favFiltered = data.projects;
      favFiltered = favFiltered.filter((project) => project.projectlist === true);
      return favFiltered;
    } else {
      return data.projects;
    }
  });
</script>

<div class="container mb-5 mt-5">
  <div class="container text-center">
    <h1>Projektübersicht</h1>
    <p>
      Diese Seite dient zur Verwaltung von Projekten. Sie bietet eine Übersicht
      über aktuelle Projekte, einschließlich einer kurzen Beschreibung. <br />
      Über die Schaltfläche "Neues Projekt erstellen" können neue Projekte
      hinzugefügt werden.
    </p>
    <!-- Button zum Hinzufügen -->
    <ProjektButton> </ProjektButton>
  </div>

  <!-- Favoriten und Sortieren nebeneinander -->
  <div class="container mt-3">
    <div class="row align-items-center">
      <!-- Favoriten-Filter -->
      <div class="col">
        <div class="form form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            bind:checked={filterByFavList}
            id="flexCheckDefault"
          />
          <label class="form-check-label" for="flexCheckDefault">
            Nur Favoriten anzeigen
          </label>
        </div>
      </div>

      <!-- Sortierbutton -->
      <div class="col text-end">
        <SuchenInput {projects} onSort={sortProjects} />
      </div>
    </div>
  </div>

  <hr />
</div>

<!-- Auflistung -->
<div class="container text-left mt-1">
  <div class="row">
    {#each projects as project}
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

  .form-switch {
    margin-right: 20px;
  }
</style>