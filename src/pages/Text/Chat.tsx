// lib
import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
// hooks
import useInput from "@hooks/useInput";
//component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import send from "@assets/text/send.png";
import profile from "@assets/text/profile.png";
import spinner from "@assets/text/spinner.gif";
import copy from "@assets/text/copy.png";
import { userTextHistory } from "@assets/textData";
import { emotionData } from "@assets/emotionData";
// api
import { GetMessageMaker } from "@api/message";
import { handleCopyClipBoard } from "@api/clipBoard";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ConfirmModal } from "@components/Modal/CustomModal";
import { gptGuideStyle } from "@style/swalstyle";

const Chat = () => {
  useEffect(() => {
    ConfirmModal(gptGuideStyle);
  }, []);

  const testRef = useRef<HTMLImageElement | null>(null);
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  const userCurrentId = useRef(0);
  const assiCurrentId = useRef(0);

  const [result, setResult] = useState("");
  const [history, setHistory] = useState(userTextHistory);
  const [userInput, setUserInput, reset] = useInput("");

  const [userRender, setUserRender] = useState([false, false, false, false]);

  const [assiRender, setAssiRender] = useState([
    true,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  /** 말풍선 상태 업데이트 */
  const SendUserInput = (e: React.FormEvent<HTMLFormElement>) => {
    // 새로 방지
    e.preventDefault();

    if (!!userInput) {
      // 1. 유저 입력값 저장
      setUserBubble();

      // 2. 유저 버블 보여주기
      let copy = [...userRender];
      copy[userCurrentId.current] = true;
      setUserRender(copy);
      userCurrentId.current += 1;

      // 3. input 창 초기화
      reset();

      // // 4. 믿어방 다음 버블 보여주기

      setTimeout(() => {
        let copy = [...assiRender];
        copy[assiCurrentId.current] = true;
        setAssiRender(copy);
      }, 500);

      assiCurrentId.current += 1;
    }
  };

  /** 말풍선 안에 value 반영하기  */
  const setUserBubble = () => {
    // 1. userInput에 들어온 값을 userTextHistory에 반영
    setHistory(
      history.map(h =>
        h.id == userCurrentId.current
          ? { ...h, text: userInput, res: true }
          : h,
      ),
    );
  };

  // 어조 버튼들
  const [emotions, setEmotions] = useState(emotionData);

  /** 어조 고르기 버튼  */
  const _handlePickEmotionBtn = (id: number) => {
    setEmotions(
      emotions.map(e => (e.id === id ? { ...e, active: !e.active } : e)),
    );
  };

  /** 다 골랐어요 버튼 */
  const _handlePickEmotionDone = () => {
    // 버튼 결과를 history에 반영

    let pickedEmotions = emotions.filter(e => e.active);
    let newpickedEmotions = pickedEmotions.map(e => e.emotion);

    // 1. userInput에 들어온 값을 userTextHistory에 반영

    setHistory(
      history.map(h =>
        h.id == userCurrentId.current
          ? { ...h, text: newpickedEmotions.join(", "), res: true }
          : h,
      ),
    );

    // 버블 업데이트 해야해

    // 2. 유저 버블 보여주기
    let copy = [...userRender];
    copy[userCurrentId.current] = true;
    setUserRender(copy);
    userCurrentId.current += 1;

    // 3. input 창 초기화
    reset();

    // // 4. 믿어방 다음 버블 보여주기

    setTimeout(() => {
      let copy = [...assiRender];
      copy[assiCurrentId.current] = true;
      setAssiRender(copy);
    }, 500);

    assiCurrentId.current += 1;
  };

  /** 문자 작성 요청하기 */
  const FetchMessageMakerApi = async () => {
    const res = await GetMessageMaker(
      history[0].text,
      history[1].text,
      history[2].text,
      history[3].text,
    );

    setResult(res);

    // 로딩 버블 보여주기
    let copy = [...assiRender];
    copy[assiCurrentId.current] = true;
    setAssiRender(copy);

    // 1초 뒤 로딩 지우고 결과 보여주기
    setTimeout(() => {
      assiCurrentId.current += 1;
      let copy = [...assiRender];
      copy[assiCurrentId.current] = true;
      copy[assiCurrentId.current - 1] = false;
      setAssiRender(copy);
    }, 1000);
  };

  useEffect(() => {
    if (userCurrentId.current === 4) {
      FetchMessageMakerApi();
      userCurrentId.current = 100; // 재요청 오류 방지
    }
  }, [history[3]]);

  useEffect(() => {
    messageEndRef?.current?.scrollIntoView({ behavior: "smooth" });
  }, [userRender, assiRender]);

  return (
    <Div>
      <SimpleNavBar text="문자 마법사" direction="up" noTitle={true} />

      <Container>
        {assiRender[0] && (
          <LeftMessageBox>
            <ProfileImg src={profile} />
            <div>
              <LeftBubble>
                <p className="name">믿어방</p>
                <p>안녕하세요!</p>
                <p style={{ marginBottom: "15px" }}>
                  믿어방 <span>문자 마법사</span>입니다.
                </p>
                {/* <p style={{ marginBottom: "15px" }}>
                  원하는 문자를 대신 작성해드립니다!
                </p> */}
                <p>
                  몇가지 질문에 답해주시면 <span>문자 템플릿</span>을
                  만들어드리겠습니다.
                </p>
              </LeftBubble>

              <LeftBubble>
                <p className="name">믿어방</p>
                <p style={{ marginBottom: "15px" }}>
                  <span>누구</span>에게 보내는 문자인가요?
                </p>
                <p> ex) 집주인, 경비 아저씨, 공인중개사, 옆 집 이웃</p>
              </LeftBubble>
            </div>
          </LeftMessageBox>
        )}

        {userRender[0] && (
          <RightMessageBox>
            <RightBubble>{history[0].text}</RightBubble>
          </RightMessageBox>
        )}

        {assiRender[1] && (
          <LeftMessageBox>
            <ProfileImg src={profile} />
            <div>
              <LeftBubble>
                <p className="name">믿어방</p>
                <p style={{ marginBottom: "15px" }}>
                  문자를 보내는 <span>목적</span>을 알려주세요!
                </p>
                <p>
                  ex) 계약이 종료됐는데 집주인이 보증금을 돌려주지 않는다. 빨리
                  돌려달라고 말하고 싶다.
                </p>
              </LeftBubble>
            </div>
          </LeftMessageBox>
        )}

        {userRender[1] && (
          <RightMessageBox>
            <RightBubble>{history[1].text}</RightBubble>
          </RightMessageBox>
        )}

        {assiRender[2] && (
          <LeftMessageBox>
            <ProfileImg src={profile} />
            <div>
              <LeftBubble>
                <p className="name">믿어방</p>
                <p> 문자의 어조를 골라주세요! </p>
                <p style={{ marginBottom: "15px" }}>중복 선택도 가능합니다.</p>
                <p>마음에 드는 어조가 없나요? </p>
                <p>직접 작성해 알려주세요!</p>

                <DoneBtn onClick={_handlePickEmotionDone}>다 골랐어요</DoneBtn>
              </LeftBubble>

              <EmotionBtnBox>
                {emotions?.map(e => (
                  <EmotionBtn
                    active={e.active}
                    onClick={() => _handlePickEmotionBtn(e.id)}
                  >
                    {e.emogi}{" "}
                    <p className={e.active ? "active" : ""}>{e.emotion}</p>
                  </EmotionBtn>
                ))}
              </EmotionBtnBox>
            </div>
          </LeftMessageBox>
        )}

        {userRender[2] && (
          <RightMessageBox>
            <RightBubble>{history[2].text}</RightBubble>
          </RightMessageBox>
        )}

        {assiRender[3] && (
          <LeftMessageBox>
            <ProfileImg src={profile} />
            <div>
              <LeftBubble>
                <p className="name">믿어방</p>
                <p style={{ marginBottom: "15px" }}>
                  마지막이에요! <span>추가적인 상황 정보</span>가 있다면
                  입력해주세요!
                </p>
                <p>ex) 집주인이 연락을 잘 안 봄</p>
              </LeftBubble>
            </div>
          </LeftMessageBox>
        )}

        {userRender[3] && (
          <RightMessageBox>
            <RightBubble>{history[3].text}</RightBubble>
          </RightMessageBox>
        )}

        {assiRender[4] && (
          <LeftMessageBox>
            <ProfileImg src={profile} />
            <div>
              <LeftBubble
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={spinner}
                  width={150}
                  height={150}
                  style={{ margin: "0 30px" }}
                />

                <p style={{ marginTop: "15px" }}>믿어방 문자 작성 중...</p>
                <p>화면을 끄지 마세요 😢</p>
              </LeftBubble>
            </div>
          </LeftMessageBox>
        )}

        {assiRender[5] && (
          <LeftMessageBox>
            <ProfileImg src={profile} />
            <div>
              <LeftBubble style={{ maxWidth: "250px", paddingBottom: "50px" }}>
                <p className="name">믿어방</p>

                <p style={{ marginBottom: "15px" }}>{result}</p>

                <img
                  ref={testRef}
                  src={copy}
                  style={{
                    marginTop: "15px",
                    position: "absolute",
                    bottom: "15px",
                    right: "19px",
                  }}
                  onClick={() => {}}
                />

                <CopyToClipboard
                  text={result}
                  onCopy={() => handleCopyClipBoard()}
                >
                  <img
                    src={copy}
                    style={{
                      marginTop: "15px",
                      position: "absolute",
                      bottom: "15px",
                      right: "19px",
                    }}
                  />
                </CopyToClipboard>
              </LeftBubble>
            </div>
          </LeftMessageBox>
        )}
        <div ref={messageEndRef}></div>
      </Container>

      <SendBox onSubmit={SendUserInput}>
        <SendInput>
          <input
            value={userInput}
            placeholder="작성해주세요"
            onChange={setUserInput}
          />
        </SendInput>
        <SendBtn type="submit">
          <img src={send} />
        </SendBtn>
      </SendBox>
    </Div>
  );
};

export default Chat;

const Div = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const Container = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;

  padding: 24px;
  padding-top: 65px;
  padding-bottom: 90px;
`;

const RightMessageBox = styled.div`
  display: flex;
  justify-content: end;
  margin: 14px 0 0 0;
`;

const RightBubble = styled.div`
  width: auto;
  height: auto;
  max-width: 80%;
  margin: 14px 0 0 0;

  padding: 12px;

  background: #006ffd;
  border-radius: 20px 20px 0px 20px;

  font-family: "Noto Sans KR";

  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;

  color: #ffffff;
`;

const LeftMessageBox = styled.div`
  margin-top: 22px;
  display: flex;
`;

const ProfileImg = styled.img`
  width: 37px;
  height: 37px;
`;

const LeftBubble = styled.div`
  position: relative;

  width: auto;
  height: auto;
  min-width: 220px;
  max-width: 80%;

  padding: 16px;
  margin: 14px 0 0 8px;

  background: #f8f9fe;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  border-radius: 0px 20px 20px 20px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 22px;
  color: #7d7d7d;

  span {
    font-weight: 500;
  }

  .name {
    font-weight: 800;
    margin-bottom: 5px;
  }
`;
const SendBox = styled.form`
  display: flex;
  align-items: center;

  padding: 16px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 72px;

  border-top: 1px solid rgba(0, 0, 0, 0.1);
  background-color: white;
`;
const SendInput = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  background: #f8f9fe;

  border-radius: 71px;

  margin-right: 6px;

  input {
    width: 100%;

    background-color: transparent;
    margin-left: 16px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #8f9098;

    border: none;

    &:focus {
      outline: none;
    }
  }
`;
const SendBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  width: 32px;
  height: 32px;
  border: none;

  img {
    width: 32px;
    height: 32px;
  }
`;

const DoneBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 12px;
  width: 100%;
  height: 32px;

  border-radius: 5px;
  border: #895ee6 1px solid;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 13px;
  text-align: center;
  color: #1f4ef5;
`;

const EmotionBtnBox = styled.div`
  margin-top: 13px;
  margin-left: 7px;

  max-width: 300px;
  display: flex;
  flex-wrap: wrap;
`;

const EmotionBtn = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: 36px;
  padding: 8px 12px;
  margin: 0 10px 10px 0;
  background: #f4f4f4;
  border-radius: 18px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
  color: #9a9a9a;

  .active {
    background: linear-gradient(93.33deg, #1f4ef5 3.69%, #895ee6 89.59%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  p {
    margin-left: 3px;
  }

  border: ${props => (props.active ? "1px solid rgba(138, 97, 225, 1)" : "")};
  box-shadow: ${props =>
    props.active ? "0px 2px 4px rgba(0, 0, 0, 0.25)" : ""};
`;
