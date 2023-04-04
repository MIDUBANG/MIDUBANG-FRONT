// lib
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import UnderstandBtn from "@components/Buttons/UnderstandBtn";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import ex1 from "@assets/house/ex1.png";

const My1 = () => {
  return (
    <Div>
      <SimpleNavBar text="등기부등본 마스터" direction="up" />

      <Container>
        <Title>내 집의 등기부등본 읽기</Title>

        <img src={ex1} />

        <ExImgText>등기부등본 예시 이미지 </ExImgText>

        <DesText> 등기부등본을 발급 받으셨나요?</DesText>

        <DesText>
          어려운 말도 많고 간간이 빨간 줄도 그어져 있어서 당황스러울 수
          있는데요, 알고 보면 그렇게 어렵지 않습니다.
        </DesText>

        <Title>등기부등본의 구성</Title>

        <DesText>등기부등본은 크게 4가지 파트로 나뉘어져 있습니다. </DesText>

        <UnderstandBtn id={3} subId={1} />
      </Container>
    </Div>
  );
};

export default My1;

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
