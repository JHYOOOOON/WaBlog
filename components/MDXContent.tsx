import styled from "@emotion/styled";

const MDXContent = ({ title, summary, date, children }) => {
	return (
		<div>
			<TitleWrapper>
				<FlexWrapper>
					<Title>{title}</Title>
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
	background-color: #f5f5f5;
`;

const FlexWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`;

const ContentWrapper = styled.div`
	padding: 0 25px;

	h2 {
		margin-top: 27px;
		margin-bottom: 0;
	}

	p {
		margin-top: 15px;
		margin-bottom: 20px;
		line-height: 1.5;
		code {
			padding: 2px 3px;
			border-radius: 3px;
			background-color: #ededed;
			color: #e97e0c;
			font-size: 14px;
		}
	}

	a {
		color: #999;
		border-bottom: 1px solid #999;
		transition: 0.1s;
		&:hover {
			color: #2d6514;
			border-bottom: 1px solid #2d6514;
		}
	}

	blockquote {
		margin-left: 0;
		padding: 8px 15px;
		border-left: 5px solid #2d6514;
		background-color: #f5f5f5;
		p {
			margin: 0;
		}
	}

	pre {
		background: #333;
		border-radius: 5px;
		padding: 15px 20px;
		code {
			color: #f5f5f5;
		}
	}

	ul {
		padding-left: 25px;
		li {
			margin: 7px 0;
		}
	}

	.image-wrapper {
		margin: 25px 0;
		.description {
			color: #333;
			font-size: 14px;
			margin: 0;
		}
	}
`;

const Title = styled.h1`
	font-size: 45px;
	color: #2d6514;
	margin: 0;
`;

const Summary = styled.p`
	margin: 0;
	margin-top: 3px;
	font-size: 16px;
	color: #444;
`;

const StyledDate = styled.p`
	margin: 0;
	margin-top: 5px;
	font-size: 14px;
	text-align: right;
	color: #666;
`;
