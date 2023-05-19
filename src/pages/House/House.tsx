// lib
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { Navigator, useNavigate } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
//import "react-circular-progressbar/dist/styles.css";
//component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import greencheck from "@assets/house/main/greencheck.png";
import graycheck from "@assets/house/main/graycheck.png";
import { HouseData } from "@assets/houseData";
import { Navigate } from "react-router-dom";

const House = () => {
  const navigate = useNavigate();

  const [houseData, setHouseData] = useState(HouseData);
  const [percentage, setPercentage] = useState(0);
  const [complete, setComplete] = useState(0);

  /** 진행률 localstorage 관리 */
  const _getRecordCompletion = () => {
    let rate: any = localStorage.getItem("houseCompleteRate");
    if (!rate) {
      localStorage.setItem("houseCompleteRate", JSON.stringify([]));
      rate = [];
    } else {
      rate = JSON.parse(rate);
    }

    setComplete(rate.length);

    console.log(rate.length);

    let prePercentage = parseInt(((rate.length / 12) * 100).toString());
    setPercentage(prePercentage);

    console.log("rate >> ", rate);

    if (rate) {
      rate.map((r: any) => _UpdateCompleteRate(r[0], r[1]));
    } else {
      let initialRate: any = [];
      localStorage.setItem("houseCompleteRate", JSON.stringify(initialRate));
    }
  };

  /** 진행도 - 초록 체크로 수정 */
  const _UpdateCompleteRate = (id: number, subId: number) => {
    let menu = houseData[id - 1];
    let contents = menu.contents;
    contents[subId - 1].complete = true;

    setHouseData(
      houseData.map(h => (h.id === id ? { ...menu, contents: contents } : h)),
    );
  };

  const _GotoContent = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    _getRecordCompletion(); // 강의 기록 반영
  }, []);

  return (
    <Div>
      <Container>
        <SimpleNavBar text="등기부등본 마스터" direction="up" />

        <Title>등기부등본 마스터</Title>

        <Progress>
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth={5}
            styles={buildStyles({
              pathColor: `rgba(72, 128, 238, ${percentage / 100})`,
              textColor: "#64663E",
              trailColor: "#EBEBEB",
            })}
          />
        </Progress>

        <Numbers>
          <div>
            <p>{complete}</p>
            <p>완료</p>
          </div>
          <div>
            <p>{12 - complete}</p>
            <p>미완료</p>
          </div>
        </Numbers>

        <Des>등기부등본을 마스터해봅시다 </Des>

        {houseData.map(con => {
          let menus = null;

          if (con.contents.length === 1) {
            menus = con.contents.map(ccon => {
              return (
                <div onClick={() => _GotoContent(ccon.path)} className="first">
                  {ccon.complete ? (
                    <img src={greencheck} />
                  ) : (
                    <img src={graycheck} />
                  )}

                  <Menu weight="bold">{ccon.subTitle}</Menu>
                </div>
              );
            });
          } else {
            menus = con.contents.map(ccon => {
              return (
                <div onClick={() => _GotoContent(ccon.path)}>
                  {ccon.complete ? (
                    <img src={greencheck} />
                  ) : (
                    <img src={graycheck} />
                  )}

                  <Menu weight="bold">{ccon.subTitle}</Menu>
                </div>
              );
            });
          }

          return (
            <div>
              <MenuTitle>
                {con.id}. {con.title}
              </MenuTitle>
              <Menus>{menus}</Menus>
            </div>
          );
        })}
      </Container>
    </Div>
  );
};

export default House;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 65px;
  background-color: #fafafa;
`;

const Title = styled.p`
  margin: 23px auto 0 30px;
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 38px;
  padding: 0;
`;

const Progress = styled.div`
  width: 222px;
  height: 222px;
  margin: 30px auto;
`;

const Numbers = styled.div`
  display: flex;
  margin: 35px 35px 0 35px;
  justify-content: space-between;

  div {
    width: 48%;
    height: 91px;

    background: #ffffff;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  div p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 38px;
    color: #4880ee;

    text-align: center;
  }

  div p:last-child {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    color: #454545;
  }
`;

const Des = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  color: #363636;

  margin: 21px auto 36px 40px;
`;
const MenuTitle = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;

  margin-left: 33px;
  margin-bottom: 10px;
`;

const Menus = styled.div`
  padding: 25px;
  padding-top: 0;
  div {
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    border-top: none;
    display: flex;
    align-items: center;

    height: 39px;
    padding: 11px 10px;
  }

  div:last-child {
    border-radius: 0 0 10px 10px;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
    border-top: none;
  }

  div:nth-child(1) {
    border-radius: 10px 10px 0 0;
    border: 0.5px solid rgba(0, 0, 0, 0.2);
  }

  .first {
    border-radius: 10px !important;
  }

  img {
    margin-right: 15px;
    height: 20px;
    width: 20px;
  }
`;

const Menu = styled.p<{ weight: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: ${props => (props.weight === "bold" ? 500 : 300)};
  font-size: 12px;
  line-height: 17px;

  color: #454545;
`;
