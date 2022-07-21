<script>
    import { count } from "./stores";

    let countValue;

    count.subscribe((value) => {
         countValue = value;
    });
</script>

<input type="number" readOnly value={countValue} />