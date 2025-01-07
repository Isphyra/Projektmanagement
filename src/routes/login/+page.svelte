<script>
    //Formularzustands
    let userform = $state({
        benutzername: "",  
        passwort: "",      
        email: ""          
    });

    //Funktion
    function handleData(event) {
        event.preventDefault();

        if (userform.passwort.length < 6) {
            alert("Das Passwort muss mindestens 6 Zeichen lang sein.");
            return;
        }
        if (userform.benutzername.length < 3) {
            alert("Der Benutzername muss mindestens 3 Zeichen lang sein.");
            return;
        }

        //Erfolgsmeldung
        alert("Login war erfolgreich, " + userform.benutzername);

        console.log("Benutzername:", userform.benutzername);
        console.log("E-Mail:", userform.email);
        console.log("Passwort:", userform.passwort);
    }
</script>

<div class="container d-flex justify-content-center mt-5 mb-5">
    <!-- Breite 50%-->
    <div class="w-50 mt-5">
        <h1 class="text-center mb-5">Willkommen zum Login</h1>
        <!-- Formular -->
        <form onsubmit={handleData}>
            <div class="mb-3">
                <label class="form-label" for="benutzername">Benutzername</label>
                <input bind:value={userform.benutzername} class="form-control" type="text" id="benutzername" placeholder="min. 3 Zeichen" required> 
            </div>

            <div class="mb-3">
                <label class="form-label" for="email">E-Mail</label>
                <input bind:value={userform.email} class="form-control" type="email" id="email" placeholder="@example.com" required>
            </div>

            <div class="mb-3">
                <label class="form-label" for="passwort">Passwort</label>
                <input bind:value={userform.passwort} class="form-control" type="password" id="passwort" placeholder="min. 6 Zeichen" required> 
            </div>
            <!-- Button -->
            <button type="submit" class="btn btn-dark w-100">Login</button>
        </form>
    </div>
</div>