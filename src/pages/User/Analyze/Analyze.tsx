import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { GetAnalyzeList, GetAnalyze, DeleteAnalyze } from "@api/analyze";
import { useCookies } from "react-cookie";
// asset
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import { resultsType } from "@assets/types";
import { CasesType, WordsType } from "@assets/types";
const Analyze = () => {
  const navigate = useNavigate();

  const [results, setResults] = useState<resultsType>();
  const [cases, setCases] = useState<CasesType[]>([]);
  const [words, setWords] = useState<WordsType[]>([]);

  const { id } = useParams() as { id: string };
  const record_id = parseInt(id);

  useEffect(() => {
    _handleGetAnalyze();
  }, []);

  /** 분석 기록 개별 */
  const _handleGetAnalyze = async () => {
    const res = await GetAnalyze(record_id, cookies.refreshToken, onCookie);
    setResults(res.record);
    setCases(res.myCaseDto);
    setWords(res.simpleWordDtos);
    console.log("개별 분석", res);
  };

  /** 삭제 */
  const _handleDeleteAnalyze = async () => {
    const res = await DeleteAnalyze(record_id, cookies.refreshToken, onCookie);
    console.log("분석 삭제", res);
    navigate(-1);
  };

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  // answer_commission: 0;
  // commission: 0;
  // contract_type: "JEONSE";
  // image_url: "https://tempimgurl";
  // is_expensive: false;
  // record_date: "2023-02-20";
  // record_id: 308;

  return (
    <Div>
      <SimpleNavBar text="분석 목록" />

      <Container>
        <p onClick={_handleDeleteAnalyze}>삭제</p>
      </Container>
      <p>정말 삭제하시겠습니까?</p>
    </Div>
  );
};
export default Analyze;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AnalyzeBox = styled.div`
  border: 1px solid red;
  margin-bottom: 10px;
`;
