import styled from "@emotion/styled";
import Container from "components/Container";
import MDXContent from "components/MDXContent";
import { useRouter } from "next/router";
import { IoIosArrowDropleft } from "react-icons/io";

const BlogLayout = ({ post, children }) => {
	const router = useRouter();

	return (
		<Container
			title={`wablog - ${post.title}`}
			description={post.summary}
			image={post.thumbnailUrl}
			date={new Date(post.date).toISOString()}
			type="article"
		>
			<StyledButton onClick={() => router.back()}>
				<StyledIcon />
				<span>Back</span>
			</StyledButton>
			<MDXContent title={post.title} summary={post.summary} date={post.date}>
				{children}
			</MDXContent>
		</Container>
	);
};

export default BlogLayout;

const StyledButton = styled.button`
	display: inline-flex;
	align-items: center;
	background-color: var(--bg-point);
	border: none;
	border-radius: 20px;
	padding: 5px 15px 5px 5px;
	font-size: 18px;
	margin-bottom: 10px;
	color: var(--tx-bright);
	cursor: pointer;
	transition: 0.2s;
	&:hover {
		opacity: 0.7;
	}
`;

const StyledIcon = styled(IoIosArrowDropleft)`
	background-color: var(--bg-main);
	margin-right: 5px;
	color: var(--tx-point);
	border-radius: 50px;
	font-size: 25px;
`;
