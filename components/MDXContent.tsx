import styled from "@emotion/styled";
import { SectionTitle } from "./Common.style";

const MDXContent = ({ title, summary, date, children }) => {
	return (
		<div>
			<TitleWrapper>
				<FlexWrapper>
					<SectionTitle>{title}</SectionTitle>
					<StyledDate>{date}</StyledDate>
				</FlexWrapper>
				<Summary>{summary}</Summary>
			</TitleWrapper>
			<ContentWrapper>{children}</ContentWrapper>
		</div>
	);
};

export default MDXContent;

const TitleWrapper = styled.div`
	padding: 20px 25px;
	margin-bottom: 30px;
	background-color: var(--bg-sub);
`;

const FlexWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ContentWrapper = styled.div`
	padding: 0 25px;

	h2 {
		font-size: 25px;
		font-weight: 700;
		margin-top: 27px;
		margin-bottom: 10px;
		padding-bottom: 13px;
		border-bottom: 1px solid var(--border-light);
	}

	p {
		margin-top: 15px;
		margin-bottom: 20px;
		line-height: 1.5;
		code {
			padding: 1px 3px;
			border-radius: 3px;
			background-color: #ededed;
			color: #e97e0c;
			font-size: 14px;
		}
	}

	img {
		max-width: 400px;
	}

	a {
		color: #bcbcbc;
		border-bottom: 1px solid #bcbcbc;
		transition: 0.1s;
		&:hover {
			color: var(--tx-point);
			border-bottom: 1px solid var(--border-point);
		}
	}

	blockquote {
		margin-left: 0;
		padding: 10px 15px;
		border-left: 5px solid var(--border-point);
		background-color: var(--bg-sub);
		> p {
			margin: 0;
		}
	}

	/* 코드 블럭 */
	pre {
		background: var(--bg-dark);
		border-radius: 5px;
		padding: 15px 20px;
		code {
			color: var(--tx-bright);
			font-size: 14px;
			line-height: 1.5;
		}
	}

	ul {
		padding-left: 25px;
		list-style-type: circle;
		li {
			margin: 10px 0;
		}
	}

	> ul {
		padding: 20px 0;
		padding-left: 40px;
		background-color: var(--bg-subpoint);
		border-top: 1px dashed var(--border-subpoint);
		border-bottom: 1px dashed var(--border-subpoint);
	}

	.image-wrapper {
		margin: 25px 0;
		.description {
			color: var(--tx-main);
			font-size: 14px;
		}
	}
`;

const Summary = styled.p`
	margin-top: 10px;
	font-size: 16px;
`;

const StyledDate = styled.p`
	margin-top: 5px;
	font-size: 14px;
	text-align: right;
	color: var(--tx-sub);
`;
