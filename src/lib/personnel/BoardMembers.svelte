<script lang="ts">
    import type {Person} from "./people";
    import PersonBox from "./PersonBox.svelte";

    let personnel: Person[] = [
        {
            name: "Heather Nuzzo",
            description: "President",
            email: "president@basispeoriaboosters.org"
        },
        {
            name: "Tarun Punhani",
            description: "Vice President",
            email: "vicepresident@basispeoriaboosters.org"
        },
        {
            name: "Vijay Yelmat",
            description: "Treasurer",
            email: "treasurer@basispeoriaboosters.org"
        },
        {
            name: "Joy Geiss",
            description: "Communications",
            email: "communications@basispeoriaboosters.org"
        }
    ];
</script>
{#each personnel as person}
    <PersonBox {person}/>
{/each}