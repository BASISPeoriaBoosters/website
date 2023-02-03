<script>
import UpcomingEvents from "$lib/calendar/UpcomingEvents.svelte";
</script>
<svelte:head>
    <title>BASIS Peoria Boosters</title>
</svelte:head>

<style>
    .small-pad {
        padding: 5% 10%;
    }
    .xs-pad {
        padding: 2% 5%;
    }
    .big-pad {
        padding: 10% 8%;
    }


    .imageBox-background {
        background-image: url("/img/building.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }
    .imageBox {
        background-image: none;
        background-color: rgba(32, 163, 203, 0.65);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);
    }
    p {
        max-width: 900px;
        font-size: 1.2em !important;
        line-height: 1.5em !important;
    }
    p.limit {
        max-width: 800px;
    }

    .header {
        background-color: rgb(var(--color-primary-400));
        max-width: 1000px;
        padding: 4% 10%;
    }

    .spacer {
        min-height: 500px;
        max-width: 700px;

        border: 5px gray;
        border-style: dashed;
    }

    @media (min-width: 1000px) {
        .split-content {
            display: flex;
        }
        .minorContent {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .majorContent {
            max-width: 80vw;
        }
    }
    @media (min-width: 1000px) {
        .smallMajor {
            max-width: 35vw;
        }
    }
</style>
<div class="imageBox-background">
    <div class="text-center text-black big-pad imageBox">
        <h1>BASIS Peoria Boosters</h1>
        <br>
        <p class="mx-auto !text-black limit">
            BASIS Peoria Boosters is the social glue of the BASIS Peoria (Grades 5-12) community,
            connecting students, families, teachers, and staff. We raise money to support students & teachers
            as well as run the breakfast program.
            <br>
            <br>
        </p>
    </div>
</div>
<hr>
<div class="split-content text-black">
    <div class="minorContent flex-1">
        <img class="mx-auto" src="/img/volunteers.webp" alt="We Love our Volunteers">
    </div>
    <div class="majorContent small-pad bg-accent-400 min-[1000px]:text-right">
        <h1>Volunteer-Run Breakfast Program</h1>
        <br>
        <p class="mx-auto !text-black">
            BASIS Peoria Boosters’ volunteer-run breakfast program gathers orders, collects payment,
            arranges vendor deliveries, and distributes breakfast on wednesdays from 6:45 AM until 1st period.
            This wouldn’t be possible without our volunteers!
        </p>
    </div>
</div>
<hr>
<br>
<h1 class="header lg:mx-auto">Happening This Month</h1>
<br>
This is what we’re up to right now. Please check back regularly for exciting events, fundraising and Boosters members activities.<br>
<br>
<h4>Upcoming events in the next 30 days</h4>
<UpcomingEvents/>
<br>
<br>
<br>
