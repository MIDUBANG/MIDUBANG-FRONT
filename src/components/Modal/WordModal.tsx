import { useEffect } from "react";
import styled from "@emotion/styled";
import smile from "@assets/icon/smile.svg";
import okay from "@assets/icon/okay.svg";
import clip from "@assets/icon/clip.svg";
import modalCancle from "@assets/icon/modalCancle.svg";
type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const WordModal = ({ setModal }: Props) => {
  useEffect(() => {
    document.body.style.cssText = `
              position: fixed;
              top: -${window.scrollY}px;
              overflow-y: scroll;
              width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <Background>
      <ModalDiv>
        <Icons>
          <img src={smile} className="smile" />
          <p>쉬운 단어 해설</p>
          <img src={modalCancle} className="cancle" />
        </Icons>

        <Contents>
          <p className="word">저당권</p>
          <p className="mean">
            은행이 돈을 빌려줄 때, 고객이 돈을 갚지 못하는 경우를 대비해 담보를
            잡아야합니다. 부동산을 담보로 잡아서 나중에 고객이 돈을 갚지 않으면
            경매로 돈을 받아낼 수 있도록 하는 것이 바로 저당권입니다. 이때
            은행이 저당권자가 됩니다.
          </p>
        </Contents>

        <Btns>
          <Btn color="--aurora">
            <img src={clip} />
            <p>단어 저장</p>
          </Btn>
          <Btn color="--skyblue">
            <img src={okay} />
            <p>이해했어요</p>
          </Btn>
        </Btns>
      </ModalDiv>
    </Background>
  );
};

// className={open ? "openModal modal" : "modal"}

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
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.6);
`;
const ModalDiv = styled.div`
  padding: 23px;
  width: 80%;
  height: auto;
  background: #ffffff;
  border-radius: 16px;
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
  min-width: 131px;
  width: 45%;
  height: 37px;
  background: var(${(props) => props.color});
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Noto Sans KR", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 19px;
    color: #ffffff;
  }

  img {
    margin-right: 7px;
    width: 18px;
    height: 18px;
  }
`;

/*
@keyframes modal-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  */
