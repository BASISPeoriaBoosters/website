<script lang="ts">
    import {type CalendarData, type Event, readCalendar} from "$lib/calendar/calendarReader";
    import {browser, dev} from "$app/environment";
    import {ProgressBar} from "@brainandbones/skeleton";
    import CalendarEvent from "$lib/calendar/CalendarEvent.svelte";
    import {isBeforeOrSameDay, isAfterOrSameDay} from "../utils";

    let calendar: CalendarData;
    let events: Event[] = [];

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    let prom = new Promise(() => {});


    (async () => {
        if(!browser) return;
        prom = readCalendar("https://outlook.office365.com/owa/calendar/ef3de44c4d4a4daa9585609a82e620b9@basispeoriaboosters.org/931bf15a023346858b4964fd602094806388087456254886863/calendar.ics")
        prom.then((c: CalendarData) => {
            let now = new Date();
            let monthFromNow = new Date();
            monthFromNow.setDate(monthFromNow.getDate() + 30);

            if(dev) {
                for (let i = 1; i <= 5; i++) {
                    c.events.push({
                        title: "Fake Event " + i,
                        id: Math.floor(Math.random() * 1e5) + "",
                        description: "This is really a fake event for testing",
                        startDate: new Date(now.getTime() + (Math.max(24 * i-1, 1) * 60 * 60 * 1000)),
                        endDate: new Date(now.getTime() + ((24 * i) * 60 * 60 * 1000))
                    });
                }
                c.events.push({
                    title: "Future Event",
                    id: Math.floor(Math.random() * 1e5) + "",
                    description: "This is a test event that should not be shown in upcoming events.",
                    startDate: new Date(now.getTime() + (31 * 24 * 60 * 60 * 1000)),
                    endDate: new Date(now.getTime() + (32 * 24 * 60 * 60 * 1000))
                });
            }

            calendar = c;
            events = c.events
                .filter(e => isBeforeOrSameDay(now, e.endDate)) // filter past events
                .filter(e => !isAfterOrSameDay(e.startDate, monthFromNow)); // filter events that are not within the next 30 days
        })
    })();
</script>
{#await prom}
    <ProgressBar/>
{:then c}
    <div class="inline-block m-2">
        {#each events as event}
            <CalendarEvent {event}/>
            <br>
        {:else}
            No events in the next 30 days
        {/each}
    </div>
{/await}