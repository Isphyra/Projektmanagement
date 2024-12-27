<script>
  import Project from "$lib/components/projects.svelte";
  let { data } = $props();
</script>

<div class="container mb-5 mt-5">
<div class="container text-center">
  <h1>Projektliste</h1>
  <p>Diese Seite dient zur Verwaltung von Projekten. Sie bietet eine Übersicht über aktuelle Projekte, einschließlich 
  einer kurzen Beschreibung. Über die Schaltfläche "Neues Projekt erstellen" können neue Projekte hinzugefügt werden.
</p>
  <a href="/projects/create" class="btn btn-dark">Neues Projekt erstellen</a>
</div>
</div>

<div class="container text-left mt-3">
<div class="row">
  {#each data.projects as project}
    <div class="col-md-3 mb-4">
      <Project {project} />
    </div>
  {/each}
</div>
<p><em>Daten und Bilder generiert von ChatGPT und DALL-E</em></p>
</div>
<style>
.container {
  max-width: 1400px;
}
</style>