import styled from "@emotion/styled";
import illustration from "@assets/analyze/upload/first/illustration.png";

const First = () => {
  return (
    <Div>
      <Illustration src={illustration} />
      <Title margin="10vh 0 0 0">임대차계약서 분석 서비스 </Title>
      <SmallText margin="5vh 0 0 0">
        처음 하는 부동산 계약, <br /> 불리한 계약이 아닌지 불안하다면?
      </SmallText>

      <SmallText margin="5vh 0 0 0">
        믿어방 AI 스캐너를 이용해 <br /> 임대차계약서를 분석해보세요.
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
  width: 30vh;
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

  margin: ${props => props.margin};
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
