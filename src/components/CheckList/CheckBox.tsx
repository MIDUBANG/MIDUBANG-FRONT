import React, { useState } from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/react";
import { useCookies } from "react-cookie";

// assets
import checkedbox from "@assets/checklist/checkedbox.png";
import uncheckbox from "@assets/checklist/uncheckbox.png";

type checklistType = {
  checklistId: number;
  listDetail: string;
  listName: string;
  checked: boolean;
  last: boolean;
};
type Props = {
  checklistData: checklistType[];
  _handleToggleChecklist: (id: number) => void;
  _handleUnToggleChecklist: (id: number) => void;
};

const CheckBox = ({
  checklistData,
  _handleToggleChecklist,
  _handleUnToggleChecklist,
}: Props) => {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  return (
    <BackgroundBox>
      {checklistData.map((d) => (
        <IndiCheckBox last={d.last}>
          <div className="top-content">
            {d.checked ? (
              <img
                src={checkedbox}
                onClick={() => _handleUnToggleChecklist(d.checklistId)}
              />
            ) : (
              <img
                src={uncheckbox}
                onClick={() => _handleToggleChecklist(d.checklistId)}
              />
            )}

            <p className="title">{d.listName} </p>
          </div>
          {/* {d.listDetail?.split("\\").map((detail) => (
            <p className="content">{detail}</p>
          ))} */}

          {d.listDetail?.split("\\").map((detail) => (
            <div className="sub-content">
              ⭐<p> {detail}</p>
            </div>
          ))}
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
      width: 18px;
      height: 18px;
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

    word-break: keep-all;

    display: flex;
    p {
      transform: translate(3px, -2px);
      line-height: 17px;
    }
  }
`;
