<script>
    let {user} = $props()
</script>
<div>
    <label for="">Name:</label>
    <input bind:value={user.name} type="text">
</div>
<div>
    <label for="">Alter:</label>
    <input bind:value={user.age} type="text">
</div>