import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { GetAnalyzeList, GetAnalyze, DeleteAnalyze } from "@api/analyze";
import { useCookies } from "react-cookie";
// asset
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import { resultsType } from "@assets/types";

const AnalyzeList = () => {
  const [results, setResults] = useState<resultsType[]>([]);

  const navigate = useNavigate();

  /** 분석 기록 리스트 */
  const _handleGetAnalyzeList = async () => {
    const res = await GetAnalyzeList(cookies.refreshToken, onCookie);
    setResults(res.recordList);
    console.log("분석 리스트", res);
  };

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  /**분석 개별 페이지로 이동 */
  const _handleClickAnalyze = (id: number) => {
    navigate(`/analyze/${id}`);
  };

  // answer_commission: 0;
  // commission: 0;
  // contract_type: "JEONSE";
  // image_url: "https://tempimgurl";
  // is_expensive: false;
  // record_date: "2023-02-20";
  // record_id: 308;

  useEffect(() => {
    _handleGetAnalyzeList();
  }, []);

  return (
    <Div>
      <SimpleNavBar text="분석 목록" />

      <Container>
        {results.map((result) => (
          <AnalyzeBox onClick={() => _handleClickAnalyze(result.record_id)}>
            <p>{result.record_date}</p>
            <p>{result.contract_type}</p>
            <p>{result.record_id} 번호</p>
          </AnalyzeBox>
        ))}
      </Container>
    </Div>
  );
};
export default AnalyzeList;

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
