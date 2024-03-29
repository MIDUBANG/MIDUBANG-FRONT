// lib
import { useState } from "react";
import { useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useCookies } from "react-cookie";
//component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// api
import { PostGoldPost } from "@api/community";

const Create = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const onCookie = (res: any) => {
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const textRef = useRef<HTMLTextAreaElement>(null);

  // 텍스트 박스 높이 조절
  const handleResizeHeight = useCallback(() => {
    if (textRef.current) {
      // null일때는 실행안되게 오류 수정
      textRef.current.style.height = textRef.current.scrollHeight + "px";
    }
  }, []);

  const naviate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  /** 금쪽이 글 작성하기  */
  const _handlePostGoldPost = async () => {
    let question = title;
    let detail = content;

    const res = await PostGoldPost(
      question,
      detail,
      cookies.refreshToken,
      onCookie,
    );

    naviate(`/question/gold/${res.id}`);
  };

  const _handleSubmitGoldPost = () => {
    // 유효성 검사
    if (title !== "" && content !== "") {
      _handlePostGoldPost(); // 업로드
    } else {
      alert("모두 작성해주세요");
    }
  };
  return (
    <Div>
      <SimpleNavBar text="챗쪽이 질문 작성하기" />

      <Container>
        <TitleBox>
          <input
            placeholder="제목"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </TitleBox>
        <ContentBox>
          <textarea
            ref={textRef}
            onInput={handleResizeHeight}
            placeholder="질문을 작성해주세요"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </ContentBox>

        <BtnBox>
          <Btn background="#F2F3F7" color="#707070">
            취소
          </Btn>
          <Btn
            background="#5A73FC"
            color="#FFFFFF"
            onClick={_handleSubmitGoldPost}
          >
            작성하기
          </Btn>
        </BtnBox>
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

    width: 100%;

    &:focus {
      outline: none;
    }
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
    resize: none;

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

const BtnBox = styled.div`
  display: flex;
  justify-content: end;
`;
const Btn = styled.div<{ background: string; color: string }>`
  width: 122px;
  height: 41px;
  border-radius: 6px;
  margin-left: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 13px;
  line-height: 19px;
  text-align: center;

  background: ${props => props.background};
  color: ${props => props.color};
`;
