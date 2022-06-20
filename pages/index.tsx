import styled from "@emotion/styled";
import { allBlogs, allMemos } from "contentlayer/generated";
import Component from "components/Container";
import Posting from "components/Posting";
import TitleImage from "components/TitleImage";
import Note from "components/Note";

export default function Home({ blogPosts, memoPosts }) {
	return (
		<Component>
			<section>
				<SectionTitle>Recent Memos</SectionTitle>
				<MemoWrapper>
					{memoPosts.length <= 5
						? memoPosts.map((post) => <Note key={post.id} {...post} />)
						: memoPosts.slice(0, 5).map((post) => <Note key={post._id} {...post} />)}
				</MemoWrapper>
			</section>
			<Section>
				<SectionTitle>Recent Posts</SectionTitle>
				<PostWrapper>
					{blogPosts.length <= 5
						? blogPosts.map((post) => <Posting key={post._id} {...post} />)
						: blogPosts.slice(0, 7).map((post) => {
								<Posting key={post._id} {...post} />;
						  })}
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

const MemoWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 20px;

	@media screen and (max-width: 750px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 20px;
		div:nth-child(4),
		div:nth-child(5) {
			display: none;
		}
	}
`;

const SectionTitle = styled.h1`
	font-weight: 700;
	margin-bottom: 14px;
	font-size: 28px;
`;

export function getStaticProps() {
	const blogPosts = allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
	const memoPosts = allMemos.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

	return { props: { blogPosts, memoPosts } };
}
