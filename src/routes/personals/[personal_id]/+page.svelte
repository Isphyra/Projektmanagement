<script>
    let {data, form} = $props();
    //let personal = data.personal;
</script>


<!-- Zurück Button-->
<div class="container mt-4">
    <a href="/personals" class="btn btn-dark mb-3">Zurück zu Liste</a>


<form method="POST"  action="?/update">
    <input name="id" type="hidden" value={data.personal._id}>

<div class="mt-3">
    <label class="form-label" for="">Name</label>
    <input value={data.personal.name} name="name" class="form-control" type="text" id="">
</div>
<div class="mt-3">
    <label class="form-label" for="">Rolle:</label> 
    <input value={data.personal.role} name="role" class="form-control" type="text" id="">
</div>
<div class="mt-3">
    <label class="form-label" for="">Email:</label>
    <input value={data.personal.email} name="email" class="form-control" type="text" id="">
</div>
<button class="btn btn-secondary mt-3">Update!</button>

</form>

<!-- Erfolgsmeldung -->
<div class="mt-3">
{#if form?.success === true}
 Personal erfolgreich aktualisiert
{/if }
</div>
</div>



<!-- Personal löschen Button
                <form method="POST" action="?/delete">
                    <input type="hidden" name="id" value={personal._id} />
                    <button class="btn btn-danger">Mitarbeiter/in löschen</button>
                </form>-->