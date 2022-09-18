import styled from "@emotion/styled";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
	return (
		<FooterWrapper>
			<a href="https://github.com/JHYOOOOON" target="_blank" rel="noreferrer">
				<GithubIcon />
			</a>
			<Copyright>&copy; {new Date().getFullYear()} Jeonghyun Yoon</Copyright>
		</FooterWrapper>
	);
};

const FooterWrapper = styled.footer`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
	padding: 30px 0 20px 0;
	border-top: 1px solid var(--border-light);
`;

const GithubIcon = styled(AiFillGithub)`
	font-size: 25px;
`;

const Copyright = styled.p`
	margin: 5px 0;
	font-size: 14px;
	color: var(--tx-main);
`;

export default Footer;
