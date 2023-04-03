// lib
import React, { useState } from "react";
import styled from "@emotion/styled";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
//component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import greencheck from "@assets/house/greencheck.png";
import graycheck from "@assets/house/graycheck.png";

const House = () => {
  let percentage = 100;

  return (
    <Div>
      <Container>
        <SimpleNavBar text="등기부등본 마스터" direction="up" />

        <Title>등기부등본 마스터</Title>

        <Progress>
          <CircularProgressbar
            value={50}
            text={`50%`}
            strokeWidth={5}
            styles={buildStyles({
              pathColor: `rgba(72, 128, 238, ${percentage / 100})`,
              textColor: "#64663E",
              trailColor: "#EBEBEB",
            })}
          />
        </Progress>

        <Numbers>
          <div>
            <p>2</p>
            <p>완료</p>
          </div>
          <div>
            <p>2</p>
            <p>완료</p>
          </div>
        </Numbers>

        <Des>등기부등본을 마스터해봅시다! </Des>

        <MenuTitle>1. 입문</MenuTitle>
        <Menus>
          <div>
            <img src={greencheck} /> <Menu weight="bold">등기부등본이란? </Menu>
          </div>
          <div>
            <img src={graycheck} /> <Menu weight="light">등기부등본이란? </Menu>
          </div>
          <div>
            <img src={graycheck} /> <Menu weight="bold">등기부등본이란? </Menu>
          </div>
          <div>
            <img src={graycheck} /> <Menu weight="bold">등기부등본이란? </Menu>
          </div>
        </Menus>
      </Container>
    </Div>
  );
};

export default House;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 65px;
  background-color: #fafafa;
`;

const Title = styled.p`
  margin: 23px auto 0 30px;
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 38px;
  padding: 0;
`;

const Progress = styled.div`
  width: 222px;
  height: 222px;
  margin: 30px auto;
`;

const Numbers = styled.div`
  display: flex;
  margin: 35px 35px 0 35px;
  justify-content: space-between;

  div {
    width: 48%;
    height: 91px;

    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 38px;
    color: #4880ee;

    text-align: center;
  }

  div p:last-child {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    color: #454545;
  }
`;

const Des = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  color: #363636;

  margin: 21px auto 36px 40px;
`;
const MenuTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;

  margin-left: 33px;
  margin-bottom: 10px;
`;

const Menus = styled.div`
  padding: 25px;
  padding-top: 0;
  div {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    border-top: none;
    display: flex;
    align-items: center;

    height: 39px;
    padding: 11px 10px;
  }

  div:nth-child(1) {
    border-radius: 10px 10px 0 0;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
  }

  div:last-child {
    border-radius: 0 0 10px 10px;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    border-top: none;
  }

  img {
    margin-right: 15px;
    height: 20px;
    width: 20px;
  }
`;

const Menu = styled.p<{ weight: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: ${(props) => (props.weight === "bold" ? 500 : 300)};
  font-size: 12px;
  line-height: 17px;

  color: #454545;
`;