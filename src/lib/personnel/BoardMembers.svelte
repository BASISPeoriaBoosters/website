<script lang="ts">
    import type {Person} from "./people";
    import PersonBox from "./PersonBox.svelte";

    let personnel: Person[] = [
        {
            name: "Example Person",
            description: "Very important position",
        }
    ];
</script>
{#each personnel as person}
    <PersonBox {person}/>
{/each}