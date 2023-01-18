/* 회원가입 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";

import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import greencheck from "@assets/icon/greencheck.svg";
import logoperson from "@assets/illustration/logo&person.png";

import { FontTitle, FontDescribed } from "@style/font.style";

import AuthInput from "@components/Input/AuthInput";
import LongBtn from "@components/Buttons/LongBtn";
import KakaoBtn from "@components/Buttons/KakaoBtn";
const Signup = () => {
  return (
    <Div>
      <SimpleNavBar text="회원 가입" />
      <Container>
        <Illurstration src={logoperson} />
        <AuthInput placeholder="이메일" />
        <AuthInput placeholder="비밀번호" />
        <Box>
          <AuthInput placeholder="비밀번호 확인" />
          <Check src={greencheck} />
        </Box>

        <LongBtn
          text="회원가입"
          color="--aurora"
          activeColor="--aurora-shadow"
        />
        <KakaoBtn />

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
  }
`;

const Box = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: space-between;
`;
