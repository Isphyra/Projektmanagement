<script>
      let { data } = $props();
      import Component from "$lib/components/personal.svelte";
</script>

<div class="container mb-5 mt-5">
    <div class="container text-center">
      <h1>Personalliste</h1>
      <p>Diese Seite dient zur Verwaltung der Mitarbeiter und Mittarbeiterinnen.</p>
      <a href="/personals/create" class="btn btn-dark">Neue Mitarbeiter/innen hinzufügen</a>
    <hr>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Rolle</th>
          <th>Email:</th>
        </tr>
      </thead>
      <tbody>
        {#each data.personals as personal}
          <tr>
            <td>
              <a href={"/personals/" + personal._id}>
                {personal._id}
            </td>
            <td>
              {personal.name}
            </td>
            <td>
              {personal.role}
            </td>
            <td>
              {personal.email}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>

    <p><em>Daten wurden generiert von ChatGPT</em></p>
  </div>