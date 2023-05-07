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
import profile from "@assets/text/profile.png";

const Intro1 = () => {
  return (
    <Div>
      <SimpleNavBar text="등기부등본 마스터" direction="up" />

      <Container>
        <Title>등기부등본이란 무엇인가요?</Title>

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

        <Title>등기부등본은 왜 필요한가요?</Title>
        <DesText>우리 집은 괜찮아 보이는데... 귀찮게 꼭 봐야할까?</DesText>

        <MessageContainer>
          <LeftMessageBox>
            <div className="top-box">
              <ProfileImg src={profile} />
              <p className="name">믿어방</p>
            </div>

            <LeftBubble>
              <p style={{ marginBottom: "15px" }}>
                문자를 보내는 <span>목적</span>을 알려주세요!
              </p>
              <p>
                ex) 계약이 종료됐는데 집주인이 보증금을 돌려주지 않는다. 빨리
                돌려달라고 말하고 싶다.
              </p>
            </LeftBubble>
          </LeftMessageBox>

          <RightMessageBox>
            <p className="name">새내기</p>
            <RightBubble>
              처음 자취방을 구하고 있는데, 보증금을 잘 돌려 받을 수 있을지
              걱정돼요... 미리 알 수 있는 방법 없을까요?
            </RightBubble>
          </RightMessageBox>

          <LeftMessageBox>
            <div className="top-box">
              <ProfileImg src={profile} />
              <p className="name">믿어방</p>
            </div>

            <LeftBubble>
              <p style={{ marginBottom: "15px" }}>
                문자를 보내는 <span>목적</span>을 알려주세요!
              </p>
              <p>
                ex) 계약이 종료됐는데 집주인이 보증금을 돌려주지 않는다. 빨리
                돌려달라고 말하고 싶다.
              </p>
            </LeftBubble>
          </LeftMessageBox>

          <RightMessageBox>
            <p className="name">새내기</p>
            <RightBubble>
              처음 자취방을 구하고 있는데, 보증금을 잘 돌려 받을 수 있을지
              걱정돼요... 미리 알 수 있는 방법 없을까요?
            </RightBubble>
          </RightMessageBox>

          <LeftMessageBox>
            <div className="top-box">
              <ProfileImg src={profile} />
              <p className="name">믿어방</p>
            </div>

            <LeftBubble>
              <p style={{ marginBottom: "15px" }}>
                문자를 보내는 <span>목적</span>을 알려주세요!
              </p>
              <p>
                ex) 계약이 종료됐는데 집주인이 보증금을 돌려주지 않는다. 빨리
                돌려달라고 말하고 싶다.
              </p>
            </LeftBubble>
          </LeftMessageBox>

          <RightMessageBox>
            <p className="name">새내기</p>
            <RightBubble>
              처음 자취방을 구하고 있는데, 보증금을 잘 돌려 받을 수 있을지
              걱정돼요... 미리 알 수 있는 방법 없을까요?
            </RightBubble>
          </RightMessageBox>

          {/* {BubbleData.map(bubble => (
          <Bubble color={bubble.color} text={bubble.text} />
        ))} */}
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
const Title = styled.p`
  /* margin: 23px auto 0 30px; */
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 38px;
  padding: 0;

  margin-bottom: 17px;
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
  margin-bottom: 40px;
`;
const LeftMessageBox = styled.div`
  margin-top: 22px;

  .name {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;

    color: #505050;
    margin-left: 10px;
  }

  .top-box {
    display: flex;

    align-items: center;
  }
`;

const ProfileImg = styled.img`
  width: 37px;
  height: 37px;
`;

const LeftBubble = styled.div`
  position: relative;

  width: auto;
  height: auto;
  min-width: 220px;
  max-width: 80%;

  padding: 16px;
  margin: 10px 0 0 8px;

  background: #f8f9fe;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 0px 20px 20px 20px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 13px;
  line-height: 19px;
  color: black;

  span {
    font-weight: 500;
  }

  .name {
    font-weight: 700;
    margin-bottom: 5px;
  }
`;

const RightMessageBox = styled.div`
  margin: 14px 0 0 0;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: end;

  .name {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;

    color: #505050;
  }
`;

const RightBubble = styled.div`
  width: auto;
  height: auto;
  max-width: 80%;
  margin: 8px 0 0 0;

  padding: 12px;

  background: #ffc670;
  border-radius: 20px 0px 20px 20px;

  font-family: "Noto Sans KR";

  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;

  color: black;
`;
