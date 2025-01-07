<script>
  import { onMount } from "svelte"; 

  let { form } = $props();
</script>

<div class="container mb-5 mt-5">

  <a href="/projects" class="btn btn-secondary">Zurück zu Liste</a>

  <h1 class="mt-4 mb">Neues Projekt erstellen</h1>

  <!-- Formular -->
  <form method="POST" action="?/create">
    <div class="mb-3">
      <label for="" class="form-label">Name des Projekts:</label>
      <input name="name" class="form-control" type="text" required />
    </div>
    
    <div class="mb-3">
      <label for="" class="form-label">Beschreibung:</label>
      <input name="description" class="form-control" type="text" required />
    </div>
    

    <div class="mb-3">
      <label for="" class="form-label">Startdatum:</label>
      <input name="startDate" class="form-control" type="date" required />
    </div>
    

    <div class="mb-3">
      <label for="" class="form-label">Enddatum:</label>
      <input name="endDate" class="form-control" type="date" required />
    </div>
    
    <div class="mb-3">
      <label for="" class="form-label">Personal:</label>
      <input name="teamMembers" class="form-control" type="text" placeholder="Personal, separieren mit einem Komma" required />
    </div>
    
    <button type="submit" class="btn btn-dark">Projekt hinzufügen</button>
  </form>

  <!-- Erfolgsnachricht -->
  <div class="succes mt-3">
  {#if form?.success}
    <p>Projekt erfolgreich erstellt</p>
  {/if}
</div>
</div>

