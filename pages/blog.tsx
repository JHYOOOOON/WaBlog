import { InferGetStaticPropsType } from "next";
import { useState } from "react";
import { allBlogs } from "../.contentlayer/generated";

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
	const [searchValue, setSearchValue] = useState("");
	const filteredBlogPosts = posts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()));

	return <div>hi</div>;
}

export function getStaticProps() {
	const posts = allBlogs.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
	console.log(posts);

	return { props: { posts } };
}
