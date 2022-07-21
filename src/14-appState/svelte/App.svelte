<script>
    import Screen from "./Screen.svelte";
    import Add from "./Add.svelte";
    import Remove from "./Remove.svelte";
    import Reset from "./Reset.svelte";
</script>

<style>
    .column {
        display: flex;
        flex-direction: column;
    }

    .buttons {
        margin-top: 16px;
    }
</style>

<div class="column">
    <div>
        <Screen />
    </div>
    <div class="buttons">
        <Add />
        <Remove />
        <Reset />
    </div>
</div>