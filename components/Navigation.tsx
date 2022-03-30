import styled from "@emotion/styled";
import navData from "data/navData";
import Link from "next/link";

const Navigation = () => {
	return (
		<NavWrapper>
			<Nav>
				<LogoWrapper>
					<Link href="/">
						<Logo src="/static/logo.png" />
					</Link>
				</LogoWrapper>
				<NavRight>
					{navData.map((data, idx) => (
						<Link href={`${data.link}`} key={`nav-${idx}`}>
							<NavItem>{data.name}</NavItem>
						</Link>
					))}
				</NavRight>
			</Nav>
		</NavWrapper>
	);
};

export default Navigation;

const LogoWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100%;
`;

const Logo = styled.img`
	height: 70%;
	cursor: pointer;
`;

const NavWrapper = styled.nav`
	height: 60px;
`;

const Nav = styled.ul`
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
	&:hover {
		background-color: #2d6514;
		color: #f9fafb;
	}
`;
