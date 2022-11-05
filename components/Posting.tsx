import Link from "next/link";
import styled from "@emotion/styled";

const Posting = ({ title, thumbnailUrl, summary, slug, date, ...rest }) => {
	return (
		<Link href={`/blog/${slug}`} passHref>
			<PostingWrapper>
				<div>
					<Title>{title}</Title>
					<Date>{date}</Date>
					<Summary>{summary}</Summary>
				</div>
			</PostingWrapper>
		</Link>
	);
};

const PostingWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 18px 0;
	&:first-child {
		padding-top: 0;
	}
	&:not(:last-child) {
		border-bottom: 1px solid var(--border-light);
	}
	&:hover {
		p:first-child {
			color: var(--tx-point);
		}
	}
	cursor: pointer;
`;

const Title = styled.p`
	font-size: 22px;
	font-weight: 700;
	line-height: 1.25;
	cursor: pointer;
	transition: color 0.2s;
	word-break: keep-all;
`;

const Date = styled.p`
	font-size: 13px;
	color: var(--tx-sub);
	margin: 7px 0 10px 0;
`;

const Summary = styled.p`
	line-height: 1.25;
`;

export default Posting;
