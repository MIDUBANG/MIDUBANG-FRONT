import styled from "@emotion/styled";
import { FontBig, FontMiddle, FontGray } from "@style/font.style";
import logoPerson from "@assets/illustration/logo&person.png";
import book from "@assets/icon/book.png";
import people from "@assets/icon/people.png";
import money from "@assets/icon/money.png";

const First = () => {
  return (
    <Div>
      <Illustration src={logoPerson} />
      <FontBig margin="23px auto 0 auto">믿어방 AI 매니저</FontBig>

      <FontGray margin="8px auto 0 auto">
        믿어방 AI 매니저를 이용해
        <br /> 주거 관련 문서를 분석해보세요.
      </FontGray>

      <FontMiddle margin="79px auto 0 auto">믿어방 AI 제공 모델</FontMiddle>
      <FontGray margin="8px auto 0 auto">
        다음 세가지 문서를 분석 할 수 있습니다.
      </FontGray>

      <IconDiv>
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
      </IconDiv>
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
  margin: 50px auto 0 auto;
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
