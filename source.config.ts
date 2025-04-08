import { defineConfig, defineDocs } from "fumadocs-mdx/config";

export const docs = defineDocs({
  dir: "src/content/docs",
  docs: {
    async: true,
  },
});

export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      lazy: true,
      themes: {
        light: "github-light",
        dark: "github-dark",
      },
      langs: ["ts", "js", "html", "tsx", "mdx"],
    },
  },
});
