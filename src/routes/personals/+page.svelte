<script>
  import CompInfoText from "$lib/components/CompInfoText.svelte";
    import Button from "$lib/components/PersonalButton.svelte";
  let { data } = $props();
  import Component from "$lib/components/personal.svelte";
</script>

<div class="container mb-5 mt-5">
  <div class="container text-center">
    <h1>Personalliste</h1>
    <p>
      Diese Seite dient zur Verwaltung der Mitarbeiter und Mittarbeiterinnen. 
      Dazu ist es möglich, neue Mitarbeiter/innen hinzuzufügen, bestehende Mitarbeiter/innen zu bearbeiten oder zu löschen.
    </p>
<!-- Butoon für neue Mitarbeiter/innen hinzufügen -->
 <Button></Button>
    <hr/>
<!-- Liste-->
  </div>
  <table class="table-color">
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
            </a></td
          >
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

  <CompInfoText></CompInfoText>
</div>
<style>
  .table-color {
    background-color: #2d2e33;
    margin: auto;
    width: 100%;
  }
</style>
