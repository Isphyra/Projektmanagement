<script>
  import { onMount } from "svelte";
  let { form } = $props();
</script>

<div class="container mb-5 mt-5">
  <a href="/personals" class="btn btn-secondary">Zurück zu Liste</a>

  <!-- Formulars -->
  <h1 class="mt-4 mb">Neues Personal erstellen</h1>

  <!-- Formular -->
  <form method="POST" action="?/create">
      <div class="mb-3">
          <label for="" class="form-label">Name des Mitarbeiter/in:</label>
          <input name="name" class="form-control" type="text" placeholder="Mit Vor- und Nachname" required />
      </div>
      
      <div class="mb-3">
          <label for="" class="form-label">Rolle des Mitarbeiter/in</label>
          <input name="role" class="form-control" type="text" required />
      </div>
      
      <div class="mb-3">
          <label for="" class="form-label">Email Adresse des Mitarbeiter/in</label>
          <input name="email" class="form-control" type="email" placeholder="muster@example.com" required />
      </div>
      
      <button type="submit" class="btn btn-dark">Mitarbeiter/in hinzufügen</button>
  </form>

  <!-- Erfolgsnachricht -->
  <div class="mt-5">
      {#if form?.success}
      <p>Mitarbeiter/in erfolgreich erstellt</p>
      {/if}
  </div>
</div>
