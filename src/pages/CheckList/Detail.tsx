// lib
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import MainNavBar from "@components/NavBar/MainNavBar";
import CheckBox from "@components/CheckList/CheckBox";
import OtherCheckList from "@components/CheckList/OtherCheckList";
// asset
import house from "@assets/checklist/emojis/house.png";
const Main = () => {
  const { id } = useParams();

  return (
    <Div>
      <MainNavBar text="자취 A-Z 체크리스트" />
      <Banner>
        <img src={house} width={82} height={82} />
        <p className="title">사전 체크</p>
        <p className="sub-title">독립의 시작</p>
      </Banner>

      <Container>
        <TopTextContainer>
          <p className="checklist">Checklists</p>
          <p className="outof">0 out of 17</p>
          <div className="uncheck-btn">Uncheck all</div>
        </TopTextContainer>

        <CheckBox></CheckBox>
      </Container>

      <BottomContainer>
        <OtherCheckList />
      </BottomContainer>
    </Div>
  );
};

export default Main;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 65px;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  width: 100%;
  height: 305px;
  background: white;
  padding: 24px 30px 42px 30px;

  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    color: #070a39;
    margin-top: 23px;
  }

  .sub-title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #d1d1d5;
    margin-top: 12px;
  }

  img {
    margin-top: 24px;
    align-self: start;
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: #f7f5fa;

  padding: 0 20px;
`;

const TopTextContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 50px 0 20px 0;

  .checklist {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #070a39;
  }

  .outof {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #7265fc;

    margin-left: 14px;
  }

  .uncheck-btn {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 84px;
    height: 30px;
    background: #7266fc;
    border-radius: 5px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;

    color: #ffffff;
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: white;

  padding: 42px 19px;
`;

const EnText = styled.div<{
  weight: string;
  size: string;
  color: string;
  margin: string;
}>`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
`;

const KRText = styled.div<{ weight: string; size: string; color: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
`;
