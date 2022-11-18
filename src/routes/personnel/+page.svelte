<script>
    import BoardMembers from "$lib/personnel/BoardMembers.svelte";
    import {Divider} from "@brainandbones/skeleton";
</script>
<div class="container text-center mx-auto">
    <h1>BASIS Peoria Boosters Personnel</h1>
    <br>
    These are the people who make <b>BASIS Peoria Boosters</b> what it is!<br>
    <br>
    <h1>202x-202x BASIS Peoria Boosters Board</h1>
    <Divider borderWidth="border-t-4" borderStyle="border-dotted" borderColor="border-tertiary-500"/>
    <br>
    <BoardMembers/>
    <br>
    <br>
    <h1>Committees</h1>
    <Divider borderWidth="border-t-4" borderStyle="border-dotted" borderColor="border-tertiary-500"/>
    <br>
    <ul>
        <li>Some cool things will be here</li>
    </ul>
</div>