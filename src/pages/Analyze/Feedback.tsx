/* 오타 수정 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";

import SimpleNavBar from "@components/NavBar/SimpleNavBar";

import loadingPerson from "@assets/illustration/loadingPerson.png";

import { FontGray, FontDescribed } from "@style/font.style";
import { PostContractCase, PostAnalyze } from "@api/analyze";
import { useCookies } from "react-cookie";

const Feedback = () => {
  // 전역 상태 관리에서 뽑아와야함
  const contracts = [
    { id: 1, contract: "보증금과 월세는 1년마다 시세에 맞게 올릴 수 있다" },
    { id: 1, contract: "보증금과 월세는 1년마다 시세에 맞게 올릴 수 있다" },
    { id: 1, contract: "보증금과 월세는 1년마다 시세에 맞게 올릴 수 있다" },
    { id: 1, contract: "보증금과 월세는 1년마다 시세에 맞게 올릴 수 있다" },
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

    const caseResult = { in: [1, 2, 3], out: [4, 5, 6] };

    // Spring에서 최종 분석 받아오기
    const res = await PostAnalyze(
      30000,
      50000,
      true,
      "JEONSE",
      "https/",
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

      <button onClick={_handlePostAnalyze}>분석 테스트</button>
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
  display: flex;
  justify-content: start;
  align-items: center;
`;
const Dot = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: #4880ee;
  margin-top: 1px;
`;
