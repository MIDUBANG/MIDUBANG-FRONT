/* Result 특약사항 페이지 */
import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import SimpleNavBar from "@components/NavBar/SimpleNavBar";

import { FontTitle, FontDescribed } from "@style/font.style";
import resultTemp1 from "@assets/temp/resultTemp1.png";
import alert from "@assets/icon/alert.svg";

import { useCookies } from "react-cookie";

// component
import ResultBox from "@components/Result/ResultBox";
import WordModal from "@components/Modal/WordModal";

//api
import { PostAnalyze } from "@api/analyze";
import { RootState } from "@store/store";
import { useAppSelector } from "@store/store";
// asset
import { resultsType, CasesType, WordsType } from "@assets/types";

const Result = () => {
  const requestData = useAppSelector((state: RootState) => state.result);

  const [results, setResults] = useState<resultsType>();
  const [cases, setCases] = useState<CasesType[]>();
  const [words, setWords] = useState<WordsType[]>();

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
    // Spring 업로드 -> 최종 결과 (result로 옮길까?)
    const analyzeResult = await PostAnalyze(
      requestData.commission,
      requestData.answer_commission,
      requestData.is_expensive,
      requestData.contract_type,
      requestData.image_url,
      requestData.inclusions,
      requestData.omissions,
      cookies.refreshToken,
      onCookie
    );

    const resultRecord = analyzeResult.record;
    const resultCase = analyzeResult.myCaseDto;
    const resultWord = analyzeResult.simpleWordDtos;
    console.log(resultRecord, resultCase, resultWord);
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

  return (
    <Div>
      <SimpleNavBar text="레포트" />
      <Container>
        <FontTitle margin="20px 0 28px 28px">
          주의 요망 특약 사항 발견
        </FontTitle>
        <img
          src={resultTemp1}
          style={{ margin: "0 auto", display: "block", width: "90%" }}
        />

        <p>특약 조항 해설</p>

        <ResultBox />
        <ResultBox />

        <ResultBox />

        <WordModal open={modalOpen} close={closeModal} text={selectWord} />

        {/* <BtnsDiv>
          <ShortBtn
            text="관련 기사 보러가기"
            color="--aurora"
            activeColor="--aurora-shadow"
            state={modalOpen}
            onClick={openModal}
          />
          <div className="gap"></div>
          <ShortBtn
            text="단어 사전 보기"
            color="--skyblue"
            activeColor="--skyblue-shadow"
            state={wordMark}
            onClick={setWordMark}
          />
        </BtnsDiv> */}
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
