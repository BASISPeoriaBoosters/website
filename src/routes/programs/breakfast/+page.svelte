<script>
    import {Alert, Divider} from "@brainandbones/skeleton";
    import OutdatedWarning from "$lib/OutdatedWarning.svelte";
</script>
<style>
    .side-notes {
        max-width: 500px;
    }
</style>

<div class="container mx-auto">
    <OutdatedWarning/>
    <br>
    <h1>School Breakfast Program</h1>
    <Divider borderWidth="border-t-4" borderStyle="border-dotted" borderColor="border-tertiary-500"/>
    <br>
    BASIS Peoria Boosters has partnered with Boonli.com (formally Order Lunch) to provide a secure, fast,
    and easy-to-use online ordering system that allows parents to view our breakfast menu, order, prepay,
    and manage student breakfast on the web.<br>
    <br>
    <h4>Current Breakfast Vendors:</h4>
    TBD<br>
    <br>
    <a href="https://basisschools.boonli.com/" target="_blank" class="btn btn-lg btn-filled-tertiary text-black" rel="noreferrer">Order breakfast</a>
    <br>
    <br>
    <h4>Orders can be placed from the 10th-22nd of each month for the next month's breakfastes.</h4>
    <div class="side-notes inline-block m-1">
        <Alert class="w-full" background="bg-primary-500/40" border="border-l-4 border-primary-500">
            <svelte:fragment slot="title">
                Note
            </svelte:fragment>
            The only way to participate in the breakfast program is to order through your account.
            <a href="#how-to-order">How to sign up ></a>
        </Alert>
    </div>
    <div class="side-notes inline-block m-1">
        <Alert background="bg-primary-500/40" border="border-l-4 border-primary-500">
            <svelte:fragment slot="title">
                Vegetarian or GF
            </svelte:fragment>
            Vegetarian options are available daily, but Panda Express <b>does not</b> have any vegetarian or gluten-free dishes.
        </Alert>
    </div>
    <br>
    <br>
    <Divider borderWidth="border-t-4" borderStyle="border-dotted" borderColor="border-tertiary-500"/>
    <br>


    <h1 id="how-to-order">How To Order breakfastes</h1>
    <br>
    Visit <a href="https://basisschools.boonli.com/" target="_blank" rel="noreferrer">https://basisschools.boonli.com/</a>
    <br><br>

    <h2>For New Accounts</h2>
    <div class="inline-block text-left">
        <ol>
            <li>Click on <i>Create an Account</i></li>
            <li>Password: Peoria1</li>
            <li>Add account and profile(s) information</li>
            <li>Once you sign in, read the program info page,<br>then click the <i>Home</i> button in the upper left.</li>
            <li><b>IT IS CRITICAL THAT YOU ADD YOUR STUDENT'S GRADE</b></li>
        </ol>
    </div>
    <br>
    <br>
    <h2>For Returning Account Holders</h2>
    <div class="inline-block text-left">
        <ol>
            <li>Sign in with your username and password.</li>
            <li>Read the program info page, then click the<br><i>Home</i> button in the upper left</li>
        </ol>
    </div>
    <br><br>
    To begin ordering, click on the calendar date.<br>
    The deadline to purchase breakfastes each month is the 22nd.
    <br>
    <br>

    <h2>Orders & Payments</h2>
    <div class="inline-block text-left">
        <ul>
            <li>A minimum $10.00 order is required for<br>new or changed orders – otherwise,<br>a $1.00 handling fee is charged.</li>
            <li>The breakfast program accepts payment via<br>Visa, MasterCard, Discover, or your debit<br>card with a Visa or MasterCard logo.</li>
        </ul>
    </div>
    <br>
    <br>

    <Divider borderWidth="border-t-4" borderStyle="border-dotted" borderColor="border-tertiary-500"/>

    <br>
    <br>
    <h1 id="volunteer">Volunteer</h1>
    <br>
    breakfast volunteers are greatly needed. Willing and able? Sign up today!<br>
    Without breakfast volunteers, we would be unable to distribute hot breakfastes to students.<br>
    <br>
    <a href="https://www.signupgenius.com/go/508084dafad2da1f94-teacher" target="_blank" rel="noreferrer" class="btn btn-lg btn-filled-tertiary text-black">
        March breakfast Volunteer Sign-Up
    </a>
    <br>
    <br>
    <Alert>
        <svelte:fragment slot="title">
            Please note:
        </svelte:fragment>
        Volunteers need to check in at the school front office and have government ID<br>(such as a driver license) scanned in order to obtain a visitor’s badge.
    </Alert>
    <br>
    <br>
    <h2>Sponsor An Event</h2>
    <br>
    The Team BASIS Peoria Teacher/Staff Appreciation breakfast/Breakfast is held monthly for the wonderful,
    hard-working teachers and staff at our school.<br>
    <b>Do you own a business or want to personally sponsor an event?</b>
    Please email <a href="mailto:president@basispeoriaboosters.org">president@basispeoriaboosters.org</a> with any inquiries!
    <br>
    <br>
    <a href="https://www.signupgenius.com/go/508084dafad2da1f94-teacher" target="_blank" rel="noreferrer" class="btn btn-lg btn-filled-tertiary text-black">
        Volunteer or Donate
    </a>
    <br>
    <br>
    <Divider borderWidth="border-t-4" borderStyle="border-dotted" borderColor="border-tertiary-500"/>
    <br>
    <br>
    <h2>Food or Policy Questions?</h2>
    <br>
    Please email <a href="mailto:breakfast@basispeoriaboosters.org">breakfast@basispeoriaboosters.org</a> with any inquiries.
    <br>
    <br>
    <br>
    <br>
    <br>
</div>