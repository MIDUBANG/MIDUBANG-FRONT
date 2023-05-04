import styled from "@emotion/styled";
import temp from "@assets/analyze/upload/second/temp.png";

const Second = () => {
  const service = [1, 2, 3, 4];
  return (
    <Div>
      <Title margin="30px 0 0 0">
        믿어방 AI 스캐너로
        <br />
        <span>임대차계약서</span>를 <span>분석</span>해보세요
      </Title>
      <SmallText margin="19px 0 15px 0">
        나의 계약에 필요한 부분만 골라서 해설합니다.
      </SmallText>

      {service.map((s) => (
        <ServiceBox key={s}>
          <img src={temp} className="service-img" />
          <div className="text-box">
            <p className="title">복비 계산기 </p>
            <p className="sub-text">상한요율에 기반한 복비 계산 </p>
          </div>
        </ServiceBox>
      ))}
    </Div>
  );
};

export default Second;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.p<{ margin: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  text-align: center;

  color: #000000;
  margin: ${(props) => props.margin};

  span {
    color: #4880ee;
  }
`;

const SmallText = styled.p<{ margin: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  text-align: center;
  color: #7d7d7d;
  margin: ${(props) => props.margin};
`;

const ServiceBox = styled.div`
  width: 319px;
  height: 97px;
  background: #ffffff;
  border: 0.5px solid rgba(202, 202, 202, 0.33);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
  border-radius: 7px;

  display: flex;
  margin: 18px auto;
  padding: 16px 0;

  .service-img {
    width: 57px;
    height: 60px;
    margin-left: 20px;
  }

  .text-box {
    margin-left: 16px;

    .title {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 29px;
      color: #000000;
    }

    .sub-text {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 23px;
      color: #7d7d7d;

      margin-top: 5px;
    }
  }
`;
