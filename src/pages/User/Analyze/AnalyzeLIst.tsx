import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { DeleteAnalyze } from "@api/analyze";
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

  const _handleDeleteAnalyze = () => {
    console.log("분석 삭제");
  };

  useEffect(() => {}, []);

  return (
    <Div>
      <SimpleNavBar text="단어장" />

      <Container>
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
