/* Result 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";

import SimpleNavBar from "@components/NavBar/SimpleNavBar";

import { FontTitle, FontDescribed } from "@style/font.style";
import resultTemp1 from "@assets/temp/resultTemp1.png";
import alert from "@assets/icon/alert.svg";

import ShortBtn from "@components/Buttons/ShortBtn";

const Result = () => {
  const results = [
    {
      id: 1,
      text: "주택임대차보호법에서 보호하는 임차인의 거주 기간은 2년입니다.",
    },
    {
      id: 2,
      text: "주택임대차보호법 제 4조에 따르면 기간을 정하지 않거나 2년 미만으로 정한 임대차 계약 기간은 그 기간을 2년으로 봅니다.",
    },
  ];
  return (
    <Div>
      <SimpleNavBar text="레포트" />
      <Container>
        <FontTitle margin="20px 0 28px 28px">
          주의 요망 특약 사항 발견
        </FontTitle>
        <img
          src={resultTemp1}
          style={{ margin: "0 auto", display: "block", width: "90%" }}
        />

        <div style={{ display: "flex", margin: "20px 0 0 0" }}>
          <FontTitle margin="0 9px 0 28px">해설</FontTitle>
          <img src={alert} />
        </div>
        <Hr />
        {results.map((res) => {
          return (
            <FontDescribed margin="16px 28px 0 28px">{res.text}</FontDescribed>
          );
        })}

        <BtnsDiv>
          <ShortBtn
            text="관련 기사 보러가기"
            color="--aurora"
            activeColor="--aurora-shadow"
          />
          <div className="gap"></div>
          <ShortBtn
            text="단어 사전 보기"
            color="--skyblue"
            activeColor="--skyblue-shadow"
          />
        </BtnsDiv>
      </Container>
    </Div>
  );
};

export default Result;

const BtnsDiv = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;

  position: fixed;
  bottom: 30px;

  .gap {
    width: 5px;
  }
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  padding-bottom: 100px;
`;

const Hr = styled.hr`
  margin: 10px 28px 0 28px;
  height: 1px;

  border: none;
  background: rgba(217, 217, 217, 0.5);
`;
