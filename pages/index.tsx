import styled from "@emotion/styled";
import TitleImage from "components/TitleImage";
import { allBlogs } from "contentlayer/generated";
import Component from "components/Container";
import Card from "components/Card";

const PostWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;
	gap: 20px;
`;

const SectionTitle = styled.h1`
	font-weight: 700;
	margin-bottom: 14px;
	font-size: 30px;
`;

export default function Home({ posts }) {
	return (
		<Component>
			<TitleImage />
			<section>
				<SectionTitle>Recent Posts</SectionTitle>
				<PostWrapper>
					{posts.length <= 7
						? posts.map((post) => <Card key={post._id} {...post} />)
						: posts.slice(0, 7).map((post) => {
								<Card key={post._id} {...post} />;
						  })}
				</PostWrapper>
			</section>
		</Component>
	);
}

export function getStaticProps() {
	const posts = allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

	return { props: { posts } };
}
