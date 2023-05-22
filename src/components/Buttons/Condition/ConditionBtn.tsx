/* Result 특약사항 페이지 */
import styled from "@emotion/styled";

type Props = {
  text: string;
  selected: boolean;
  onClick: (value: any) => void;
};

const ConditionBtn = ({ text, selected, onClick }: Props) => {
  return (
    <BtnDiv selected={selected} onClick={onClick}>
      {text}
    </BtnDiv>
  );
};

export default ConditionBtn;

const BtnDiv = styled.div<{ selected: boolean }>`
  margin-bottom: 26px;

  width: 100%;
  height: 41px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 200;
  font-size: 13px;
  line-height: 19px;
  text-align: center;

  border-radius: 20.5px;

  background: ${props => (props.selected ? "#5a73fc" : "")};
  color: ${props => (props.selected ? "#ffffff" : "rgba(125, 125, 125, 0.5)")};

  border: ${props => (props.selected ? "" : "1px solid #d9d9d9")};
`;
