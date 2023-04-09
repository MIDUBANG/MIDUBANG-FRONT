// lib
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";
import "react-circular-progressbar/dist/styles.css";
//component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import send from "@assets/text/send.png";
import profile from "@assets/text/profile.png";
import loading from "@assets/text/loading.png";
import copy from "@assets/text/copy.png";

const Chat = () => {
  return (
    <Div>
      <SimpleNavBar text="문자 마법사" direction="up" noTitle={true} />

      <Container>
        <LeftMessageBox>
          <ProfileImg src={profile} />
          <div>
            <LeftBubble>
              <p className="name">믿어방</p>
              <p>안녕하세요, 믿어방 문자 마법사입니다. </p>
              <p style={{ marginBottom: "15px" }}>
                원하는 문자를 대신 작성해드립니다!
              </p>
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
        <RightMessageBox>
          <RightBubble>집주인</RightBubble>
        </RightMessageBox>
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
        <RightMessageBox>
          <RightBubble>
            다음 달부터 친구랑 같이 살고 싶은데, 이에 대해 집주인의 허락을
            구하고 싶음
          </RightBubble>
        </RightMessageBox>
        <LeftMessageBox>
          <ProfileImg src={profile} />
          <div>
            <LeftBubble>
              <p className="name">믿어방</p>
              <p> 문자의 어조를 골라주세요! </p>
              <p style={{ marginBottom: "15px" }}>중복 선택도 가능합니다.</p>
              <p>마음에 드는 어조가 없나요? </p>
              <p>직접 작성해 알려주세요!</p>

              <DoneBtn>다 골랐어요</DoneBtn>
            </LeftBubble>

            <EmotionBtnBox>
              <EmotionBtn active={true}>
                🤵️ <p className="active">정중한</p>
              </EmotionBtn>
              <EmotionBtn active={false}>
                😤 <p className="active">화난</p>
              </EmotionBtn>
              <EmotionBtn active={false}>
                🤵️ <p className="active">예의바른</p>
              </EmotionBtn>
              <EmotionBtn active={false}>
                😤 <p className="active">캐주얼한</p>
              </EmotionBtn>
              <EmotionBtn active={false}>
                🤵️ <p className="active">친근한</p>
              </EmotionBtn>
              <EmotionBtn active={false}>
                🤵️ <p className="active">반말</p>
              </EmotionBtn>
              <EmotionBtn active={false}>
                😤 <p className="active">급한</p>
              </EmotionBtn>
            </EmotionBtnBox>
          </div>
        </LeftMessageBox>
        <RightMessageBox>
          <RightBubble>정중하고, 부탁드리는 말투</RightBubble>
        </RightMessageBox>
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
        <RightMessageBox>
          <RightBubble>
            만약 친구가 살 수 있다면 월세 인상에 대해서 얘기해 볼 의향 있음.
            제발 허락해주면 좋겠음
          </RightBubble>
        </RightMessageBox>
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
                src={loading}
                width={113}
                height={113}
                style={{ margin: "0 30px" }}
              />
              <p style={{ marginTop: "15px" }}>믿어방 문자 작성 중...</p>
            </LeftBubble>
          </div>
        </LeftMessageBox>

        <LeftMessageBox>
          <ProfileImg src={profile} />
          <div>
            <LeftBubble style={{ maxWidth: "250px", paddingBottom: "50px" }}>
              <p className="name">믿어방</p>
              <p style={{ marginBottom: "15px" }}>
                안녕하세요, [집주인 성함]님.
              </p>
              <p style={{ marginBottom: "15px" }}>
                저는 [나의 이름]이라는 임차인입니다. 다음 달부터 제 친구와 함께
                살 계획이 있는데, 이에 대해 [집주인 성함]님의 허락을 구하고자
                연락드립니다.
              </p>
              <p style={{ marginBottom: "15px" }}>
                만약 친구와 함께 살 수 있다면, 월세 인상에 대해서도 얘기해 볼
                의향이 있습니다. 그리고 저희는 항상 깨끗하고 조용하게 생활할
                것을 약속드리며, 집주인님의 결정에 따라 적극적으로 협조할
                것입니다.
              </p>
              <p>감사합니다.</p>

              <img
                src={copy}
                style={{
                  marginTop: "15px",
                  position: "absolute",
                  bottom: "15px",
                  right: "19px",
                }}
              />
            </LeftBubble>
          </div>
        </LeftMessageBox>
      </Container>

      <SendBox>
        <SendInput>
          <input />
        </SendInput>
        <SendBtnImg src={send} />
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
  font-weight: 350;
  font-size: 13px;
  line-height: 19px;
  color: #7d7d7d;

  span {
    font-weight: 500;
  }

  .name {
    font-weight: 700;
    margin-bottom: 5px;
  }
`;
const SendBox = styled.div`
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
const SendBtnImg = styled.img`
  width: 32px;
  height: 32px;
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
  width: 264px;
  height: 183px;

  margin: 113px 0 53px auto;
`;

const BlueTextBox = styled.div`
  display: flex;
  margin-top: 12px;
`;
const BlueText = styled.div<{ margin: string }>`
  display: flex;
  align-content: center;

  margin: ${(props) => props.margin};

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

  margin: ${(props) => props.margin};
  span {
    font-weight: 500;
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

  border: ${(props) => (props.active ? "1px solid rgba(138, 97, 225, 1)" : "")};
  box-shadow: ${(props) =>
    props.active ? "0px 2px 4px rgba(0, 0, 0, 0.25)" : ""};
`;
