<script lang="ts">
    let counter = 0;

    const onClickHandler = () => {
        counter += 1;
    }

    $: evenOrOddText = counter % 2 ? 'odd' : 'even';

    $: {
        console.log('[Svelte]');
        console.log(`${counter} is even or odd?: ${evenOrOddText}`);
    }
</script>

<div>
    <p>{counter} is {evenOrOddText}</p>
    <button on:click={onClickHandler}>Click!</button>
</div>