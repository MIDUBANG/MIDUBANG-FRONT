/* 오타 수정 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";

import SimpleNavBar from "@components/NavBar/SimpleNavBar";

import loadingPerson from "@assets/illustration/loadingPerson.png";

import { FontGray, FontDescribed, FontBig } from "@style/font.style";
import { PostContractCase, PostAnalyze } from "@api/analyze";
import { useCookies } from "react-cookie";

// component

const Feedback = () => {
  // 전역 상태 관리에서 뽑아와야함
  const contracts = [
    { id: 1, contract: "보증금과 월세는 1년마다 시세에 맞게 올릴 수 있다" },
    { id: 1, contract: "보증금과 월세는 1년마다 시세에 맞게 올릴 수 있다" },
    { id: 1, contract: "보증금과 월세는 1년마다 시세에 맞게 올릴 수 있다" },
    { id: 1, contract: "보증금과 월세는 1년마다 시세에 맞게 올릴 수 있다" },
    {
      id: 1,
      contract:
        "보증금과 월세는 1년마다 시세에 맞게 올릴 수 있보세는 1년마다 시세에 맞게 올릴 수 세는 1년마다 시세에 맞게 올릴 수 증금과 월세는 1년마다 시세에 맞게 올릴 수 있다",
    },
  ];

  // 임시
  const resultArray = [
    "보증금과 월세는 1년마다 시세에 맞게 올릴 수 있다",
    "보증금과 월세는 1년마다 시세에 맞게 올릴 수 있다",
    "보증금과 월세는 1년마다 시세에 맞게 올릴 수 있다",
  ];

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const _handlePostAnalyze = async () => {
    // NLP에서 case in, out 받아오기
    // const caseResult = await PostContractCase(
    //   resultArray,
    //   cookies.refreshToken,
    //   onCookie
    // );

    const caseResult = {
      answer_commission: 40000,
      is_expensive: true,
      in: [1, 2, 3],
      out: [4, 5, 6],
    };

    // Spring에서 최종 분석 받아오기
    const res = await PostAnalyze(
      30000, // 내 복비
      caseResult.answer_commission, // 적정 복비
      caseResult.is_expensive, // 바가지 유무
      "JEONSE", // 전세 월세 유무 (이것도 전역)
      "https/", // 전역에서 뽑아와,,
      caseResult.in,
      caseResult.out,
      cookies.refreshToken,
      onCookie
    );

    const myCase = res.myCaseDto;
    const record = res.record;
    const word = res.simpleWordDtos;

    console.log("케이스", myCase);
    console.log("그 외 정보", record);
    console.log("단어", word);
  };

  return (
    <Div>
      <SimpleNavBar text="레포트" />

      <Title>총 N개의 특약조항 검출</Title>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <IlluImg src={loadingPerson} style={{ width: "60%" }} />
      </div>

      <FontGray margin="23px auto 0 auto">
        오타를 수정하면 더 정확한 분석을 받아보실 수 있습니다.
      </FontGray>

      {contracts.map((con) => {
        return (
          <Contract>
            <Dot />
            <FontDescribed margin="0 0 0 14px">{con.contract}</FontDescribed>
          </Contract>
        );
      })}

      <BtnBox>
        <AddBtn>추가</AddBtn>
        <DoneBtn>완료</DoneBtn>
      </BtnBox>
    </Div>
  );
};

export default Feedback;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const IlluImg = styled.img`
  margin: 35px auto 0 auto;
`;

const Contract = styled.div`
  margin: 23px auto 0 29px;
  display: flex;
  align-items: center;

  width: 90%;

  p {
    margin: 0;
  }
`;
const Dot = styled.div`
  width: 14px;
  height: 14px;

  border-radius: 50%;
  background-color: #4880ee;
  flex-shrink: 0;

  margin-right: 14px;
  margin-bottom: auto;
  margin-top: 4px;
`;

const Title = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #000000;

  margin-left: 31px;
`;

const BtnBox = styled.div`
  display: flex;
  width: 100%;

  border: 1px solid red;

  padding: 0 30px;
  box-sizing: border-box;

  position: fixed;
  bottom: 33px;
`;
const AddBtn = styled.div`
  width: 100%;
  height: 41px;
  border: 1px solid #4880ee;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const DoneBtn = styled.div`
  margin-left: 14px;
  width: 100%;
  height: 41px;
  border: 1px solid #4880ee;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
`;
