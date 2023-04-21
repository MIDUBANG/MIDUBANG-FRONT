import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

// assets
import arrow from "@assets/checklist/arrows/arrow1.png";
import bear from "@assets/checklist/emojis/bear.png";

type Props = {};
const OtherCheckList = ({}: Props) => {
  const data = [1, 2, 3, 4, 5];

  return (
    <BackgroundBox>
      <p className="title">
        Related <span>Checklists</span>
      </p>
      <div className="view-box">
        <p>View all</p> <img src={arrow} width={36} height={11} />
      </div>

      {data.map((d) => (
        <CheckBtnBox>
          <img src={bear} width={27} height={27} />
          <p>자취 생활</p>
        </CheckBtnBox>
      ))}
    </BackgroundBox>
  );
};

export default OtherCheckList;

const BackgroundBox = styled.div`
  width: 100%;
  height: auto;
  background: #f0faf9;
  border-radius: 19px;

  display: flex;
  flex-direction: column;

  padding: 43px 26px;

  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;

    span {
      color: #407682;
    }
  }

  .view-box {
    margin-top: 9px;
    margin-bottom: 21px;

    display: flex;

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #407682;
      margin-right: 12px;
    }
  }
`;

const CheckBtnBox = styled.div`
  width: 100%;
  height: 74px;
  background: #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 20px;

  display: flex;
  justify-content: start;
  align-items: center;

  margin-bottom: 18px;

  img {
    margin: 0 14px 0 25px;
  }

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #000000;
  }
`;
