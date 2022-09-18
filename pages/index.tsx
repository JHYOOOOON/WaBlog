import styled from "@emotion/styled";
import { allBlogs, allMemos } from "contentlayer/generated";
import Component from "components/Container";
import Posting from "components/Posting";
import Note from "components/Note";

export default function Home({ blogPosts, memoPosts }) {
	return (
		<Component>
			<section>
				<SectionTitle>Recent Memos</SectionTitle>
				<MemoWrapper>
					{memoPosts.map((post) => <Note key={`note_${post._id}`} {...post} />)}
				</MemoWrapper>
			</section>
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
	margin-bottom: 15px;
	font-size: 28px;
`;

export function getStaticProps() {
	const blogPosts = allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))).slice(0, 5);
	const memoPosts = allMemos.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))).slice(0, 5);

	return { props: { blogPosts, memoPosts } };
}
