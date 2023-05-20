import styled from "@emotion/styled";

type Props = {
  text: string;
  color: string;
  activeColor: string;
  onClick?: () => void;
};

const LongBtn = ({ text, color, activeColor, onClick }: Props) => {
  return (
    <Btn color={color} activeColor={activeColor} onClick={onClick}>
      {text}
    </Btn>
  );
};

export default LongBtn;

LongBtn.defaultProps = {
  activeColor: "--aurora-shadow",
};

const Btn = styled.div<{ activeColor: string }>`
  margin-top: 10%;

  display: flex;
  align-items: center;
  justify-content: center;

  width: auto;
  height: 41px;

  border-radius: 8px;

  padding: 0 21px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #ffffff;

  // 색상
  background: var(${props => props.color});
  box-shadow: -3px 4px 5px rgba(0, 0, 0, 0.15);
  &:active {
    background: var(${props => props.activeColor});
  }
`;
