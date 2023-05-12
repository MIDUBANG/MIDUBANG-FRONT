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
import lockIllustration from "@assets/illustration/lock.png";
// hooks/utils
import useInput from "@hooks/useInput";
import { LoginApi } from "@api/auth";
import { useCookies } from "react-cookie";
import { CLIENT_MAIN_URL } from "@api/common/url";

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["refreshToken"]);

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;

  const REDIRECT_URI = `${CLIENT_MAIN_URL}KakaoLogin`;

  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const [email, setEmail] = useInput("");
  const [pw, setPw] = useInput("");

  const _handleKakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  /**access, refresh 토큰 저장 */
  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  /**일반 로그인  */
  const _handleLogin = () => {
    LoginApi(email, pw, onCookie);
  };

  return (
    <Div>
      <SimpleNavBar text="로그인" />
      <Container>
        <Illurstration src={lockIllustration} />
        <form onSubmit={_handleLogin}>
          <AuthInput placeholder="이메일" value={email} onChange={setEmail} />
          <AuthInput placeholder="비밀번호" value={pw} onChange={setPw} />
        </form>

        <div className="box"></div>
        <LongBtn
          onClick={_handleLogin}
          text="로그인"
          color="--aurora"
          activeColor="--aurora-shadow"
        />

        <KakaoBtn onClick={_handleKakaoLogin} />

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
  padding-top: 69px;
`;

const Illurstration = styled.img`
  margin-top: 15px;
  margin-bottom: 40px;
  width: 255px;
  height: auto;
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
