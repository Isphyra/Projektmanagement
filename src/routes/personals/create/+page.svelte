<script>
  // Importiere onMount aus Svelte (falls erforderlich für zukünftige Erweiterungen)
  import { onMount } from "svelte";

  // Zugriff auf das Formularobjekt aus den übergebenen Eigenschaften (Props)
  let { form } = $props();
</script>

<!-- Container für das Formular -->
<div class="container mb-5 mt-5">
  <!-- Link zurück zur Liste der Mitarbeiter -->
  <a href="/personals" class="btn btn-secondary">Zurück zu Liste</a>

  <!-- Titel des Formulars -->
  <h1 class="mt-4 mb">Neues Personal erstellen</h1>

  <!-- Formular zum Erstellen eines neuen Mitarbeiters -->
  <form method="POST" action="?/create">
      <!-- Eingabefeld für den Namen des Mitarbeiters -->
      <div class="mb-3">
          <label for="" class="form-label">Name des Mitarbeiter/in:</label>
          <input name="name" class="form-control" type="text" placeholder="Mit Vor- und Nachname" required />
      </div>
      
      <!-- Eingabefeld für die Rolle des Mitarbeiters -->
      <div class="mb-3">
          <label for="" class="form-label">Rolle des Mitarbeiter/in</label>
          <input name="role" class="form-control" type="text" required />
      </div>
      
      <!-- Eingabefeld für die E-Mail-Adresse des Mitarbeiters -->
      <div class="mb-3">
          <label for="" class="form-label">Email Adresse des Mitarbeiter/in</label>
          <input name="email" class="form-control" type="email" placeholder="muster@example.com" required />
      </div>
      
      <!-- Button zum Hinzufügen des neuen Mitarbeiters -->
      <button type="submit" class="btn btn-dark">Mitarbeiter/in hinzufügen</button>
  </form>

  <!-- Erfolgsnachricht -->
  <div class="mt-5">
      <!-- Bedingte Anzeige der Erfolgsmeldung, falls das Formular erfolgreich abgesendet wurde -->
      {#if form?.success}
      <p>Mitarbeiter/in erfolgreich erstellt</p>
      {/if}
  </div>
</div>
