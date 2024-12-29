<script>
  import CompInfoText from "$lib/components/CompInfoText.svelte";
  let { data } = $props();
  import Component from "$lib/components/personal.svelte";
</script>

<div class="container mb-5 mt-5">
  <div class="container text-center">
    <h1>Personalliste</h1>
    <p>
      Diese Seite dient zur Verwaltung der Mitarbeiter und Mittarbeiterinnen.
    </p>

    <a href="/personals/create" class="btn btn-dark">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-person-plus"
        viewBox="0 0 16 16"
      >
        <path
          d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"
        ></path>
        <path
          fill-rule="evenodd"
          d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"
        ></path>
      </svg>
      Neue Mitarbeiter/innen hinzufügen
    </a>
    
    <hr/>

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
