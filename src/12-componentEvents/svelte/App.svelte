<script lang="ts">
    import Button from "./Button.svelte";

    let lastClicked = 0;

    const clickHandler = (event) => {
        lastClicked = event.detail.buttonId;
    }
</script>

<div>
    <p>Last clicked: {lastClicked}</p>
    <Button on:clicked={clickHandler} buttonId={1} />
    <Button on:clicked={clickHandler} buttonId={2} />
    <Button on:clicked={clickHandler} buttonId={3} />
</div>