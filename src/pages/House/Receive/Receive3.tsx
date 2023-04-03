// lib
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import UnderstandBtn from "@components/Buttons/UnderstandBtn";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import laptop from "@assets/house/laptop.png";

const Receive3 = () => {
  return (
    <Div>
      <SimpleNavBar text="등기부등본 마스터" direction="up" />

      <Container>
        <Title>발급 방법 - 오프라인</Title>

        <img src={laptop} />

        <ExImgText>세무서 또는 구청 </ExImgText>

        <DesText>
          부동산 등기부등본(법인 X)은 세무서 외에도 가까운 구청, 주민센터 등
          무인발급기가 설치된 곳에서 발급받으실 수도 있습니다.
        </DesText>

        <DesText>열람 수수료는 창구에서 1,200원입니다.</DesText>

        <UnderstandBtn id={2} subId={3} />
      </Container>
    </Div>
  );
};

export default Receive3;

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
