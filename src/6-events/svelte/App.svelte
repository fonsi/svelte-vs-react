<script lang="ts">
    let counter = 0;

    const onClickHandler = () => {
        counter += 1;
    }
</script>

<div>
    <p>Clicks: {counter}</p>
    <button on:click={onClickHandler}>Click!</button>
</div>