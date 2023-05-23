/* 오타 수정 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";

import ConditionBtn from "@components/Buttons/Condition/ConditionBtn";

import { PropsExtra } from "@assets/types";

type Props = {
  extraInfo: any;
  setExtraInfo: (extraInfo: PropsExtra) => void;
};

const Condition8 = ({ extraInfo, setExtraInfo }: Props) => {
  const _handleClickBtn = (text: string) => {
    if (text === "주택") {
      setExtraInfo({ ...extraInfo, officetel: "HOUSE" });
      setIsSelected([true, false, false]);
    } else if (text === "오피스텔") {
      setExtraInfo({ ...extraInfo, officetel: "OFFICETEL" });
      setIsSelected([false, true, false]);
    } else {
      setExtraInfo({ ...extraInfo, officetel: "NON_HOUSE" });
      setIsSelected([false, false, true]);
    }
  };

  const [isSelected, setIsSelected] = useState([true, false, false]);

  return (
    <Div>
      <Title>매물 종류를 선택해주세요.</Title>
      <Des>주택, 오피스텔 등 어떤 집을 계약하려 하시나요? </Des>

      <ConditionBtn
        text="주택"
        selected={isSelected[0]}
        onClick={() => _handleClickBtn("주택")}
      />
      <ConditionBtn
        text="오피스텔"
        selected={isSelected[1]}
        onClick={() => _handleClickBtn("오피스텔")}
      />

      <ConditionBtn
        text="주택 외 부동산"
        selected={isSelected[2]}
        onClick={() => _handleClickBtn("주택 외 부동산")}
      />
    </Div>
  );
};

export default Condition8;

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
