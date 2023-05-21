import styled from "@emotion/styled";
import arrow from "@assets/icon/arrow.png";

type BtnProps = {
  onClick: React.Dispatch<React.SetStateAction<boolean>>;
};
const ArrowBtn = ({ onClick }: BtnProps) => {
  return (
    <BtnDiv onClick={() => onClick(true)}>
      <img src={arrow} />
    </BtnDiv>
  );
};

export default ArrowBtn;

const BtnDiv = styled.div`
  //margin: 0 auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 63px;
  height: 63px;

  border-radius: 50%;
  background: var(--aurora-bright);
  box-shadow: -3px 4px 6px rgba(0, 0, 0, 0.2);

  &:active {
    width: 60px;
    height: 60px;

    background: var(--aurora-bright-shadow);
    box-shadow: -3px 4px 6px rgba(0, 0, 0, 0.35);
  }
`;
