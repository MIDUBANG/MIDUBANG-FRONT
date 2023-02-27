// hooks
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";
// component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import ResultBox from "@components/Result/ResultBox";
import WordModal from "@components/Modal/WordModal";
//api
import { GetAnalyze, DeleteAnalyze } from "@api/analyze";

// asset
import { resultsType, CasesType, WordsType } from "@assets/types";
import temp from "@assets/result/temp.png";
import CommissionBox from "@components/Result/CommissionBox";

const Result = () => {
  const { id } = useParams() as { id: string };
  const record_id = parseInt(id);

  const navigate = useNavigate();

  const [results, setResults] = useState<resultsType>();
  const [cases, setCases] = useState<CasesType[]>([]);
  const [words, setWords] = useState<WordsType[]>([]);
  const [contractType, setContractType] = useState<string>("");

  /** 개별 분석을 불러오는 함수 */
  const _handlePostAnalyze = async () => {
    const res = await GetAnalyze(record_id, cookies.refreshToken, onCookie);

    setResults(res.record);
    setCases(res.myCaseDto);
    setWords(res.simpleWordDtos);

    if (res.record.contract_type === "MONTHLY_RENT") {
      setContractType("월세");
    } else if (res.record.contract_type === "JEONSE") {
      setContractType("전세");
    } else {
      setContractType("반전세");
    }
  };

  /** 분석 기록을 삭제하는 함수 */
  const _handleDeleteAnalyze = async () => {
    const res = await DeleteAnalyze(record_id, cookies.refreshToken, onCookie);
    navigate(-1);
  };

  /** 분석 삭제를 확인하는 모달 오픈하는 함수 */
  const _handleOpenDeleteModal = () => {
    alert("분석을 삭제하시겠습니까?");
    _handleDeleteAnalyze();
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

        <CommissionBox
          answer_commission={results?.answer_commission}
          my_commission={results?.answer_commission}
          is_expensive={results?.is_expensive}
        />

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
      <BottomNav>
        <p onClick={_handleOpenDeleteModal}>삭제</p>
      </BottomNav>
    </Div>
  );
};

export default Result;

const BottomNav = styled.div`
  border-top: 2px solid #f4f5f7;
  width: 100%;
  height: 60px;

  position: fixed;
  bottom: 0;

  background-color: white;
`;

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
