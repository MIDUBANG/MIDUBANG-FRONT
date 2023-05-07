// lib
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import UnderstandBtn from "@components/Buttons/UnderstandBtn";

import SimpleNavBar from "@components/NavBar/SimpleNavBar";

import LeftMessageBubble from "@components/House/LeftBubble";
import RightMessageBubble from "@components/House/RightMessageBubble";

// asset
import ex1 from "@assets/house/ex1.png";
import zoom from "@assets/house/zoom.png";

const Intro1 = () => {
  return (
    <Div>
      <SimpleNavBar text="등기부등본 마스터" direction="up" />

      <Container>
        <Title margin="0 0 17px 0">
          등기부등본이란 <span>무엇</span>인가요?
        </Title>

        <MainImgBox>
          <img src={ex1} className="main-img" />
          <img src={zoom} className="search-img" />
        </MainImgBox>

        <ExImgText>[등기부등본 예시 이미지]</ExImgText>

        <DesText>
          등기부등본에는 그 건물의 <span>히스토리</span>가 담겨 있어요.
        </DesText>
        <DesText>
          등기부등본이란 토지, 주택 등과 같은 부동산을 누가 점유하고 소유하고
          있는지를 등기부라는 공적 공부에 기재한 것입니다.
        </DesText>

        <DesText>
          소재지, 건축연도, 면적을 비롯해 소유권 등 권리 관계의 이력 등 부동산에
          관한 내용이 함축되어 있어 부동산의 <span>신분증</span>이라고 할 수
          있죠.
        </DesText>

        <Title margin="20px 0 17px 0">
          등기부등본은 <span>왜 필요한가요?</span>
        </Title>

        <MessageContainer>
          <RightMessageBubble
            text="처음 자취방을 구하고 있는데, 보증금을 잘 돌려 받을 수 있을지
              걱정돼요... 미리 알 수 있는 방법 없을까요?"
          />

          <LeftMessageBubble
            text={[
              "보증금 못 돌려 받는 경우가 많아 집 구할 때 신경 많이 쓰이잖아요. ",
            ]}
          />

          <LeftMessageBubble
            text={[
              "미리 예방하려면 집 구할 때 확인 해야 하는 사항이 많습니다.",
              "내가 살 집이 안전한지, 위험한지를 아는 방법이 있어요.",
            ]}
          />

          <RightMessageBubble text="헉 그게 뭔가요?" />
          <LeftMessageBubble
            text={[
              "바로 등기부등본을 샅샅이 파헤치는 것!",
              "제가 이해하기 쉽게 해설해드릴게요.",
            ]}
          />
        </MessageContainer>

        <UnderstandBtn id={1} subId={1} />
      </Container>
    </Div>
  );
};

export default Intro1;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 69px;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
`;

const MainImgBox = styled.div`
  margin: 0 auto;

  width: 284px;
  height: 282px;

  position: relative;

  .main-img {
    width: 100%;
    height: 100%;
  }

  .search-img {
    position: absolute;
    top: 155px;
    left: -45px;
    bottom: -19px;
  }
`;
const Title = styled.p<{ margin: string }>`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 38px;
  padding: 0;

  margin: ${props => props.margin};

  span {
    color: #5a73fc;
  }
`;

const ExImgText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  color: #3d3d3d;

  text-align: center;

  margin-top: 30px;
  margin-bottom: 24px;
`;

const DesText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  color: #000000;

  margin-bottom: 17px;

  span {
    font-weight: 500;
    background-color: rgba(156, 219, 117, 0.5);
  }
`;

const MessageContainer = styled.div`
  margin-bottom: 60px;
`;
