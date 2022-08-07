import styled from "@emotion/styled";
import { IoIosArrowDropleft } from "react-icons/io";

const BackButton = ({ onClick }) => {
	return (
		<StyledButton onClick={onClick}>
			<StyledIcon />
			<span>Back</span>
		</StyledButton>
	);
};

export default BackButton;

const StyledButton = styled.button`
	display: inline-flex;
	align-items: center;
	background-color: var(--bg-point);
	border: none;
	border-radius: 20px;
	font-size: 15px;
	padding: 5px 10px 5px 5px;
	margin-bottom: 10px;
	color: var(--tx-bright);
	cursor: pointer;
	transition: 0.2s;
	&:hover {
		opacity: 0.7;
	}
`;

const StyledIcon = styled(IoIosArrowDropleft)`
	background-color: var(--bg-main);
	margin-right: 5px;
	color: var(--tx-point);
	border-radius: 50px;
	font-size: 20px;
`;
