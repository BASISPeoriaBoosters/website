<script>
    import '../theme.postcss';
    import '@brainandbones/skeleton/styles/all.css';
    import "$lib/app.css";

    import {
        AppBar,
        AppShell, Drawer,
        LightSwitch,
        localStorageStore,
        storeLightSwitch,
        storePrefersDarkScheme
    } from "@brainandbones/skeleton";
    import {onDestroy, onMount} from "svelte";
    import {browser} from "$app/environment";
    import BarLinks from "$lib/BarLinks.svelte";
    import {writable} from "svelte/store";
    import TiThMenu from 'svelte-icons/ti/TiThMenu.svelte'
    import GoX from 'svelte-icons/go/GoX.svelte'

    const syncSystemTheme = localStorageStore("syncSystemTheme", true);

    let linkDrawerShown = writable(false);

    function setElemHtmlClass() {
        const elemHtmlClassList = document.documentElement.classList;
        // If $storeLightSwitch not set, match the OS preference
        if ($storeLightSwitch === undefined) {
            $storeLightSwitch = $storePrefersDarkScheme;
        }
        // Update HTML element class
        $storeLightSwitch === true ? elemHtmlClassList.add('dark') : elemHtmlClassList.remove('dark');
    }

    function updatePrefersDark() {
        $storePrefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if($syncSystemTheme) {
            console.log("syncing with system")
            $storeLightSwitch = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setElemHtmlClass();
        }
    }

    onMount(() => {
        if(browser) {
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updatePrefersDark);
        }
    });

    onDestroy(() => {
        if(browser) {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', updatePrefersDark);
        }
    })

    $: console.log({ linkDrawerShown })
</script>
<style>
    .content-container {
        text-align: center;
        padding-top: 1em;
        min-height: calc(100vh - 9rem);
    }
    :global(.mobileLinkExpander) {
        display: none;
    }
    img {
        height: 9rem;
    }
    .expandButton {
        font-size: 2em;
        width: 3rem;
        height: 3rem;
    }

    .closeButton {
        height: 3em;
        display: block;
        width: 3em;
    }
    @media (max-width: 890px) {
        img {
            height: 5rem;
        }
        .content-container {
            min-height: calc(100vh - 5rem);
        }
    }
    @media (max-width: 890px) {
        .links {
            display: none;
        }
        :global(.mobileLinkExpander) {
            display: block;
        }
    }
</style>
<AppShell slotPageFooter="bg-surface-500">
    <svelte:fragment slot="header">
        <AppBar space="2xl:px-80 xl:max-2xl:px-48 lg:max-xl:px-16" slotTrail="mobileLinkExpander pr-3">
            <svelte:fragment slot="lead">
                <h1>
                    {#if $syncSystemTheme ? $storePrefersDarkScheme : typeof $storeLightSwitch === "undefined" ? $storePrefersDarkScheme : $storeLightSwitch}
                        <img src="/img/basis-logo-sm-white.webp" alt="BASIS Peoria Boosters"/>
                    {:else}
                        <img src="/img/basis-logo-sm.webp" alt="BASIS Peoria Boosters"/>
                    {/if}
                </h1>
            </svelte:fragment>
            <svelte:fragment slot="trail">
                <button class="btn btn-base expandButton px-2 py-1"
                        class:bg-surface-300={!($syncSystemTheme ? $storePrefersDarkScheme : typeof $storeLightSwitch === "undefined" ? $storePrefersDarkScheme : $storeLightSwitch)}
                        class:bg-surface-400={$syncSystemTheme ? $storePrefersDarkScheme : typeof $storeLightSwitch === "undefined" ? $storePrefersDarkScheme : $storeLightSwitch}
                        on:click={() => linkDrawerShown.set(!$linkDrawerShown)}>
                    <TiThMenu/>
                </button>
                <Drawer open={linkDrawerShown} position="right" blur="backdrop-blur-sm !m-0">
                    <button class="btn p-2 ml-2 closeButton" on:click={() => $linkDrawerShown = false}><GoX/></button>
                    <div class="text-center">
                        <BarLinks vertical={true}/>
                    </div>
                </Drawer>
            </svelte:fragment>
            <div class="links text-center">
                <BarLinks vertical={false}/>
            </div>
        </AppBar>
    </svelte:fragment>
    <div class="content-container">
        <slot />
    </div>
    <svelte:fragment slot="footer">
        <span on:click={() => $syncSystemTheme = false}>
            <LightSwitch/>
        </span>
        {#if !$syncSystemTheme}
            <button class="btn bg-primary-400 btn-sm text-black" on:click={() => {
                $storeLightSwitch = undefined;
                $syncSystemTheme = true;
                updatePrefersDark();
                setElemHtmlClass();
            }}>Reset to system theme</button>
        {/if}
    </svelte:fragment>
</AppShell>
