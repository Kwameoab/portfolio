<script>
    export let data;

    let posts = data.posts;
</script>

<div class="text-center container p-10 mx-auto">
    <h1 class="text-5xl font-bold">Blog</h1>
    <p class="py-5 text-lg">Here are my thoughts on a variety of topics.</p>
    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {#each posts as blogPosts}
            <a href="/blog/{blogPosts.url}">
                <div
                    class="card card-compact bg-base-100 shadow-xl hover:shadow-2xl h-60"
                >
                    <div class="card-body h-36">
                        <h2 class="card-title text-2xl">{blogPosts.title}!</h2>
                        <div class="overflow-y-hidden h-32">
                            <p class="items-center text-lg">
                                {blogPosts.description}
                            </p>
                        </div>
                        <div class="card-actions justify-end">
                            {blogPosts.published_date}
                        </div>
                    </div>
                </div>
            </a>
        {/each}
    </div>
</div>
