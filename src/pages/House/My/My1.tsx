// lib
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import UnderstandBtn from "@components/Buttons/UnderstandBtn";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import my1 from "@assets/house/my/my1.png";
import my2 from "@assets/house/my/my2.png";
import fyojeabu from "@assets/house/my/표제부.png";
import gabgu from "@assets/house/my/갑구.png";
import ealgu from "@assets/house/my/을구.png";

const My1 = () => {
  return (
    <Div>
      <SimpleNavBar text="등기부등본 마스터" direction="up" />

      <Container>
        <Title>내 집의 등기부등본 읽기</Title>

        <img src={my1} />

        <DesText margin="10px 0 0 0"> 등기부등본을 발급 받으셨나요?</DesText>

        <DesText margin="10px 0 0 0">
          어려운 말도 많고 간간이 빨간 줄도 그어져 있어서 당황스러울 수
          있는데요, 알고 보면 그렇게 어렵지 않습니다.
        </DesText>

        <DesText margin="10px 0 0 0">
          이번 파트에서는 등기부등본의 큰 틀을 이해해봅시다.
        </DesText>

        <Title>등기부등본의 구성</Title>

        <img src={my2} />

        <DesText margin="20px 0 0 0">
          등기부등본은 크게 <span>4가지</span> 파트로 나뉘어져 있습니다.
        </DesText>

        <Title>1. 표제부</Title>
        <img src={fyojeabu} />

        <DesText margin="10px 0 0 0">
          아파트는 집합건물이므로 토지 등기부등본이나 건물 등기부등본과는
          표제부가 다르며, 갑구나 을구는 동일합니다. <br /> <br />
          아파트 등기부등본은 표제부가 2개(1동의 건물과 전유부분)로 구분되며, 각
          표제부에는 건물의 표시 다음으로 해당 건물의 대지권이 표시됩니다.
          <br /> <br />
          1. <span>부동산의 종류 확인</span> : 집합건물/토지/건물 중 하나 <br />{" "}
          <br />
          2. <span>1동 건물에 대한 표제부</span> : 소재지번, 건물명칭, 번호,
          건물내역, 등기원인 및 기타사항 <br /> <br />
          3. <span>1동 건물에 대한 대지권 표시</span> <br /> <br />
          4. <span>전유 부분에 대한 표제부</span> : 건물번호, 건물내역, 등기원인
          및 기타사항 <br /> <br />
          5. <span>전유부분에 대한 대지권 표시</span>
        </DesText>

        <Title>2. 갑구</Title>
        <img src={gabgu} />
        <DesText margin="10px 0 0 0">
          소유권에 관한 사항은 부동산 등기부등본의 갑구에 기재되어 있습니다.
          소유권은 보존등기와 이전등기로 나뉘고, 보존등기는 건물을 신축한 후 맨
          처음 소유권을 등기할 때 하는 것이고, 이전등기는 말 그대로 소유권이
          다른 사람에게 넘어갈 때 마다 기입하는 것입니다. <br />
          <br />
          부동산 등기부등본 갑구는 아래와 같이 구성됩니다. <br />
          <br />
          1. <span>순위번호</span> : 순위번호는 갑구에 기입된 각 등기의 순위를
          말하며, 만약 새로 등기를 해야 하는데, 순위를 유지해야 한다면 새로
          번호를 부여 받는 주등기가 아닌 기존 번호에 첨부되는 형식의 부기등기로
          해야 합니다.
          <br /> <br />
          2. <span>등기목적</span> : 소유권보전, 소유권이전, 가압류 등의 등기
          명칭을 기입합니다. 접수 : 갑구와 을구 간의 각 등기는 설정일자를
          기준으로 우선 순위를 판단하는데, 설정일자란 등기소에 접수된 접수일자를
          말합니다. 따라서 [접수] 란에 기재된 일자를 기준으로 각 권리의 우선
          순위를 매깁니다.
          <br /> <br />
          3. <span>등기원인</span> : 매매계약, 법원의 결정 등 원인을 기재합니다.{" "}
          <br />
          <br />
          4. <span>권리자 및 기타사항</span> : 소유자, 채권자, 권리자, 청구금액
          등을 기입합니다.
        </DesText>

        <Title>3. 을구</Title>
        <img src={ealgu} />
        <DesText margin="20px 0 0 0">
          을구는 <span>소유권 이외의 권리관계</span>를 나타내고 있는데,
          담보대출을 통한 근저당권의 채권최고액 설정, 전세권, 지역권 등이
          대표적입니다.
          <br />
          <br />
          다음은 을구의 등기 목적의 대표적인 권리 설명입니다. <br />
          <br />
          1. <span>근저당권</span> : 발생 가능한 채권을 장래의 결산기에 일정
          한도액까지 담보하기 위해 부동산에 설정하는 저당권, 즉 부동산을
          담보로한 '융자'
          <br />
          <br />
          2. <span>전세권</span> : 전세금을 지급하고 타임의 부동산을 점유하여 그
          부동산의 용도에 좇아 사용 및 수익하며, 부동산 전부에 대해 후순위권리자
          기타 채권자보다 전세금의 우선변제를 받을 권리
          <br />
          <br />
          3. <span>임차권</span> : 상대방에게 목적물을 사용 및 수익할 것을
          약정하고, 임차료를 지급할 것을 약적함으로써 생기는 권리 <br />
          <br />
          4. <span>지상권</span> : 토지 소유주가 다른 경우, 해당 토지 위에
          토지를 사용하는 권리 <br />
          <br />
          5. <span>지역권</span> : 해당 부동산을 통행 및 용수로 사용할 수 있는
          권리 <br />
          <br />
        </DesText>
        <Title>4. 요약</Title>
        <img src={fyojeabu} />
        <DesText margin="20px 0 40px 0">
          부동산등기부등본 요약사항에는 현재 <span>살아 있는 권리</span>의
          내용만이 표기 되어 있어서 복잡한 부동산등기부등본도 간단하게 요약해서
          보실 수 있습니다. <br />
          앞으로 부동산등기부등본을 열람 하실 때는 꼭 요약을 체크 하셔서 열람
          하시면 좋은 참고 자료가 될 겁니다. <br />
          마지막으로 발급용으로 발급 시에는 요약본을 제공하지 않습니다. 주요
          등기사항 요약은 참고용으로만 사용 가능 합니다.
        </DesText>

        <UnderstandBtn id={3} subId={1} />
      </Container>
    </Div>
  );
};

export default My1;

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
  margin: 39px 0 15px 0;
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
`;

const DesText = styled.p<{ margin: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 22px;
  color: #000000;

  span {
    font-weight: 500;
    background-color: rgba(156, 219, 117, 0.5);
    margin-left: 3px;
  }

  margin: ${props => props.margin};
`;
