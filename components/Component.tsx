import styled from "@emotion/styled";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const Section = styled.section`
	display: flex;
	flex-direction: column;
	width: 1000px;
	height: 100%;
	margin: 0 auto;
`;

const Main = styled.main`
	flex: 1;
`;

const TitleImageWrapper = styled.div`
	height: 300px;
	border-radius: 20px;
	overflow: hidden;
`;

const TitleImage = styled.img`
	width: 100%;
	transition: 0.2s;
	&:hover{
		transform: scale(1.05);
		transform-origin: center;
		filter: blur(5px);
	}
`;

const NavWrapper = styled.nav`
	height: 60px;
`;

const Navigation = styled.ul`
	display: flex;
	height: 100%;
	margin: 0;
	justify-content: space-between;
	align-items: center;
	text-decoration: none;
	padding: 0;
	list-style-type: none;
`;

const NavRight = styled.div`
	display: flex;
`;

const NavItem = styled.li`
	padding: 15px 20px;
	text-align: center;
	cursor: pointer;
	transition: 0.1s;
	&:hover{
		background-color: #c3e3e1;
		border-radius: 15px;
	}
`;

const Component = ({ children, ...customMeta }) => {
	const router = useRouter();
	const meta = {
		title: "wablog - tech, daily blabla",
		description: "Frontend developer, friendly and humorous",
		image: "https://localhost:3000/static/images/banner.jpg",
		type: "website",
		author: "Jeonghyun Yoon",
		...customMeta,
	};

	return (
		<>
			<Head>
				<title>{meta.title}</title>
				<meta name="robots" content="follow, index" />
				<meta name="description" content={meta.description} />
				<meta property="og:url" content={`https://localhost:3000${router.asPath}`} />
				<link rel="canonical" href={`https://localhost:3000${router.asPath}`} />
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content={meta.author} />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
			</Head>
			<Section>
				<header>
					<NavWrapper>
						<Navigation>
							<div>
								<span>☃️</span>
							</div>
							<NavRight>
								<Link href="/">
									<NavItem>Home</NavItem>
								</Link>
								<Link href="/blog">
									<NavItem>Blog</NavItem>
								</Link>
								<Link href="/babchive">
									<NavItem>Babchive</NavItem>
								</Link>
							</NavRight>
						</Navigation>
					</NavWrapper>
					<TitleImageWrapper>
						<TitleImage src="/static/images/banner.jpg" />
					</TitleImageWrapper>
				</header>
				<Main>{children}</Main>
				<footer>&copy; {new Date().getFullYear()} Jeonghyun Yoon</footer>
			</Section>
		</>
	);
};

export default Component;
