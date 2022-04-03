import Link from "next/link";
import { useState } from "react";
import styled from "@emotion/styled";
import navData from "data/navData";
import { css } from "@emotion/react";

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleHamburger = () => setIsOpen((prev) => !prev);

	return (
		<NavWrapper>
			<Nav>
				<NavLeft>
					<Hamburger onClick={handleHamburger} isOpen={isOpen}>
						<HamburgerIcon>
							<Line />
							<Line />
							<Line />
						</HamburgerIcon>
					</Hamburger>
					<Link href="/" passHref={true}>
						<Logo src="/static/logo.png" />
					</Link>
				</NavLeft>
				<NavRight>
					{navData.map((data, idx) => (
						<Link href={`${data.link}`} key={`nav-${idx}`} passHref={true}>
							<NavItem>{data.name}</NavItem>
						</Link>
					))}
				</NavRight>
			</Nav>
			<HamburgerMenu isOpen={isOpen}>
				{navData.map((data, idx) => (
					<Link href={`${data.link}`} key={`nav-${idx}`} passHref={true}>
						<HamburgerMenuItem>{data.name}</HamburgerMenuItem>
					</Link>
				))}
			</HamburgerMenu>
		</NavWrapper>
	);
};

export default Navigation;

const Hamburger = styled.div<{ isOpen: boolean }>`
	display: none;
	position: relative;
	width: 30px;
	height: 100%;
	cursor: pointer;

	${({ isOpen }) =>
		isOpen &&
		css`
			div > span {
				&:nth-child(1) {
					-webkit-transform: translateY(9px) rotate(45deg);
					-ms-transform: translateY(9px) rotate(45deg);
					-o-transform: translateY(9px) rotate(45deg);
					transform: translateY(9px) rotate(45deg);
				}
				&:nth-child(2) {
					opacity: 0;
				}
				&:nth-child(3) {
					-webkit-transform: translateY(-9px) rotate(-45deg);
					-ms-transform: translateY(-9px) rotate(-45deg);
					-o-transform: translateY(-9px) rotate(-45deg);
					transform: translateY(-9px) rotate(-45deg);
				}
			}
		`}

	@media screen and (max-width: 750px) {
		display: block;
	}
`;

const HamburgerIcon = styled.div`
	position: absolute;
	top: 50%;
	left: 0;
	width: 100%;
	-ms-transform: translateY(-50%);
	transform: translateY(-50%);
`;

const Line = styled.span`
	width: 100%;
	height: 3px;
	border-radius: 5px;
	background-color: var(--bg-dark);
	display: block;
	margin: 6px auto;
	-webkit-transition: all 0.3s ease-in-out;
	-o-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
`;

const HamburgerMenu = styled.ul<{ isOpen: boolean }>`
	${({ isOpen }) =>
		isOpen
			? css`
					display: flex;
			  `
			: css`
					display: none;
			  `}
	width: 100%;
	height: 100%;
	flex-direction: column;
	z-index: 2;
	background-color: var(--bg-main);
	border-radius: 0 0 5px 5px;
	overflow: hidden;
	margin-bottom: 15px;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const HamburgerMenuItem = styled.li`
	width: 100%;
	text-align: center;
	font-size: 18px;
	padding: 20px 20px;
	cursor: pointer;
	transition: 0.1s;
	& + & {
		border-top: 1px solid var(--border-light);
	}
	&:hover {
		background-color: var(--bg-point);
		color: var(--tx-bright);
	}
`;

const NavLeft = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
	gap: 10px;
`;

const Logo = styled.img`
	height: 70%;
	cursor: pointer;
`;

const NavWrapper = styled.nav`
	position: relative;
	display: flex;
	flex-direction: column;
`;

const Nav = styled.div`
	display: flex;
	height: 45px;
	justify-content: space-between;
	align-items: center;
`;

const NavRight = styled.ul`
	@media screen and (max-width: 750px) {
		display: none;
	}
	display: flex;
	list-style: none;
`;

const NavItem = styled.li`
	padding: 15px 20px;
	text-align: center;
	cursor: pointer;
	transition: 0.1s;
	&:hover {
		background-color: var(--bg-point);
		color: var(--tx-bright);
	}
`;
