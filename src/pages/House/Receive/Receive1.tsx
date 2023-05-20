// lib
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import UnderstandBtn from "@components/Buttons/UnderstandBtn";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import who from "@assets/house/receive/who.png";

const Receive1 = () => {
  return (
    <Div>
      <SimpleNavBar text="등기부등본 마스터" direction="up" />

      <Container>
        <Title>누가 확인 할 수 있나요?</Title>

        <Img src={who} />

        <DesText>
          부동산 소유주나 관계자가 아니더라도 온라인, 오프라인에서 국가기관에
          수수료를 납부하면 <span>누구든지 열람 및 발급이 가능합니다.</span>
        </DesText>

        <DesText>
          부동산 공인중개사를 통해서 확인도 가능하나, 되도록이면 등기부등본은
          <span>직접 조회</span> 하는 것이 좋습니다.
        </DesText>
        <DesText>
          번거롭더라도 직접 본인이 발급을 받고
          <span>기간이 지난 것은 폐기</span>하는 것이 바람직합니다.
        </DesText>
        <DesText>
          위조의 위험을 줄이고, 발급일에 따라 근저당 여부가 바뀌기 때문입니다!
        </DesText>

        <UnderstandBtn id={2} subId={1} />
      </Container>
    </Div>
  );
};

export default Receive1;

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

const Title = styled.p`
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 38px;
  padding: 0;
`;

const Img = styled.img`
  width: 163px;
  height: auto;

  margin: 19px auto;
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
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 20px;

  span {
    font-weight: 500;
    background-color: rgba(156, 219, 117, 0.5);
    margin-left: 3px;
  }
`;
