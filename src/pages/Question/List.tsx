// lib
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useCookies } from "react-cookie";
//component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import GoldQuestionBox from "@components/Question/GoldQuestionBox";
import ChatQuestionBox from "@components/Question/ChatQuestionBox";

// asset
import pencil from "@assets/question/pencil.png";

// api
import { GetAllGoldPosts, GetAllChatPosts } from "@api/community";
// type
import { GoldQuestionType, ChatQuestionType } from "@assets/types";

const List = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const naviate = useNavigate();

  const [filter, setFilter] = useState("챗쪽이");

  const [btnsArr, setBtnArr] = useState([
    { text: "챗쪽이", active: true },
    { text: "금쪽이", active: false },
  ]);

  /** detail 페이지로 이동 */
  const _handleClicktoDetail = (category: string, id: number) => {
    if (category === "금쪽이") {
      naviate(`/question/gold/${id}`);
    } else {
      // 챗쪽이
      naviate(`/question/chat/${id}`);
    }
  };

  /** 모든 금쪽이 포스트 가져오기  */
  const _handleGetAllGoldPosts = async () => {
    const res = await GetAllGoldPosts(cookies.refreshToken, onCookie);
    setGoldQuestions(res.data);
    console.log(res);
  };

  /** 모든 챗쪽이 포스트 가져오기  */
  const _handleGetAllChatPosts = async () => {
    const res = await GetAllChatPosts(cookies.refreshToken, onCookie);
    setChatQuestions(res.data);
    console.log(res);
  };

  const [goldQuestions, setGoldQuestions] = useState<GoldQuestionType[]>();
  const [chatQuestions, setChatQuestions] = useState<ChatQuestionType[]>();

  /** 글쓰러 가기 버튼 */
  const _handleGotoCreate = () => {
    naviate("/question/create");
  };

  const ToggleBtn = (text: string) => {
    setFilter(text); // 필터링
    setBtnArr(
      btnsArr.map(b =>
        b.text == text ? { ...b, active: true } : { ...b, active: false },
      ),
    );
  };

  useEffect(() => {
    _handleGetAllGoldPosts(); // 포스트 금쪽이 리스트 가져오기
    _handleGetAllChatPosts(); // 챗쪽이 리스트
  }, []);

  return (
    <Div>
      <SimpleNavBar text="부동산 질문 게시판" />

      <Container>
        <Text size="big" margin="25px 0 7px 0">
          사소한 부동산 질문
        </Text>
        <Text margin="0 0 19px 0">부동산 궁금한거 다 물어봐!</Text>

        <BtnContainer>
          {btnsArr.map(btn => (
            <Btn active={btn.active} onClick={() => ToggleBtn(btn.text)}>
              {btn.text}
            </Btn>
          ))}
        </BtnContainer>

        <div>
          {goldQuestions?.map(question => {
            if (filter === "금쪽이") {
              return (
                <GoldQuestionBox
                  question={question}
                  onClick={() =>
                    _handleClicktoDetail("금쪽이", question.postId)
                  }
                />
              );
            }
          })}

          {chatQuestions?.map(question => {
            if (filter === "챗쪽이") {
              return (
                <ChatQuestionBox
                  question={question}
                  onClick={() =>
                    _handleClicktoDetail("챗쪽이", question.questionId)
                  }
                />
              );
            }
          })}
        </div>

        <WriteBtn onClick={_handleGotoCreate}>
          <img src={pencil} />
        </WriteBtn>
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
  font-weight: ${props => (props.size === "big" ? "500" : "400")};
  font-size: ${props => (props.size === "big" ? "24px" : "14px")};
  color: #000000;
  margin: ${props => props.margin};
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

  ${props =>
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

const WriteBtn = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 63px;
  height: 63px;
  border-radius: 50%;
  border: none;

  background: linear-gradient(94.02deg, #4880ee 5.7%, #b093ee 100%);
  box-shadow: -3px 4px 6px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 21px;
    height: 24px;
  }

  &:active {
    background: linear-gradient(94.02deg, #acc8fe 5.7%, #c3a6ff 100%);
  }
`;
