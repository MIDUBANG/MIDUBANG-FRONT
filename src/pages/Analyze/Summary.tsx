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
  const [summary, setSummary] = useState([]);

  const test = [
    "특약에 관련 내용을 넣었고, 주변 전·월세 시세가 단기간에 아무리 급등했어도 집주인이 맘대로 올릴 수 없습니다.",
    "임차인은 전월세계약 종료 2개월전까지 임대인에게 갱신청구권을 행사할 수 있습니다. 이때는 임대인은 이를 거절할 수 없고, ",
    "세입자가 2달치 이상의 월세를 연체한 경우 계약 해지를 통보할 수는 있지만, 세입자의 짐을 함부로 처분하거나 세입자를 강제로 집에서 내 보낼 수 없습니다.",
  ];

  const [customDirection, setCustomDirecton] = useState("up");

  const _requestSummary = async (contents: string[]) => {
    const res = await SummarizeReport(contents);
    console.log(res);
    setSummary(res.data.summarys);
    setLoading(false);
  };

  useEffect(() => {
    console.log("결과:", summary);
  }, [summary]);

  useEffect(() => {
    _requestSummary(test);
  }, []);

  return (
    <Div>
      <Container>
        <SimpleNavBar text="레포트 세 줄 요약" direction={customDirection} />

        {loading ? (
          <p>로딩 중 ...</p>
        ) : (
          <div>
            {summary.map((sum) => {
              return (
                <Block>
                  <Title>{sum}</Title>
                </Block>
              );
            })}
          </div>
        )}
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

const Block = styled.div`
  position: relative;
  box-sizing: border-box;
  height: auto;

  margin: 18px;

  border: 0.5px solid rgba(147, 147, 147, 0.5);
  border-radius: 5px;
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
