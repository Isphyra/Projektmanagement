<script>
    let { data, form } = $props();
    // für Projekt löschen
    let project = data.project;
  
    function confirmDelete(event) {
        if (!confirm("Möchten Sie das Projekt wirklich löschen?")) {
            event.preventDefault(); // Verhindert das Absenden des Formulars
        }
    }
</script>
  
<!-- Zurück Button -->
<div class="header-container container mt-4 mb-4">
    <a href="/projects" class="btn btn-secondary">Zurück zu Liste</a>
    <div class="container">
        <h1>{project.name}</h1>
    </div>
</div>
<hr>
  
<div class="project-container">
    <!-- Bild -->
    <div class="image-container">
        <img class="img-fluid" src={project.poster} alt="Projekt Poster" height="300px" width="300" />
    </div>
  
    <!-- Tabelle -->
    <div class="form-container">
        <h3>Projekt bearbeiten</h3>
  
        <!-- Projekt Daten + Update Button -->
        <form method="POST" action="?/update">
            <input name="id" type="hidden" value={data.project._id}>
  
            <div class="mt-3">
                <label class="form-label" for="">Name</label>
                <input value={data.project.name} name="name" class="form-control" type="text" id="">
            </div>
            <div class="mt-3">
                <label class="form-label" for="">Beschreibung:</label>
                <input value={data.project.description} name="description" class="form-control" type="text" id="">
            </div>
            <div class="mt-3">
                <label class="form-label" for="">Startdatum:</label>
                <input value={data.project.startDate} name="startDate" class="form-control" type="date" id="">
            </div>
            <div class="mt-3">
                <label class="form-label" for="">Enddatum:</label>
                <input value={data.project.endDate} name="endDate" class="form-control" type="date" id="">
            </div>
            <div class="mt-3">
                <label class="form-label" for="">Mitarbeiter/innen:</label>
                <input value={data.project.teamMembers} name="teamMembers" class="form-control" type="text" id="">
            </div>
            <div class="mt-3">
                <label class="form-label" for="">Status:</label>
                <input value={data.project.status} name="status" class="form-control" type="text" id="">
            </div>
  
            <button class="btn btn-secondary mt-3">Projekt updaten</button>
        </form>
  
        <!-- Projekt löschen Button -->
        <div class="mt-3">
            <form id="delete-form" method="POST" action="?/delete" onsubmit={confirmDelete}>
                <input type="hidden" name="id" value={data.project._id} />
                <button type="submit" class="btn btn-danger">Projekt löschen</button>
            </form>
        </div>
  
        <!-- Erfolgsmeldung -->
        <div class="succes mt-3">
            {#if form?.success === true}
            Projekt erfolgreich aktualisiert
            {/if}
        </div>
    </div>
</div>
  
<style>
    .header-container {
        display: flex;
        align-items: center; /* Vertikale Zentrierung */
    }

    .header-container a {
        margin: 0; /* Sicherstellen, dass kein zusätzlicher Außenabstand vorhanden ist */
    }

    .header-container h1 {
        margin: 0; /* Kein zusätzlicher Außenabstand bei der Überschrift */
    }

    h1 {
        text-align: center;
    }

    h3 {
        text-decoration: underline;
    }

    .project-container {
        display: flex;
        align-items: flex-start;
        gap: 20px;
        width: 90%;
    }

    .image-container {
        flex: 1;
        text-align: center;
    }

    .form-container {
        flex: 2;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .succes {
        color: white;
    }
</style>