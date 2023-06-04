<script>
    import "../app.postcss";
    import Footer from "$lib/components/+Footer.svelte";
    import Navigation from "$lib/components/+Navigation.svelte";
    import Seo from "../lib/components/+SEO.svelte";
</script>

<div class="flex flex-col min-h-screen">
    <Seo />
    <Navigation />

    <div class="flex-1">
        <slot />
    </div>

    <Footer />
</div>
