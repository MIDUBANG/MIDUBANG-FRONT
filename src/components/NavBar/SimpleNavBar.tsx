import styled from "@emotion/styled";

import MiniLogo from "../../assets/logo/MiniLogo.svg";
import CancleLogo from "../../assets/icon/Cancle.png";

const SimpleNavBar = () => {
  return (
    <BarDiv>
      <img src={MiniLogo} className="mini-logo" />
      <p>믿어방</p>
      <img src={CancleLogo} className="cancle-logo" />
    </BarDiv>
  );
};

export default SimpleNavBar;

const BarDiv = styled.div`
  display: flex;
  width: 100%;
  margin-top: 23px;
  margin-bottom: 23px;

  align-items: center;

  p {
    font-size: 17px;
    margin-left: 12px;
  }

  .mini-logo {
    margin-left: 26px;
  }

  .cancle-logo {
    margin-right: 26px;
    margin-left: auto;
  }
`;
