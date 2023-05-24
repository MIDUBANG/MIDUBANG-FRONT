// hooks
import { useEffect } from "react";
import styled from "@emotion/styled";
import { useCookies } from "react-cookie";

// style
import "./style.css";
// asset
import smile from "@assets/icon/smile.svg";
import okay from "@assets/icon/okay.svg";
import clip from "@assets/icon/clip.svg";
import modalCancle from "@assets/icon/modalCancle.svg";
import { WordsType } from "@assets/types";
// api
import { PostSaveWord } from "@api/word";

type Props = {
  open: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  wordsData: WordsType[];
};

const WordModal = (props: Props) => {
  const { open, close, text, wordsData } = props;

  // 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const onCookie = (res: any) => {
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  /** 단어 저장 함수 */
  const _handleClickSaveBtn = (text: string) => {
    wordsData.map(word => {
      if (word.word === text) {
        PostSaveWord(word.wordId, cookies.refreshToken, onCookie);
      }
    });
  };

  return (
    <div
      className={open ? "openModal modal" : "modal"}
      onClick={() => close(false)}
    >
      {open ? (
        <Background>
          <ModalDiv>
            <Icons>
              <img src={smile} className="smile" />
              <p>쉬운 단어 해설</p>
              <img
                src={modalCancle}
                className="cancle"
                onClick={() => close(false)}
              />
            </Icons>

            <Contents>
              <p className="word">{text}</p>

              {wordsData.map(m => {
                if (m.word === text) {
                  return <p className="mean">{m.meaning} ?</p>;
                }
              })}
            </Contents>

            <Btns>
              <Btn color="--aurora" onClick={() => _handleClickSaveBtn(text)}>
                <img src={clip} />
                <p>단어 저장</p>
              </Btn>
              <Btn color="--skyblue" onClick={() => close(false)}>
                <img src={okay} className="smile" />
                <p>이해했어요</p>
              </Btn>
            </Btns>
          </ModalDiv>
        </Background>
      ) : null}
    </div>
  );
};

export default WordModal;

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  background-color: rgba(0, 0, 0, 0.6);
`;
const ModalDiv = styled.div`
  padding: 23px;
  width: 80%;
  height: auto;
  background: #ffffff;
  border-radius: 16px;

  animation: modal-show 0.3s;
`;

const Contents = styled.div`
  margin-top: 24px;

  .word {
    font-family: "Noto Sans KR", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
  }
  .mean {
    margin-top: 10px;
    font-family: "Noto Sans KR", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 25px;
    color: #6a6969;
  }
`;

const Btns = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 23px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;

  .smile {
    margin-left: 3px;

    width: 30px;
    height: 30px;
  }

  p {
    display: flex;
    align-items: center;
    margin-left: 10px;
    width: 100%;
    font-family: "Noto Sans KR", sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
  }
  .cancle {
    margin-right: 3px;
  }
`;

type BtnProps = {
  color: string;
};
const Btn = styled.div<BtnProps>`
  //min-width: 131px;
  width: 45%;
  height: 37px;
  background: var(${props => props.color});
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  .smile {
    margin-top: 2px;
  }

  p {
    font-family: "Noto Sans KR", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
  }

  img {
    margin-right: 5px;
    width: 18px;
    height: 18px;
  }
`;
