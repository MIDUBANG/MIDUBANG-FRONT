import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import wordbook from "@assets/main/wordbook.png";
import arrowwhite from "@assets/main/arrowwhite.png";

const FeatureCard3 = () => {
  const navigate = useNavigate();
  return (
    <CardDiv onClick={() => navigate("/word")}>
      <Number>3</Number>

      <div className="content">
        <Title>
          어려운 부동산 용어 <br /> 쉽게 배우자
        </Title>
        <SubTitle>
          <p>믿어방만의 Easy 해설 보기 </p>
          <img src={arrowwhite} width={5} />
        </SubTitle>
      </div>
      <img src={wordbook} className="img-wordbook" />
    </CardDiv>
  );
};

export default FeatureCard3;

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

  // 네모

  background: #f577b8;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: -5px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 13px;

  // 이미지

  .img-wordbook {
    position: absolute;
    width: 250px;

    top: 10px;
    right: -20px;
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
  color: #ef5353;
  padding-bottom: 1px;
`;

const Title = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 28px;
  color: white;
`;

const SubTitle = styled.div`
  margin-top: 10px;

  display: flex;
  align-items: center;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 14px;

  color: white;

  img {
    margin-top: 3px;
    margin-left: 10px;
  }
`;
