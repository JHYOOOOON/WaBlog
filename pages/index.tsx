import Link from "next/link";
import { allBlogs } from "contentlayer/generated";
import Component from "components/Component";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1 1 1;
	width: 320px;
	height: 400px;
	border-radius: 15px;
	overflow: hidden;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
		box-sizing: border-box;
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px 25px;
`;

const ThumbnailWrapper = styled.div`
	position: relative;
	height: 60%;
	overflow:hidden;
`;

const Thumbnail = styled.img`
width: 100%;
height: 100%;
	object-fit: cover;
`;

const Title = styled.p`
	margin: 0;
	font-size: 20px;
`;

const Summary = styled.p`
	margin: 0;
	margin-top: 7px;
	overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* 라인수 */
    -webkit-box-orient: vertical;
    word-wrap:break-word; 
    line-height: 1.2em;
    height: 2.4em;
`;

const StyledDate = styled.span`
	font-size: 14px;
	color: gray;
`;

const PostWrapper = styled.div`
	display: flex;
	gap: 30px;
`;

const Card = ({ title, thumbnailUrl, summary, slug, date, ...rest }) => {
	return (
		<Link href={`/blog/${slug}`}>
			<CardWrapper>
				<ThumbnailWrapper>
					<Thumbnail src={thumbnailUrl} />
				</ThumbnailWrapper>
				<ContentWrapper>
					<Title>{title}</Title>
					<StyledDate>{date}</StyledDate>
					<Summary>{summary}</Summary>
				</ContentWrapper>
			</CardWrapper>
		</Link>
	);
};

const SectionTitle = styled.h1`
	font-weight: 700;
	font-size: 30px;
`;

export default function Home({ posts }) {
	return (
		<Component>
			<section>
				<SectionTitle>Recent Posts</SectionTitle>
				<PostWrapper>
					{posts.map((post) => (
						<Card key={post._id} {...post} />
					))}
				</PostWrapper>
			</section>
		</Component>
	);
}

export function getStaticProps() {
	const posts = allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

	return { props: { posts } };
}
