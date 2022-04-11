import Link from "next/link";
import Image from "next/image";
import styled from "@emotion/styled";

const Note = ({ title, date, thumbnailUrl, slug, ...rest }) => {
	return (
		<Link href={`/memo/${slug}`} passHref>
			<NoteWrapper>
				<Thumbnail layout="fill" objectFit="cover" src={thumbnailUrl} alt={title} />
				<ContentWrapper className="content-wrapper">
					<Title>{title}</Title>
				</ContentWrapper>
			</NoteWrapper>
		</Link>
	);
};

export default Note;

const Thumbnail = styled(Image)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	transition: 0.2s;
`;

const Title = styled.p`
	font-size: 18px;
	margin-bottom: 3px;
`;

const ContentWrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	transition: 0.2s;
`;

const NoteWrapper = styled.div`
	overflow: hidden;
	position: relative;
	cursor: pointer;
	&::before {
		content: " ";
		display: block;
		width: 100%;
		padding-top: 100%;
	}

	.content-wrapper {
		display: none;
	}

	&:hover {
		img {
			filter: blur(20px) saturate(80%);
		}
		.content-wrapper {
			display: flex;
		}
	}
`;
