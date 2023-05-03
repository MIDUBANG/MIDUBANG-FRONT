// hooks
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
// component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import ResultBox from "@components/Result/ResultBox";
import WordModal from "@components/Modal/WordModal";
//api
import { GetAnalyze, DeleteAnalyze } from "@api/analyze";
import { RootState } from "@store/store";
import { useAppSelector, useAppDispatch } from "@store/store";
import { setReportId } from "@store/summarySlice";
// asset
import { resultsType, CasesType, WordsType } from "@assets/types";
import temp from "@assets/result/temp.png";
import CommissionBox from "@components/Result/CommissionBox";
import whiteArrow from "@assets/analyze/result/whiteArrow.png";
import removeIcon from "@assets/analyze/result/removeIcon.png";

const AnalyzeHistory = () => {
  const dispatch = useAppDispatch();

  const [results, setResults] = useState<resultsType>();
  const [cases, setCases] = useState<CasesType[]>([]);
  const [words, setWords] = useState<WordsType[]>([]);
  const [contractType, setContractType] = useState<string>("");

  let { id } = useParams();

  /** 레포트 기록 하나 가져오기 */
  const _handleGetAnalyze = async () => {
    const reportId = parseInt(id || "0");

    const analyzeResult = await GetAnalyze(
      reportId,
      cookies.refreshToken,
      onCookie
    );

    console.log("요청 결과 >>>>>>>>", analyzeResult);

    const resultRecord = analyzeResult.record;
    let resultCase = analyzeResult.myCaseDto;
    const resultWord = analyzeResult.simpleWordDtos;

    setResults(resultRecord);
    setCases(resultCase);
    setWords(resultWord);

    if (resultRecord.contract_type === "MONTHLY_RENT") {
      setContractType("월세");
    } else if (resultRecord.contract_type === "JEONSE") {
      setContractType("전세");
    } else {
      setContractType("반전세");
    }
  };

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

  const [customDirection, setCustomDirecton] = useState("up");

  const navigate = useNavigate();

  const _clickSummaryBtn = async () => {
    dispatch(
      setReportId({
        reportId: results?.recordId,
      })
    );
    navigate("/summary");
  };

  useEffect(() => {
    console.log("useEffect 실행");
    _handleGetAnalyze();
  }, []);

  /** 레포트 삭제 */
  const _handleClickDelete = async () => {
    const reportId = parseInt(id || "0");

    await DeleteAnalyze(reportId, cookies.refreshToken, onCookie);

    navigate("/my/analyzelist");
  };

  return (
    <Div>
      {modalOpen && (
        <WordModal
          open={modalOpen}
          close={closeWordModal}
          text={selectWord}
          wordsData={words}
        />
      )}

      <Container>
        <SimpleNavBar text="레포트 결과" />
        <Title>
          <div></div>
          <p> 특약 조항 분석 레포트</p>
        </Title>
        {/* <Date>{results?.record_date.replaceAll("-", ". ")} 분석</Date> */}
        <Date>{results?.record_date} 분석</Date>

        <ImgBox>
          <div className="img-box">
            <div className="img-shadow-box"></div>
            <ContractImg src={results?.image_url} />
          </div>
          <div className="contract-type-box">{contractType}</div>
        </ImgBox>

        <BtnBox>
          <RemoveBtn onClick={_handleClickDelete}>
            삭제하기 <img src={removeIcon} />
          </RemoveBtn>
          <SummaryBtn onClick={_clickSummaryBtn}>
            요약 확인하기 <img src={whiteArrow} />
          </SummaryBtn>
        </BtnBox>

        <CommissionBox
          answer_commission={results?.answer_commission}
          my_commission={results?.commission}
          is_expensive={results?.is_expensive}
        />
        {cases.map((c) => {
          return (
            <ResultBox
              key={c.caseId}
              caseData={c}
              wordData={words}
              openWordModal={openWordModal}
            />
          );
        })}
      </Container>
    </Div>
  );
};

export default AnalyzeHistory;

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

  .img-box {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
  }

  .img-shadow-box {
    position: absolute;
    width: 100%;
    height: 100%;

    background: linear-gradient(
      180deg,
      rgba(217, 217, 217, 0) 0%,
      rgba(91, 91, 91, 0.44) 0.01%,
      rgba(217, 217, 217, 0) 24.48%,
      rgba(199, 199, 199, 0.0321505) 76.56%,
      rgba(91, 91, 91, 0.31) 100%
    );
  }

  .contract-type-box {
    position: absolute;

    display: flex;
    justify-content: center;
    align-items: center;

    bottom: 0;
    left: 0;
    width: 94px;
    height: 33px;
    background: #ffffff;
    border-radius: 0px 15px 0px 0px;

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

const BtnBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;

  margin: 32px 0 0 19px;
`;

const RemoveBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 107px;
  height: 37px;
  background: #ff7575;
  border-radius: 4px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;

  img {
    width: 9px;
    margin-left: 5px;
  }
`;

const SummaryBtn = styled.div`
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 119px;
  height: 37px;
  background: linear-gradient(94.02deg, #4880ee 5.7%, #b093ee 100%);
  border-radius: 4px;

  font-family: "Noto Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;

  img {
    width: 5px;
    margin-left: 5px;
  }
`;
