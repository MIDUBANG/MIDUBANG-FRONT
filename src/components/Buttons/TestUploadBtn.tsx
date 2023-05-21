import styled from "@emotion/styled";

const TestUploadBtn = () => {
  return (
    <BtnLabel
      download="test.png"
      href={process.env.PUBLIC_URL + "/contractSample.png"}
    >
      <p>TEST</p>
      <p>이미지</p>
    </BtnLabel>
  );
};

export default TestUploadBtn;

const BtnLabel = styled.a`
  text-decoration: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 63px;
  height: 63px;

  border-radius: 50%;
  background: var(--aurora);
  box-shadow: -3px 4px 6px rgba(0, 0, 0, 0.2);

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;

  &:active {
    width: 60px;
    height: 60px;

    background: var(--aurora-shadow);
    box-shadow: -3px 4px 6px rgba(0, 0, 0, 0.35);
  }
`;
