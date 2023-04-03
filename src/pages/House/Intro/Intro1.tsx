// lib
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import UnderstandBtn from "@components/Buttons/UnderstandBtn";
import Bubble from "@components/House/Bubble";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import ex1 from "@assets/house/ex1.png";
import zoom from "@assets/house/zoom.png";

const Intro1 = () => {
  const BubbleData = [
    {
      color: "gray",
      text: "처음 자취방을 구하고 있는데, 보증금을 잘 돌려 받을 수 있을지 걱정돼요...미리 알 수 있는 방법 없을까요?",
    },
    {
      color: "blue",
      text: "보증금 못 돌려 받는 경우가 많아 집 구할 때 신경 많이 쓰이잖아요. ",
    },
    {
      color: "blue",
      text: "미리 예방하려면 집 구할 때 확인 해야 하는 사항이 많습니다. 내가 살 집이 안전한지, 위험한지를 아는 방법이 있어요.",
    },
    {
      color: "gray",
      text: "헉 그게 뭔가요?",
    },
    {
      color: "blue",
      text: "바로 등기부등본을 샅샅이 파헤치는 것! 제가 이해하기 쉽게 해설해드릴게요.",
    },
  ];

  return (
    <Div>
      <SimpleNavBar text="등기부등본 마스터" direction="up" />

      <Container>
        <Title>등기부등본이란 무엇인가요?</Title>

        <img src={ex1} />
        <img src={zoom} />

        <ExImgText>등기부등본 예시 이미지 </ExImgText>

        <DesText>
          등기부등본에는 그 건물의 <span>히스토리</span>가 담겨 있어요.
        </DesText>
        <DesText>
          등기부등본이란 토지, 주택 등과 같은 부동산을 누가 점유하고 소유하고
          있는지를 등기부라는 공적 공부에 기재한 것입니다.
        </DesText>

        <DesText>
          소재지, 건축연도, 면적을 비롯해 소유권 등 권리 관계의 이력 등 부동산에
          관한 내용이 함축되어 있어 부동산의 신분증이라고 할 수 있죠.
        </DesText>

        <Title>등기부등본은 왜 필요한가요?</Title>
        <DesText>우리 집은 괜찮아 보이는데... 귀찮게 꼭 봐야할까?</DesText>

        {BubbleData.map((bubble) => (
          <Bubble color={bubble.color} text={bubble.text} />
        ))}

        <UnderstandBtn id={1} subId={1} />
      </Container>
    </Div>
  );
};

export default Intro1;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 24px;
  padding-top: 65px;
  box-sizing: border-box;
`;

const Title = styled.p`
  /* margin: 23px auto 0 30px; */
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 38px;
  padding: 0;
`;

const ExImgText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  color: #3d3d3d;
`;

const DesText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  color: #000000;

  span {
    font-weight: 500;
  }
`;
