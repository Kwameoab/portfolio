<script>
    import { page } from "$app/stores";
    import { base } from '$app/paths';

    $: classesActive = (href) =>
        $page.url.pathname.includes(href) ? "active" : "";
</script>

<div class="flex justify-center">
    <div class="navbar bg-base-100 max-w-7xl justify-center">
        <div class="flex-1">
            <a href="{base}/" class="btn btn-ghost normal-case text-xl">Kwame</a>
        </div>
        <div class="flex-none">
            <ul class="menu menu-horizontal px-1">
                <li>
                    <a class="{classesActive('/about')} text-lg" href="{base}/about"
                        >About</a
                    >
                </li>
                <li>
                    <a
                        class="{classesActive('/projects')} text-lg"
                        href="{base}/projects">Projects</a
                    >
                </li>
                <li>
                    <a class="{classesActive('/blog')} text-lg" href="{base}/blog"
                        >Blog</a
                    >
                </li>
            </ul>
        </div>
    </div>
</div>
