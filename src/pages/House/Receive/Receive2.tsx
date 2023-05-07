// lib
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import UnderstandBtn from "@components/Buttons/UnderstandBtn";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import laptop from "@assets/house/receive/laptop.png";
import appImg1 from "@assets/house/법원.png";
import appImg2 from "@assets/house/등기소.png";
import searchbar from "@assets/house/searchbar.png";
import img2 from "@assets/house/receive/img2.png";
import img3 from "@assets/house/receive/img3.png";
import img4 from "@assets/house/receive/img4.png";
import img5 from "@assets/house/receive/img5.png";

import triangle from "@assets/house/triangle.png";

const Receive2 = () => {
  return (
    <Div>
      <SimpleNavBar text="등기부등본 마스터" direction="up" />

      <Container>
        <Title>발급 방법 - 온라인</Title>

        <Img src={laptop} />

        <DesText bold={false}>
          등기부등본은 대법원 인터넷 등기소 사이트에서 손 쉽게 열람 할 수
          있습니다. 스마트폰 등 모바일 기기를 이용하여 조회도 가능합니다.
        </DesText>

        <Title>대법원 인터넷 등기소 </Title>

        <ImgsBox>
          <img src={appImg1} />
          <img src={appImg2} />
        </ImgsBox>

        <ExImgText>웹 또는 모바일 어플리케이션 </ExImgText>

        <DesText bold={false}>
          발급 방법은 다음과 같습니다. 차근차근 순서를 따라서 우리 집
          등기부등본을 열람해봅시다.
        </DesText>

        <ContentsBox>
          <div className="bar"></div>
          <RightContent>
            <Circle>1</Circle>
            <div className="text-content">
              <DesText bold={true}>
                대법원 인터넷 등기소 홈페이지에 접속한다.
              </DesText>
              <DesText bold={false}>http://www.iros.go.kr</DesText>

              <img src={searchbar} />
            </div>
          </RightContent>

          <RightContent>
            <Circle>2</Circle>
            <div className="text-content">
              <DesText bold={true}>
                메인 페이지에서 열람하기 또는 발급하기 중 클릭
              </DesText>

              <img src={img2} className="ui-img" />

              <div className="flex">
                <img src={triangle} className="triangle" />
                <DesText bold={false}>열람 수수료 : 700원</DesText>
              </div>
              <div className="flex">
                <img src={triangle} className="triangle" />
                <DesText bold={false}>발급 수수료 : 1000원</DesText>
              </div>
              <div className="flex">
                <img src={triangle} className="triangle" />
                <DesText bold={false}>
                  서류로 낼 목적이라면 <span> ‘발급하기’</span>, 내용 확인만
                  한다면
                  <span>‘열람하기’</span>로 선택
                </DesText>
              </div>
            </div>
          </RightContent>

          <RightContent>
            <Circle>3</Circle>
            <div className="text-content">
              <DesText bold={true}>
                부동산 구분, 시/도, 주소 입력 후 검색 클릭
              </DesText>
              <DesText bold={false}>
                1) 부동산 구분 : 아파트, 오피스텔 등은 집합건물 선택
              </DesText>
              <DesText bold={false}>
                2) 시/도 : 해당 부동산이 있는 지역 선택
              </DesText>
              <DesText bold={false}>
                3) 주소 : 아파트 이름과 동/호수 검색 (예시) @@아파트 101동
                1004호
              </DesText>
              <img src={img3} className="ui-img" />

              <DesText bold={false}>
                발급하기 화면에서 부동산 구분(토지, 건물, 집합건물), 주소 등 각
                항목을 입력한 후 ‘검색’ 항목을 클릭한다.
              </DesText>
            </div>
          </RightContent>

          <RightContent>
            <Circle>4</Circle>
            <div className="text-content">
              <DesText bold={true}>
                검색을 클릭하면 원하는 소재지의 부동산의 표시가 뜬다.
              </DesText>
              <img src={img4} className="ui-img" />
            </div>
          </RightContent>

          <RightContent>
            <Circle>5</Circle>
            <div className="text-content">
              <DesText bold={true}>
                수수료 결제 후 열람하기 또는 발급하기
              </DesText>
              <DesText bold={false}>
                부동산의 표시가 맞는지 확인한 후 ‘결제’항목을 클릭해 결제한다.
                카카오페이 같은 간편 결제도 가능합니다.{" "}
              </DesText>
              <img src={img5} className="ui-img" />

              <DesText bold={false}>
                발급확인은 발급일로부터 3개월 이내 5회까지 가능합니다. 등기기록
                기재 변동으로 인하여 발급된 등기사항증명서와 확인 시 공시 내용이
                다를 수 있음을 유의해야 합니다.
              </DesText>
              <DesText bold={false}>
                1년 24시간 365일 언제 어디서나 확인할 수 있으니, 어렵게 생각하지
                마세요. 부동산 거래할 때, 등기부등본 발급 방법과 읽는 방법을 꼭
                확인하시고 내 소중한 권리를 지키시기 바랍니다.
              </DesText>
            </div>
          </RightContent>

          <Circle>끝</Circle>
        </ContentsBox>

        <UnderstandBtn id={2} subId={2} />
      </Container>
    </Div>
  );
};

export default Receive2;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 69px;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;
`;

const Img = styled.img`
  width: 219px;
  height: auto;
  margin: 20px auto 22px auto;
`;

const ImgsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 27px auto 0 auto;
`;
const Title = styled.p`
  /* margin: 23px auto 0 30px; */
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 38px;
  padding: 0;

  margin-bottom: 30px;
`;

const ExImgText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  color: #3d3d3d;

  text-align: center;
  margin: 22px 0 22px 0;
`;

const DesText = styled.p<{ bold: boolean | false }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  margin-bottom: 20px;

  span {
    font-weight: 500;
    background-color: rgba(156, 219, 117, 0.5);
  }

  font-weight: ${props => (props.bold ? 700 : 400)};
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  min-width: 30px;
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
  .bar {
    position: absolute;
    left: 15px;
    z-index: -100;
    width: 1px;
    height: 100%;
    background-color: #47b2ff;
  }

  margin-bottom: 64px;
`;

const RightContent = styled.div`
  display: flex;

  margin-bottom: 37px;
  .text-content {
    margin-left: 9px;
  }

  .flex {
    display: flex;
    justify-content: start;

    img {
      width: auto;
      height: 14px;
      margin-top: 6px;
      margin-right: 5px;
    }
  }

  .ui-img {
    width: 100%;
    height: auto;

    margin-bottom: 20px;
  }
`;
