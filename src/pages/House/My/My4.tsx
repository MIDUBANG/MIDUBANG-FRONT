// lib
import styled from "@emotion/styled";
import "react-circular-progressbar/dist/styles.css";
//component
import UnderstandBtn from "@components/Buttons/UnderstandBtn";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import house3d from "@assets/house/house3d.png";
import my4eximg from "@assets/house/을구.png";
import redbell from "@assets/house/redbell.png";

const My4 = () => {
  return (
    <Div>
      <SimpleNavBar text="등기부등본 마스터" direction="up" />

      <Container>
        <Title>을구</Title>

        <TopContentBox>
          <div className="flexbox">
            <DesText color="black" weight="300">
              소유자(집 주인)에 대한 정보가 적혀 있어요.
            </DesText>

            <div className="imgbox">
              <img src={house3d} />
            </div>
          </div>
          <DesText color="black" weight="300">
            또한 가압류, 가처분 등 <span>소유권</span>에 대한 다툼이 일어나고
            있는지도 알 수 있어요.
          </DesText>
        </TopContentBox>
        <ImgSlideBox>
          <img src={my4eximg} />
        </ImgSlideBox>

        <ContentsBox>
          <div className="bar"></div>

          <div className="content">
            <Circle />
            <div className="content-text">
              <DesText color="black" weight="400" top="-4px">
                순위 번호
              </DesText>
              <DesText color="gray" weight="300">
                갑구와 마찬가지로 해당 권리의 설정 순서대로 보여주며, 여러
                권리가 설정되어 있는 경우 순위가 높은 권리가 우선시 됩니다.{" "}
              </DesText>
            </div>
          </div>

          <div className="content">
            <Circle />
            <div className="content-text">
              <DesText color="black" weight="400" top="-4px">
                등기 목적
              </DesText>
              <DesText color="gray" weight="300">
                전세권 설정, 저당권 설정과 같은 해당 등기의 목적을 보여줍니다.{" "}
              </DesText>
            </div>
          </div>

          <div className="content">
            <Circle />
            <div className="content-text">
              <DesText color="black" weight="400" top="-4px">
                접수{" "}
              </DesText>
              <DesText color="gray" weight="300">
                등기의 접수 날짜와 접수 번호를 표시합니다.{" "}
              </DesText>
            </div>
          </div>

          <div className="content">
            <Circle />
            <div className="content-text">
              <DesText color="black" weight="400" top="-4px">
                등기 원인{" "}
              </DesText>
              <DesText color="gray" weight="300">
                등기의 원인 (설정 계약, 해지 등)과 등기 원인 발생일을
                표시합니다.
              </DesText>
            </div>
          </div>

          <div className="content">
            <Circle />
            <div className="content-text">
              <DesText color="black" weight="400" top="-4px">
                권리자 및 기타사항{" "}
              </DesText>
              <DesText color="gray" weight="300">
                해당 권리의 권리자에 대한 내용과 기타사항이 표시됩니다.
                근저당권이 설정된 경우에는 채권채고액이 얼마인지, 채무자는
                누구인지와 같은 정보가 나타납니다.
              </DesText>
              <DesText color="gray" weight="300">
                부동산 거래 시 등기부등돈상에서 을구에 아무런 표시가 되어있지
                않은 경우가 있는데, 이런 경우는 해당 부동산은 담보, 채권이 없는
                안전한 매물이라는 뜻이 됩니다.{" "}
              </DesText>
              <DesText color="gray" weight="300">
                근저당권이 설정된 매물은 채무자가 빚을 다 갚지 못하는 경우 해당
                부동산이 경매로 넘어갈 수도 있으며 을구의 권리의 경우 말소
                사항도 포함해 꼼꼼히 확인해야 합니다.{" "}
              </DesText>
            </div>
          </div>

          <Circle />
        </ContentsBox>

        <Checkpoint>
          <div className="title">
            <div>
              <p>을구 원샷 체크포인트</p>
              <p>중요한 것은?</p>
            </div>

            <img src={redbell} />
          </div>

          <div className="text">
            <div></div>
            <p>근저당권이 설정되어 있을 경우 안전한 범위 내인지 계산해보기</p>
          </div>
          <div className="text">
            <div></div>
            <p>전세권이 설정되어 있는지 확인 (전세권이 말소되지 않았을 경우)</p>
          </div>
          <div className="text">
            <div></div>
            <p>발급 일자 확인</p>
          </div>
        </Checkpoint>

        <UnderstandBtn id={3} subId={4} />
      </Container>
    </Div>
  );
};

export default My4;

const Div = styled.div`
  width: 100%;
  height: 100%;

  span {
    font-weight: 500;
  }
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
  line-height: 20px;
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

  background: rgba(255, 243, 137, 0.5);
  border-radius: 10px;

  .flexbox {
    display: flex;
  }
  .imgbox {
    position: relative;
    /* border: 1px solid red; */
    width: 150px;
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
    margin-bottom: 8px;
    display: flex;
    align-items: start;
    div {
      margin-top: 4px;
      margin-right: 9px;
      width: 12px;
      height: 12px;
      min-width: 12px;
      border-radius: 50%;
      background-color: rgba(242, 212, 104, 1);
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
