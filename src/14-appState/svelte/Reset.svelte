<script>
    import { count } from "./stores";

    const onClickHandler = () => {
        count.set(0);
    }
</script>

<button on:click={onClickHandler}>Reset</button>