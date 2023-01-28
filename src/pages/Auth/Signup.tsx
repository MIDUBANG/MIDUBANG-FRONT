/* 회원가입 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";
// component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import greencheck from "@assets/icon/greencheck.svg";
import logoperson from "@assets/illustration/logo&person.png";
import { FontTitle, FontDescribed } from "@style/font.style";
import AuthInput from "@components/Input/AuthInput";
import LongBtn from "@components/Buttons/LongBtn";
// hooks
import useInput from "@hooks/useInput";

const Signup = () => {
  const [email, setEmail] = useInput("");
  const [pw, setPw] = useInput("");
  const [checkPw, setCheckPw] = useInput("");

  // 회원가입
  // response 뭐임?
  const handleSignUp = () => {
    axios.post("http://{{ip}}:8080/member/signup", {
      email: email,
      password: pw,
    });
  };

  // 로그인 연장 (토큰 재발급)
  // Authorization이라는 이름 맞는지?

  const handleRefresh = () => {
    const refreshToken = "refresh";

    axios.put("http://{{ip}}:8080/api/member/refresh/gy5027@naver.com?=", {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });
  };

  // response
  //   {
  //     "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJneTUwMjdAbmF2ZXIuY29tIiwiZXhwIjoxNjc0ODkxNzkxLCJpZCI6MSwiZW1haWwiOiJneTUwMjdAbmF2ZXIuY29tIn0.omreDGCPOXYLiUZRYeIFvLv49Frob3gC1N6UIsyLu1ce0kLWjjOvTPabTJYSvdQbGmfSyCQL0VDguXQbSCnkBg",
  //     "refreshToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJneTUwMjdAbmF2ZXIuY29tIiwiZXhwIjoxNjc0OTMwODQwLCJpZCI6MSwiZW1haWwiOiJneTUwMjdAbmF2ZXIuY29tIn0.nf5EzyGGow_Fys3afspV9XR1FphqXrOWAzgTb-_QPwGE6Kf5EbFMxf5_ZD7igHTAlhcbn_tdzEl1-GK-pGB_rQ"
  // }

  /* 예시
  export const refreshHttp = axios.create({
    baseURL: API_END_POINT,
    timeout: 180000,
    withCredentials: false,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`
    }
  });

  accessClient.interceptors.request.use(function (config) {
    const token = localStorage.getItem(ACCESS_TOKEN);
    config.headers.Authorization = "Bearer " + token;
  
    return config;
  });
  */

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
          <Check src={greencheck} />
        </Box>

        <LongBtn
          text="회원가입"
          color="--aurora"
          activeColor="--aurora-shadow"
          onClick={handleSignUp}
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
