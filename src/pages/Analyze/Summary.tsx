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

  const [INVALID, setINVALID] = useState<any>([]);
  const [VALID_MUST, setVALID_MUST] = useState<any>([]);
  const [VALID_WARNING, setVALID_WARNING] = useState<any>([]);

  const [summary, setSummary] = useState([]);

  const [customDirection, setCustomDirecton] = useState("up");

  const _getAnalyzeReport = async () => {
    const records = await GetAnalyze(reportId, cookies.refreshToken, onCookie); //records중 case만?

    records.myCaseDto.map((r: any) => {
      switch (r.caseType) {
        case "INVALID":
          setINVALID([
            ...INVALID,
            {
              article_url: r.article_url,
              caseType: r.caseType,
              case_detail: r.case_detail,
              case_exists: r.case_exists,
              case_id: r.case_id,
              desc: r.desc,
            },
          ]);
          break;
        case "VALID_MUST":
          setVALID_MUST([
            ...VALID_MUST,
            {
              article_url: r.article_url,
              caseType: r.caseType,
              case_detail: r.case_detail,
              case_exists: r.case_exists,
              case_id: r.case_id,
              desc: r.desc,
            },
          ]);
          break;
        case "VALID_WARNING":
          setVALID_WARNING([
            ...VALID_WARNING,
            {
              article_url: r.article_url,
              caseType: r.caseType,
              case_detail: r.case_detail,
              case_exists: r.case_exists,
              case_id: r.case_id,
              desc: r.desc,
            },
          ]);
          break;
      }
    });
  };

  // const _requestSummary = async (contents: string[]) => {
  //   let res = await SummarizeReport(contents);
  //   return res;
  // };

  const _organizeSummary = () => {
    let temp1 = INVALID.map((re: any) => re.desc);
    const res1 = _requestSummary(temp1);
  };

  /** 일단 이 아래가 원본임... */
  /** https://velog.io/@eunjin/Javascript-Fetch-API-AsyncAwait-%EC%97%AC%EB%9F%AC%EA%B0%9C-%EC%97%B0%EA%B2%B0%ED%95%98%EA%B8%B0
   * 이 포스트 시도해보기
   */
  const test = [
    "특약에 관련 내용을 넣었고, 주변 전·월세 시세가 단기간에 아무리 급등했어도 집주인이 맘대로 올릴 수 없습니다.",
    "임차인은 전월세계약 종료 2개월전까지 임대인에게 갱신청구권을 행사할 수 있습니다. 이때는 임대인은 이를 거절할 수 없고, ",
    "세입자가 2달치 이상의 월세를 연체한 경우 계약 해지를 통보할 수는 있지만, 세입자의 짐을 함부로 처분하거나 세입자를 강제로 집에서 내 보낼 수 없습니다.",
  ];

  const _requestSummary = async (contents: string[]) => {
    const records = await GetAnalyze(reportId, cookies.refreshToken, onCookie); //records중 case만?
    records.myCaseDto.map((r: any) => {
      switch (r.caseType) {
        case "INVALID":
          setINVALID([
            ...INVALID,
            {
              article_url: r.article_url,
              caseType: r.caseType,
              case_detail: r.case_detail,
              case_exists: r.case_exists,
              case_id: r.case_id,
              desc: r.desc,
            },
          ]);
          break;
        case "VALID_MUST":
          setVALID_MUST([
            ...VALID_MUST,
            {
              article_url: r.article_url,
              caseType: r.caseType,
              case_detail: r.case_detail,
              case_exists: r.case_exists,
              case_id: r.case_id,
              desc: r.desc,
            },
          ]);
          break;
        case "VALID_WARNING":
          setVALID_WARNING([
            ...VALID_WARNING,
            {
              article_url: r.article_url,
              caseType: r.caseType,
              case_detail: r.case_detail,
              case_exists: r.case_exists,
              case_id: r.case_id,
              desc: r.desc,
            },
          ]);
          break;
      }
    });

    // 아래 코드를 빨리 할 수 있는 방법을 찾자
    // setState는 반영이 느리니까, 그냥 지역 변수를 쓰는 게 좋을 것 같음
    let temp1 = INVALID.map((re: any) => re.desc);

    // test말고 원래 내가 필요한거로 넣으면 로딩이 풀림 ㅅㅂ (temp에 아무것도 없어서 그런 듯 함)
    const res = await SummarizeReport(temp1);

    console.log(res);
    setSummary(res.data.summarys);
    setLoading(false);
  };

  useEffect(() => {
    _requestSummary(test).then(() => {});
  }, []);

  return (
    <Div>
      <Container>
        <SimpleNavBar text="레포트 세 줄 요약" direction={customDirection} />

        {loading ? (
          <p>로딩 중 ...</p>
        ) : (
          <div>
            <p>무효 </p>
            {/* {INVALID} */}
            <p>유효 필수 </p>

            {/* {VALID_MUST} */}
            <p>유효 주의 </p>

            {/* {VALID_WARNING} */}
            {/* {summary.map((sum) => {
              return (
                <Block>
                  <Title>{sum}</Title>
                </Block>
              );
            })} */}
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
