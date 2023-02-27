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
        {results.map((result) => {
          let date =
            result.record_date.substring(5, 10).replace("-", "월 ") + "일";
          let contractType = "";
          if (result.contract_type === "JEONSE") {
            contractType = "전세";
          } else if (result.contract_type === "HALF_JEONSE") {
            contractType = "반전세";
          } else {
            contractType = "월세";
          }

          return (
            <AnalyzeBox onClick={() => _handleClickAnalyze(result.record_id)}>
              <p className="title">{contractType} 분석</p>
              <p className="date">{date}</p>
            </AnalyzeBox>
          );
        })}
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
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 331px;
  height: auto;
  background: #f4f5f7;
  border-radius: 5px;

  margin: 10px auto 0 auto;
  padding: 20px;

  .title {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
  }

  .date {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 350;
    font-size: 14px;
    line-height: 20px;

    color: rgba(0, 0, 0, 0.5);
  }
`;
