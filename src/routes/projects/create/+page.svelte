<script>
  import { onMount } from "svelte";
  import CalendarView from '$lib/components/CalendarView.svelte';

  let { form } = $props();
</script>
<div class="container mb-5 mt-5">
  <a href="/projects" class="btn btn-secondary">Zurück zu Liste</a>
<h1 class="mt-4 mb">Neues Projekt erstellen</h1>
<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Name des Projekts:</label>
    <input name="name" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Beschreibung:</label>
    <input name="description" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Startdatum:</label>
    <input name="startDate" class="form-control" type="date" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Enddatum:</label>
    <input name="endDate" class="form-control" type="date" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Personal:</label>
    <input name="teamMembers" class="form-control" type="text" placeholder="Personal, seperieren mit einem Komma" />
  </div>
  <button type="submit" class="btn btn-dark">Projekt hinzufügen</button>
</form>

{#if form?.success}
  <p>Projekt erfolgreich erstellt</p>
{/if}
<div class="container-4 mt-5">
<CalendarView></CalendarView>
</div>
</div>
<style>
  .container-4 {
  max-width: 80%; /* Setzt die Breite auf die Hälfte */
  margin: 0 auto; /* Zentriert den Kalender horizontal */
}

</style>