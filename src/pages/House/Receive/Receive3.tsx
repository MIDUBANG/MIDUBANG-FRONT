// lib
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import UnderstandBtn from "@components/Buttons/UnderstandBtn";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import offimg1 from "@assets/house/receive/offimg1.png";
import offimg2 from "@assets/house/receive/offimg2.png";
import offimg3 from "@assets/house/receive/offimg3.png";
import offimg4 from "@assets/house/receive/offimg4.png";
import offimg5 from "@assets/house/receive/offimg5.png";
import offimg6 from "@assets/house/receive/offimg6.png";
import offimg7 from "@assets/house/receive/offimg7.png";

const Receive3 = () => {
  return (
    <Div>
      <SimpleNavBar text="등기부등본 마스터" direction="up" />

      <Container>
        <Title>발급 방법 - 오프라인</Title>

        <img src={offimg1} className="img1" />

        <ExImgText>[등기부등본 실물]</ExImgText>

        <DesText margin="10px 0 20px 0">
          부동산 등기부등본은 세무서 외에도 가까운 구청, 주민센터 등
          <span>무인발급기</span>가 설치된 곳에서 발급 받으실 수도 있습니다.
        </DesText>

        <img src={offimg2} className="img1" />
        <ExImgText>[무인 통합 민원 발급기]</ExImgText>
        <DesText margin="10px 0 20px 0">
          주민센터에 설치된 무인 민원 발급기입니다.
          <br /> 정식 명칭은 <span>"무인민원 발급창구"</span> 입니다!
          무인발급기라서 따로 가져갈 것은 없습니다. 정확한 주소만 알면 됩니다.
        </DesText>

        <img src={offimg3} className="img1" />
        <ExImgText>[출력하려는 문서 선택]</ExImgText>

        <DesText margin="10px 0 20px 0">
          부동산 등기부등본을 출력하려면 메인 화면에서{" "}
          <span>"부동산 등기사항 증명서"</span>
          메뉴를 선택합니다.
        </DesText>

        <img src={offimg4} className="img1" />
        <ExImgText>[부동산 종류 선택]</ExImgText>

        <DesText margin="10px 0 20px 0">
          부동산 종류에 맞게 선택해주세요.
        </DesText>

        <img src={offimg5} className="img1" />
        <ExImgText>[주소 입력 단계]</ExImgText>

        <DesText margin="10px 0 20px 0">
          주소를 입력해주세요. 도로명 주소와 지번 주소 모두 가능합니다.
        </DesText>

        <img src={offimg6} className="img1" />
        <ExImgText>[발급통수, 수수료 확인]</ExImgText>

        <DesText margin="10px 0 20px 0">
          몇 부 출력할지 선택해주세요. 수수료는 1 통 당 <span>1,000원</span>
          입니다. 이때 “토지+건물”을 선택했다면 토지와 건물 각각 1통씩
          계산됩니다.
        </DesText>

        <img src={offimg7} className="img1" />
        <ExImgText>[수수료 지급]</ExImgText>
        <DesText margin="10px 0 50px 0">
          마지막으로 발급 수수료를 지불해주세요. 발급 버튼을 누르면 끝입니다.
          현금 결제만 가능한 발급기도 있으니, 꼭 <span>현금</span> 을 챙기시길
          바랍니다!{" "}
        </DesText>

        <UnderstandBtn id={2} subId={3} />
      </Container>
    </Div>
  );
};

export default Receive3;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 69px;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 24px;

  box-sizing: border-box;

  .img1 {
    margin-top: 18px;
  }
`;

const Title = styled.p`
  /* margin: 23px auto 0 30px; */
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
