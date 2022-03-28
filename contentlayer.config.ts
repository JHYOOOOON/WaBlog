import { defineDocumentType, makeSource } from "contentlayer/source-files";

import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";

const Blog = defineDocumentType(() => ({
	name: "Blog",
	filePathPattern: "blog/*.mdx",
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		date: { type: "string", required: true },
		summary: { type: "string", required: true },
		thumbnailUrl: { type: "string", required: true },
	},
	computedFields: {
		slug: {
			type: "string",
			resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
		},
	},
}));

const Babchive = defineDocumentType(() => ({
	name: "Babchive",
	filPathPattern: "babchive/*.mdx",
	contentType: "mdx",
	fields: {
		title: { type: "string", required: true },
		date: { type: "string", required: true },
		thumbnailUrl: { type: "string", required: true },
	},
	computedFields: {
		slug: {
			type: "string",
			resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
		},
	},
}));

const contentLayerConfig = makeSource({
	contentDirPath: "posts",
	documentTypes: [Blog, Babchive],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [
			rehypeSlug,
			rehypeCodeTitles,
			rehypePrism,
			[
				rehypeAutolinkHeadings,
				{
					properties: {
						className: ["anchor"],
					},
				},
			],
		],
	},
});

export default contentLayerConfig;
