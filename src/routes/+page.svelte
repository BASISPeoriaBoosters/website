<script>
    import LargeLogo from "$lib/LargeLogo.svelte";
    import MailingList from "$lib/MailingList.svelte";
</script>

<style>
    .small-pad {
        padding: 5% 10%;
    }
    .big-pad {
        padding: 10% 8%;
    }


    .imageBox-background {
        background-image: url("/img/building.png");
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: bottom;
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

    @media (min-width: 1000px) {
        .split-content {
            display: flex;
        }
        .left-content {
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
        }
    }
</style>
<div class="imageBox-background">
    <div class="text-center text-black big-pad imageBox">
        <h1>BASIS Peoria Boosters</h1>
        <br>
        <p class="mx-auto !text-black limit">
            ASIS Peoria Boosters is the social glue of the BASIS Peoria (Grades 5-12) community,
            connecting students, families, teachers and staff. We raise money to support students & teachers as well as run lunch programs.
            <br>
            <br>
            <a href="/" class="btn btn-base btn-filled-primary text-white">Get Involved</a>
        </p>
    </div>
</div>
<hr>
<div class="split-content text-black">
    <div class="left-content">
        <img class="mx-auto" src="/img/volunteers.webp" alt="We Love our Volunteers">
    </div>
    <div class="right-content small-pad bg-accent-400 text-left">
        <h1>Volunteer-Run Lunch Program</h1>
        <br>
        <p class="mx-auto !text-black">
            BASIS Peoria Boosters’ volunteer-run lunch program gathers orders, collects payment,
            arranges vendor deliveries, and distributes lunches during each grade’s scheduled lunch break.
            This wouldn’t be possible without our volunteers!
        </p>
    </div>
</div>
<hr>
<div class="split-content">
    <div class="left-content">
        <LargeLogo/>
    </div>
    <div class="right-content small-pad text-left">
        <h1>Join our mailing list!</h1>
        <p class="mx-auto">
            Add your email to our mailing list so you can get lunch order reminders and other updates.
        </p>
        <br>
        <MailingList class="ml-auto"/>
    </div>
</div>