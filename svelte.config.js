import preprocess from "svelte-preprocess";
// import adapter from "@sveltejs/adapter-auto";
import adapter from "@sveltejs/adapter-static";

import { mdsvex } from "mdsvex";

const mdsvexOptions = {
    extensions: [".md", ".svelte"],
};

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    extensions: [".svelte", ".md"],
    kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: "build",
            assets: "build",
            fallback: undefined,
            precompress: false,
            strict: false,
        }),
        paths: {
            base: dev ? '' : process.env.BASE_PATH,
        }
    },

    preprocess: [
        preprocess({
            postcss: true,
        }),
        mdsvex(mdsvexOptions),
    ],
};

export default config;
