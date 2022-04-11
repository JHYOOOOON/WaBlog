import { allMemos } from "contentlayer/generated";
import { Description, SectionTitle } from "components/Common.style";
import Container from "components/Container";
import styled from "@emotion/styled";
import Note from "components/Note";

const Memo = ({ posts }) => {
	return (
		<Container>
			<SectionTitle>Memo</SectionTitle>
			<Description>그 날 배운 기술과 함께 쓰는 일기</Description>
			<PostWrapper>
				{posts.map((posts) => (
					<Note key={posts._id} {...posts} />
				))}
			</PostWrapper>
		</Container>
	);
};

export default Memo;

const PostWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
`;

export function getStaticProps() {
	const posts = allMemos.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

	return { props: { posts } };
}
