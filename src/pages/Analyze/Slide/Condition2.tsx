/* 오타 수정 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";

import SimpleNavBar from "@components/NavBar/SimpleNavBar";

import loadingPerson from "@assets/illustration/loadingPerson.png";

import { FontTitle, FontGray } from "@style/font.style";
import { PostContractCase, PostAnalyze } from "@api/analyze";
import { useCookies } from "react-cookie";
import ConditionBtn from "@components/Buttons/Condition/ConditionBtn";
import ConditionInput from "@components/Input/Condition/ConditionInput";

import { PropsExtra } from "@assets/types";

type Props = {
  extraInfo: any;
  setExtraInfo: (extraInfo: PropsExtra) => void;
};

const Condition2 = ({ extraInfo, setExtraInfo }: Props) => {
  const [money, setMoney] = useState<any>(null);

  const _handleChageInput = (money: number) => {
    setMoney(money);

    setExtraInfo({ ...extraInfo, deposit: money, lumpSumMoney: money });
  };

  return (
    <Div>
      <Title>계약금을 입력해주세요.</Title>
      <Des>월세 보증금, 또는 전세금을 입력해주세요.</Des>

      <ConditionInput
        value={money}
        setValue={_handleChageInput}
        placeholder="월세 또는 전세금 입력 (만원)"
      />

      <p>{money} 만원</p>

      <p>설명</p>
    </Div>
  );
};

export default Condition2;

const Div = styled.div`
  width: 100%;
  height: 100%;

  padding-left: 38px;
  padding-right: 38px;

  box-sizing: border-box;
`;

const Title = styled.p`
  margin-top: 40px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
`;

const Des = styled.p`
  margin-top: 19px;
  margin-bottom: 36px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: #7d7d7d;
`;
