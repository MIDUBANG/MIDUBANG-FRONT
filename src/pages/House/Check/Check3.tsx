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

const Check3 = () => {
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
      checkData.map((c) => (c.id === id ? { ...c, checked: !c.checked } : c))
    );
  };

  /** 모두 체크된 경우만 이해했어요 버튼 활성화*/
  useEffect(() => {
    let checkedCount = checkData.filter((c) => c.checked === true).length;

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
        <Title>을구 - CHECKPOINT</Title>
        <DesText>을구에서 확인해야 할 부분들입니다.</DesText>

        <img src={temp1} />

        <CustomAccordion
          inputData={checkData}
          _handleUpdateCheckData={_handleUpdateCheckData}
        />
        <UnderstandBtn id={4} subId={3} complete={isComplete} />
      </Container>
    </Div>
  );
};

export default Check3;

const Div = styled.div`
  width: 100%;
  height: 100%;

  img {
    margin-top: 10px;
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
  margin: 23px auto 0 0;
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 38px;
  padding: 0;
`;

const ExImgText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  color: #3d3d3d;
`;

const DesText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  color: #000000;

  span {
    font-weight: 500;
  }
`;
