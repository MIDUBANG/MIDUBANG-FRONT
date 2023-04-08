// lib
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import UnderstandBtn from "@components/Buttons/UnderstandBtn";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import text from "@assets/text/text.png";

const Text = () => {
  return (
    <Div>
      <SimpleNavBar text="문자 마법사" direction="up" />

      <Container>
        <Title>문자 보낼 때 고민됐다면</Title>
        <Title>chatGPT가 문자 대신 써드립니다!</Title>

        <img src={text} />

        <DesText>
          자취를 하다보면 주변인에게 문자를 보낼 일이 많습니다. 그럴 때 문자를
          작성하는 것이 막막하지 않나요? 다음 3가지만 작성해주시면 OpenAI의
          chatGPT가 요구사항에 따라 문자를 작성해드려요.
        </DesText>

        <Dot></Dot>
      </Container>
    </Div>
  );
};

export default Text;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 24px;
  padding-top: 65px;
  box-sizing: border-box;
`;

const Title = styled.p`
  /* margin: 23px auto 0 30px; */
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 38px;
  padding: 0;
`;

const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #5a73fc;
`;

const DesText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  color: #7d7d7d;

  span {
    font-weight: 500;
  }
`;
