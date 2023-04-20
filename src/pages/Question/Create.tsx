// lib
import React, { useEffect, useState } from "react";
import { useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { useParams } from "react-router-dom";
//component
import MainNavBar from "@components/NavBar/MainNavBar";
import QuestionBox from "@components/Question/QuestionBox";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import dino1 from "@assets/question/dino1.png";
import deleteicon from "@assets/question/delete.png";
import profile from "@assets/question/user.png";
import send from "@assets/question/send.png";

const Create = () => {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = useCallback(() => {
    if (textRef.current) {
      // null일때는 실행안되게 오류 수정
      textRef.current.style.height = textRef.current.scrollHeight + "px";
    }
  }, []);

  const naviate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <Div>
      <SimpleNavBar text="챗쪽이 질문 작성하기" />

      <Container>
        <TitleBox>
          <input
            placeholder="제목"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </TitleBox>
        <ContentBox>
          <textarea
            ref={textRef}
            onInput={handleResizeHeight}
            placeholder="질문을 작성해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </ContentBox>
      </Container>
    </Div>
  );
};

export default Create;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 65px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 26px 32px 12px 32px;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 36px;
  margin-bottom: 12px;
  border-bottom: 1px solid rgba(217, 217, 217, 0.5);

  input {
    background-color: transparent;
    border: none;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 350;
    font-size: 13px;
    color: #616161;
  }
`;

const ContentBox = styled.div`
  width: 100%;
  height: auto;
  min-height: 234px;
  margin-bottom: 24px;
  border-bottom: 1px solid rgba(217, 217, 217, 0.5);

  textarea {
    width: 100%;
    height: 100%;

    background-color: transparent;
    border: none;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 350;
    font-size: 13px;
    color: #616161;

    &:focus {
      outline: none;
    }
  }
`;
