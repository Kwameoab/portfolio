// @ts-nocheck
import { getPosts } from "$lib/utils";

export async function load({ fetch, params }) {
    const response = await getPosts();
    const posts = await response.json();

    let postInfo = posts.filter((ele) => ele.url === params.slug);

    postInfo = postInfo[0];

    const post = await import(`../../../posts/${postInfo.slug}.md`);
    const html = await post.default.render();

    return {
        meta: post.metadata,
        html: html.html,
        seo: {
            type: "article",
            title: post.metadata.title,
            description: post.metadata.description,
            ogUrl: `https://kwameoab.github.io/portfolio/${params.slug}.html`,
            categories: postInfo.categories,
            published_time: new Date(
                post.metadata.published_date
            ).toISOString(),
            modified_time: new Date(post.metadata.modified_date).toISOString(),
        },
    };
}
