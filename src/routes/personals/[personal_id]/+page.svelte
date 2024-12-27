<script>
    export let data;
    let personal = data.personal;
</script>

<div class="container mt-4">
    <a href="/personals" class="btn btn-dark mb-3">Zurück zu Liste</a>

    <h1>{personal.name}</h1>
    <div class="row mt-3">
        <div class="col-3">
            <div class="col">
                <h2>{personal.role}</h2>
                <p><strong> Email Adresse: </strong> {personal.email}</p>

                <form method="POST" action="?/delete">
                    <input type="hidden" name="id" value={personal._id} />
                    <button class="btn btn-danger">Projekt löschen</button>
                </form>
            </div>
        </div>
    </div>
</div>
