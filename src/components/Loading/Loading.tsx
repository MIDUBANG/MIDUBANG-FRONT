import styled from "@emotion/styled";
import { useRef, useEffect } from "react";

const Loading = () => {
  const domRef = useRef<any>(null);
  const SEC = 2;

  useEffect(() => {
    if (domRef.current) {
      const childs = domRef.current.children;
      for (let i = 0; i < childs.length; i++) {
        childs[i].style.animationDelay = `${SEC * i}s`; // 딜레이 차이 주는 부분 2s의 배수
        childs[i].classList.add("on");
      }
    }
  }, [domRef]);

  return (
    <Box>
      <div className="clipText" ref={domRef}>
        <p>계약 후 24시간 내로 해지하면</p>
        <p>계약금을 돌려받을 수 있을까?</p>
        <p>돌려받을 수 없습니다!!🙅‍♀️</p>
        <p>계약서에 서명하고 계약이 성립된 시점부터</p>
        <p>법적 구속력을 가지기 때문입니다.</p>
        <p>만약 계약 해지 후 계약금을 돌려 받고 싶다면,</p>
        <p>해당 내용을 포함한 특약을 작성하면 됩니다.</p>
      </div>
    </Box>
  );
};

export default Loading;

const Box = styled.div`
  height: auto;
  width: 90vw;

  padding: 0;
  margin: 30px auto 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;

    text-align: center;

    color: #4880ee;

    margin-top: 8px;
  }
  .on {
    display: block;
    animation: fadeInUp 1s ease-in-out both;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: translateZ(0);
    }
  }
`;
