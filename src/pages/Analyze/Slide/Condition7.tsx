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

const Condition7 = ({ extraInfo, setExtraInfo }: Props) => {
  const _handleClickBtn = (value: boolean) => {
    if (value === true) {
      // 네
      setExtraInfo({ ...extraInfo, substitute: true });
      setIsSelected([true, false]);
    } else {
      //아니오
      setExtraInfo({ ...extraInfo, substitute: false });
      setIsSelected([false, true]);
    }
  };

  const [isSelected, setIsSelected] = useState([true, false]);

  return (
    <Div>
      <Title>계약 대리인이 있으신가요?</Title>
      <Des>집주인과 직접 계약하지 않았다면</Des>

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

export default Condition7;

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
