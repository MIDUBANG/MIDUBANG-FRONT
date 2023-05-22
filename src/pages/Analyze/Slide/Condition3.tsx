/* 오타 수정 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";
import ConditionInput from "@components/Input/Condition/ConditionInput";
import { PropsExtra } from "@assets/types";
import alert from "@assets/analyze/upload/condition/alert.png";

type Props = {
  extraInfo: any;
  setExtraInfo: (extraInfo: PropsExtra) => void;
};

const Condition3 = ({ extraInfo, setExtraInfo }: Props) => {
  const [money, setMoney] = useState<any>(null);

  const _handleChageInput = (money: any) => {
    if (!Object.is(money, NaN)) {
      setMoney(money);
    } else {
      setMoney("");
    }
    setExtraInfo({ ...extraInfo, monthlyMoney: money * 10000 });
  };

  return (
    <Div>
      <Title>차임(월세)를 입력해주세요.</Title>
      <Des>차임 또는 월세란 달마다 내는 임대료를 뜻합니다.</Des>

      <ConditionInput
        value={money}
        setValue={_handleChageInput}
        placeholder="월세를 입력 (만원)"
      />

      <InputResult>{money} 만원</InputResult>

      <DescriptionBox>
        <img src={alert} />
        <p>
          <span>차임(월세)란?</span> <br /> 월세(차임)는 매달 지불하는 것이며
          돌려받는 금액이 아닙니다.
        </p>
      </DescriptionBox>
    </Div>
  );
};

export default Condition3;

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

const InputResult = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  color: #7d7d7d;

  margin: 10px 0 44px 20px;
`;

const DescriptionBox = styled.div`
  display: flex;
  img {
    width: 20px;
    height: 20px;

    margin-top: 1px;
  }

  span {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #7d7d7d;
  }

  p {
    word-break: keep-all;
    margin-left: 10px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #7d7d7d;

    width: 70%;
  }
`;
