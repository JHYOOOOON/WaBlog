import styled from "@emotion/styled";
import { SectionTitle } from "./Common.style";
import TopButton from "./TopButton";
import Head from "next/head";

const MDXContent = ({ title, summary, date, children }) => {
	return (
		<div>
			<Head>
				<title>{`${title} | wablog`}</title>
				<meta name="description" content={summary} />
				<meta property="og:description" content={summary} />
				<meta property="og:title" content={`${title} | wablog`} />
			</Head>
			<TitleWrapper>
				<SectionTitle>{title}</SectionTitle>
				<Summary>{summary}</Summary>
				<StyledDate>{date}</StyledDate>
			</TitleWrapper>
			<ContentWrapper>{children}</ContentWrapper>
			<TopButton />
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
	details {
		margin: 12px 0;
	}

	h2,
	h3,
	p,
	li,
	pre code {
		line-height: 1.6;
	}

	h2 {
		font-size: 23px;
		font-weight: 700;
		margin-top: 35px;
		padding-bottom: 10px;
		border-bottom: 1px solid var(--border-light);
	}

	h3 {
		margin-top: 15px;
		font-size: 18px;
		font-weight: 700;
	}

	table {
		border-collapse: collapse;
		thead {
			background-color: var(--bg-sub-light);
		}
		tr > td:first-child {
			background-color: var(--bg-subpoint);
		}
		td,
		th {
			padding: 7px 10px;
			border: 1px solid #555;
			font-size: 16px;
		}
	}

	strong {
		font-weight: 700;
	}

	p {
		margin: 10px 0;
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

	img,
	iframe {
		display: block;
		max-width: 90%;
		margin: 5px auto;
	}

	.image-description {
		margin: 0;
		margin-top: 4px;
		text-align: center;
		color: #ababab;
		font-size: 12px;
		font-weight: 300;
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
		}

		.token.keyword {
			color: #8c98f0;
		}

		.token.property,
		.token.constant,
		.token.variable {
			color: #8642d5;
		}

		.token.function {
			color: #226eb1;
		}

		.token.boolean {
			color: #fc9ac4;
		}

		.token.comment {
			color: #7e7e7e;
		}

		.token.operator,
		.token.punctuation,
		.token.attr-name {
			color: #999;
		}
	}

	.rehype-code-title {
		color: var(--tx-sub);
		background-color: var(--bg-subpoint);
		width: fit-content;
		padding: 7px 10px;
		border-radius: 3px 3px 0 0;
		font-size: 14px;
		margin-top: 5px;
	}

	ol,
	ul {
		padding-left: 25px;
	}

	> ol,
	> ul {
		padding: 10px 15px 10px 35px;
		margin: 10px 0;
		background-color: var(--bg-white);
		border-radius: 3px;
		box-sizing: border-box;
		border: 1px dashed var(--border-subpoint);
	}

	ol {
		list-style-type: decimal;
	}

	ul {
		list-style-type: revert;
	}

	li {
		word-break: keep-all;
		margin: 7px 0;
	}

	div > ul {
		border: none;
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
	line-height: 1.6;
`;

const StyledDate = styled.p`
	margin-top: 5px;
	font-size: 14px;
	text-align: right;
	color: var(--tx-sub);
`;
