<script lang="ts">
    import {type Event} from "$lib/calendar/calendarReader"
    import DateStamp from "$lib/DateStamp.svelte";
    export let event: Event;
</script>
<style>
    .event {
        border-radius: 12px;
        border: 2px black solid;
        display: inline-block;
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