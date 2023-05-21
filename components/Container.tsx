import { useRouter } from "next/router";
import Head from "next/head";
import styled from "@emotion/styled";
import Header from "./Header";
import Footer from "./Footer";

const Section = styled.section`
	display: flex;
	flex-direction: column;
	width: 750px;
	height: 100%;
	margin: 0 auto;

	@media screen and (max-width: 750px) {
		width: 100%;
	}
`;

const Main = styled.main`
	padding: 25px 15px;
	flex: 1;
`;

const Container = ({ children, ...customMeta }) => {
	const router = useRouter();
	const meta = {
		title: "wablog | tech, daily blabla",
		description: "Frontend developer Wa. Welcome to visit wablog!",
		image: "https://wablog.vercel.app/static/images/banner.jpg",
		type: "website",
		...customMeta,
	};

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content={meta.description} />
				<meta property="og:url" content={`https://wablog.vercel.app${router.asPath}`} />
				<link rel="canonical" href={`https://wablog.vercel.app${router.asPath}`} />
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content={meta.title} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
			</Head>
			<Section>
				<Header />
				<Main>{children}</Main>
				<Footer />
			</Section>
		</>
	);
};

export default Container;
