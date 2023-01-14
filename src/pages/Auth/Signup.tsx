/* 회원가입 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";

import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import logoperson from "@assets/illustration/logo&person.png";
import personAuth from "@assets/icon/personAuth.svg";
import greencheck from "@assets/icon/greencheck.svg";

import { FontTitle, FontDescribed } from "@style/font.style";

const Signup = () => {
  return (
    <Div>
      <SimpleNavBar text="회원 가입" />
      <Container>
        <img src={logoperson} />
        <InputBox>
          <img src={personAuth} />
          <input placeholder="이메일" />
        </InputBox>
        <Test>
          <InputBox>
            <img src={personAuth} />
            <input placeholder="이메일" />
          </InputBox>
          <Check src={greencheck} />
        </Test>
      </Container>
    </Div>
  );
};

export default Signup;

const Check = styled.img`
  margin-left: 14px;
  margin-right: 9px;
`;

const Test = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  padding: 0 41px 0 41px;
`;

const InputBox = styled.div`
  height: 41px;
  width: 100%;
  background: #f9f9f9;
  border-radius: 8px;

  display: flex;
  align-items: center;

  img {
    width: 22px;
    height: 22px;
    margin-left: 12px;
    margin-right: 15px;
  }
  input {
    border: none;
    background-color: transparent;

    &:focus {
      outline: none;
    }

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;

    color: #7d7d7d;
  }
`;
