import { useMDXComponent } from "next-contentlayer/hooks";
import type { Babchive } from "contentlayer/generated";
import Container from "components/Container";
import { allBabchives } from "contentlayer/generated";

export default function Post({ post }: { post: Babchive }) {
	const Component = useMDXComponent(post.body.code);
	return (
		<Container>
			<Component />
		</Container>
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
