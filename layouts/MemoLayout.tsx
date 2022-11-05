import BackButton from "components/BackButton";
import Container from "components/Container";
import MDXContent from "components/MDXContent";
import { useRouter } from "next/router";

const MemoLayout = ({ post, children }) => {
	const router = useRouter();

	return (
		<Container
			title={`${post.title} | wablog`}
			description={post.summary}
			image={post.thumbnailUrl}
			date={new Date(post.date).toISOString()}
			type="article"
		>
			<BackButton onClick={() => router.back()} />
			<MDXContent title={post.title} summary={post.summary} date={post.date}>
				{children}
			</MDXContent>
		</Container>
	);
};

export default MemoLayout;
