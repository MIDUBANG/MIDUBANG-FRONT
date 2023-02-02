/* Upload 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";

import SimpleNavBar from "@components/NavBar/SimpleNavBar";

import loadingPerson from "@assets/illustration/loadingPerson.png";

import { FontGray, FontDescribed } from "@style/font.style";

const Feedback = () => {
  const contracts = [
    { id: 1, contract: "보증금과 월세는 1년마다 시세에 맞게 올릴 수 있다" },
    { id: 1, contract: "보증금과 월세는 1년마다 시세에 맞게 올릴 수 있다" },
    { id: 1, contract: "보증금과 월세는 1년마다 시세에 맞게 올릴 수 있다" },
    { id: 1, contract: "보증금과 월세는 1년마다 시세에 맞게 올릴 수 있다" },
  ];
  return (
    <Div>
      <SimpleNavBar text="레포트" />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <IlluImg src={loadingPerson} style={{ width: "60%" }} />
      </div>

      <FontGray margin="23px auto 0 auto">
        오타를 수정하면 더 정확한 분석을 받아보실 수 있습니다.
      </FontGray>

      <Contract>
        <Dot />
        <FontDescribed margin="0 0 0 14px"> 보증금과 월세는</FontDescribed>
      </Contract>
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
