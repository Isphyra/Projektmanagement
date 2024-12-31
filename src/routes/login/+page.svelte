<script>
    // Initialisierung des Formularzustands mit einem leeren Objekt für 'benutzername' und 'nachname'
    let userform = $state({
        benutzername: "",  // Feld für den benutzernamen des Benutzers
        passwort: ""  // Feld für Passwort des Benutzers
    });
  
    // Funktion, die beim Absenden des Formulars aufgerufen wird
    function handleData() {
        // Zeigt eine Nachricht an, die den benutzernamen des Benutzers enthält
        alert("Login war erfolgreich " + userform.benutzername);
    }
  </script>
  
  <div class="container mb-3 mt-3">
    <h1>Willkommen</h1>
    <div class="container text-left ml-5">
        <!-- Formular -->
        <form onsubmit={handleData}>
            <div class="mb-3">
                <!-- Label für das Eingabefeld des Benutzernamens -->
                <label class="form-label" for="">Benutzername</label>
                <!-- Eingabefeld für den Benutzernamen, das mit 'userform.benutzername' gebunden ist -->
                <input bind:value={userform.benutzername} class="form-control" type="text" required> 
            </div>
  
            <div class="mb-3">
                <!-- Label für das Eingabefeld des Passworts -->
                <label class="form-label" for="">Passwort</label>
                <!-- Eingabefeld für das Passwort, das mit 'userform.passwort' gebunden ist -->
                <input bind:value={userform.passwort} class="form-control" type="password" required> 
            </div>
  
            <!-- Login-Button, der das Formular absendet -->
            <button type="submit" class="btn btn-dark"> Login </button>
        </form>
    </div>
  </div>
  