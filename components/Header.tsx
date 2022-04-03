import styled from "@emotion/styled";
import Navigation from "./Navigation";

const Header = () => {
	return (
		<StyledHeader>
			<Navigation />
		</StyledHeader>
	);
};

const StyledHeader = styled.header`
	width: 100%;
	padding: 7px 15px;
`;

export default Header;
