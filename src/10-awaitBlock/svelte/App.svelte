<style>
    ul {
        list-style-type: none;
    }
</style>

<script lang="ts">
    import { getDriverSeasonsByTeam } from "../common/getDriverSeasonsByTeam";

    let promise = Promise.resolve([]);

    const teamChangeHandler = async (team: string): Promise<void> => {
         promise = getDriverSeasonsByTeam(team);
    }
</script>

<div>
    <p>Seasons Alonso has driven for each team</p>
    <div>
        <button on:click={() => { teamChangeHandler('renault') }}>Renault</button>
        <button on:click={() => { teamChangeHandler('mclaren') }}>McLaren</button>
        <button on:click={() => { teamChangeHandler('ferrari') }}>Ferrari</button>
        <button on:click={() => { teamChangeHandler('redbull') }}>Red Bull</button>
    </div>
    <br />
    {#await promise}
        <span><small>...loading</small></span>
    {:then seasons}
        <ul>
            {#each seasons as season}
                <li>{season}</li>
            {/each}
        </ul>
    {:catch error}
        <span>{error.message}</span>
    {/await}
</div>