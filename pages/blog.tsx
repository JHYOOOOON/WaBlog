import Container from "components/Container";
import { InferGetStaticPropsType } from "next";
import { IoIosSearch } from "react-icons/io";
import { ChangeEvent, useState } from "react";
import { allBlogs } from "../.contentlayer/generated";
import styled from "@emotion/styled";
import { Description, SectionTitle } from "components/Common.style";
import Posting from "components/Posting";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [searchValue, setSearchValue] = useState("");
	const filteredBlogPosts = posts.filter(
		(post) =>
			post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
			post.summary.toLowerCase().includes(searchValue.toLowerCase())
	);

	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

	return (
		<Container>
			<SectionTitle>Blog</SectionTitle>
			<Description>내가 보고 배운 기술들을 기록하는 공간</Description>

			<SearchWrapper>
				<SearchIcon />
				<Input value={searchValue} placeholder="Search Posts" onChange={handleSearchChange} />
			</SearchWrapper>

			<BlogPostWrapper>
				{!searchValue && posts.map((post, idx) => <Posting key={`post-${idx}`} {...post} />)}
				{searchValue &&
					filteredBlogPosts &&
					filteredBlogPosts.map((post, idx) => <Posting key={`post-${idx}`} {...post} />)}
			</BlogPostWrapper>
		</Container>
	);
};

export default Blog;

export function getStaticProps() {
	const posts = allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

	return { props: { posts } };
}

const SearchWrapper = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	background-color: var(--bg-main);
	margin-bottom: 25px;
`;

const SearchIcon = styled(IoIosSearch)`
	position: absolute;
	left: 15px;
	color: var(--tx-sub);
	font-size: 20px;
`;

const Input = styled.input`
	flex: 1;
	border-radius: 30px;
	border: 2px solid var(--border-main);
	padding: 10px 10px 10px 40px;
	width: 100%;
	font-size: 18px;
	background: transparent;
	transition: 0.2s;
	&::placeholder {
		font-family: inherit;
		color: var(--tx-sub);
	}
	&:focus {
		outline: none;
		border: 2px solid var(--border-subpoint);
	}
`;

const BlogPostWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
