<script>
    import { onMount } from "svelte";
    let { form } = $props();
  </script>
  <div class="container mb-5 mt-5">
    <a href="/personals" class="btn btn-dark">Zurück zu Liste</a>
  <h1 class="mt-4 mb">Neues Personal erstellen</h1>
  <form method="POST" action="?/create">
    <div class="mb-3">
      <label for="" class="form-label">Name des Mitarbeiter/in:</label>
      <input name="name" class="form-control" type="text" />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Rolle des Mitarbeiter/in </label>
      <input name="role" class="form-control" type="text" />
    </div>
    <div class="mb-3">
      <label for="" class="form-label">Email Adresse des Mitarbeiter/in </label>
      <input name="email" class="form-control" type="text" placeholder="muster@example.com"/>
    </div>
    <button type="submit" class="btn btn-primary">Mitarbeiter/in hinzufügen</button>
  </form>

  {#if form?.success}
  <p>Mitarbeiter/in erfolgreich erstellt</p>
{/if}
</div>

