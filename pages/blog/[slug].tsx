import { useMDXComponent } from "next-contentlayer/hooks";
import { allBlogs } from "contentlayer/generated";
import type { Blog } from "contentlayer/generated";
import Container from "components/Container";

export default function Post({ post }: { post: Blog }) {
	const Component = useMDXComponent(post.body.code);
	return (
		<Container>
			<Component />
		</Container>
	);
}

export async function getStaticPaths() {
	return {
		paths: allBlogs.map((p) => ({ params: { slug: p.slug } })),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const post = allBlogs.find((post) => post.slug === params.slug);

	return {
		props: {
			post,
		},
	};
}
