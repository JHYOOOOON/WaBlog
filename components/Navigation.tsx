import { useEffect, useState } from "react";
import _ from "lodash";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import navData from "data/navData";
import { BsMoon, BsSun } from "react-icons/bs";

import { Maybe } from ".";
import { useDarkMode } from "./hooks";

const MOBILE_WIDTH = 750;
const TIME_FOR_CHECK_MOBILE = 500;

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const { darkModeToggle, checkDarkMode, isDarkMode } = useDarkMode();

	const handleHamburger = () => setIsOpen((prev) => !prev);

	useEffect(() => {
		const checkIsMobile = () => {
			if (window.innerWidth < MOBILE_WIDTH) {
				setIsOpen(false);
			}
		};

		checkDarkMode();
		window.addEventListener("resize", _.throttle(checkIsMobile, TIME_FOR_CHECK_MOBILE));

		return () => {
			window.removeEventListener("resize", _.throttle(checkIsMobile, TIME_FOR_CHECK_MOBILE));
		};
	}, []);

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
						<Logo src={isDarkMode ? "/static/logo-dark.png" : "/static/logo.png"} />
					</Link>
					<DakrModeButton darkMode={isDarkMode} onClick={darkModeToggle}>
						<Maybe test={isDarkMode} truthy={<BsMoon />} falsy={<BsSun />} />
					</DakrModeButton>
				</NavLeft>
				<NavRight>
					{navData.map((data, idx) => (
						<Link href={data.link} key={`nav-${idx}`} passHref={true}>
							<NavItem
								className={data.link === `/${router.pathname.split("/")[1]}` ? "active" : ""}
							>
								{data.name}
							</NavItem>
						</Link>
					))}
				</NavRight>
			</Nav>
			<HamburgerMenu isOpen={isOpen}>
				{navData.map((data, idx) => (
					<Link href={`${data.link}`} key={`nav-${idx}`} passHref={true}>
						<HamburgerMenuItem
							className={data.link === `/${router.pathname.split("/")[1]}` ? "active" : ""}
						>
							{data.name}
						</HamburgerMenuItem>
					</Link>
				))}
			</HamburgerMenu>
		</NavWrapper>
	);
};

export default Navigation;

const DakrModeButton = styled.button<{ darkMode: boolean }>`
	display: flex;
	align-items: center;
	padding: 0;
	border: none;
	background-color: transparent;
	font-size: 25px;
	transition: all 0.2s;
	cursor: pointer;
	&:hover {
		transform: scale(1.2);
	}
	${({ darkMode }) =>
		darkMode
			? css`
					color: #ebdf00;
			  `
			: css`
					color: #d14002;
			  `}
`;

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

	@media screen and (max-width: ${MOBILE_WIDTH}px) {
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
					max-height: 180px;
			  `
			: css`
					max-height: 0;
			  `}
	width: 100%;
	flex-direction: column;
	background-color: var(--bg-main);
	border-radius: 0 0 5px 5px;
	overflow: hidden;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	transition: max-height 0.2s ease-in-out;
	z-index: 1100;
`;

const HamburgerMenuItem = styled.li`
	font-family: "Pretendard", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu,
		Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
	width: 100%;
	text-align: center;
	font-size: 18px;
	padding: 20px 20px;
	cursor: pointer;
	transition: 0.1s;
	& + & {
		border-top: 1px solid var(--border-light);
	}
	&.active,
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
	&.active,
	&:hover {
		background-color: var(--bg-point);
		color: var(--tx-bright);
	}
`;
