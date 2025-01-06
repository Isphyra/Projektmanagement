<script>
    // Daten und Formular aus den übergebenen Eigenschaften (Props) extrahieren
    let { data, form } = $props();
    // Zugriff auf die persönliche Daten des Mitarbeiters
    let personal = data.personal;
</script>

<!-- Zurück Button-->
<div class="container mt-4">
    <a href="/personals" class="btn btn-dark mb-3">Zurück zu Liste</a>

    <!-- Personal Daten + Update Button -->
    <!-- Das Formular übermittelt die Daten per POST-Methode an den Server, wobei der action-Wert ?/update die Ausführung der Aktion „update“ signalisiert.n -->
    <form method="POST" action="?/update">
        <!-- Verstecktes Eingabefeld -->
        <input name="id" type="hidden" value={data.personal._id} />
        
        <h3>Mitarbeiter/in bearbeiten</h3>
        <div class="mt-3">
            <!-- Eingabefeld -->
            <label class="form-label" for="">Name</label>
            <input
                value={data.personal.name}
                name="name"
                class="form-control"
                type="text"
                id=""
            />
        </div>
        <div class="mt-3">
            <label class="form-label" for="">Rolle:</label>
            <input
                value={data.personal.role}
                name="role"
                class="form-control"
                type="text"
                id=""
            />
        </div>
        <div class="mt-3">
            <label class="form-label" for="">Email:</label>
            <input
                value={data.personal.email}
                name="email"
                class="form-control"
                type="email"
                id=""
            />
        </div>
        <button class="btn btn-secondary mt-3">Mitarbeiter/in updaten</button>
    </form>
    
    <div class="mt-3">
        <!-- Personal löschen Button -->
        <form method="POST" action="?/delete">
            <input type="hidden" name="id" value={data.personal._id} />
            <button class="btn btn-danger">Mitarbeiter/in löschen</button>
        </form>
    </div>

    <!-- Erfolgsmeldung -->
    <div class="succes mt-3">
        {#if form?.success === true}
            Mitarbeiter/in erfolgreich aktualisiert
        {/if}
    </div>
</div>

<style>
    .succes {
        color: white;
    }
</style>
