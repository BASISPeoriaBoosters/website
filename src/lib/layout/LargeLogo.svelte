<script>
    import {getContext} from "svelte";
    import {storeLightSwitch, storePrefersDarkScheme} from "@brainandbones/skeleton";

    export let classes = "";

    export let collapsable = false;

    let syncSystemTheme = getContext("syncSystemTheme");
</script>
<style>
    .collapsable {
        height: 9rem;
    }
    @media (max-width: 890px) {
        .collapsable {
            height: 5rem;
        }
    }
</style>
{#if $syncSystemTheme ? $storePrefersDarkScheme : typeof $storeLightSwitch === "undefined" ? $storePrefersDarkScheme : $storeLightSwitch}
    <img src="/img/basis-logo-sm-white.webp" class={classes} class:collapsable={collapsable} alt="BASIS Peoria Boosters"/>
{:else}
    <img src="/img/basis-logo-sm.webp" class:collapsable={collapsable} class={classes} alt="BASIS Peoria Boosters"/>
{/if}