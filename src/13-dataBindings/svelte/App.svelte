<script lang="ts">
    const animals = ['dog', 'cat', 'cow', 'horse'];

    let inputValue = '';
    let isChecked = false;
    let color = 'red';
    let animal = 'dog';
</script>

<div>
    <p>The input value is: <strong>{inputValue}</strong></p>
    <input type="text" name="svelte-text" bind:value={inputValue}/>

    <br />
    <br />
    <p>The checkbox is: <strong>{isChecked ? 'checked' : 'unchecked'}</strong></p>
    <label>
        <input type="checkbox" name="svelte-checkbox" bind:checked={isChecked}/>
        Checkbox
    </label>

    <br />
    <br />
    <p>The selected color is: <strong>{color}</strong></p>
    <label>
        <input type="radio" name="svelte-color" bind:group={color} value="red" />
        Red
    </label>
    <label>
        <input type="radio" name="svelte-color" bind:group={color} value="blue" />
        Blue
    </label>
    <label>
        <input type="radio" name="svelte-color" bind:group={color} value="green" />
        Green
    </label>

    <br />
    <br />
    <p>The selected animal is: <strong>{animal}</strong></p>
    <select name="svelte-animal" bind:value={animal}>
        {#each animals as animal}
            <option value={animal}>{animal}</option>
        {/each}
    </select>
</div>