import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MiniLogo from "@assets/logo/MiniLogo.svg";
import CancleLogo from "@assets/icon/Cancle.png";
import rod from "@assets/icon/rod.svg";
import "@style/font.css";

import useScrollDirection from "@hooks/useScrollDirection";

type SimpleNavBarProps = {
  text?: string;
};

const SimpleNavBar = ({ text }: SimpleNavBarProps) => {
  console.log("정신차려");

  const navigate = useNavigate();
  const _clickBackBtn = () => {
    navigate(-1);
  };

  const [scrollDirection, setScrollDirection] = useScrollDirection("up");

  useEffect(() => {
    console.log(scrollDirection);
  }, [scrollDirection]);

  return (
    <BarDiv>
      <div className={scrollDirection === "up" ? "nav active" : "nav unactive"}>
        <img src={MiniLogo} className="mini-logo" />
        <p>믿어방</p>
        {text !== "" && <Rod src={rod} />}
        <p>{text}</p>
        <img src={CancleLogo} className="cancle-logo" onClick={_clickBackBtn} />
      </div>
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
