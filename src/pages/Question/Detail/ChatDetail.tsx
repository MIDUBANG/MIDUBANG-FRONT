// lib
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
//component
import MainNavBar from "@components/NavBar/MainNavBar";
import QuestionBox from "@components/Question/GoldQuestionBox";
// asset
import dino1 from "@assets/question/dino1.png";
import deleteicon from "@assets/question/delete.png";
import profile from "@assets/question/user.png";
import send from "@assets/question/send.png";
// api
import {
  GetChatPost,
  PostChatComment,
  DeleteChatComment,
} from "@api/community";
import { GetUserInfo } from "@api/auth";

// type
import { ChatComment, ChatQuestionDetailType } from "@assets/types";

const ChatDetail = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const { id } = useParams();

  const [currenUser, setCurrenUser] = useState();
  const [post, setPost] = useState<ChatQuestionDetailType>();
  const [comments, setCommnets] = useState<ChatComment[]>();
  const [newComment, setNewComment] = useState<string>("");

  /** 유저 정보 가져오기 */
  const _handleGetUserInfo = async () => {
    const res = await GetUserInfo(cookies.refreshToken, onCookie);
    console.log("내정보", res);
    setCurrenUser(res.email);
  };

  /** 챗쪽이 글 불러오기 */
  const _handleGetChatPost = async () => {
    const postId = parseInt(id || "1");
    const res = await GetChatPost(postId, cookies.refreshToken, onCookie);

    setPost(res.data);
    setCommnets(res.data.answers);

    console.log(res);
  };

  /** 챗쪽이 글에 댓글 남기기  */
  const _handleSubmitChatComment = async () => {
    if (newComment !== "") {
      const postId = parseInt(id || "1");
      const res = await PostChatComment(
        postId,
        newComment,
        cookies.refreshToken,
        onCookie
      );

      console.log("댓글 결과 : ", res);
      _handleGetChatPost();
    } else {
      alert("댓글을 작성해주세요");
    }
  };

  /** 댓글 삭제하기*/
  const _handleDeleteChatComment = async (answerId: number) => {
    const res = await DeleteChatComment(
      answerId,
      cookies.refreshToken,
      onCookie
    );

    _handleGetChatPost(); // 글 다시 불러오기
  };

  useEffect(() => {
    _handleGetUserInfo();
    _handleGetChatPost();
  }, []);
  return (
    <Div>
      <MainNavBar text="챗쪽이가 대신 질문" />

      <Container>
        <PostContainer>
          <div className="top-content-box">
            <div className="profile">
              <img src={dino1} width={27} height={29} />
            </div>

            <div>
              <Text size="11px" weight="300" margin="2px 0 0 0" color="#8A8A8A">
                챗쪽이
              </Text>

              <Text size="16px" weight="500" margin="5px 0 0 0">
                {post?.question}
              </Text>
            </div>
          </div>

          <Text
            size="11px"
            weight="300"
            color="#8A8A8A"
            margin="0 19px 16px auto"
            style={{ textAlign: "right" }}
          >
            {post?.createdDate}
          </Text>
        </PostContainer>
        <Hr></Hr>
        <CommentContainer>
          {comments?.map((c) => (
            <Comment>
              <div className="top-content-box">
                <img src={profile} width={26} height={26} />
                <Text size="14px" weight="500" margin="0 auto 0 14px">
                  {c.writer.split("@")[0]}
                </Text>

                {currenUser === c.writer && (
                  <div className="delete-icon">
                    <img
                      src={deleteicon}
                      width={9}
                      height={11}
                      onClick={() => _handleDeleteChatComment(c.commentId)}
                    />
                  </div>
                )}
              </div>

              <div>
                <Text
                  size="12px"
                  weight="400"
                  margin="13px 0 0 0"
                  color="#8C8C8C"
                  height="20px"
                >
                  {c.comment}
                </Text>

                <Text
                  size="11px"
                  weight="300"
                  margin="3px 10px 9px 0"
                  color="#8C8C8C"
                  style={{ textAlign: "right" }}
                >
                  {c.createdDate}
                </Text>
              </div>
            </Comment>
          ))}
        </CommentContainer>
      </Container>
      <CommentInputBox>
        <div className="input-box">
          <input
            placeholder="댓글을 입력해주세요"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <div className="send-btn" onClick={_handleSubmitChatComment}>
            <img src={send} width={23} height={23} />
          </div>
        </div>
      </CommentInputBox>
    </Div>
  );
};

export default ChatDetail;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 65px;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  padding-bottom: 70px;

  box-sizing: border-box;

  background: #ffffff;
  border-radius: 44px 44px 0 0;
`;

const Hr = styled.div`
  width: 100%;
  height: 7px;
  background: rgba(217, 217, 217, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.07);
`;

const PostContainer = styled.div`
  width: 100%;
  height: auto;

  .top-content-box {
    display: flex;
    justify-content: start;

    margin: 25px 0 14px 25px;
  }

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #f0f0f0;
    border-radius: 23.5px;

    margin-right: 16px;
  }
`;

const CommentContainer = styled.div`
  width: 100%;
  height: auto;

  padding-top: 25px;
`;

const CommentInputBox = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;

  position: fixed;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  .input-box {
    width: 90%;
    height: 39px;
    background: #f1f1f1;
    border-radius: 19.5px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    input {
      background-color: transparent;
      border: none;

      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      color: #8c8c8c;

      margin-left: 27px;

      width: 75vw;

      &:focus {
        outline: none;
      }
    }
  }

  .send-btn {
    margin-right: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    border-radius: 16px;

    &:active {
      background: #e9e5f8;
    }

    img {
      transform: translate(-2px, 2px);
    }
  }
`;

const Text = styled.p<{
  size?: string;
  margin?: string;
  weight?: string;
  color?: string | "#000000";
  height?: string;
}>`
  font-family: "Noto Sans KR";
  font-style: normal;

  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  line-height: ${(props) => props.height};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
`;

const Comment = styled.div`
  border-bottom: 1px solid rgba(207, 207, 207, 0.5);
  margin: 0 25px 13px 25px;

  .top-content-box {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  .delete-icon {
    margin: 0 10px 0 0;
    width: 17px;
    height: 17px;
    background: #f2f3f7;
    border-radius: 3px;

    display: flex;
    justify-content: center;
    align-items: center;
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
