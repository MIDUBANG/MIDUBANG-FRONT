import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import paper1 from "@assets/main/paper1.png";
import house1 from "@assets/main/house1.png";
import arrowblack from "@assets/main/arrowblack.png";
import houseshadow from "@assets/main/houseshadow.png";
const FeatureCard = () => {
  const navigate = useNavigate();
  return (
    <CardDiv onClick={() => navigate("/house")}>
      <Number>1</Number>

      <div className="content">
        <Title>
          우리집 등기부등본 <br /> A to Z 분석
        </Title>
        <SubTitle>
          <p>우리집은 위험 매물일까?</p>
          <img src={arrowblack} width={5} />
        </SubTitle>
      </div>

      <img src={paper1} className="img-paper" />
      <img src={house1} className="img-house" />
      <img src={houseshadow} className="img-house-shadow" />
    </CardDiv>
  );
};

export default FeatureCard;

const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 31px;

  position: relative;
  padding: 18px 0 25px 22px;
  box-sizing: border-box;

  position: relative;
  min-width: 244px;
  height: 346px;

  background: #ffe5a5;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: -5px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 13px;

  .img-paper {
    position: absolute;
    width: 60px;
    height: 82px;

    left: 11px;
    top: 115px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  }

  .img-house {
    position: absolute;
    width: 230px;

    right: -35px;
    z-index: 1;
  }

  .img-house-shadow {
    position: absolute;
    width: 250px;

    top: 2px;
    right: -45px;
  }
`;

const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #ffffff;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #c35212;
`;

const Title = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #000000;
`;

const SubTitle = styled.div`
  margin-top: 10px;

  display: flex;
  align-items: center;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  color: #000000;

  img {
    margin-top: 3px;
    margin-left: 10px;
  }
`;
