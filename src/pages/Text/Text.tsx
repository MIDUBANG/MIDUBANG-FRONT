// lib
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import UnderstandBtn from "@components/Buttons/UnderstandBtn";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import text from "@assets/text/text.png";
import illust from "@assets/text/illustration.png";

const Text = () => {
  const naviate = useNavigate();
  const _onClickToChating = () => {
    naviate("chat");
  };
  return (
    <Div>
      <SimpleNavBar text="문자 마법사" direction="up" />

      <Container>
        <BlueText margin="36px 0 6px 0">믿어방 문자 마법사</BlueText>
        <Title>문자 보낼 때 고민됐다면</Title>
        <Title>
          chatGPT가 <span>문자</span> 대신 써드립니다!
        </Title>

        <Img src={illust} />

        <DesText margin="">
          자취를 하다보면 주변인에게 문자를 보낼 일이 많습니다. 그럴 때 문자를
          작성하는 것이 막막하지 않나요?
        </DesText>

        <DesText margin="20px 0 10px 0">
          다음 3가지만 작성해주시면 OpenAI의 chatGPT가 요구사항에 따라 문자를
          작성해드려요.
        </DesText>

        <BlueTextBox>
          <div>
            <BlueText margin="0 16px 0 0">
              <Dot />
              <p>수신인</p>
            </BlueText>
            <BlueText margin="5px 16px 0 0">
              <Dot /> <p>문자 보내는 목적</p>
            </BlueText>
          </div>

          <div>
            <BlueText margin="0 16px 0 0">
              <Dot /> <p>추가적인 상황</p>
            </BlueText>
            <BlueText margin="5px 16px 0 0">
              <Dot /> <p>어조 (말투)</p>
            </BlueText>
          </div>
        </BlueTextBox>

        <BlueBtn onClick={_onClickToChating}>시작하기</BlueBtn>
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
  padding-bottom: 10px;

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

const Img = styled.img`
  width: auto;
  height: 20vh;

  margin: 10% 0 10% auto;
`;

const BlueTextBox = styled.div`
  display: flex;
  margin-top: 12px;
  margin-bottom: 50px;
`;
const BlueText = styled.div<{ margin: string }>`
  display: flex;
  align-content: center;

  margin: ${props => props.margin};

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: #5a73fc;
`;

const Dot = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: #5a73fc;

  margin: auto 5px auto 0;
`;

const DesText = styled.p<{ margin: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  color: #7d7d7d;

  margin: ${props => props.margin};
  span {
    font-weight: 500;
  }
`;

const BlueBtn = styled.div`
  margin-top: auto;

  margin-bottom: 20px;

  width: 100%;
  height: 40px;
  min-height: 40px;
  background: #5a73fc;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #fcfcfc;
`;
