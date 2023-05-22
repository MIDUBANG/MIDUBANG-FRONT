// lib
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import UnderstandBtn from "@components/Buttons/UnderstandBtn";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import house3d from "@assets/house/house3d.png";
import my2eximg from "@assets/house/표제부.png";
import redbell from "@assets/house/redbell.png";

const My2 = () => {
  return (
    <Div>
      <SimpleNavBar text="등기부등본 마스터" direction="up" />

      <Container>
        <Title>표제부</Title>

        <TopContentBox>
          <div className="flexbox">
            <DesText color="black" weight="300">
              표제부는 등기부에서 해당 부동산에 대한 정보를 보여주고 있습니다.
            </DesText>
            <div className="imgbox">
              <img src={house3d} />
            </div>
          </div>

          <DesText color="black" weight="300">
            표제부는 표시번효, 접수, 소재 지번 및 건물 번호, 건물 내역, 등기
            원인 및 기타사항 이 5가지로 구분됩니다.{" "}
          </DesText>
        </TopContentBox>
        <ImgSlideBox>
          <img src={my2eximg} />
        </ImgSlideBox>

        <ContentsBox>
          <div className="bar"></div>

          <div className="content">
            <Circle />
            <div className="content-text">
              <DesText color="black" weight="400" top="-4px">
                표시번호
              </DesText>
              <DesText color="gray" weight="300">
                해당 부동산을 등기에 올린 순서대로 보여줍니다.
              </DesText>
            </div>
          </div>

          <div className="content">
            <Circle />
            <div className="content-text">
              <DesText color="black" weight="400" top="-4px">
                접수
              </DesText>
              <DesText color="gray" weight="300">
                해당 부동산이 등기 접수 된 날짜를 뜻합니다.{" "}
              </DesText>
            </div>
          </div>

          <div className="content">
            <Circle />
            <div className="content-text">
              <DesText color="black" weight="400" top="-4px">
                소재 지번 및 건물 번호{" "}
              </DesText>
              <DesText color="gray" weight="300">
                해당 부동산의 주소지를 보여줍니다.{" "}
              </DesText>
            </div>
          </div>

          <div className="content">
            <Circle />
            <div className="content-text">
              <DesText color="black" weight="400" top="-4px">
                건물 내역
              </DesText>
              <DesText color="gray" weight="300">
                건물의 구조를 설명하여 여러 층으로 이루어진 건물의 겨우 몇
                층짜리 건물인지, 건물의 목적은 무엇인지, 층마다의 면적이
                얼마인지에 대한 사항을 보여줍니다.{" "}
              </DesText>
            </div>
          </div>

          <div className="content">
            <Circle />
            <div className="content-text">
              <DesText color="black" weight="400" top="-4px">
                등기 원인 및 기타 사항{" "}
              </DesText>
              <DesText color="gray" weight="300">
                말 그대로 등기를 한 이유를 보여주며 소재지의 지번 변경 혹은 기타
                다른 변경 사항이 생기면 이를 반영해줍니다.
              </DesText>
            </div>
          </div>

          <div className="content">
            <Circle />
            <div className="content-text">
              <DesText color="black" weight="400" top="-4px">
                지목, 면적
              </DesText>
              <DesText color="gray" weight="300">
                건물이 아니고 토지의 등기부등본일 경우 건물 내역이 표시되는
                대신에 지목과 면적이 표시됩니다. 여기서 지목은 토지의 사용
                용도(전, 답, 대지 등)를 뜻하며 면적은 해당 토지의 면적을
                뜻합니다.
              </DesText>
            </div>
          </div>
          <Circle />
        </ContentsBox>

        <Checkpoint>
          <div className="title">
            <div>
              <p>표제부 원샷 체크포인트</p>
              <p>중요한 것은?</p>
            </div>

            <img src={redbell} />
          </div>

          <div className="text">
            <div></div>
            <p>
              계약하려는 부동산의 주소와 등기부등본에 기재되어 있는 소재지가
              일치되어 있는지 확인
            </p>
          </div>
          <div className="text">
            <div></div>
            <p>
              계약하려는 매물이 아파트와 같은 집합 건물이라면 대지권도 확인 필요
            </p>
          </div>
          <div className="text">
            <div></div>
            <p>발급 일자 확인</p>
          </div>
        </Checkpoint>

        <UnderstandBtn id={3} subId={2} />
      </Container>
    </Div>
  );
};

export default My2;

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
  margin: 30px auto 5px 20px;
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 38px;
  padding: 0;
`;

const ImgSlideBox = styled.div`
  width: 100%;
  overflow-x: scroll;
  margin-top: 22px;
`;
const ExImgText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  color: #3d3d3d;
`;

const DesText = styled.p<{ color: string; weight: string; top?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 22px;
  span {
    font-weight: 500;
  }

  font-weight: ${props => props.weight};

  color: ${props => (props.color === "gray" ? "#7D7D7D" : "#000000")};

  margin-top: ${props => props.top};
`;

const TopContentBox = styled.div`
  width: 100%;
  height: auto;
  padding: 15px;

  background: rgba(176, 229, 236, 0.5);
  border-radius: 10px;

  .flexbox {
    display: flex;
  }
  .imgbox {
    position: relative;
    //border: 1px solid red;
    width: 200px;
    height: 50px;
  }
  img {
    position: absolute;
    top: -85px;
    right: -30px;
  }
`;

const Circle = styled.div`
  margin-right: 15px;
  width: 10px;
  height: 10px;
  min-width: 10px;
  border-radius: 50%;
  border: 2px solid #47b2ff;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;

  color: #47b2ff;
`;

const ContentsBox = styled.div`
  position: relative;
  margin-top: 35px;

  .content {
    margin-bottom: 10px;
    display: flex;

    .content-text {
      margin-bottom: 20px;
    }
  }
  .bar {
    position: absolute;
    left: 4px;
    z-index: -100;
    width: 2px;
    height: 100%;
    background-color: #47b2ff;
  }
`;

const Checkpoint = styled.div`
  margin-top: 50px;
  margin-bottom: 60px;
  padding: 20px;
  width: 100%;
  height: auto;
  background: #ffffff;
  border: 0.5px solid rgba(147, 147, 147, 0.5);
  border-radius: 5px;

  img {
    width: 80px;
    height: 80px;
  }

  .title {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;

    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 26px;
      color: #454545;
    }

    p:first-child {
      margin-top: 10px;
    }

    p:last-child {
      font-weight: 400;
    }
  }

  .text {
    display: flex;
    align-items: start;

    margin-bottom: 5px;
    div {
      margin-top: 4px;
      margin-right: 9px;
      width: 12px;
      height: 12px;
      min-width: 12px;
      border-radius: 50%;
      background-color: #ef5da8;
    }

    p {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 350;
      font-size: 14px;
      line-height: 20px;
      display: flex;
      align-items: center;
      color: #000000;
    }
  }
`;
