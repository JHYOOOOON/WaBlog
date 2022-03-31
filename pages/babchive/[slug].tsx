import { useMDXComponent } from "next-contentlayer/hooks";
import type { Babchive } from "contentlayer/generated";
import { allBabchives } from "contentlayer/generated";
import BabchiveLayout from "layouts/babchive";

export default function Post({ post }: { post: Babchive }) {
	const MDXComponent = useMDXComponent(post.body.code);
	return (
		<BabchiveLayout post={post}>
			<MDXComponent />
		</BabchiveLayout>
	);
}

export async function getStaticPaths() {
	return {
		paths: allBabchives.map((p) => ({ params: { slug: p.slug } })),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const post = allBabchives.find((post) => post.slug === params.slug);

	return {
		props: {
			post,
		},
	};
}
