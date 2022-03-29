import Container from "components/Container";
import { InferGetStaticPropsType } from "next";
import { useState } from "react";
import { allBlogs } from "../.contentlayer/generated";

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
	const [searchValue, setSearchValue] = useState("");
	const filteredBlogPosts = posts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()));

	return (
		<Container>
			<h1>Blog</h1>
			<p>기술 관련 글이나 그때그때 배운 짤막한 지식을 정리하는 공간입니다.</p>
		</Container>
	);
}

export function getStaticProps() {
	const posts = allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

	return { props: { posts } };
}
