import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import arrow from "@assets/checklist/arrows/arrow1.png";
import house from "@assets/checklist/emojis/house.png";

type Props = {
  backgroundColor: string;
  pointColor: string;
  title: string;
  path: string;
  arrow: string;
  emoji: string;
};
const CategoryBox = ({
  backgroundColor,
  pointColor,
  title,
  path,
  arrow,
  emoji,
}: Props) => {
  const navigate = useNavigate();

  const onClickBnt = (path: string) => {
    navigate(path);
  };

  return (
    <BoxDiv backgroundColor={backgroundColor} onClick={() => onClickBnt(path)}>
      <img src={emoji} width={29} height={29} />
      <Title pointColor={pointColor}>{title}</Title>
      <div className="flexbox">
        <Checklist pointColor={pointColor}>17 checklists</Checklist>

        <img src={arrow} width={36} height={11} />
      </div>
    </BoxDiv>
  );
};

export default CategoryBox;

const BoxDiv = styled.div<{ backgroundColor: string }>`
  width: 100%;
  height: 140px;

  background: ${(props) => props.backgroundColor};
  border-radius: 19px;

  padding: 20px 31px 22px 31px;

  .flexbox {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  margin-bottom: 17px;
`;

const Title = styled.p<{ pointColor: string }>`
  margin-top: 23px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;

  color: ${(props) => props.pointColor};
`;

const Checklist = styled.div<{ pointColor: string }>`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;

  color: ${(props) => props.pointColor};

  margin-right: 8px;
`;
