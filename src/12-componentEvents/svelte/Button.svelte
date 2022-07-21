<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let buttonId;

    const dispatch = createEventDispatcher();

    const clickHandler = () => {
        dispatch('clicked', {
            buttonId
        });
    }
</script>

<button on:click={clickHandler}>Button {buttonId}</button>