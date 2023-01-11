import styled from "@emotion/styled";
import cloud from "@assets/icon/cloud.png";

const CloudBtn = () => {
  return (
    <BtnDiv>
      <img src={cloud} />
    </BtnDiv>
  );
};

export default CloudBtn;

const BtnDiv = styled.div`
  margin: 30px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 63px;
  height: 63px;

  border-radius: 50%;
  background: linear-gradient(94.02deg, #4880ee 5.7%, #b093ee 100%);
  box-shadow: -3px 4px 6px rgba(0, 0, 0, 0.2);

  &:active {
    width: 60px;
    height: 60px;

    background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)),
      linear-gradient(94.02deg, #4880ee 5.7%, #b093ee 100%);
    box-shadow: -3px 4px 6px rgba(0, 0, 0, 0.35);
  }
`;
