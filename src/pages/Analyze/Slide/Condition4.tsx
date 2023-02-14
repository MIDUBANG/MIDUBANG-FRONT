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

const Condition4 = ({ extraInfo, setExtraInfo }: Props) => {
  const [money, setMoney] = useState<any>(null);

  const _handleChageInput = (money: number) => {
    setMoney(money);
    setExtraInfo({ ...extraInfo, commission: money });
  };

  return (
    <Div>
      <Title>복비를 입력해주세요</Title>
      <Des>부동산 계약 중계 수수료</Des>

      <ConditionInput
        value={money}
        setValue={_handleChageInput}
        placeholder="복비를 입력해주세요. (만원)"
      />

      <p>{money} 만원</p>

      <p>! 복비란?</p>
    </Div>
  );
};

export default Condition4;

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
  font-size: 20px;
  line-height: 29px;
`;

const Des = styled.p`
  margin-top: 19px;
  margin-bottom: 100px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: #7d7d7d;
`;
