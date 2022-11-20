<script lang="ts">
    import {type Event} from "$lib/calendar/calendarReader"
    import DateStamp from "$lib/DateStamp.svelte";
    export let event: Event;
</script>
<style>
    .event {
        background-color: rgba(0, 0, 0, 0.1);
        box-shadow: 0 0 9px 1px rgba(0, 0, 0, 0.5);
        margin: 0.75em auto;
        padding: 0.25em 0.75em 1em 2em;
        border-radius: 12px;
        display: inline-block;
    }
    :global(.dark) .event {
        background-color: rgba(255, 255, 255, 0.05);
        box-shadow: 0 0 9px 1px rgba(255, 255, 255, 0.25);
    }
</style>
<div class="event text-left p-4 w-full m-1">
    <h2>{event.title}</h2>
    {event.description}<br>
    <hr>
    <DateStamp epochSeconds={event.startDate.getTime()/1000}/>
    -
    <DateStamp epochSeconds={event.endDate.getTime()/1000}/>
</div>