// lib
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import "react-circular-progressbar/dist/styles.css";
//component
import MainNavBar from "@components/NavBar/MainNavBar";
import QuestionBox from "@components/Question/QuestionBox";
// asset
import card1 from "@assets/question/card1.png";
import write from "@assets/question/write.svg";
import rightArrow from "@assets/question/rightArrow.png";

const List = () => {
  const naviate = useNavigate();

  const backgroundArray = [
    "linear-gradient(30.18deg,#5a73fc 57.1%,rgba(83, 108, 249, 0.853858) 84.35%, rgba(74, 100, 245, 0.66486) 99.99%,rgba(74, 100, 245, 0) 100%);",
    "linear-gradient(259.16deg, #5B8BF7 49.62%, rgba(81, 120, 251, 0.777732) 81.88%, rgba(68, 96, 255, 0.51) 91.14%);box-shadow: 0px 20px 50px 4px rgba(0, 0, 0, 0.25);",
  ];

  const questions = [
    {
      author: "챗쪽이",
      title: "보증금 할부 되나영",
      content: "",
      commentCount: 3,
    },
    {
      author: "챗쪽이",
      title: "보증금 할부 되나영",
      content: "",
      commentCount: 3,
    },
    {
      author: "dy6578",
      title: "자취하면 보통 식비 얼마나오나여",
      content: "자취는 처음이라 식비가 감이 안와요ㅠ",
      commentCount: 20,
    },
    {
      author: "챗쪽이",
      title: "보증금 할부 되나영",
      content: "",
      commentCount: 3,
    },
    {
      author: "챗쪽이",
      title: "보증금 할부 되나영",
      content: "",
      commentCount: 3,
    },
    {
      author: "dy6578",
      title: "자취하면 보통 식비 얼마나오나여",
      content: "자취는 처음이라 식비가 감이 안와요ㅠ",
      commentCount: 20,
    },
  ];

  const [filter, setFilter] = useState("챗쪽이");

  const [btnsArr, setBtnArr] = useState([
    { text: "챗쪽이", active: true },
    { text: "금쪽이", active: false },
  ]);

  const ToggleBtn = (text: string) => {
    setFilter(text); // 필터링

    setBtnArr(
      btnsArr.map((b) =>
        b.text == text ? { ...b, active: true } : { ...b, active: false }
      )
    );
  };

  return (
    <Div>
      <MainNavBar text="챗쪽이가 대신 질문" />

      <Container>
        <Text size="big" margin="25px 0 7px 0">
          사소한 부동산 질문
        </Text>
        <Text margin="0 0 19px 0">부동산 궁금한거 다 물어봐!</Text>

        <BtnContainer>
          {btnsArr.map((btn) => (
            <Btn active={btn.active} onClick={() => ToggleBtn(btn.text)}>
              {btn.text}
            </Btn>
          ))}

          <div className="control"></div>
        </BtnContainer>

        <div>
          {questions.map((question) => {
            if (filter === "챗쪽이") {
              if (question.author === "챗쪽이") {
                return <QuestionBox question={question} />;
              }
            } else {
              if (question.author !== "챗쪽이") {
                return <QuestionBox question={question} />;
              }
            }
          })}
        </div>
      </Container>
    </Div>
  );
};

export default List;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  padding: 24px;

  box-sizing: border-box;

  background: #ffffff;
  border-radius: 44px 44px 0 0;
`;

const Text = styled.p<{ size?: string; margin?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: ${(props) => (props.size === "big" ? "500" : "400")};
  font-size: ${(props) => (props.size === "big" ? "24px" : "14px")};
  color: #000000;
  margin: ${(props) => props.margin};
`;

const BtnContainer = styled.div`
  display: flex;

  margin-bottom: 25px;

  .control {
    width: 29px;
    height: 29px;
    background: #f2f3f7;
    border-radius: 7px;

    margin-left: auto;
  }
`;

const Btn = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 107px;
  height: 29px;

  margin-right: 10px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: center;

  border-radius: 9px;

  ${(props) =>
    props.active
      ? css`
  color: #ffffff;
  background: #5a73fc;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  ";`
      : css`
          color: #707070;
          background: #f2f3f7;
        `};
`;
