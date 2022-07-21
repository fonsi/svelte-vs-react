<script lang="ts">
    const words = ['This', 'is', 'a', 'list'];
</script>

<div>
    <ul>
        {#each words as word}
            <li>{word}</li>
        {/each}
    </ul>
</div>