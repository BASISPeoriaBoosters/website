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

    import {onDestroy, onMount, setContext} from "svelte";
    import {browser} from "$app/environment";
    import BarLinks from "$lib/BarLinks.svelte";
    import {writable} from "svelte/store";
    import TiThMenu from 'svelte-icons/ti/TiThMenu.svelte'
    import GoX from 'svelte-icons/go/GoX.svelte'
    import LargeLogo from "$lib/LargeLogo.svelte";
    import SocialLinks from "$lib/SocialLinks.svelte";
    import {navigating} from "$app/stores";

    import NProgress from 'nprogress';
    import 'nprogress/nprogress.css';

    const syncSystemTheme = localStorageStore("syncSystemTheme", true);
    setContext("syncSystemTheme", syncSystemTheme);

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
            $storeLightSwitch = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setElemHtmlClass();
        }
    }

    NProgress.configure({
        // Full list: https://github.com/rstacruz/nprogress#configuration
        minimum: 0.16
    });

    let navigateTimeout;
    $: {
        if ($navigating) {
            $linkDrawerShown = false;
            // only show loading bar if navigating takes more than 200ms
            clearTimeout(navigateTimeout);
            navigateTimeout = setTimeout(() => {
                if($navigating) {
                    NProgress.start();
                }
            }, 150);
        }
        if (!$navigating) {
            clearTimeout(navigateTimeout);
            NProgress.done();
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

</script>
<style>
    .content-container {
        text-align: center;
        min-height: calc(100vh - 9rem);
    }
    :global(.mobileLinkExpander) {
        display: none;
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
        <AppBar space="2xl:px-72 xl:max-2xl:px-44 lg:max-xl:px-14" slotTrail="mobileLinkExpander pr-3">
            <svelte:fragment slot="lead">
                <h1>
                    <a href="/">
                        <LargeLogo collapsable={true}/>
                    </a>
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
        <div class="text-center bg-surface-700 text-surface-500">
            <br>
            <span on:click={() => $syncSystemTheme = false}>
                <LightSwitch/>
            </span>
            <br>
            <div class="pb-2 mb-2">
                {#if !$syncSystemTheme}
                    <button class="btn bg-primary-400 btn-sm text-black m-0" on:click={() => {
                        $storeLightSwitch = undefined;
                        $syncSystemTheme = true;
                        updatePrefersDark();
                        setElemHtmlClass();
                    }}>Reset to system theme</button>
                {:else}
                    <div class="my-4"></div>
                {/if}
            </div>
            <SocialLinks/>
            <br>
            <br>
            <div class="text-surface-600 pb-2">
                Copyright © {new Date().getFullYear()} BASIS Peoria Boosters. All Rights Reserved.
            </div>
        </div>
    </svelte:fragment>
</AppShell>
