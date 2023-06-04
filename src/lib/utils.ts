// @ts-nocheck
import { json } from "@sveltejs/kit";

export async function getPosts() {
    let posts = [];
    const paths = import.meta.glob("/src/posts/*.md", { eager: true });

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split("/").at(-1)?.replace(".md", "");

        let metadata = file.metadata;
        if (file.metadata.url === undefined) {
            const url = slug.replaceAll(" ", "-").substring(0, 30);
            metadata = { ...metadata, url };
        }

        const post = { ...metadata, slug };
        posts.push(post);
    }

    posts = posts.sort(
        (first, second) =>
            new Date(second.published_date).getTime() -
            new Date(first.published_date).getTime()
    );

    return json(posts);
}
