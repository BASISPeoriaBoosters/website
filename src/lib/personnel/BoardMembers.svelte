<script lang="ts">
    import type {Person} from "./people";
    import PersonBox from "./PersonBox.svelte";

    let personnel: Person[] = [
        {
            name: "Heather Nuzzo",
            description: "President",
        },
        {
            name: "Tarun Punhani",
            description: "Vice President"
        },
        {
            name: "Vijay Yelmat",
            description: "Treasurer"
        },
        {
            name: "Joy Geiss",
            description: "Communications"
        }
    ];
</script>
{#each personnel as person}
    <PersonBox {person}/>
{/each}