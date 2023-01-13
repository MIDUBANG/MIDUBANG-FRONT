import styled from "@emotion/styled";

import MiniLogo from "@assets/logo/MiniLogo.svg";
import CancleLogo from "@assets/icon/Cancle.png";
import rod from "@assets/icon/rod.svg";
import "@style/font.css";

type SimpleNavBarProps = {
  text?: string;
};

const SimpleNavBar = ({ text }: SimpleNavBarProps) => {
  return (
    <BarDiv>
      <img src={MiniLogo} className="mini-logo" />
      <p>믿어방</p>
      {text !== "" && <Rod src={rod} />}
      <p>{text}</p>
      <img src={CancleLogo} className="cancle-logo" />
    </BarDiv>
  );
};

export default SimpleNavBar;

SimpleNavBar.defaultProps = {
  text: "",
};

const Rod = styled.img`
  margin-left: 12px;
`;
const BarDiv = styled.div`
  display: flex;
  width: 100%;

  padding-top: 23px;
  padding-bottom: 23px;

  align-items: center;

  p {
    font-family: "Noto Sans KR", sans-serif;
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
