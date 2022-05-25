import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";

const Posting = ({ title, thumbnailUrl, summary, slug, date, ...rest }) => {
	return (
		<PostingWrapper>
			<div>
				<Link href={`/blog/${slug}`} passHref>
					<Title>{title}</Title>
				</Link>
				<Date>{date}</Date>
				<Summary>{summary}</Summary>
			</div>
			<FlexBoxRight>
				<Image src={thumbnailUrl} width="100%" height="100%" />
			</FlexBoxRight>
		</PostingWrapper>
	);
};

const PostingWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const FlexBoxRight = styled.div`
	@media screen and (max-width: 750px) {
		display: none;
	}
`;

const Title = styled.p`
	font-size: 25px;
	font-weight: 700;
	line-height: 1.25;
	cursor: pointer;
	transition: color 0.2s;
	&:hover {
		color: var(--tx-point);
	}
`;

const Date = styled.p`
	font-size: 14px;
	color: var(--tx-sub);
	margin: 6px 0;
`;

const Summary = styled.p`
	line-height: 1.25;
`;

export default Posting;
