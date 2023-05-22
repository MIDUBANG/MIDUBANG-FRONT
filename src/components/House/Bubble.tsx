import styled from "@emotion/styled";
import { css } from "@emotion/react";
import grayTail from "@assets/house/grayTail.png";
import blueTail from "@assets/house/blueTail.png";

type Props = {
  color: string;
  text: string;
};
const Bubble = ({ color, text }: Props) => {
  let isgray = color === "gray";
  return (
    <BubbleDiv color={color}>
      <p>{isgray ? "새내기" : "믿어방"}</p>
      <p>{text}</p>
      {isgray ? <img src={grayTail} /> : <img src={blueTail} />}
    </BubbleDiv>
  );
};

export default Bubble;

const BubbleDiv = styled.div<{ color: string }>`
  margin-bottom: 40px;

  ${props =>
    props.color === "gray"
      ? css`
          margin-left: auto;
        `
      : css`
          margin-right: auto;
        `}

  position: relative;

  width: 265px;
  height: auto;

  border-radius: 13px;
  background-color: ${props =>
    props.color === "gray" ? "#BEBEBE" : "#278EFF"};

  padding: 13px 24px;
  box-sizing: border-box;

  img {
    position: absolute;
    bottom: -5px;

    ${props =>
      props.color === "gray"
        ? css`
            right: -8px;
          `
        : css`
            left: -8px;
          `}
  }

  p:first-child {
    position: absolute;
    top: -20px;

    ${props =>
      props.color === "gray"
        ? css`
            right: 5px;
          `
        : css`
            left: 5px;
          `}
    color: black;
  }

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
    color: #ffffff;
  }
`;
