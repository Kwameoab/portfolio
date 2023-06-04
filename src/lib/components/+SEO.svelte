<script>
    import { page } from "$app/stores";
    import { base } from "$app/paths";
</script>

<svelte:head>
    <!-- Regular SEO -->
    <title>{$page.data?.seo?.title || "Kwameoab | SWE @ Stripe"}</title>
    <meta
        name="description"
        content={$page.data?.seo?.description ||
            "Personal portfolio and blog for Kwame Ampadu-Boateng a Vanderbilt Computer Science Graduate and Software Engineer at Stripe."}
    />

    <meta
        name="robots"
        content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    />

    <!-- Twitter SEO -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta
        name="twitter:image"
        content="https://kwameoab.github.io/portfolio/images/logo.png"
    />
    <meta name="twitter:image:alt" content="My logo for this website." />
    <meta
        name="twitter:description"
        content={$page.data?.seo?.description ||
            "Personal portfolio and blog for Kwame Ampadu-Boateng a Vanderbilt Computer Science Graduate and Software Engineer at Stripe."}
    />
    <meta name="twitter:creator" content="@kwameoab" />
    <meta name="twitter:site" content="@kwameoab" />

    <!-- OG SEO Required -->
    <meta
        name="og:title"
        content={$page.data?.seo?.title || "Kwameoab | SWE @ Stripe"}
    />
    <meta name="og:type" content={$page.data?.seo?.type || "website"} />
    <meta
        name="og:image"
        content={$page.data?.seo?.image ||
            "https://kwameoab.github.io/portfolio/images/logo.png"}
    />
    <meta
        name="og:url"
        content={$page.data?.seo?.ogUrl ||
            "https://kwameoab.github.io/portfolio"}
    />

    <!-- OG SEO Optional -->
    <!-- og:description
    og:site_name -->

    <!-- OG Article SEO -->
    {#if $page.data?.seo?.type == "article"}
        {#each $page.data?.seo?.categories as category}
            <meta name="article:tag" content={category} />
        {/each}
        <meta
            name="article:published_time"
            content={$page.data?.seo?.published_time}
        />
        <meta
            name="article:modified_time"
            content={$page.data?.seo?.modified_time}
        />
    {/if}
</svelte:head>
