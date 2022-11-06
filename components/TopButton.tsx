import { useCallback, useEffect, useState } from "react";
import { BsArrowUpShort } from "react-icons/bs";
import { throttle } from "lodash";
import styled from "@emotion/styled";

const TopButton = () => {
	const [isTopButtonShow, setIsTopButtonShow] = useState(false);

	useEffect(() => {
		const handleScroll = throttle((event) => {
			console.log(window.scrollY);
			if (window.scrollY < 500) {
				setIsTopButtonShow(false);
			} else {
				setIsTopButtonShow(true);
			}
		}, 500);
		document.addEventListener("scroll", handleScroll);
		return () => document.removeEventListener("scroll", handleScroll);
	}, []);

	const handleTopButtonClick = useCallback(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<Button className={`${isTopButtonShow && "isShow"} `} onClick={handleTopButtonClick}>
			<BsArrowUpShort />
		</Button>
	);
};

export default TopButton;

const Button = styled.button`
	position: fixed;
	bottom: 2%;
	right: 2%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 45px;
	height: 45px;
	background: var(--bg-subpoint);
	opacity: 0;
	font-size: 25px;
	border-radius: 50%;
	border: none;
	box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
	transition: all 0.2s;
	cursor: pointer;
	&.isShow {
		opacity: 1;
	}
	&:hover {
		bottom: 3%;
	}
`;
