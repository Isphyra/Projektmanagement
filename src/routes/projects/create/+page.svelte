<script>
  // Importiere notwendige Module und Komponenten
  import { onMount } from "svelte"; // Optional, falls zukünftige Logik benötigt wird

  // Zugriff auf das Formularobjekt aus den übergebenen Eigenschaften (Props)
  let { form } = $props();
</script>

<!-- Container für das Formular -->
<div class="container mb-5 mt-5">
  <!-- Link zurück zur Projektliste -->
  <a href="/projects" class="btn btn-secondary">Zurück zu Liste</a>

  <!-- Titel des Formulars -->
  <h1 class="mt-4 mb">Neues Projekt erstellen</h1>

  <!-- Formular zum Erstellen eines neuen Projekts -->
  <form method="POST" action="?/create">
    <!-- Eingabefeld für den Namen des Projekts -->
    <div class="mb-3">
      <label for="" class="form-label">Name des Projekts:</label>
      <input name="name" class="form-control" type="text" required />
    </div>
    
    <!-- Eingabefeld für die Beschreibung des Projekts -->
    <div class="mb-3">
      <label for="" class="form-label">Beschreibung:</label>
      <input name="description" class="form-control" type="text" required />
    </div>
    
    <!-- Eingabefeld für das Startdatum des Projekts -->
    <div class="mb-3">
      <label for="" class="form-label">Startdatum:</label>
      <input name="startDate" class="form-control" type="date" required />
    </div>
    
    <!-- Eingabefeld für das Enddatum des Projekts -->
    <div class="mb-3">
      <label for="" class="form-label">Enddatum:</label>
      <input name="endDate" class="form-control" type="date" required />
    </div>
    
    <!-- Eingabefeld für die Teammitglieder -->
    <div class="mb-3">
      <label for="" class="form-label">Personal:</label>
      <input name="teamMembers" class="form-control" type="text" placeholder="Personal, separieren mit einem Komma" required />
    </div>
    
    <!-- Button zum Hinzufügen des Projekts -->
    <button type="submit" class="btn btn-dark">Projekt hinzufügen</button>
  </form>

  <!-- Erfolgsnachricht -->
  <div class="succes mt-3">
  {#if form?.success}
    <p>Projekt erfolgreich erstellt</p>
  {/if}
</div>
</div>

