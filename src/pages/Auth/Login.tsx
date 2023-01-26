/* 회원가입 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";

import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import logoperson from "@assets/illustration/logo&person.png";

import AuthInput from "@components/Input/AuthInput";
import LongBtn from "@components/Buttons/LongBtn";
import KakaoBtn from "@components/Buttons/KakaoBtn";

import useInput from "@hooks/useInput";
const Login = () => {
  const [email, setEmail] = useInput("");
  const [pw, setPw] = useInput("");

  return (
    <Div>
      <SimpleNavBar text="회원 가입" />
      <Container>
        <Illurstration src={logoperson} />
        <AuthInput placeholder="이메일" value={email} onChange={setEmail} />
        <AuthInput placeholder="비밀번호" value={pw} onChange={setPw} />

        <div className="box"></div>
        <LongBtn text="로그인" color="--aurora" activeColor="--aurora-shadow" />

        <KakaoBtn />
        <p className="description">
          아직 계정이 없나요? <span>회원가입</span>
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
