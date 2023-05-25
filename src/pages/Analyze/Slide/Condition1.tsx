/* 오타 수정 페이지 */
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import ConditionBtn from "@components/Buttons/Condition/ConditionBtn";

import { PropsExtra } from "@assets/types";

type Props = {
  extraInfo: any;
  setExtraInfo: (extraInfo: PropsExtra) => void;
};

const Condition1 = ({ extraInfo, setExtraInfo }: Props) => {
  const _handleClickBtn = (text: string) => {
    if (text === "월세") {
      setExtraInfo({ ...extraInfo, monthly: "MONTHLY_RENT" });
      setIsSelected([true, false, false]);
    } else if (text === "전세") {
      setExtraInfo({ ...extraInfo, monthly: "JEONSE" });
      setIsSelected([false, true, false]);
    } else {
      setExtraInfo({ ...extraInfo, monthly: "HALF_JEONSE" });
      setIsSelected([false, false, true]);
    }
  };

  const [isSelected, setIsSelected] = useState([true, false, false]);

  useEffect(() => {
    //console.log("월세 기본 세팅");
    _handleClickBtn("월세");
  }, []);

  return (
    <Div>
      <Title>계약 유형을 선택해주세요.</Title>
      <Des>월세, 전세, 반전세 중 어떤 계약인가요? </Des>

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

      <ConditionBtn
        text="반전세"
        selected={isSelected[2]}
        onClick={() => _handleClickBtn("반전세")}
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
  font-size: 24px;

  color: #000000;
`;

const Des = styled.p`
  margin-top: 19px;
  margin-bottom: 10vh;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: #7d7d7d;
`;
