<script>
    import Messagebox from "$lib/components/messagebox.svelte";
    import db from "$lib/db.js"; // Import der DB-Funktionen
    
    let userform = $state({
      vorname: "",
      nachname: "",
    });
  
    async function handleData(event) {
      event.preventDefault(); // Verhindere das Standard-Formularverhalten
  
      const newUser = {
        vorname: userform.vorname,
        nachname: userform.nachname,
      };
  
      try {
        const userId = await db.createUser(newUser); // Daten in die DB speichern
        alert("Benutzer erfolgreich erstellt mit ID: " + userId);
      } catch (error) {
        console.error("Fehler beim Speichern:", error);
        alert("Fehler beim Speichern des Benutzers.");
      }
    }
  </script>
  <div class="container text-center mb-5 mt-5">
  <h1>Welcome</h1>
  
  <!-- Formular --> 
  <form on:submit={handleData}>
    <div class="mb-3">
      <label class="form-label" for="vorname">Vorname</label>
      <input bind:value={userform.vorname} id="vorname" class="form-control" type="text" required />
    </div>
  
    <div class="mb-3">
      <label class="form-label" for="nachname">Nachname</label>
      <input bind:value={userform.nachname} id="nachname" class="form-control" type="text" required />
    </div>
  
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
  