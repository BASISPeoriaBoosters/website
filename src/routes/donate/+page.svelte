<script>
    import {Divider} from "@brainandbones/skeleton";
</script>

<svelte:head>
    <title>Donate | BASIS Peoria Boosters</title>
</svelte:head>

<div class="container mx-auto">
    <h1>Donate</h1>
    <br>
    <br>
    <Divider borderWidth="border-t-4" borderStyle="border-dotted" borderColor="border-tertiary-500"/>
    <br>
    <br>
    <h2>Annual Teacher Fund (ATF)</h2>
    <br>
    <div class="mx-auto smaller-container">
        The Annual Teacher Fund is the school’s priority fundraising initiative that plays a critical role in supporting the BASIS academic model.
        <br>
        <br>
        <a class="btn btn-lg btn-filled-primary text-black" target="_blank" rel="noreferrer"
           href="https://connect.clickandpledge.com/w/Form/fcf0f75f-12bb-4ea8-a227-cbddb5b96a65?638239452070929424">
            Make a Contribution
        </a>
        <br>
        <br>
        Your contributions enable the school to recruit, retain,
        and reward top-performing teachers who motivate our students to learn to love learning, to find what inspires them,
        and to achieve outstanding results.<br>
        <br>
        The school’s goal is for 100% of BASIS Peoria parents to participate in the Annual Teacher Fund.<br>
        <br>
        The school recommends an annual donation of $1,500 per family, which represents a small fraction of the annual
        cost of equivalent private school education. Every gift can make a difference!<br>
    </div>
    <br>
    <br>
    <Divider borderWidth="border-t-4" borderStyle="border-dotted" borderColor="border-tertiary-500"/>
    <br>
    <h2>No-Cost Ways to Give</h2>
    <br>
    <div class="smaller-container mx-auto"> <!-- 2023-02-20T07:00:00.000Z -->
        {#if new Date().getTime() < new Date("2023-02-20T07:00:00.000Z").getTime()}
            <hr>
            <br>
            <h3>Amazon Smile</h3>
            <br>
            Support BASIS Peoria Boosters every time you shop!
            Amazon will donate 0.5% of the purchase price to BASIS Peoria Boosters each time you make your everyday
            Amazon purchases when you order using this link:<br>
            <a href="https://smile.amazon.com/ch/45-2095210" target="_blank" rel="noreferrer">https://smile.amazon.com/ch/45-2095210</a>
            <br>
            <br>
            <hr>
        {/if}
        <br>
        <h3>Fry’s Community Rewards Program</h3>
        <br>
        Fry’s donates a portion of member sales to selected organizations. Enrollment in this program is rolled over
        year-to-year, meaning you do not have to re-enroll.<br>
        How to Enroll:<br>
        <br>
        <div class="inline-block px-8">
            <ol class="text-left inline-block">
                <li>Create an account or sign in:
                    <a href="https://www.frysfood.com/account/create" target="_blank" rel="noreferrer">
                        https://www.frysfood.com/account/create
                    </a>
                </li>
                <li>
                    Click “Enroll.” Type in <b>Peoria BASIS Boosters #8000</b>. Once you do this,<br>
                    your card will be linked to the Peoria Basis Boosters and a portion of<br>
                    your total will go towards the school.
                </li>
            </ol>
        </div>
        <br>
        <br>
    </div>
    <Divider borderWidth="border-t-4" borderStyle="border-dotted" borderColor="border-tertiary-500"/>
    <br>
    <div class="smaller-container mx-auto">
        <h2>Double Your Donation (Through Employer Match)</h2>
        Did you know your employer might be willing to MATCH your donation to BASIS Peoria Boosters? It’s true!
        Many big companies, small co-ops, established corporations and inspired start-ups all to offer what is known as
        “Matching Gift Programs.” In fact, about 65% of Fortune 500 companies match employee donations dollar-for-dollar,
        in essence, “Doubling Your Donation!”<br>
        <br>
        Many of these same companies – as high as 40% – also offer “Volunteer Rewards” or “Volunteer Grants” programs.
        They will donate additional funds to BASIS Peoria Boosters if their employees volunteer with us regularly.
        They do so in order to encourage volunteerism in communities where their employees live and work,
        and of course for the tax exemption.<br>
        <br>
        Because we are a 501(c)(3) not-for-profit organization, your donation to BASIS Peoria Boosters is tax exempt.
        But don’t let the power of your time, talents & treasure end there, ask your employer about a Matching Gifts or Volunteer Grant program!
        <br>
        <br>
        <a href="https://doublethedonation.com/basischarterschools" class="btn btn-lg btn-filled-primary text-black" target="_blank" rel="noreferrer">
            Employee Matching
        </a>
    </div>
    <br>
    <Divider borderWidth="border-t-4" borderStyle="border-dotted" borderColor="border-tertiary-500"/>
    <br>
    <h2>Arizona Public School Tax Credit</h2>
    <br>
    <div class="smaller-container mx-auto">
        The Arizona State Public School Tax Credit program allows you (family, friends, and neighbors) to make a donation
        to our school and receive a dollar-for-dollar credit against Arizona state owed taxes!
        <br>
        <br>
        <a href="https://connect.clickandpledge.com/w/Form/fc5ec4e3-3d80-451d-8099-a3333088498b?638239453839686699" class="btn btn-lg btn-filled-primary text-black" target="_blank" rel="noreferrer">
            Arizona Public School Tax Credit
        </a>
    </div>
    <br>
    <Divider borderWidth="border-t-4" borderStyle="border-dotted" borderColor="border-tertiary-500"/>
    <br>
    <h2>Sponsor An Event</h2>
    <br>
    <div class="smaller-container mx-auto">
        The Team BASIS Peoria Teacher/Staff Appreciation Lunch/Breakfast is held monthly for the wonderful, hard-working
        teachers and staff at our school. Do you own a business or want to personally sponsor an event?
        Please&nbsp;email&nbsp;<a href="mailto:president@basispeoriaboosters.org">president@basispeoriaboosters.org</a>
        with any inquiries!
    </div>
    <br>
    <br>
</div>
