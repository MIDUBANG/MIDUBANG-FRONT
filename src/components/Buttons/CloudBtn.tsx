import styled from "@emotion/styled";
import cloud from "@assets/icon/cloud.png";

const CloudBtn = () => {
  return (
    <BtnLabel htmlFor="ex_filename" className="select-btn">
      <img src={cloud} />
    </BtnLabel>
  );
};

export default CloudBtn;

const BtnLabel = styled.label`
  // margin: 0 auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 63px;
  height: 63px;

  border-radius: 50%;
  background: var(--aurora);
  box-shadow: -3px 4px 6px rgba(0, 0, 0, 0.2);

  &:active {
    width: 60px;
    height: 60px;

    background: var(--aurora-shadow);
    box-shadow: -3px 4px 6px rgba(0, 0, 0, 0.35);
  }
`;
