import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";

import arrowblack from "@assets/main/arrowblack.png";
import pencil from "@assets/main/pencil.png";
import checkbook from "@assets/main/checkbook.png";

const FeatureCard6 = () => {
  const navigate = useNavigate();
  return (
    <CardDiv onClick={() => navigate("/house")}>
      <Number>6</Number>

      <div className="content">
        <Title>
          자취방 구하기 <br /> A to Z 체크리스트
        </Title>
        <SubTitle>
          <p>야무지게 자취방 구하려면</p>
          <img src={arrowblack} width={5} />
        </SubTitle>
      </div>

      <img src={pencil} className="img-pencil" />
      <img src={checkbook} className="img-checkbook" />
    </CardDiv>
  );
};

export default FeatureCard6;

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

  background: #9ee2d4;
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  box-shadow: -5px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 13px;

  .img-pencil {
    position: absolute;
    width: 50px;

    top: 40px;
    left: 49px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15));
  }

  .img-checkbook {
    position: absolute;
    width: 200px;

    top: 30px;
    right: -22px;
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
  color: #538e59;
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
