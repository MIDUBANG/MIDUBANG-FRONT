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
      <Title margin="67px 0 0 0">믿어방 AI 매니저</Title>

      <SmallText margin="6px 0 0 0">
        믿어방 AI 매니저를 이용해
        <br /> 주거 관련 문서를 분석해보세요.
      </SmallText>

      <Title margin="79px 0 0 0">제공 해설</Title>
      <SmallText margin="9px 0 0 0">다음 세가지 분석 할 수 있습니다.</SmallText>

      <p>법적 효력이 없는 특약</p>
      <p>꼭 필요한 특약</p>
      <p>주의해아하는 특약</p>

      <p>복비 계산</p>

      {/* <IconDiv>
        <Icon>
          <img src={book} />
          <p>
            임대차계약서 <br />
            특약사항
          </p>
        </Icon>
        <Icon>
          <img src={people} />
          <p>
            등기부등본
            <br />
            갑구
          </p>
        </Icon>
        <Icon>
          <img src={money} />
          <p>
            등기부등본 <br />
            을구
          </p>
        </Icon>
      </IconDiv> */}
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
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  color: #000000;
  margin: ${(props) => props.margin};
`;

const SmallText = styled.p<{ margin: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
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
