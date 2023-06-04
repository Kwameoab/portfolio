// @ts-nocheck
import { getPosts } from "$lib/utils";
// async function getPosts() {
//     let posts = [];
//     const paths = import.meta.glob("/src/posts/*.md", { eager: true });

//     for (const path in paths) {
//         const file = paths[path];
//         const slug = path.split("/").at(-1)?.replace(".md", "");

//         let metadata = file.metadata;
//         if (file.metadata.url === undefined) {
//             const url = slug.replaceAll(" ", "-").substring(0, 25);
//             metadata = { ...metadata, url };
//         }

//         const post = { ...metadata, slug };
//         posts.push(post);
//     }

//     posts = posts.sort(
//         (first, second) =>
//             new Date(second.published_date).getTime() - new Date(first.published_date).getTime()
//     );

//     return json(posts);
// }

export async function load({ fetch, params }) {
    // const response = await fetch("../api/posts");
    const response = await getPosts();
    const posts = await response.json();
    let postInfo = posts.filter((ele) => ele.url === params.slug);

    postInfo = postInfo[0];

    const post = await import(`../../../posts/${postInfo.slug}.md`);
    // console.log("post:", post.default)
    const html = await post.default.render();

    // console.log(new Date(post.metadata.date).toISOString())

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
