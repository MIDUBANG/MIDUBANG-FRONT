// hooks
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
// component
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
  const [cases, setCases] = useState<CasesType[]>([]);
  const [words, setWords] = useState<WordsType[]>([]);

  const _handlePostAnalyze = async () => {
    // requestData.inclusions,
    // requestData.omissions,
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
  };

  useEffect(() => {
    _handlePostAnalyze();
  }, []);

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const onCookie = (res: any) => {
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  // 단어 관련
  const [highlighter, setHighlighter] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectWord, setSelectWord] = useState("");

  const _handleHighlighter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setHighlighter(true);
    } else {
      setHighlighter(false);
    }
  };

  const openWordModal = (word: string) => {
    setSelectWord(word); // 단어 모달에 선택된 단어 전달
    setModalOpen(true);
  };

  const closeWordModal = () => {
    setModalOpen(false);
  };

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
            <input
              type="checkbox"
              id="toggle"
              hidden
              onChange={(e) => _handleHighlighter(e)}
            />

            <label htmlFor="toggle" className="toggleSwitch">
              <p className="word">단어</p>
              <span className="toggleButton"></span>
            </label>
          </div>
        </InfoBox>

        {/* 썸넬 */}
        <img src={temp} />

        {cases.map((c) => {
          return (
            <ResultBox
              caseData={c}
              wordData={words}
              highlight={highlighter}
              openWordModal={openWordModal}
            />
          );
        })}

        <WordModal
          open={modalOpen}
          close={closeWordModal}
          text={selectWord}
          wordsData={words}
        />
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
