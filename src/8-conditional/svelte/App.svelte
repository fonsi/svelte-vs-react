<script lang="ts">
    let counter = 0;

    const onClickHandler = () => {
        counter += 1;
    }

    $: isEven = !!(counter % 2);
</script>

<div>
    <p>{counter} is <!-- { isEven ? 'even' : 'odd' } -->
        {#if isEven}
            even
        {:else}
            odd
        {/if}
    </p>
    <button on:click={onClickHandler}>Click!</button>
</div>