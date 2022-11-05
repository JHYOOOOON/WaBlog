import styled from "@emotion/styled";
import { AiFillGithub, AiFillMail } from "react-icons/ai";

const Footer = () => {
	return (
		<FooterWrapper>
			<IconWrapper>
				<a href="https://github.com/JHYOOOOON" target="_blank" rel="noreferrer">
					<AiFillGithub />
				</a>
				<a href="mailto:jhyooooooon@gmail.com">
					<AiFillMail />
				</a>
			</IconWrapper>
			<Copyright>&copy; {new Date().getFullYear()} Jeonghyun Yoon</Copyright>
		</FooterWrapper>
	);
};

const FooterWrapper = styled.footer`
	font-family: inherit;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 40px;
	padding: 30px 0 20px 0;
	border-top: 1px solid var(--border-light);
	color: var(--tx-footer);
`;

const IconWrapper = styled.div`
	display: flex;
	gap: 5px;

	svg {
		font-size: 25px;
		&:hover {
			color: var(--tx-point);
		}
	}
`;

const Copyright = styled.p`
	margin: 5px 0;
	font-size: 14px;
`;

export default Footer;
