import styled from "@emotion/styled";
import { FontBig, FontMiddle, FontGray } from "@style/font.style";
import logoPerson from "@assets/illustration/logo&person.png";
import book from "@assets/icon/book.png";
import people from "@assets/icon/people.png";
import money from "@assets/icon/money.png";

import illustration from "@assets/analyze/upload/first/illustration.png";

const First = () => {
  return (
    <Div>
      <Illustration src={illustration} />
      <Title margin="67px 0 0 0">임대차계약서 분석 서비스 </Title>
      <SmallText margin="33px 0 0 0">
        처음 하는 부동산 계약, <br /> 불리한 계약이 아닌지 불안하다면?
      </SmallText>

      <SmallText margin="33px 0 0 0">
        믿어방 AI 스캐너를 이용해 <br /> 임대차계약서를 분석해보세요.{" "}
      </SmallText>
    </Div>
  );
};

export default First;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Illustration = styled.img`
  width: 198px;
  margin: 35px auto 0 auto;
  transform: translate(-11px, 0);
`;

const Title = styled.p<{ margin: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;
  /* identical to box height */

  text-align: center;

  margin: ${(props) => props.margin};
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

const IconDiv = styled.div`
  margin: 0 50px;
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin-top: 8px;

    text-align: center;

    font-family: "Noto Sans KR", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;
  }
`;
