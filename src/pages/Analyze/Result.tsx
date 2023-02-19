/* Result 특약사항 페이지 */
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { useCookies } from "react-cookie";

// component
import { FontTitle, FontDescribed } from "@style/font.style";

import SimpleNavBar from "@components/NavBar/SimpleNavBar";

import ResultBox from "@components/Result/ResultBox";
import WordModal from "@components/Modal/WordModal";
//api
import { PostAnalyze } from "@api/analyze";
import { RootState } from "@store/store";
import { useAppSelector } from "@store/store";
// asset
import { resultsType, CasesType, WordsType } from "@assets/types";
import temp from "@assets/result/temp.png";

const Result = () => {
  const requestData = useAppSelector((state: RootState) => state.result);

  const [results, setResults] = useState<resultsType>();
  //   "record": {
  //     "record_id": 20,
  //     "is_expensive": true,
  //     "commission": 500000,
  //     "answer_commission": 500000,
  //     "contract_type": "JEONSE",
  //     "image_url": "http://",
  //     "record_date": "2023-02-17"
  // },

  const [cases, setCases] = useState<CasesType[]>([]);
  //   "myCaseDto": [
  //     {
  // ++ article_url

  //         "case_id": 2,
  //         "case_detail": "임대인은 임차인이 잔금을 지급하는 다음 날까지 해당 목적물에 대하여 근저당권 및 기타 제한물권 설정을 하지 않는다. 이를 위반 시 계약은 즉시 무효가 되며 임대인은 임차인에게 위약금을 지불한다.",
  //         "desc": "임차인이 주택을 인도받을 때까지 근저당권 등의 권리 설정을 하지 않겠다는 내용입니다. 만약 임차인이 전입 신고 하기 전에 근저당권 등의 권리 설정이 이루어지면, 임차권이 그 권리보다 후순위가 되어 문제가 발생했을 시 임차보증금을 돌려받는데 문제가 생길 수 있기 때문입니다",
  //         "caseType": "VALID_MUST",
  //         "case_exists": true,
  //         "word_ref": [
  //             2,
  //             3
  //         ]
  //     }
  // ],

  const [words, setWords] = useState<WordsType[]>([]);
  //   "simpleWordDtos": [
  //     {
  //         "word_id": 2,
  //         "word": "전세",
  //         "meaning": "전세란"
  //     },
  //     {
  //         "word_id": 3,
  //         "word": "월세",
  //         "meaning": "월세란"
  //     }
  // ]

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const onCookie = (res: any) => {
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  // 단어 형광펜
  const [wordMark, setWordMark] = useState(false);
  // 모달 컴포넌트
  const [modalOpen, setModalOpen] = useState(false);
  const [selectWord, setSelectWord] = useState("");

  const _handlePostAnalyze = async () => {
    // Spring 업로드 -> 최종 result data

    console.log(
      "스프링 업로드 테스트",
      requestData.inclusions,
      requestData.omissions,
      requestData.image_url
    );

    const analyzeResult = await PostAnalyze(
      requestData.commission,
      requestData.answer_commission,
      requestData.is_expensive,
      requestData.contract_type,
      requestData.image_url,
      [],
      [2],
      cookies.refreshToken,
      onCookie
    );

    const resultRecord = analyzeResult.record;
    const resultCase = analyzeResult.myCaseDto;
    const resultWord = analyzeResult.simpleWordDtos;

    setResults(resultRecord);
    setCases(resultCase);
    setWords(resultWord);

    console.log("결과", results, words, cases);
  };

  const openModal = (t: string) => {
    setSelectWord(t);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    _handlePostAnalyze();
  }, []);

  useEffect(() => {
    console.log("결과2", results, words, cases);
  }, [results, cases, words]);
  return (
    <Div>
      <SimpleNavBar text="레포트" />
      <Container>
        <Title>
          <div></div>
          <p> 주의 요망 특약 사항 발견</p>
        </Title>

        <InfoBox>
          <div className="text-info">
            <p>#태그</p>
            <p>#태그</p>

            <p>2023.02.18 분석</p>
          </div>
          <div className="word-toggle">
            <input type="checkbox" id="toggle" hidden />

            <label htmlFor="toggle" className="toggleSwitch">
              <p className="word">단어</p>
              <span className="toggleButton"></span>
            </label>
          </div>
        </InfoBox>

        <img src={temp} />

        {/* 보내야하는 것 : case 정보, word 통채로 */}
        {cases.map((c) => {
          return <ResultBox caseData={c} wordData={words} />;
        })}

        <WordModal open={modalOpen} close={closeModal} text={selectWord} />
      </Container>
    </Div>
  );
};

export default Result;

const Div = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;
`;

const Container = styled.div`
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

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 35px 20px 35px;

  .text-info {
    display: flex;

    justify-content: space-between;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.05em;
    color: #9a9a9a;

    p {
      margin-right: 6px;
    }
  }

  .word-toggle {
    .toggleSwitch {
      width: 52px;
      height: 23px;

      display: block;
      position: relative;
      border-radius: 30px;
      background-color: #d9d9d9;
      cursor: pointer;
    }

    .toggleSwitch .toggleButton {
      width: 20px;
      height: 20px;

      position: absolute;
      top: 50%;
      left: 3px;

      transform: translateY(-50%);
      border-radius: 50%;
      background: white;
    }
    .word {
      display: none;
    }

    #toggle:checked ~ .toggleSwitch {
      //체크 된 경우
      background: #83b4f9;
    }

    #toggle:checked ~ .toggleSwitch .word {
      position: absolute;
      top: 4px;
      left: 8px;
      display: flex;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 14px;
      text-align: center;
      letter-spacing: -0.05em;

      color: #ffffff;
    }

    #toggle:checked ~ .toggleSwitch .toggleButton {
      left: calc(100% - 23px);
      background: white;
    }

    .toggleSwitch,
    .toggleButton {
      transition: all 0.2s ease-in;
    }
  }
`;
