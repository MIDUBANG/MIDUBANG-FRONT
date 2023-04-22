import styled from "@emotion/styled";

import left from "@assets/nav/left.png";
import right from "@assets/nav/right.png";
import report from "@assets/nav/report.png";
import text from "@assets/nav/text.png";
import reload from "@assets/nav/reload.png";
import share from "@assets/nav/share.png";

const BottomNavbar = () => {
  return (
    <BarDiv>
      <img src={left} />
      <img src={right} />
      <img src={report} />
      <img src={text} />
      <img src={reload} />
      <img src={share} />
    </BarDiv>
  );
};

export default BottomNavbar;

const BarDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 54px;

  background: #ffffff;
  //border: 1px solid red;
  box-shadow: 0px -3px 2px rgba(185, 185, 185, 0.05);

  img {
    width: 7vw;
  }
`;
