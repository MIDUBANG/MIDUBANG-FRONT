// lib
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset

const QuestionList = () => {
  const naviate = useNavigate();

  return (
    <Div>
      <SimpleNavBar text="금쪽이" direction="up" />

      <Container>
        <Title>금쪽이 페이지</Title>
      </Container>
    </Div>
  );
};

export default QuestionList;

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
  padding-bottom: 50px;

  box-sizing: border-box;
`;

const Title = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 29px;

  span {
    color: #5a73fc;
  }
`;
