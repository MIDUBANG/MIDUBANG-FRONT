/* 오타 수정 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";
import alert from "@assets/analyze/upload/condition/alert.png";

import ConditionInput from "@components/Input/Condition/ConditionInput";

import { PropsExtra } from "@assets/types";

type Props = {
  extraInfo: any;
  setExtraInfo: (extraInfo: PropsExtra) => void;
};

const Condition4 = ({ extraInfo, setExtraInfo }: Props) => {
  const [money, setMoney] = useState<any>(null);

  const _handleChageInput = (money: any) => {
    if (!Object.is(money, NaN)) {
      setMoney(money);
    } else {
      setMoney("");
    }
    setExtraInfo({ ...extraInfo, commission: money * 10000 });
  };

  return (
    <Div>
      <Title>복비를 입력해주세요</Title>
      <Des>부동산 중개인에게 지불하는 금액입니다.</Des>

      <ConditionInput
        value={money}
        setValue={_handleChageInput}
        placeholder="복비를 입력해주세요. (만원)"
      />

      <InputResult>{money} 만원</InputResult>

      <DescriptionBox>
        <img src={alert} />
        <p>
          <span>복비란?</span> <br /> 복비는 부동산 계약 중계 수수료로 부동산
          중개인에게 지불하는 금액입니다.
        </p>
      </DescriptionBox>
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
