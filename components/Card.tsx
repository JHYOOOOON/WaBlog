import Link from "next/link";
import { ImArrowRight2 } from "react-icons/im";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const Card = ({ title, thumbnailUrl, summary, slug, date, ...rest }) => {
	return (
		<CardWrapper>
			<ThumbnailWrapper>
				<Thumbnail src={thumbnailUrl} />
			</ThumbnailWrapper>
			<Link href={`/blog/${slug}`} passHref>
				<ArrowButton>
					<ArrowIcon />
				</ArrowButton>
			</Link>
			<ContentWrapper>
				<Title>{title}</Title>
				<StyledDate>{date}</StyledDate>
				<Summary>{summary}</Summary>
			</ContentWrapper>
		</CardWrapper>
	);
};

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	height: 270px;
	border-radius: 15px;
	overflow: hidden;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	padding: 15px 20px;
`;

const ThumbnailWrapper = styled.div`
	height: 50%;
	min-height: 50%;
	overflow: hidden;
`;

const Thumbnail = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const Title = styled.p`
	width: 90%;
	font-size: 20px;
	line-height: 1.15;
	word-break: keep-all;
`;

const Summary = styled.p`
	margin-top: 7px;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2; /* 라인수 */
	-webkit-box-orient: vertical;
	word-wrap: break-word;
	line-height: 1.2em;
	height: 2.4em;
	color: var(--tx-sub);
`;

const StyledDate = styled.span`
	font-size: 14px;
	margin-top: 5px;
	color: var(--tx-sub);
`;

const Gogo = keyframes`
	0%{
		transform: translateX(0);
	}
	10%{
		transform: translateX(5px);
	}
	20%{
		transform: translateX(0);
	}
	30%{
		transform: translateX(5px);
	}
	40%{
		transform: translateX(0);
	}
	100%{
		transform: translateX(0);
	}
`;

const ArrowButton = styled.button`
	position: absolute;
	top: calc(50% - 25px);
	right: 15px;
	width: 55px;
	height: 55px;
	cursor: pointer;
	background-color: var(--bg-main);
	border-radius: 50%;
	border: none;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

	&:hover > svg {
		animation: ${Gogo} 1.5s linear infinite;
	}
`;

const ArrowIcon = styled(ImArrowRight2)`
	font-size: 25px;
`;

export default Card;
