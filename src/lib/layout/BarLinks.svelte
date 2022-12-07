<script>
    export let vertical;
</script>
<style>
    a {
        margin-bottom: 0.5em;
        color: inherit;
        font-size: 1.25em;
    }

    a:any-link:hover {
        color: rgb(var(--color-primary-400));
    }

    .verticalLink {
        display: block;
        font-size: 1.5em;
    }
</style>

<a class="px-2" href="/" class:verticalLink={vertical}>Home</a>
<a class="px-2" href="/personnel" class:verticalLink={vertical}>People</a>
<!--<a class="px-2" href="/programs/breakfast" class:verticalLink={vertical}>Programs</a>-->
<a class="px-2" href="/donate" class:verticalLink={vertical}>Donate</a>
<a class="px-2" href="/contact" class:verticalLink={vertical}>Contact</a>
<a class="px-2" href="/links" class:verticalLink={vertical}>Links</a>