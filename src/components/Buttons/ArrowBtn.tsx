import styled from "@emotion/styled";
import arrow from "@assets/icon/arrow.png";

const ArrowBtn = () => {
  return (
    <BtnDiv>
      <img src={arrow} />
    </BtnDiv>
  );
};

export default ArrowBtn;

const BtnDiv = styled.div`
  margin: 0 auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 63px;
  height: 63px;

  border-radius: 50%;
  background: linear-gradient(
    131.54deg,
    #72acff 20.8%,
    rgba(193, 143, 255, 0.57) 70.17%,
    rgba(214, 125, 255, 0.22) 84.35%
  );
  box-shadow: -3px 4px 6px rgba(0, 0, 0, 0.2);

  &:active {
    width: 60px;
    height: 60px;

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
      linear-gradient(
        131.54deg,
        #72acff 20.8%,
        rgba(193, 143, 255, 0.57) 70.17%,
        rgba(214, 125, 255, 0.22) 84.35%
      );
    box-shadow: -3px 4px 6px rgba(0, 0, 0, 0.35);
  }
`;
