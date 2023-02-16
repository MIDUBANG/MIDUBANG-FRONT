import styled from "@emotion/styled";

import ill from "@assets/illustration/loadingPerson.png";
import alert from "@assets/icon/alert.svg";

const ResultBox = () => {
  const description =
    "주택임대차보호법에서 보호하는 임차인의 거주 기간은 2년입니다.@주택임대차보호법 제 4조에 따르면 기간을 정하지 않거나 2년 미만으로 정한 임대차 계약 기간은 그 기간을  2년으로 봅니다.";

  let desArray = description.split("@");
  return (
    <Block>
      <img src={ill} />

      <Title>
        <img src={alert} />
        <p>"세입자는 1년 뒤 퇴거한다."</p>
      </Title>

      <div>
        {desArray.map((d) => (
          <p>{d}</p>
        ))}
      </div>

      <NewsBtn>기사 보기</NewsBtn>
    </Block>
  );
};

export default ResultBox;

const Block = styled.div`
  margin: 0 auto;
  width: 90%;
  height: auto;
  border: 0.5px solid rgba(147, 147, 147, 0.5);
  border-radius: 10px;

  box-sizing: border-box;
  padding: 0 23px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NewsBtn = styled.div`
  margin-top: 100px;
  margin-bottom: 40px;
`;
