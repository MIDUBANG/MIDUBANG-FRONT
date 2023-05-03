/* 오타 수정 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";

import SimpleNavBar from "@components/NavBar/SimpleNavBar";

import loadingPerson from "@assets/illustration/loadingPerson.png";

import { FontTitle, FontGray } from "@style/font.style";
import { PostContractCase, PostAnalyze } from "@api/analyze";
import { useCookies } from "react-cookie";
import ConditionBtn from "@components/Buttons/Condition/ConditionBtn";

import { PropsExtra } from "@assets/types";

type Props = {
  extraInfo: any;
  setExtraInfo: (extraInfo: PropsExtra) => void;
};

const Condition6 = ({ extraInfo, setExtraInfo }: Props) => {
  const _handleClickBtn = (value: boolean) => {
    if (value === true) {
      // 네
      setExtraInfo({ ...extraInfo, pet: true });
      setIsSelected([true, false]);
    } else {
      //아니오
      setExtraInfo({ ...extraInfo, pet: false });
      setIsSelected([false, true]);
    }
  };

  const [isSelected, setIsSelected] = useState([true, false]);

  return (
    <Div>
      <Title>전세 대출이 있으신가요?</Title>
      <Des>전세금 마련을 위한 대출이 있다면 예로 답변해주세요.</Des>

      <ConditionBtn
        text="예"
        selected={isSelected[0]}
        onClick={() => _handleClickBtn(true)}
      />
      <ConditionBtn
        text="아니오"
        selected={isSelected[1]}
        onClick={() => _handleClickBtn(false)}
      />
    </Div>
  );
};

export default Condition6;

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
