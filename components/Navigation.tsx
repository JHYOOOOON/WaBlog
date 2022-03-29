import styled from "@emotion/styled";
import navData from "data/navData";
import Link from "next/link";

const Navigation = () => {
	return (
		<NavWrapper>
			<Nav>
				<div>
					<Logo>☃️</Logo>
				</div>
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

const Logo = styled.span`
	font-size: 30px;
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
		background-color: #c3e3e1;
		border-radius: 15px;
	}
`;
