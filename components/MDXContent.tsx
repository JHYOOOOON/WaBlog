import styled from "@emotion/styled";
import { SectionTitle } from "./Common.style";

const MDXContent = ({ title, summary, date, children }) => {
	return (
		<div>
			<TitleWrapper>
				<SectionTitle>{title}</SectionTitle>
				<Summary>{summary}</Summary>
				<StyledDate>{date}</StyledDate>
			</TitleWrapper>
			<ContentWrapper>{children}</ContentWrapper>
		</div>
	);
};

export default MDXContent;

const TitleWrapper = styled.div`
	padding: 15px 20px;
	margin-bottom: 30px;
	background-color: var(--bg-sub);
`;

const ContentWrapper = styled.div`
	h2 {
		font-size: 23px;
		font-weight: 700;
		margin-top: 35px;
		margin-bottom: 15px;
		padding-bottom: 10px;
		border-bottom: 1px solid var(--border-light);
	}

	h3 {
		margin-top: 20px;
		margin-bottom: 10px;
		font-size: 18px;
		font-weight: 700;
		padding: 7px 5px;
	}

	strong {
		font-weight: 700;
	}

	p {
		margin-top: 15px;
		margin-bottom: 15px;
		line-height: 1.5;
	}

	p,
	li {
		> code {
			padding: 2px 5px;
			border-radius: 3px;
			background-color: #ededed;
			color: #e97e0c;
			box-sizing: border-box;
			font-size: 14px;
		}
	}

	em {
		font-style: italic;
	}

	del {
		text-decoration-line: line-through;
	}

	img {
		display: block;
		max-width: 90%;
		margin: 5px auto;
	}

	a {
		color: #ababab;
		border-bottom: 1px solid #ababab;
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
		background-color: var(--bg-sub-light);
		> p {
			margin: 0;
		}
	}

	/* 코드 블럭 */
	pre {
		background: var(--bg-code);
		border-radius: 3px;
		padding: 15px 20px;
		overflow-x: auto;
		code {
			color: var(--tx-dark);
			font-size: 15px;
			line-height: 1.5;
		}
	}

	ol {
		list-style-type: decimal;
		padding-left: 25px;
		padding-right: 15px;
		li {
			line-height: 1.5;
			margin: 10px 0;
		}
	}

	ul {
		box-sizing: border-box;
		padding-left: 25px;
		padding-right: 15px;
		list-style-type: revert;
		li {
			word-break: keep-all;
			line-height: 1.5;
			margin: 10px 0;
		}
	}

	div > ul {
		border: none;
	}

	> ul {
		padding: 17px 15px;
		padding-left: 35px;
		background-color: var(--bg-list);
		border: 1px dashed var(--border-subpoint);
		border-radius: 3px;
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
	line-height: 1.5;
`;

const StyledDate = styled.p`
	margin-top: 5px;
	font-size: 14px;
	text-align: right;
	color: var(--tx-sub);
`;
