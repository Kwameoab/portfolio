<script>
    export let data;
</script>

<div class="flex">
    <div class="container p-10 mx-auto">
        <div class="flex justify-center xl:px-36">
            <div>
                <div
                    class="prose-lg md:prose-xl 2xl:prose-2xl prose-headings:font-bold"
                >
                    <h1>{data.meta.title}</h1>
                </div>
                <p class="mt-3 text-lg">
                    Tags: {#each data.meta.categories as category}<span
                            >#{category}
                        </span>
                    {/each}
                </p>
                <em>Published: {data.meta.published_date}</em>
                {#if data.meta.published_date !== data.meta.modified_date}
                    <p><em>Modified: {data.meta.modified_date}</em></p>
                {/if}
                <article
                    class="prose-lg md:prose-xl 2xl:prose-2xl mt-7 prose-headings:font-bold prose-a:text-primary-focus hover:prose-a:underline"
                >
                    {@html data.html}
                </article>
            </div>
        </div>
    </div>
</div>
