/* Result 등기부등본 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";

import { FontTitle, FontDescribed } from "@style/font.style";
import resultTemp1 from "@assets/temp/resultTemp1.png";
import alert from "@assets/icon/alert.svg";

import ShortBtn from "@components/Buttons/ShortBtn";

import WordModal from "@components/Modal/WordModal";

const Result = () => {
  const [modal, setModal] = useState(true);

  const results = [
    {
      id: 1,
      text: "매도 계약자와 실 소유주가 동일한 것을 확인했습니다!",
    },
    {
      id: 2,
      text: "보존/이전/가압류/가처분/가등기/압류/경매 항목을 발견했습니다. 확인하세요! 보증금을 지킬 유일한 방법입니다!",
    },
  ];
  return (
    <Div>
      <SimpleNavBar text="레포트" />
      <Container>
        <FontTitle margin="20px 0 28px 28px">등기부등본 분석 결과</FontTitle>
        <img
          src={resultTemp1}
          style={{ margin: "0 auto", display: "block", width: "90%" }}
        />

        <div style={{ display: "flex", margin: "20px 0 0 0" }}>
          <FontTitle margin="0 9px 0 28px">해설</FontTitle>
          <img src={alert} />
        </div>
        <Hr />
        <FontTitle margin="12px 9px 0 28px">갑구</FontTitle>
        {results.map((res) => {
          return (
            <FontDescribed margin="16px 28px 0 28px">{res.text}</FontDescribed>
          );
        })}
        {modal ? <WordModal setModal={setModal} /> : null}

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
    width: 20px;
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
