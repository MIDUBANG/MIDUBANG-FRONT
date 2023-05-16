import styled from "@emotion/styled";
import { css } from "@emotion/css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MiniLogo from "@assets/logo/MiniLogo.svg";
import CancleLogo from "@assets/icon/Cancle.png";
import rod from "@assets/icon/rod.svg";
import "@style/font.css";

import useScrollDirection from "@hooks/useScrollDirection";

// img
import logo from "@assets/nav/logo.png";

type SimpleNavBarProps = {
  text?: string;
  to?: string;
};

const SimpleNavBar = ({ text, to }: SimpleNavBarProps) => {
  const navigate = useNavigate();

  const _clickHomeLogo = () => {
    navigate("/");
  };

  const _clickBackBtn = () => {
    if (to) {
      navigate(to);
    } else {
      navigate(-1);
    }
  };

  const [scrollDirection, setScrollDirection] = useScrollDirection("up");

  return (
    <BarDiv>
      <div className={scrollDirection === "up" ? "nav active" : "nav unactive"}>
        <img src={logo} className="mini-logo" onClick={_clickHomeLogo} />
        <p className="title">{text}</p>
        <img src={CancleLogo} className="cancle-logo" onClick={_clickBackBtn} />
      </div>
    </BarDiv>
  );
};

export default SimpleNavBar;

SimpleNavBar.defaultProps = {
  text: "",
  direction: "up",
  noTitle: false,
  to: "",
};

const BarDiv = styled.div`
  .nav {
    position: relative;

    z-index: 10;
    border-bottom: 0.5px solid rgba(154, 154, 154, 0.3);
    background-color: white;
    position: fixed;

    display: flex;
    justify-content: space-between;
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

  .title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    font-family: "Noto Sans KR", sans-serif;
    font-size: 17px;
  }

  .mini-logo {
    margin-left: 20px;
    width: 34px;
  }

  .cancle-logo {
    margin-right: 24px;
  }
`;
