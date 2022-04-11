import { useMDXComponent } from "next-contentlayer/hooks";
import type { Memo } from "contentlayer/generated";
import { allMemos } from "contentlayer/generated";
import MemoLayout from "layouts/MemoLayout";

export default function Post({ post }: { post: Memo }) {
	const MDXComponent = useMDXComponent(post.body.code);
	return (
		<MemoLayout post={post}>
			<MDXComponent />
		</MemoLayout>
	);
}

export async function getStaticPaths() {
	return {
		paths: allMemos.map((p) => ({ params: { slug: p.slug } })),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const post = allMemos.find((post) => post.slug === params.slug);

	return {
		props: {
			post,
		},
	};
}
