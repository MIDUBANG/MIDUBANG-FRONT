import styled from "@emotion/styled";

import ill from "@assets/illustration/loadingPerson.png";
import alert from "@assets/icon/alert.svg";

import arrow from "@assets/icon/rightarrow.svg";

import { CasesType, WordsType } from "@assets/types";

type Props = {
  caseData: CasesType;
  wordData: WordsType[];
};
const ResultBox = () => {
  const description =
    "주택임대차보호법에서 보호하는 임차인의 거주 기간은 2년입니다.@주택임대차보호법 제 4조에 따르면 기간을 정하지 않거나 2년 미만으로 정한 임대차 계약 기간은 그 기간을  2년으로 봅니다.";

  let desArray = description.split("@");
  return (
    <Block>
      <Contract>
        <div></div>
        <p> 보증금과 월세는 1년마다 시세에 맞게 올릴 수 있다?</p>
      </Contract>

      <img src={ill} />
      <Describe>
        <p>
          특약에 관련 내용을 넣었고, 주변 전·월세 시세가 단기간에 아무리
          급등했어도 집주인이 맘대로 올릴 수 없습니다. 주택임대차보호법에서
          임대료는 2년마다 연 5% 한도로 증액할 수 있다고 규정하고 있습니다.
          그것도 임차인이 동의할 경우에만 가능하다는 것이 국토부의 유권
          해석입니다.
        </p>
        <p>
          임차인이 5% 증액에 동의하지 않을 경우, 집주인은 임차주택에 대한
          조세·공과금 증감, 경제사정 변동 등 임대료를 올려야 하는 이유를
          증명해야 증액 청구가 가능합니다. 따라서 특약으로 이러한 조항을 넣어도
          효력이 없고, 임대차 보호법에 나온 한도 내에서 증액할 수 있습니다.
        </p>
        <p>
          전월세계약이 만기시에, 임차인은 만기 2개월전까지 임대인에게
          갱신청구권을 행사할 수 있습니다. 이때는 임대인은 이를 거절할 수 없고,
          전임대차와 같은 조건으로 2년간 재계약 연장됩니다. 다만, 임대인은
          전임대차의 차임의 5%이내에서만 증액을 요청할 수 있습니다. 보증금과
          월차임 각각에 대하여 5%증액이 그 한도액이 됩니다.
        </p>
      </Describe>

      <NewsBtn>
        <p>기사보기</p>

        <img src={arrow} />
      </NewsBtn>
    </Block>
  );
};

export default ResultBox;

const Block = styled.div`
  box-sizing: border-box;
  height: auto;

  margin: 18px;

  border: 0.5px solid rgba(147, 147, 147, 0.5);
  border-radius: 5px;
`;

const Contract = styled.div`
  display: flex;

  margin: 26px auto 30px 24px;

  width: 70%;

  div {
    background: #fbb03b;
    height: auto;
    width: 7px;
    margin-right: 10px;
  }
  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
  }
`;

const Describe = styled.div`
  display: flex;
  flex-direction: column;
  margin: 28px;
  p {
    margin-bottom: 20px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
  }
`;

const NewsBtn = styled.div`
  width: 124px;
  height: 34px;

  border: 1px solid #4880ee;
  border-radius: 20.5px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px 20px auto;

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    color: #4880ee;
  }

  img {
    margin-left: 5px;
    width: 14px;
    height: 10px;
  }
`;
