import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const TitleImage = () => {
	return (
		<TitleImageWrapper>
			<div>
				<Emoji>😊💫</Emoji>
				<Title>Have a Nice Day!</Title>
				<SubTitle>Frontend Developer, Jeonghyun</SubTitle>
			</div>
			<Image src="/static/images/banner.jpg" />
		</TitleImageWrapper>
	);
};

export default TitleImage;

const Pyongpyong = keyframes`
	0% {
		transform: translateY(100%);
	}

	70%{
		transform: translateY(-20%);
	}

	100%{
		transform: translateY(0);
	}
`;

const TitleImageWrapper = styled.div`
	position: relative;
	height: 270px;
	border-radius: 20px;
	overflow: hidden;
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: flex-end;

		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		padding: 30px;
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
	font-size: 40px;
`;

const Title = styled.p`
	margin: 0;
	font-size: 30px;
	font-weight: 700;
`;

const SubTitle = styled.p`
	margin-top: 2px;
	font-size: 18px;
`;

const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	transition: 0.2s;
`;
