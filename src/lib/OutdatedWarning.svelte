<script>
    import {Alert} from "@brainandbones/skeleton";

    let visible = true;
</script>
<Alert {visible} slotContent="text-left">
    Content on this page may be outdated, and is mainly intended to show what this page might look like.<br>
    Let me know about any changes that should be made.
    <svelte:fragment slot="trail">
        <button class="btn-icon btn-ghost-tertiary" on:click={() => visible = false}>&#10005;</button>
    </svelte:fragment>
</Alert>