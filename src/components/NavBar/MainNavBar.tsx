import styled from "@emotion/styled";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "@assets/nav/logo.png";
import profile from "@assets/nav/profile.png";
import rod from "@assets/icon/rod.svg";
import "@style/font.css";

import useScrollDirection from "@hooks/useScrollDirection";

type MainNavBarProps = {
  text?: string;
};

const MainNavBar = ({ text }: MainNavBarProps) => {
  const navigate = useNavigate();

  const _clickProfileBtn = () => {
    navigate("/my");
  };

  const _clickMainLogo = () => {
    navigate("/");
  };

  const [scrollDirection, setScrollDirection] = useScrollDirection("up");

  return (
    <BarDiv>
      <div className={scrollDirection === "up" ? "nav active" : "nav unactive"}>
        <img
          src={logo}
          className="mini-logo"
          width={34}
          onClick={_clickMainLogo}
        />
        <p>믿어방</p>
        {text !== "" && <Rod src={rod} />}
        <p>{text}</p>
        <img src={profile} className="profile" onClick={_clickProfileBtn} />
      </div>
    </BarDiv>
  );
};

export default MainNavBar;

MainNavBar.defaultProps = {
  text: "",
};

const Rod = styled.img`
  margin-left: 12px;
  margin-right: 12px;
`;
const BarDiv = styled.div`
  .nav {
    z-index: 100000;
    border-bottom: 0.5px solid rgba(154, 154, 154, 0.3);
    background-color: white;
    position: fixed;

    display: flex;
    width: 100%;

    padding-top: 15px;
    padding-bottom: 15px;

    align-items: center;

    transition: top 0.2s ease-in-out;
  }

  .active {
    top: 0px;
  }

  .unactive {
    top: -80px;
  }

  p {
    font-family: "Noto Sans KR", sans-serif;
    font-size: 17px;
  }

  .mini-logo {
    margin-left: 20px;
    margin-right: 17px;

    transform: translate(0, -3px);
  }

  .profile {
    width: 34px;
    height: 34px;
    margin-right: 20px;
    margin-left: auto;
  }
`;
