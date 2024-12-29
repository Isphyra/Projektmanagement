<script>
  import Messagebox from "$lib/components/messagebox.svelte";

  // Formular
  let userform = $state({
      vorname: "",
      nachname: ""  
  });

  function handleData() {
      alert("Login war erfolgreich " + userform.vorname);
  }
</script>

<div class="container mb-3 mt-3">
  <h1>Willkommen</h1>
  <div class="container text-left ml-5">
      <!-- Formular -->  
      <form onsubmit={handleData}>
          <div class="mb-3">
              <label class="form-label" for="">Benutzername</label>
              <input bind:value={userform.vorname} class="form-control" type="text"> 
          </div>

          <div class="mb-3">
              <label class="form-label" for="">Passwort</label>
              <input bind:value={userform.nachname} class="form-control" type="password"> 
          </div>

          <button type="submit" class="btn btn-dark"> Login </button>
      </form>
  </div>
</div>
