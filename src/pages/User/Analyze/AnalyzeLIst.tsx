import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { GetAnalyzeList, GetAnalyze, DeleteAnalyze } from "@api/analyze";
import { useCookies } from "react-cookie";

// componnet
import SimpleNavBar from "@components/NavBar/SimpleNavBar";

const AnalyzeList = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const navigate = useNavigate();

  const _handleGetAnalyzeList = async () => {
    const res = await GetAnalyzeList(cookies.refreshToken, onCookie);

    console.log("분석 리스트", res);
  };

  const _handleGetAnalyze = async () => {
    const res = await GetAnalyze(37, cookies.refreshToken, onCookie);

    console.log("개별 분석", res);
  };

  const _handleDeleteAnalyze = async () => {
    const res = await DeleteAnalyze(37, cookies.refreshToken, onCookie);

    console.log("분석 삭제", res);
  };

  useEffect(() => {}, []);

  return (
    <Div>
      <SimpleNavBar text="분석 목록" />

      <Container>
        <button onClick={_handleGetAnalyzeList}>리스트불러오기</button>
        <button onClick={_handleGetAnalyze}>개별 불러오기</button>
        <button onClick={_handleDeleteAnalyze}>삭제</button>
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
