// hooks
import styled from "@emotion/styled";
const CommissionBox = () => {
  return (
    <Block>
      <Title>
        <p>내가 내는 부동산 중개 수수료,</p>
        <p>내 복비는 적당할까?</p>
      </Title>

      <BarBox>
        <div className="bar-back">
          <div className="bar"></div>
          <div className="dot"></div>
          <div className="dot mydot"></div>
        </div>

        <div className="commission mycommission">
          <p className="num">40,000</p>
          <p className="text">내 복비</p>
        </div>
        <div className="commission default">
          <p className="num">60,000</p>
          <p className="text">상한 복비</p>
        </div>
      </BarBox>

      <Desc>
        나의 복비는 40,000(4만원)입니다. 이 계약의 최대 복비는
        60,000(6만원)입니다. 적정 수준의 복비로 계약하셨군요, 축하드립니다!
      </Desc>
    </Block>
  );
};

export default CommissionBox;

const Block = styled.div`
  box-sizing: border-box;
  height: auto;
  margin: 18px;
  border: 0.5px solid rgba(147, 147, 147, 0.5);
  border-radius: 5px;
`;

const Title = styled.p`
  margin-left: 26px;
  margin-top: 29px;
  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    color: #1f4ef5;
  }
`;

const BarBox = styled.div`
  margin: 28px 20px 50px 20px;
  position: relative;

  .bar-back {
    position: relative;

    width: 100%;
    height: 14px;
    background: #e8effa;
    border-radius: 10.5px;
  }

  .bar {
    position: absolute;

    width: 80%; // 길이
    height: 14px;

    background: #2d6fee;
    border-radius: 10.5px 0px 0px 10.5px;
  }

  .dot {
    position: absolute;
    width: 7px;
    height: 7px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  }

  .mydot {
    left: 80%;
  }

  .commission {
    .num {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      color: #000000;
    }

    .text {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 14px;
      color: #9a9a9a;
    }
  }

  .mycommission {
    position: absolute;
    bottom: 0;
    left: 80%;
    transform: translate(-50%, 100%);
  }

  .default {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);
  }
`;

const Desc = styled.p`
  margin: 0 20px 15px 20px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  letter-spacing: -0.05em;
`;
