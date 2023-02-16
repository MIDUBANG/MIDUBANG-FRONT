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

  const _test = () => {
    console.log("요청");

    const data = {
      contents: [
        "입주 후 생긴 하자는 세입자가 수리한다.",
        "반려동물을 키우지 않는다. 금지",
        "문장1",
        "문장1",
      ],
      extraInfo: {
        monthly: true,
        lumpSumMoney: 0,
        commission: 300000,
        deposit: 300,
        monthlyMoney: 0,
        pet: true,
        loan: true,
        substitute: true,
      },
    };

    fetch("http://34.64.177.249:5000/api/nlp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application / json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.table("분석 결과", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Div>
      <SimpleNavBar text="분석 목록" />

      <Container>
        <button onClick={_test}>nlp 테스트 </button>
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
