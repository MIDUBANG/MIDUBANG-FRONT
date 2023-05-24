import styled from "@emotion/styled";
import temp from "@assets/analyze/upload/second/temp.png";

import calculator from "@assets/analyze/upload/second/calculator.png";
import document from "@assets/analyze/upload/second/document.png";
import law from "@assets/analyze/upload/second/law.png";
import recomend from "@assets/analyze/upload/second/recomend.png";

const Second = () => {
  const service = [
    {
      id: 1,
      title: "복비 계산기",
      description: "상한요율에 기반한 복비 계산",
      img: calculator,
    },
    {
      id: 2,
      title: "특약조항 해설",
      description: "특약 조항의 상세한 의미를 해설",
      img: document,
    },
    {
      id: 3,
      title: "효력 없는 특약 검출",
      description: "임차인에게 불리한 효력 없는 특약 ",
      img: law,
    },
    {
      id: 4,
      title: "맞춤 특약 추천",
      description: "필요한 특약 중 누락 요소 해설 ",
      img: recomend,
    },
  ];
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

      {service.map(s => (
        <ServiceBox key={s.id}>
          <div className="service-img">
            <img src={s.img} />
          </div>

          <div className="text-box">
            <p className="title">{s.title}</p>
            <p className="sub-text">{s.description}</p>
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
  margin: ${props => props.margin};

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
  margin: ${props => props.margin};
`;

const ServiceBox = styled.div`
  width: 90%;
  height: 10vh;
  background: #ffffff;
  border: 0.5px solid rgba(202, 202, 202, 0.5);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.05);
  border-radius: 7px;

  display: flex;
  align-items: center;
  margin: 10px auto;
  padding: 10px 0;

  box-sizing: border-box;

  .service-img {
    width: auto;
    height: 100%;
    margin-left: 20px;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }

  .text-box {
    margin-left: 16px;

    .title {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 1.2em;
      line-height: 29px;
      color: #000000;
    }

    .sub-text {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 0.8em;
      line-height: 23px;
      color: #7d7d7d;
    }
  }
`;
