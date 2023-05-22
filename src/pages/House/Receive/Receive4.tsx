// lib
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import UnderstandBtn from "@components/Buttons/UnderstandBtn";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import sammaryex from "@assets/house/summaryex.png";

const Receive4 = () => {
  return (
    <Div>
      <SimpleNavBar text="등기부등본 마스터" direction="up" />

      <Container>
        <Title>주요 등기 사항 요약 버전 발급</Title>

        <img src={sammaryex} />

        <ExImgText>[요약 버전 예시] </ExImgText>

        <DesText margin="20px 0 0 0">
          여기서 꿀팁! 등기가 너무 많아서 문서가 너무 복잡하진 않나요?
        </DesText>

        <DesText margin="10px 0 0 0">
          말소된 내용은 싹 빼고, 현재 남아 있는 내용을 정리해서 요약해주는
          <span>"주요 등기사항 요약"</span>도 활용해보세요.
        </DesText>

        <DesText margin="10px 0 40px 0">
          등기부등본 열람 시 <span>요약 체크</span> 박스 에 체크 하셨다면
          등기부등본의 가장 마지막 페이지에 주요 등기사항 요약(참고용) 이 함께
          표시됩니다.
        </DesText>
        <UnderstandBtn id={2} subId={4} />
      </Container>
    </Div>
  );
};

export default Receive4;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 24px;
  padding-top: 65px;
  box-sizing: border-box;
`;

const Title = styled.p`
  margin: 23px 0 17px 0;
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 38px;
  padding: 0;
`;

const ExImgText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  color: #3d3d3d;

  text-align: center;

  margin-top: 5px;
`;

const DesText = styled.p<{ margin: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  color: #000000;

  span {
    font-weight: 500;
    background-color: rgba(156, 219, 117, 0.5);
    margin-left: 3px;
  }

  margin: ${props => props.margin};
`;
