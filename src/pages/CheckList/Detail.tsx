// lib
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "@emotion/styled";
import { useCookies } from "react-cookie";

//component
import MainNavBar from "@components/NavBar/MainNavBar";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import CheckBox from "@components/CheckList/CheckBox";
import OtherCheckList from "@components/CheckList/OtherCheckList";
// asset
import house from "@assets/checklist/emojis/house.png";
// api
import {
  GetCheckCount,
  GetChecklist,
  ToggleChecklist,
  UnToggleChecklist,
  UnToggleAllChecklist,
} from "@api/checklist";

import { checkCategoryData } from "@assets/checkCategoryData";

const Main = () => {
  const { id } = useParams();
  const categoryId = parseInt(id || "0") - 1;
  const categoryTitle = checkCategoryData[categoryId].title;
  const categorySubTitle = checkCategoryData[categoryId].subTitle;

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const onCookie = (res: any) => {
    console.log("쿠키");

    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const [doneCount, setDoneCount] = useState(0);
  const [checklistData, setChecklistData] = useState([
    {
      checklistId: 1,
      listDetail: "",
      listName: "",
      checked: false,
      last: false,
    },
  ]);

  /** 완료한 체크 숫자 */
  const _handleGetCheckCount = async () => {
    let checklistId = parseInt(id || "0");
    const res = await GetCheckCount(
      checklistId,
      cookies.refreshToken,
      onCookie,
    );

    setDoneCount(res.count);
  };

  const _handleGetChecklist = async () => {
    let checklistId = parseInt(id || "0");
    const res = await GetChecklist(checklistId, cookies.refreshToken, onCookie);
    console.log("설마ㅠ", res);

    let checklist = res.checklist;
    let donelist = res.userCheck;
    let newlist: any = checklist;

    // checked 속성 추가
    newlist = newlist.map((c: any) => ({ ...c, checked: false, last: false }));

    // 체크된 것만 true로 변경
    donelist.map((d: any) => {
      newlist = newlist.map((c: any) =>
        c.checklistId === d ? { ...c, checked: true } : c,
      );
    });

    // 맨 마지막만 last = true로 변경
    newlist[newlist.length - 1]["last"] = true;

    setChecklistData(newlist);
  };

  const [req, setRes] = useState(0); // check 요청에 대한 트래킹

  /** 토글  */
  const _handleToggleChecklist = async (id: number) => {
    await ToggleChecklist(id, cookies.refreshToken, onCookie);

    setChecklistData(
      checklistData.map(c =>
        c.checklistId === id ? { ...c, checked: true } : c,
      ),
    );

    setRes(req + 1);
  };

  /** 토글 취소  */
  const _handleUnToggleChecklist = async (id: number) => {
    await UnToggleChecklist(id, cookies.refreshToken, onCookie);

    // setChecklistData(
    //   checklistData.map((c) =>
    //     c.checklistId === id ? { ...c, checked: false } : c
    //   )
    // );

    setRes(req + 1);
  };

  /** 토글 전체 취소  */
  const _handleUnToggleAllChecklist = async () => {
    let categoryId = parseInt(id || "0");
    await UnToggleAllChecklist(categoryId, cookies.refreshToken, onCookie);
    setRes(req + 1);
  };

  useEffect(() => {
    _handleGetCheckCount();
    _handleGetChecklist();
  }, [req]);

  return (
    <Div>
      <SimpleNavBar text="자취 A-Z 체크리스트" />
      <Banner>
        <img src={checkCategoryData[categoryId].emoji} width={82} height={82} />
        <p className="title">{categoryTitle}</p>
        <p className="sub-title">{categorySubTitle}</p>
      </Banner>

      <Container>
        <TopTextContainer>
          <p className="checklist">Checklists</p>
          <p className="outof">
            {doneCount} out of {checklistData.length}
          </p>
          <div className="uncheck-btn" onClick={_handleUnToggleAllChecklist}>
            Uncheck all
          </div>
        </TopTextContainer>

        <CheckBox
          checklistData={checklistData}
          _handleToggleChecklist={_handleToggleChecklist}
          _handleUnToggleChecklist={_handleUnToggleChecklist}
        />
      </Container>

      <BottomContainer>
        <OtherCheckList except={parseInt(id || "0")} />
      </BottomContainer>
    </Div>
  );
};

export default Main;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 65px;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: end;
  width: 100%;
  height: 305px;
  background: white;
  padding: 24px 30px 42px 30px;

  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    color: #070a39;
    margin-top: 23px;
  }

  .sub-title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #d1d1d5;
    margin-top: 12px;
  }

  img {
    margin-top: 24px;
    align-self: start;
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: #f7f5fa;

  padding: 0 20px;
`;

const TopTextContainer = styled.div`
  display: flex;
  align-items: center;

  margin: 50px 0 20px 0;

  .checklist {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #070a39;
  }

  .outof {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #7265fc;

    margin-left: 14px;
  }

  .uncheck-btn {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 84px;
    height: 30px;
    background: #7266fc;
    border-radius: 5px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;

    color: #ffffff;
  }
`;

const BottomContainer = styled.div`
  width: 100%;
  height: auto;
  background-color: white;

  padding: 42px 19px;
`;

const EnText = styled.div<{
  weight: string;
  size: string;
  color: string;
  margin: string;
}>`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  color: ${props => props.color};
  margin: ${props => props.margin};
`;

const KRText = styled.div<{ weight: string; size: string; color: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  color: ${props => props.color};
`;
