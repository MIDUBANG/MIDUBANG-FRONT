// lib
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import UnderstandBtn from "@components/Buttons/UnderstandBtn";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import CustomAccordion from "@components/House/CustomAccordion";
// asset
import temp1 from "@assets/house/temp1.png";

const Check2 = () => {
  // 여기 checkData 따로 관리하기

  const [isComplete, setIsComplete] = useState(false);
  const [checkData, setCheckData] = useState([
    {
      id: "0",
      title: "집 소유자와 현재 집주인 일치 여부 확인 ",
      content:
        "계약하려는 부동산의 주소와 등기부등본에 기재되어 있는 소재지가 일치되어 있는지 확인하세요!",
      checked: false,
    },
    {
      id: "1",
      title: "현재의 소유자 확인 ",
      content:
        "계약하려는 부동산의 주소와 등기부등본에 기재되어 있는 소재지가 일치되어 있는지 확인하세요!",
      checked: false,
    },
    {
      id: "2",
      title: "신탁 등기",
      content:
        "계약하려는 부동산의 주소와 등기부등본에 기재되어 있는 소재지가 일치되어 있는지 확인하세요!",
      checked: false,
    },
    {
      id: "",
      title: "경매",
      content:
        "계약하려는 부동산의 주소와 등기부등본에 기재되어 있는 소재지가 일치되어 있는지 확인하세요!",
      checked: false,
    },
  ]);

  /** 확인 버튼 누르기 */
  const _handleUpdateCheckData = (id: string) => {
    setCheckData(
      checkData.map(c => (c.id === id ? { ...c, checked: !c.checked } : c)),
    );
  };

  /** 모두 체크된 경우만 이해했어요 버튼 활성화*/
  useEffect(() => {
    let checkedCount = checkData.filter(c => c.checked === true).length;

    if (checkedCount === checkData.length) {
      setIsComplete(true);
    } else {
      setIsComplete(false);
    }
  }, [checkData]);

  return (
    <Div>
      <SimpleNavBar text="등기부등본 마스터" direction="up" />

      <Container>
        <Title margin="0">갑구 - CHECKPOINT</Title>
        <DesText>갑구에서 확인해야 할 부분들입니다.</DesText>

        <img src={temp1} className="main-img" />

        <Title margin="20px 0 0 0">스스로 확인해보기</Title>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <DesText>우리집 등기부등본을 보며 체크해봅시다</DesText>
          <CountBox>
            {checkData.filter(c => c.checked === true).length} /{" "}
            {checkData.length}
          </CountBox>
        </div>

        <CustomAccordion
          inputData={checkData}
          _handleUpdateCheckData={_handleUpdateCheckData}
        />
        <UnderstandBtn id={4} subId={3} complete={isComplete} />
      </Container>
    </Div>
  );
};

export default Check2;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 75px;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-sizing: border-box;

  .main-img {
    margin-top: 10px;
  }
`;

const Title = styled.p<{ margin: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #000000;
  margin: ${props => props.margin};
`;

const DesText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  color: #7d7d7d;

  margin-top: 5px;
`;

const CountBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 52px;
  height: 22px;
  background: rgba(126, 126, 126, 0.3);
  border-radius: 13px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;

  padding-bottom: 1px;
`;
