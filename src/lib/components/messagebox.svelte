<script>
    let {message,name} = $props();
    //let {nomessage= "No message"} = $props();
</script>

<div>
    <p>Your message:</p>
    <p> {message}</p>
    <p> {name}</p>
</div>

<style>
    div {
        border: 2px solid black;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    </style>