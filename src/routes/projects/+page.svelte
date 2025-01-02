<script>
  import Project from "$lib/components/projects.svelte";
  import CompInfoText from "$lib/components/CompInfoText.svelte";
  import ProjektButton from "$lib/components/ProjektButton.svelte";
  import { derived } from "svelte/store";

  // Zugriff auf übergebene Eigenschaften (Projektdaten und Favoriten-Filter)
  let { data, filterByFavList=false } = $props();
  //wenn sich projects ändern führt es dies Fuktion aus
  let projects = $derived.by(() => {

    if (filterByFavList) {

      let favFiltered = data.projects;

      // Filtern der Projekte nach Favoriten
      favFiltered = favFiltered.filter((project) => project.projectlist === true);

      return favFiltered;
    } else {
    return data.projects;
    }
  })



</script>

<div class="container mb-5 mt-5">
  <div class="container text-center">
    <h1>Projektübersicht</h1>
    <p>
      Diese Seite dient zur Verwaltung von Projekten. Sie bietet eine Übersicht
      über aktuelle Projekte, einschließlich einer kurzen Beschreibung. Über die
      Schaltfläche "Neues Projekt erstellen" können neue Projekte hinzugefügt
      werden.
    </p>
    <!-- Button zum hinzufügen -->
     <ProjektButton> </ProjektButton>

    
  </div>

  <!-- Favoriten -->
  <div class="form form-switch">
    <input class="form-check-input" type="checkbox" bind:checked={filterByFavList} id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      Nur Favoriten anzeigen
    </label>
  </div>
  <hr/>
</div>


<!--Auflistung-->
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
</style>
