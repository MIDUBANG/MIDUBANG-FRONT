import styled from "@emotion/styled";

type Props = {
  text: string;
  color: string;
  activeColor: string;
};

const ShortBtn = ({ text, color, activeColor }: Props) => {
  return (
    <Btn color={color} activeColor={activeColor}>
      {text}
    </Btn>
  );
};

export default ShortBtn;

ShortBtn.defaultProps = {
  activeColor: "--aurora-shadow",
};

const Btn = styled.div<{ activeColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 119px;
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
  background: var(${(props) => props.color});
  box-shadow: -3px 4px 5px rgba(0, 0, 0, 0.15);
  &:active {
    background: var(${(props) => props.activeColor});
  }
`;
