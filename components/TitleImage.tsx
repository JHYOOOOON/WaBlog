import { useState } from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import Image from "next/image";

const TitleImage = () => {
	const [hover, setHover] = useState(false);

	return (
		<TitleImageWrapper>
			{hover === false && (
				<div>
					<Emoji>😊💫</Emoji>
					<Title>Have a Nice Day!</Title>
					<SubTitle>Frontend Developer, Jeonghyun</SubTitle>
				</div>
			)}
			{hover && (
				<div>
					<Emoji>🙂🍀</Emoji>
					<Title>별 탈 없는 하루 되세요</Title>
					<SubTitle>프론트엔드 개발자, 윤정현</SubTitle>
				</div>
			)}
			<StyledImage
				layout="fill"
				objectFit="cover"
				src="/static/images/banner.jpg"
				alt="title image"
			/>
		</TitleImageWrapper>
	);
};

export default TitleImage;

const Pyongpyong = keyframes`
	0% {
		transform: translateY(100%);
	}

	70%{
		transform: translateY(-15%);
	}

	100%{
		transform: translateY(0);
	}
`;

const TitleImageWrapper = styled.div`
	position: relative;
	height: 220px;
	margin-bottom: 25px;
	border-radius: 20px;
	overflow: hidden;
	div {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-end;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 25px 30px;
		z-index: 1;
	}
	&:hover div {
		display: flex;
		animation: ${Pyongpyong} 1s cubic-bezier(0.165, 0.84, 0.44, 1);
	}
	&:hover img {
		transform: scale(1.05);
		transform-origin: center;
		filter: blur(5px);
	}
`;

const Emoji = styled.span`
	font-size: 35px;
`;

const Title = styled.p`
	font-size: 28px;
	font-weight: 700;
	margin: 5px 0;
`;

const SubTitle = styled.p`
	margin: 0;
	font-size: 16px;
`;

const StyledImage = styled(Image)`
	position: absolute;
	top: 0;
	left: 0;
	transition: 0.2s;
`;
