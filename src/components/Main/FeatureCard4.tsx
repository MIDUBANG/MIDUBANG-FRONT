import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import arrowblack from "@assets/main/arrowblack.png";
import text from "@assets/main/text.png";
const FeatureCard4 = () => {
  const navigate = useNavigate();
  return (
    <CardDiv onClick={() => navigate("/text")}>
      <Number>4</Number>

      <div className="content">
        <Title>
          믿어방 AI <br /> 문자 마법사
        </Title>
        <SubTitle>
          <p>5초만에 문자 템플릿 받기</p>
          <img src={arrowblack} width={5} />
        </SubTitle>
      </div>

      <img src={text} className="img-text" />
    </CardDiv>
  );
};

export default FeatureCard4;

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

  background: #e9e5fb;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: -5px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 13px;

  .img-text {
    position: absolute;
    width: 230px;
    //height: 147px;

    right: -20px;
    top: 62px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
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

  color: #6038d0;
  padding-bottom: 1px;
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
