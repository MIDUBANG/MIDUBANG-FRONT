/* 회원가입 페이지 */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "@emotion/styled";
// componnet
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import AuthInput from "@components/Input/AuthInput";
import LongBtn from "@components/Buttons/LongBtn";
import KakaoBtn from "@components/Buttons/KakaoBtn";
// asset
import logoperson from "@assets/illustration/logo&person.png";
// hooks/utils
import useInput from "@hooks/useInput";
import { LoginApi } from "@api/auth";
import { useCookies } from "react-cookie";

const Login = () => {
  const navigate = useNavigate();

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/KakaoLogin";

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const [email, setEmail] = useInput("");
  const [pw, setPw] = useInput("");

  const handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const onNavigate = () => {
    navigate("/");
  };

  const [cookies, setCookie] = useCookies(["refreshToken"]);

  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  /**일반 로그인 */
  const _handleLogin = () => {
    console.log("왜안돼");
    LoginApi(email, pw, onNavigate, onCookie);
  };

  return (
    <Div>
      <SimpleNavBar text="회원 가입" />
      <Container>
        <Illurstration src={logoperson} />
        <AuthInput placeholder="이메일" value={email} onChange={setEmail} />
        <AuthInput placeholder="비밀번호" value={pw} onChange={setPw} />

        <div className="box"></div>
        <LongBtn
          onClick={_handleLogin}
          text="로그인"
          color="--aurora"
          activeColor="--aurora-shadow"
        />

        <KakaoBtn onClick={handleKakaoLogin} />

        <p className="description">
          아직 계정이 없나요?{" "}
          <span onClick={() => navigate("/signup")}>회원가입</span>
        </p>
      </Container>
    </Div>
  );
};

export default Login;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Illurstration = styled.img`
  margin-top: 60px;
  margin-bottom: 40px;
  width: 178px;
  height: 151px;
`;

const Container = styled.div`
  text-align: center;
  padding: 0 41px 0 41px;

  .description {
    margin-top: 29px;

    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 17px;
    color: #7d7d7d;
  }

  span {
    text-decoration-line: underline;
    margin-left: 5px;
  }

  .box {
    height: 60px;
  }
`;
