<script lang="ts">
    import type {Person} from "./people";
    import GoPerson from 'svelte-icons/go/GoPerson.svelte'

    export let person: Person;
</script>
<style>
    img {
        height: 100%;
    }
    .photo {
        height: 100%;
        max-width: 25%;
        display: flex;
    }
    .photo > img {
        object-fit: contain;
    }
    .box {
        background-color: rgb(230 230 230);
        color: rgb(100, 100, 100);
        max-width: 728px;
        height: 12em;
    }
    :global(.dark) .box {
        background-color: rgb(30 30 30);
        color: rgb(150, 150, 150);
    }
</style>
<div class="box flex mx-auto items-start align-middle p-4 px-8 max-lg:mx-4 my-2">
    <div class="photo inline-block text-black dark:text-white">
        {#if person.photoPath}
            <img src={person.photoPath} alt={person.name}>
        {:else}
            <GoPerson/>
        {/if}
    </div>
    <div class="flex-1 text-left ml-8 self-center">
        <h3 class="text-black dark:text-white mb-2">{person.name}</h3>
        <span>
            {person.description}
            {#if person.email}
                <br>
                <span class="block my-1">
                    <a href="mailto:{person.email}">{person.email}</a>
                </span>
            {/if}
        </span>
    </div>
</div>
