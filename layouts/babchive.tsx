import Container from "components/Container";
import MDXContent from "components/MDXContent";

const BabchiveLayout = ({ post, children }) => {
	return (
		<Container
			title={`wablog - ${post.title}`}
			description={post.summary}
			image={post.thumbnailUrl}
			date={new Date(post.date).toISOString()}
			type="article"
		>
			<MDXContent title={post.title} summary={post.summary} date={post.date}>
				{children}
			</MDXContent>
		</Container>
	);
};

export default BabchiveLayout;
