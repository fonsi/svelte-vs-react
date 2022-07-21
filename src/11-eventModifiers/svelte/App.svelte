<script lang="ts">
    const clickHandler = () => {
        console.log('[Svelte] Here I am!');
    }
</script>

<div>
    <a on:click|preventDefault={clickHandler} href="https://mailtrack.io">Go to Mailtrack</a>
</div>