// hooks
import styled from "@emotion/styled";

type Props = {
  answer_commission: number | any;
  my_commission: number | any;
  is_expensive: boolean | any;
};
const CommissionBox = ({
  answer_commission,
  my_commission,
  is_expensive,
}: Props) => {
  return (
    <Block>
      <Title>
        <p>이 계약의 최대 중개 보수</p>
        <p>내 복비는 적당할까?</p>
      </Title>

      <BarBox is_expensive={is_expensive}>
        <div className="bar-back">
          <div className="bar"></div>
          <div className="dot"></div>
          <div className="dot mydot"></div>
        </div>

        <div className="commission mycommission">
          <p className="num">{my_commission}</p>
          <p className="text">내 복비</p>
        </div>

        <div className="commission default">
          <p className="num">{answer_commission}</p>
          <p className="text">상한 복비</p>
        </div>
      </BarBox>

      <Desc>
        {is_expensive
          ? `나의 복비 ${my_commission}만원은 이 계약의 최대 복비인
        ${answer_commission}만원을 초과한 금액입니다.`
          : `나의 복비는 ${my_commission}만원 입니다. 이 계약의 최대 복비는
        ${answer_commission}만원입니다.`}

        {is_expensive
          ? "바가지를 쓴 것은 아닌지 확인 할 필요가 있습니다. 😢 "
          : " 적정 수준의 복비로 계약하셨군요, 축하드립니다!"}
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
    font-size: 20px;
    line-height: 23px;
    color: #1f4ef5;
  }
`;

const BarBox = styled.div<{ is_expensive: boolean }>`
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

    width: ${(props) => (props.is_expensive ? "80%" : "30%")};
    height: 14px;

    background: ${(props) => (props.is_expensive ? "#EF5353" : "#2D6FEE")};
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
    left: ${(props) => (props.is_expensive ? "80%" : "30%")};
  }

  .commission {
    .num {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 17px;
      color: #000000;
      text-align: center;

      margin-top: 4px;
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
    left: ${(props) => (props.is_expensive ? "80%" : "30%")};
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
