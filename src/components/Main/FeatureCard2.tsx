import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

import paper2 from "@assets/main/paper2.png";
import pin from "@assets/main/pin2.png";
import arrowwhite from "@assets/main/arrowwhite.png";

const FeatureCard2 = () => {
  const navigate = useNavigate();
  return (
    <CardDiv onClick={() => navigate("/analyze/upload")}>
      <Number>2</Number>

      <div className="content">
        <Title>
          임대차계약서 <br /> 특약 조항 해설 보기
        </Title>
        <SubTitle>
          <p>10초만에 특약 조항 분석하기</p>
          <img src={arrowwhite} width={5} />
        </SubTitle>
      </div>
      <img src={pin} className="img-pin" />
      <img src={paper2} className="img-paper" />
    </CardDiv>
  );
};

export default FeatureCard2;

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
  background: #4880ee;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: -5px 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 13px;

  // 이미지

  .img-pin {
    position: absolute;
    width: 60px;

    top: 77px;
    left: 10px;
  }

  .img-paper {
    position: absolute;
    width: 220px;
    height: 170px;

    right: -31px;
    top: 42px;

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
  color: #1f4ef5;
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
