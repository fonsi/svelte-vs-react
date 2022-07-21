<script>
    import { count } from "./stores";

    const onClickHandler = () => {
        count.update((value) => {
            return value - 1;
        });
    }
</script>

<button on:click={onClickHandler}>-</button>