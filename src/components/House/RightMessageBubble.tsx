import styled from "@emotion/styled";

type PropsType = {
  text: string;
};

const RightMessageBubble = ({ text }: PropsType) => {
  return (
    <RightMessageBox>
      <p className="name">새내기</p>
      <RightBubble>{text}</RightBubble>
    </RightMessageBox>
  );
};

export default RightMessageBubble;

const RightMessageBox = styled.div`
  margin: 14px 0 0 0;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: end;

  .name {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;

    color: #505050;
  }
`;

const RightBubble = styled.div`
  width: auto;
  height: auto;
  max-width: 80%;
  margin: 8px 0 0 0;

  padding: 12px;

  background: #ffc670;
  border-radius: 20px 0px 20px 20px;

  font-family: "Noto Sans KR";

  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 20px;

  color: black;
`;
