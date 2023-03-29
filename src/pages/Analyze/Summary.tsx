// hooks
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
// component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import ResultBox from "@components/Result/ResultBox";
import WordModal from "@components/Modal/WordModal";
//api
import { SummarizeReport } from "@api/analyze";

// asset
import { resultsType, CasesType, WordsType } from "@assets/types";
import temp from "@assets/result/temp.png";
import CommissionBox from "@components/Result/CommissionBox";

const Summary = () => {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState("");
  const test =
    "특약에 관련 내용을 넣었고, 주변 전·월세 시세가 단기간에 아무리 급등했어도 집주인이 맘대로 올릴 수 없습니다. 주택임대차보호법에서 임대료는 2년마다 연 5% 한도로 증액할 수 있다고 규정하고 있습니다. 그것도 임차인이 동의할 경우에만 가능하다는 것이 국토부의 유권 해석입니다. 임차인이 5% 증액에 동의하지 않을 경우, 집주인은 임차주택에 대한 조세·공과금 증감, 경제사정 변동 등 임대료를 올려야 하는 이유를 증명해야 증액 청구가 가능합니다. 따라서 특약으로 이러한 조항을 넣어도 효력이 없고, 임대차 보호법에 나온 한도 내에서 증액할 수 있습니다. 전월세계약이 만기시에, 임차인은 만기 2개월전까지 임대인에게 갱신청구권을 행사할 수 있습니다. 이때는 임대인은 이를 거절할 수 없고, 전임대차와 같은 조건으로 2년간 재계약 연장됩니다. 다만, 임대인은 전임대차의 차임의 5%이내에서만 증액을 요청할 수 있습니다. 보증금과 월차임 각각에 대하여 5%증액이 그 한도액이 됩니다";

  const [customDirection, setCustomDirecton] = useState("up");

  const _requestSummary = async (content: string) => {
    const res = await SummarizeReport(content);
    console.log(res);
    setSummary(res.data.summary);
    setLoading(false);
  };

  useEffect(() => {
    _requestSummary(test);
  }, []);

  return (
    <Div>
      <Container>
        <SimpleNavBar text="레포트 세 줄 요약" direction={customDirection} />
        <Title>
          <div></div>
          {loading ? <div>로딩 중</div> : <div>{summary}</div>}
        </Title>
      </Container>
    </Div>
  );
};

export default Summary;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 90px;
  //overflow-y: scroll;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;

const Title = styled.div`
  display: flex;
  margin-left: 35px;
  margin-bottom: 14px;

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
    font-size: 20px;
    line-height: 29px;
  }
`;
