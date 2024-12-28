<script>
    import UserForm from "$lib/components/userForm.svelte";

//Formular
let userform = $state({
    vorname: "",
    nachname: ""  
})
function handleData() {
    alert("Hallo " + userform.vorname + " " + userform.nachname);
}
</script>

    <!-- Formular --> 
    <form onsubmit={handleData}>
        <div class=mb-3>
            <label class="form-label" for="">Vorname</label>
            <input bind:value={userform.vorname} class = "form-control" type="text"> 
        </div>

        <div class=mb-3>
            <label class="form-label" for="">Nachname</label>
            <input bind:value={userform.nachname} class = "form-control" type="text"> 
        </div>

        <button type="submit" class= "btn btn-primary"> Submit </button>

    </form>

