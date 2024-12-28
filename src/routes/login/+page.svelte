<script>
    import db from '$lib/db.js'; // Import der Funktion aus db.js
    
    let userform = {
      vorname: '',
      nachname: ''
    };
  
    function handleUserData() {
      try {
        const message = db.handleData(userform); // Aufruf der Funktion
        alert(message); 
      } catch (error) {
        console.error(error.message);
      }
    }
  </script>

  <form on:submit|preventDefault={handleUserData}>
    <label for="vorname">Vorname:</label>
    <input id="vorname" bind:value={userform.vorname} type="text" required />
    
    <label for="nachname">Nachname:</label>
    <input id="nachname" bind:value={userform.nachname} type="text" required />
    
    <button type="submit">Absenden</button>
  </form>
  