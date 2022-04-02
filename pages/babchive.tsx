import { allBabchives } from "contentlayer/generated";
import { Description, SectionTitle } from "components/Common.style";
import Container from "components/Container";
import styled from "@emotion/styled";
import Bab from "components/Bab";

const Babchives = ({ posts }) => {
	return (
		<Container>
			<SectionTitle>Babchive</SectionTitle>
			<Description>정리해서 올리기엔 사소한 글들을 그날 먹은 밥과 함께 기록하는 일기장</Description>
			<PostWrapper>
				{posts.map((posts) => (
					<Bab key={posts._id} {...posts} />
				))}
			</PostWrapper>
		</Container>
	);
};

export default Babchives;

const PostWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 20px;
`;

export function getStaticProps() {
	const posts = allBabchives.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

	return { props: { posts } };
}
