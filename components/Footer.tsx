import styled from "@emotion/styled";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
	return (
		<FooterWrapper>
			<a href="https://github.com/JHYOOOOON">
				<GithubIcon />
			</a>
			<Copyright>&copy; {new Date().getFullYear()} Jeonghyun Yoon</Copyright>
			<a href="https://wablog.vercel.app">
				<BlogUrl>wablog.vercel.app</BlogUrl>
			</a>
		</FooterWrapper>
	);
};

const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 100px;
	padding: 30px 0 20px 0;
	border-top: 1px solid #ededed;
`;

const GithubIcon = styled(AiFillGithub)`
	font-size: 25px;
`;

const Copyright = styled.p`
	margin: 5px 0;
	font-size: 14px;
	color: #333;
`;

const BlogUrl = styled.p`
	margin: 7px 0;
	font-size: 14px;
	color: #333;
`;

export default Footer;
