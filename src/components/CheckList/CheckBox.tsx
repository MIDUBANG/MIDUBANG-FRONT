import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";

// assets
import checkedbox from "@assets/checklist/checkedbox.png";
import uncheckbox from "@assets/checklist/uncheckbox.png";

type Props = {};
const CheckBox = ({}: Props) => {
  const data = [
    {
      id: 1,
      title: "보유 자금 확인",
      content: "블라블라 설명 입니다아아아아ㅏ 가계약 당시와 같은 웅앵 ",
      checked: true,
      last: false,
    },
    {
      id: 2,
      title: "보유 자금 확인",
      content: "블라블라 설명 입니다아아아아ㅏ 가계약 당시와 같은 웅앵 ",
      checked: false,
      last: false,
    },
    {
      id: 3,
      title: "보유 자금 확인",
      content: "블라블라 설명 입니다아아아아ㅏ 가계약 당시와 같은 웅앵 ",
      checked: true,
      last: false,
    },
    {
      id: 4,
      title: "보유 자금 확인",
      content: "블라블라 설명 입니다아아아아ㅏ 가계약 당시와 같은 웅앵 ",
      checked: false,
      last: false,
    },
    {
      id: 5,
      title: "보유 자금 확인",
      content: "블라블라 설명 입니다아아아아ㅏ 가계약 당시와 같은 웅앵 ",
      checked: true,
      last: true,
    },
  ];
  return (
    <BackgroundBox>
      {data.map((d) => (
        <IndiCheckBox last={d.last}>
          <div className="top-content">
            <img
              src={d.checked ? checkedbox : uncheckbox}
              width={18}
              height={18}
            />
            <p className="title">{d.title} </p>
          </div>
          <p className="content">{d.content}</p>
          <p className="sub-content">
            ⭐ 더 하위 설명이 필요하다면 이런식으로..{" "}
          </p>
        </IndiCheckBox>
      ))}
    </BackgroundBox>
  );
};

export default CheckBox;

const BackgroundBox = styled.div`
  width: 100%;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  margin-bottom: 30px;
`;

const IndiCheckBox = styled.div<{ last: boolean }>`
  ${(props) =>
    props.last ||
    css`
      border-bottom: 1px solid #ebebeb;
    `};

  padding: 30px 29px;

  .top-content {
    display: flex;

    img {
      margin-right: 16px;
    }

    .title {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #000000;
    }
  }

  .content {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #6e6e6e;

    margin: 7px 0 0 35px;
  }

  .sub-content {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #93641d;

    margin: 13px 0 0 35px;
  }
`;
