// lib
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import UnderstandBtn from "@components/Buttons/UnderstandBtn";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import CustomAccordion from "@components/House/CustomAccordion";
// asset
import temp1 from "@assets/house/temp1.png";

const Check3 = () => {
  const check1Data = [
    {
      id: "0",
      title: "내가 계약하려는 집과 주소가 동일한가요?",
      content:
        "계약하려는 부동산의 주소와 등기부등본에 기재되어 있는 소재지가 일치되어 있는지 확인하세요!",
    },
    {
      id: "1",
      title: "내가 계약하려는 집과 주소가 동일한가요?",
      content:
        "계약하려는 부동산의 주소와 등기부등본에 기재되어 있는 소재지가 일치되어 있는지 확인하세요!",
    },
    {
      id: "2",
      title: "내가 계약하려는 집과 주소가 동일한가요?",
      content:
        "계약하려는 부동산의 주소와 등기부등본에 기재되어 있는 소재지가 일치되어 있는지 확인하세요!",
    },
  ];

  return (
    <Div>
      <SimpleNavBar text="등기부등본 마스터" direction="up" />

      <Container>
        <Title>갑구 - CHECKPOINT</Title>
        <DesText>갑구에서 확인해야 할 부분들입니다.</DesText>

        <img src={temp1} />

        <CustomAccordion inputData={check1Data} />
        <UnderstandBtn id={4} subId={3} />
      </Container>
    </Div>
  );
};

export default Check3;

const Div = styled.div`
  width: 100%;
  height: 100%;

  img {
    margin-top: 10px;
  }
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
  margin: 23px auto 0 0;
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
