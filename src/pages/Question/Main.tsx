// lib
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import MainNavBar from "@components/NavBar/MainNavBar";
// asset
import card1 from "@assets/question/card1.png";

const Main = () => {
  const naviate = useNavigate();

  return (
    <Div>
      <MainNavBar text="금쪽이" />
      {/* <SimpleNavBar text="금쪽이" direction="up" noTitle={true} /> */}

      <CardsContainer>
        <Card1>
          <img src={card1} width={123} height={128} />
        </Card1>
        <Card2></Card2>
        <Card1></Card1>
        <Card2></Card2>
      </CardsContainer>

      <Container>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex" }}>
            <p>로고</p>
            <p>질문보기</p>
          </div>
          <div style={{ display: "flex" }}>
            <p>로고</p>
            <p>질문쓰기</p>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <p>오늘의 질문</p>
          <p>전체보기</p>
        </div>

        <div>질문글..</div>
      </Container>
    </Div>
  );
};

export default Main;

const Div = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 40px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding: 24px;

  box-sizing: border-box;

  background: #ffffff;
  border-radius: 44px 44px 0 0;

  z-index: 10;
  transform: translate(0, -20px);
`;

const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: scroll;

  width: 100%;
  height: 310px;

  padding-left: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card1 = styled.div`
  min-width: 193px;
  height: 231px;
  background: linear-gradient(
    30.18deg,
    #5a73fc 57.1%,
    rgba(83, 108, 249, 0.853858) 84.35%,
    rgba(74, 100, 245, 0.66486) 99.99%,
    rgba(74, 100, 245, 0) 100%
  );
  border-radius: 25px;
  box-shadow: 0px 20px 50px 4px rgba(0, 0, 0, 0.25);

  margin-left: 10px;
`;

const Card2 = styled.div`
  min-width: 193px;
  height: 231px;
  background: linear-gradient(
    259.16deg,
    #5b8bf7 49.62%,
    rgba(81, 120, 251, 0.777732) 81.88%,
    rgba(68, 96, 255, 0.51) 91.14%
  );
  border-radius: 25px;

  box-shadow: 0px 20px 50px 4px rgba(0, 0, 0, 0.25);

  margin-left: 10px;
`;
const Title = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 29px;

  span {
    color: #5a73fc;
  }
`;
