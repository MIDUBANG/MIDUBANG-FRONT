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

const Condition1 = ({ extraInfo, setExtraInfo }: Props) => {
  const _handleClickBtn = (text: string) => {
    if (text === "월세") {
      setExtraInfo({ ...extraInfo, monthly: true });
      setIsSelected([true, false]);
    } else {
      //전세
      setExtraInfo({ ...extraInfo, monthly: false });
      setIsSelected([false, true]);
    }
  };

  const [isSelected, setIsSelected] = useState([true, false]);

  return (
    <Div>
      <Title>계약 유형을 선택해주세요.</Title>
      <Des>계약 유형을 선택해주세요.</Des>

      <ConditionBtn
        text="월세"
        selected={isSelected[0]}
        onClick={() => _handleClickBtn("월세")}
      />
      <ConditionBtn
        text="전세"
        selected={isSelected[1]}
        onClick={() => _handleClickBtn("전세")}
      />
    </Div>
  );
};

export default Condition1;

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
