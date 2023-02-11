/* 회원가입 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
// component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import greencheck from "@assets/icon/greencheck.svg";
import graycheck from "@assets/icon/graycheck.svg";
import logoperson from "@assets/illustration/logo&person.png";
import { FontTitle, FontDescribed } from "@style/font.style";
import AuthInput from "@components/Input/AuthInput";
import LongBtn from "@components/Buttons/LongBtn";
// hooks
import useInput from "@hooks/useInput";

import { SignUpApi, RefreshApi } from "@api/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const [email, setEmail] = useInput("");
  const [pw, setPw] = useInput("");
  const [checkPw, setCheckPw] = useInput("");

  const onCookie = (res: any) => {
    console.log("쿠키", res);
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  /**회원가입 */
  const _handleSignUp = () => {
    SignUpApi(email, pw, onCookie);
    navigate("/");
  };

  /** 토큰 연장 */
  const _handleRefresh = () => {
    RefreshApi(cookies.refreshToken, onCookie);
  };

  return (
    <Div>
      <SimpleNavBar text="회원 가입" />
      <Container>
        <Illurstration src={logoperson} />
        <AuthInput placeholder="이메일" value={email} onChange={setEmail} />
        <AuthInput placeholder="비밀번호" value={pw} onChange={setPw} />
        <Box>
          <AuthInput
            placeholder="비밀번호 확인"
            value={checkPw}
            onChange={setCheckPw}
          />
          {pw === checkPw && checkPw != "" ? (
            <Check src={greencheck} />
          ) : (
            <Check src={graycheck} />
          )}
        </Box>

        <LongBtn
          text="회원가입"
          color="--aurora"
          activeColor="--aurora-shadow"
          onClick={_handleSignUp}
        />

        <LongBtn
          text="로그인 연장 임시 버튼"
          color="--aurora"
          activeColor="--aurora-shadow"
          onClick={_handleRefresh}
        />

        <p className="description">
          이미 계정이 있나요? <span>로그인</span>
        </p>
      </Container>
    </Div>
  );
};

export default Signup;

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

const Check = styled.img`
  margin-left: 14px;
  margin-right: 9px;
  margin-bottom: 20px;
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
`;

const Box = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
`;
