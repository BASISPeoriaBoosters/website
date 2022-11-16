<script>
    import {getContext} from "svelte";
    import {storeLightSwitch, storePrefersDarkScheme} from "@brainandbones/skeleton";

    export let classes = "";

    let syncSystemTheme = getContext("syncSystemTheme");
</script>

{#if $syncSystemTheme ? $storePrefersDarkScheme : typeof $storeLightSwitch === "undefined" ? $storePrefersDarkScheme : $storeLightSwitch}
    <img src="/img/basis-logo-sm-white.webp" class={classes} alt="BASIS Peoria Boosters"/>
{:else}
    <img src="/img/basis-logo-sm.webp" class={classes} alt="BASIS Peoria Boosters"/>
{/if}