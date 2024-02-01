import styled from "@emotion/styled";
import { allBlogs } from "contentlayer/generated";
import Component from "components/Container";
import Posting from "components/Posting";
import { SectionTitle } from "components/Common.style";

export default function Home({ blogPosts }) {
	return (
		<Component>
			<SectionTitle>Recent Posts</SectionTitle>
			<PostWrapper>
				{blogPosts.map((post) => (
					<Posting key={`blog_${post._id}`} {...post} />
				))}
			</PostWrapper>
		</Component>
	);
}

const PostWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export function getStaticProps() {
	const blogPosts = allBlogs
		.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
		.slice(0, 5);

	return { props: { blogPosts } };
}
