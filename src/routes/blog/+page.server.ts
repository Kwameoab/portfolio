// @ts-nocheck
import { getPosts } from "$lib/utils";

export async function load() {
    const response = await getPosts();
    const posts = await response.json();
    return {
        posts,
        seo: {
            title: "Kwameoab::blog",
            ogUrl: "https://kwameoab.github.io/portfolio/blog",
        },
    };
}
