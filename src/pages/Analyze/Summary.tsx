// hooks
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

// store
import { useAppSelector } from "@store/store";
import { RootState } from "@store/store";

// component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import ResultBox from "@components/Result/ResultBox";
import WordModal from "@components/Modal/WordModal";
//api
import { SummarizeReport, GetAnalyze } from "@api/analyze";

// asset
import { resultsType, CasesType, WordsType } from "@assets/types";
import temp from "@assets/result/temp.png";
import CommissionBox from "@components/Result/CommissionBox";

type Test = {
  article_url: string;
  caseType: string;
  case_detail: string;
  case_exists: boolean;
  case_id: number;
  desc: string;
};

const Summary = () => {
  const { reportId } = useAppSelector((state: RootState) => state.summary);

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const [loading, setLoading] = useState(true);

  const [customDirection, setCustomDirecton] = useState("up");

  const test = [
    "특약에 관련 내용을 넣었고, 주변 전·월세 시세가 단기간에 아무리 급등했어도 집주인이 맘대로 올릴 수 없습니다.",
    "임차인은 전월세계약 종료 2개월전까지 임대인에게 갱신청구권을 행사할 수 있습니다. 이때는 임대인은 이를 거절할 수 없고, ",
    "세입자가 2달치 이상의 월세를 연체한 경우 계약 해지를 통보할 수는 있지만, 세입자의 짐을 함부로 처분하거나 세입자를 강제로 집에서 내 보낼 수 없습니다.",
  ];

  let INVALID: any[] = [];
  let VALID_MUST: any[] = [];
  let VALID_WARNING: any[] = [];

  const _requestSummary = async () => {
    const records = await GetAnalyze(reportId, cookies.refreshToken, onCookie); //records중 case만?

    // 케이스 별로 구별
    records.myCaseDto.map((r: any) => {
      let ob = {
        case_id: r.case_id,
        case_detail: r.case_detail,
        article_url: r.article_url,
        caseType: r.caseType,
        case_exists: r.case_exists,
        desc: r.desc,
      };

      switch (ob.caseType) {
        case "INVALID":
          INVALID.push(ob);
          break;
        case "VALID_MUST":
          VALID_MUST.push(ob);
          break;
        case "VALID_WARNING":
          VALID_WARNING.push(ob);
          break;
      }
    });

    // DESC 만 뽑고
    let temp1 = INVALID.map((re: any) => re.desc);
    let temp2 = VALID_MUST.map((re: any) => re.desc);
    let temp3 = VALID_WARNING.map((re: any) => re.desc);

    // 요약
    let res1 = await SummarizeReport(temp1);
    let res2 = await SummarizeReport(temp2);
    let res3 = await SummarizeReport(temp3);

    res1 = res1.data.summarys;
    res2 = res2.data.summarys;
    res3 = res3.data.summarys;

    INVALID = INVALID.map((con: any, i: number) => ({
      ...con,
      summary: res1[i],
    }));

    VALID_MUST = VALID_MUST.map((con: any, i: number) => ({
      ...con,
      summary: res2[i],
    }));

    VALID_WARNING = VALID_WARNING.map((con: any, i: number) => ({
      ...con,
      summary: res3[i],
    }));

    console.log("최종 결과:", INVALID, VALID_MUST, VALID_WARNING);
    setINVALID(INVALID);
    setVALID_MUST(VALID_MUST);
    setVALID_WARNING(VALID_WARNING);

    setLoading(false);
  };

  const [INVALID2, setINVALID] = useState<any>([]);
  const [VALID_MUST2, setVALID_MUST] = useState<any>([]);
  const [VALID_WARNING2, setVALID_WARNING] = useState<any>([]);

  useEffect(() => {
    _requestSummary();
  }, []);

  return (
    <Div>
      <Container>
        <SimpleNavBar text="레포트 세 줄 요약" direction={customDirection} />

        {loading ? (
          <p>로딩 중 ...</p>
        ) : (
          <div>
            {INVALID2.map((i: any) => (
              <Block>
                <Contract caseTypeColor="#EF5353">
                  <div></div>
                  <p>법적 효력이 없는 특약 </p>
                </Contract>
                <Title>1. {i.case_detail}</Title>
                <Des>{i.summary}</Des>
              </Block>
            ))}

            {VALID_MUST2.map((i: any) => (
              <Block>
                <Contract caseTypeColor="#9CDB75">
                  <div></div>
                  <p>필수 특약 </p>
                </Contract>
                <Title>1. {i.case_detail}</Title>
                <Des>{i.summary}</Des>
              </Block>
            ))}

            {VALID_WARNING2.map((i: any) => (
              <Block>
                <Contract caseTypeColor="#FBB03B">
                  <div></div>
                  <p>미리 알아둬야 할 특약 </p>
                </Contract>
                <Title>1. {i.case_detail}</Title>
                <Des>{i.summary}</Des>
              </Block>
            ))}
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

const Contract = styled.div<{ caseTypeColor: string }>`
  display: flex;
  margin: 26px auto 30px 24px;
  width: 80%;

  div {
    background: ${(props) => props.caseTypeColor};
    height: auto;
    width: 7px;
    margin-right: 10px;
    flex-shrink: 0;
  }
  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
  }
`;

const Title = styled.div`
  margin: 26px 21px 0px 21px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.05em;
`;

const Des = styled.div`
  margin: 10px 21px 30px 21px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
`;
