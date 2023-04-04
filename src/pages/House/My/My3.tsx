// lib
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import UnderstandBtn from "@components/Buttons/UnderstandBtn";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import ex1 from "@assets/house/ex1.png";
import house3d from "@assets/house/house3d.png";
import my3eximg from "@assets/house/갑구.png";
import redbell from "@assets/house/redbell.png";

const My3 = () => {
  return (
    <Div>
      <SimpleNavBar text="등기부등본 마스터" direction="up" />

      <Container>
        <Title>갑구</Title>

        <TopContentBox>
          <div className="flexbox">
            <DesText color="black" weight="300">
              소유자(집 주인)에 대한 정보가 적혀 있어요.
            </DesText>

            <div className="imgbox">
              <img src={house3d} />
            </div>
          </div>
          <DesText color="black" weight="300">
            또한 가압류, 가처분 등 <span>소유권</span>에 대한 다툼이 일어나고
            있는지도 알 수 있어요.
          </DesText>
        </TopContentBox>
        <ImgSlideBox>
          <img src={my3eximg} />
        </ImgSlideBox>

        <ContentsBox>
          <div className="bar"></div>

          <div className="content">
            <Circle />
            <div className="content-text">
              <DesText color="black" weight="400" top="-4px">
                순위 번호
              </DesText>
              <DesText color="gray" weight="300">
                표제부와 마찬가지로 등기의 순서를 표시합니다.{" "}
              </DesText>
            </div>
          </div>

          <div className="content">
            <Circle />
            <div className="content-text">
              <DesText color="black" weight="400" top="-4px">
                등기 목적
              </DesText>
              <DesText color="gray" weight="300">
                해당 등기의 목적이자 소유권 보존이나 이전을 보여줍니다.{" "}
              </DesText>
            </div>
          </div>

          <div className="content">
            <Circle />
            <div className="content-text">
              <DesText color="black" weight="400" top="-4px">
                접수{" "}
              </DesText>
              <DesText color="gray" weight="300">
                해당 등기를 접수한 접수 날짜를 표시합니다.{" "}
              </DesText>
            </div>
          </div>

          <div className="content">
            <Circle />
            <div className="content-text">
              <DesText color="black" weight="400" top="-4px">
                등기 원인{" "}
              </DesText>
              <DesText color="gray" weight="300">
                등기 원인은 부동산의 매매, 해지와 같은 기존과 변경하여 등기하는
                이유를 나타냅니다.
              </DesText>
            </div>
          </div>

          <div className="content">
            <Circle />
            <div className="content-text">
              <DesText color="black" weight="400" top="-4px">
                권리자 및 기타사항{" "}
              </DesText>
              <DesText color="gray" weight="300">
                등기 시 권리자의 정보 표시와 부동산 거래액, 채권 청구와 같은
                기타 사항이 표시됩니다.
              </DesText>
            </div>
          </div>

          <Circle />
        </ContentsBox>

        <Checkpoint>
          <div className="title">
            <div>
              <p>갑구 원샷 체크포인트</p>
              <p>중요한 것은?</p>
            </div>

            <img src={redbell} />
          </div>

          <div className="text">
            <div></div>
            <p>
              계약을 체결 할 임대인이 해당 매물의 실 소유주인지 확인 (부동산
              계약인 = 갑구의 소유권자)
            </p>
          </div>
          <div className="text">
            <div></div>
            <p>
              부동산이 공동 소율일 경우, 소유 지분이 어떻게 나뉘어져 있는지 확인
              (기준은 과반수){" "}
            </p>
          </div>
          <div className="text">
            <div></div>
            <p>
              한 사람이 과반수 지분을 가지고 있다면, 나머지의 소유주의 위임장
              필요 없음{" "}
            </p>
          </div>

          <div className="text">
            <div></div>
            <p>
              소유주가 다수라면, 계약하는 임대인과 위임받은 소유주들의 지분이
              과반수 넘겨야 함{" "}
            </p>
          </div>

          <div className="text">
            <div></div>
            <p>
              일반 주택이라면, 토지 등기부와 건물 등기부의 소유주가 같은지 확인{" "}
            </p>
          </div>

          <div className="text">
            <div></div>
            <p>
              압류, 가압류, 가처분, 가등기, 예고등기, 경매개시결정 등의 권리침해
              용어가 있지 않은지 확인{" "}
            </p>
          </div>
        </Checkpoint>

        <UnderstandBtn id={3} subId={3} />
      </Container>
    </Div>
  );
};

export default My3;

const Div = styled.div`
  width: 100%;
  height: 100%;

  span {
    font-weight: 500;
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 24px;
  padding-top: 65px;
  box-sizing: border-box;
`;

const Title = styled.p`
  margin: 30px auto 5px 20px;
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 38px;
  padding: 0;
`;

const ImgSlideBox = styled.div`
  width: 100%;
  overflow-x: scroll;
  margin-top: 22px;
`;
const ExImgText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  color: #3d3d3d;
`;

const DesText = styled.p<{ color: string; weight: string; top?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  span {
    font-weight: 500;
  }

  font-weight: ${(props) => props.weight};

  color: ${(props) => (props.color === "gray" ? "#7D7D7D" : "#000000")};

  margin-top: ${(props) => props.top};
`;

const TopContentBox = styled.div`
  width: 90%;
  height: auto;
  padding: 15px;

  background: rgba(255, 220, 249, 0.5);
  border-radius: 10px;

  .flexbox {
    display: flex;
  }
  .imgbox {
    position: relative;
    /* border: 1px solid red; */
    width: 150px;
    height: 50px;
  }
  img {
    position: absolute;
    top: -85px;
    right: -30px;
  }
`;

const Circle = styled.div`
  margin-right: 15px;
  width: 10px;
  height: 10px;
  min-width: 10px;
  border-radius: 50%;
  border: 2px solid #47b2ff;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: #47b2ff;
`;

const ContentsBox = styled.div`
  position: relative;
  margin-top: 35px;

  .content {
    margin-bottom: 10px;
    display: flex;

    .content-text {
      margin-bottom: 20px;
    }
  }
  .bar {
    position: absolute;
    left: 6px;
    z-index: -100;
    width: 2px;
    height: 100%;
    background-color: #47b2ff;
  }
`;

const Checkpoint = styled.div`
  margin-top: 50px;
  margin-bottom: 60px;
  padding: 20px;
  width: 90%;
  height: auto;
  background: #ffffff;
  border: 0.5px solid rgba(147, 147, 147, 0.5);
  border-radius: 5px;

  img {
    width: 80px;
    height: 80px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      color: #454545;
    }

    p:first-child {
      margin-top: 10px;
    }

    p:last-child {
      font-weight: 400;
    }
  }

  .text {
    margin-bottom: 8px;
    display: flex;
    align-items: start;
    div {
      margin-top: 4px;
      margin-right: 9px;
      width: 12px;
      height: 12px;
      min-width: 12px;
      border-radius: 50%;
      background-color: #ffdcf9;
    }

    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 350;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #000000;
    }
  }
`;
