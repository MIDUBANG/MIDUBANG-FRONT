/* 오타 수정 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";

import ConditionBtn from "@components/Buttons/Condition/ConditionBtn";

import { PropsExtra } from "@assets/types";
import alert from "@assets/analyze/upload/condition/alert.png";

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

      <DescriptionBox>
        <img src={alert} />
        <p>
          <span>주택</span> <br /> 주택의 부속 토지, 부택 분양권 포함
        </p>
      </DescriptionBox>

      <DescriptionBox>
        <img src={alert} />
        <p>
          <span>오피스텔</span> <br /> 부엌·화장실 등의 시설을 갖춘 전용면적
          85㎡ 이하 오피스텔
        </p>
      </DescriptionBox>

      <DescriptionBox>
        <img src={alert} />
        <p>
          <span>주택 외 부동산</span> <br /> 오피스텔(주거용 제외), 상가, 토지
          등
        </p>
      </DescriptionBox>
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
  margin-bottom: 5vh;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: #7d7d7d;
`;

const DescriptionBox = styled.div`
  display: flex;

  margin-bottom: 15px;

  img {
    width: 16px;
    height: 16px;
    margin-top: 3px;
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

    width: 100%;
  }
`;
