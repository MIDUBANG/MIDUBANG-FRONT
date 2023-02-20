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
import CommissionBox from "@components/Result/CommissionBox";

const Result = () => {
  const requestData = useAppSelector((state: RootState) => state.result);
  const [results, setResults] = useState<resultsType>();
  const [cases, setCases] = useState<CasesType[]>([]);
  const [words, setWords] = useState<WordsType[]>([]);
  const [contractType, setContractType] = useState<string>("");

  const _handlePostAnalyze = async () => {
    // requestData.inclusions,
    // requestData.omissions,
    const analyzeResult = await PostAnalyze(
      requestData.commission,
      requestData.answer_commission,
      requestData.is_expensive,
      requestData.contract_type,
      requestData.image_url,
      [0, 1, 2, 3, 4],
      [2],
      cookies.refreshToken,
      onCookie
    );

    console.log("spring 결과물", analyzeResult);

    const resultRecord = analyzeResult.record;
    const resultCase = analyzeResult.myCaseDto;
    const resultWord = analyzeResult.simpleWordDtos;

    setResults(resultRecord);
    setCases(resultCase);
    setWords(resultWord);

    console.log("d", resultRecord.contract_type);
    if (resultRecord.contract_type === "MONTHLY_RENT") {
      setContractType("월세");
    } else if (resultRecord.contract_type === "JEONSE") {
      setContractType("전세");
    } else {
      setContractType("반전세");
    }
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

  const [modalOpen, setModalOpen] = useState(false);
  const [selectWord, setSelectWord] = useState("");

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

        <Date>2023.02.20 분석</Date>

        <ImgBox>
          <ContractImg src={temp} />
          <div>{contractType}</div>
        </ImgBox>

        <CommissionBox />

        {cases.map((c) => {
          return (
            <ResultBox
              key={c.case_id}
              caseData={c}
              wordData={words}
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

const Date = styled.div`
  margin: 0 auto 20px 35px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.05em;
  color: #9a9a9a;
`;

const ImgBox = styled.div`
  position: relative;

  div {
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    bottom: 0;
    left: 0;
    width: 94px;
    height: 33px;
    background: #ffffff;
    border-radius: 0px 11px 0px 0px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
  }
`;

const ContractImg = styled.img`
  width: 100%;
`;
