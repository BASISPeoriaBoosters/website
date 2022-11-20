<script>
    import {onDestroy, onMount} from "svelte";
    import {shortMonths, dateString, isSameDay, yesterday, tomorrow} from "$lib/utils";

    export let epochSeconds;

    let dateObject = new Date(epochSeconds * 1000);

    let updateInterval;
    onMount(() => {
        // only do update interval if we're within 5 days of the date
        if(Math.abs(new Date().getTime() - dateObject.getTime()) < (5 * 24 * 60 * 60 * 1000)) {
            updateInterval = setInterval(() => {
                dateObject = dateObject; // tell svelte to re-evaluate isSameDay ifs below
            }, 60 * 60e3);
        }
    });

    onDestroy(() => {
        clearInterval(updateInterval);
    })
</script>
<span title="{shortMonths[dateObject.getMonth()]} {dateObject.getDate()}, {dateObject.getFullYear()} at {dateString(dateObject, false)}">
    {#if isSameDay(new Date(), dateObject)}
        Today at {dateString(dateObject, false)}
    {:else if isSameDay(yesterday(), dateObject)}
        Yesterday at {dateString(dateObject, false)}
    {:else if isSameDay(tomorrow(), dateObject)}
        Tomorrow at {dateString(dateObject, false)}
    {:else}
        {shortMonths[dateObject.getMonth()]} {dateObject.getDate()}, {dateObject.getFullYear()} at {dateString(dateObject, false)}
    {/if}
</span>