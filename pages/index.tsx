import styled from "@emotion/styled";
import { allBlogs } from "contentlayer/generated";
import Component from "components/Container";
import Posting from "components/Posting";
import TitleImage from "components/TitleImage";

export default function Home({ blogPosts }) {
	return (
		<Component>
			<TitleImage/>
			<Section>
				<SectionTitle>Recent Posts</SectionTitle>
				<PostWrapper>
					{blogPosts.map((post) => <Posting key={`blog_${post._id}`} {...post} />)}
				</PostWrapper>
			</Section>
		</Component>
	);
}

const Section = styled.section`
	margin-top: 45px;
`;

const PostWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

const SectionTitle = styled.h1`
	font-weight: 700;
	margin-bottom: 15px;
	font-size: 28px;
`;

export function getStaticProps() {
	const blogPosts = allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))).slice(0, 5);

	return { props: { blogPosts } };
}
