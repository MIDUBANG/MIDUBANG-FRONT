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
        <p>전세 사기에 대해 알고계신가요?</p>
        <p>조심하세욧!!</p>
        <p>부동산 사기</p>
      </div>
    </Box>
  );
};

export default Loading;

const Box = styled.div`
  height: auto;
  width: 100vw;

  padding: 0;
  margin: 30px 0 0 0;

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
