<script>
    import Messagebox from "$lib/components/messagebox.svelte";
//Formular
let userform = $state({
    vorname: "",
    nachname: ""  
})
function handleData() {
    alert("Login war erfolgreich " + userform.vorname);
}
</script>

    <h1>Welcome</h1>

    <!-- Formular --> 
    <form onsubmit={handleData}>
        <div class=mb-3>
            <label class="form-label" for="">Benutzername</label>
            <input bind:value={userform.vorname} class = "form-control" type="text"> 
        </div>

        <div class=mb-3>
            <label class="form-label" for="">Passwort</label>
            <input bind:value={userform.nachname} class = "form-control" type="text"> 
        </div>

        <button type="submit" class= "btn btn-primary"> Login </button>

    </form>
