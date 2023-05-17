import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import scrollbookmark from "@assets/wordlist/scrollbookmark.png";

const QuickBookMark = () => {
  const markRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const _handleGotoMyBookmark = () => {
    navigate("/my/savedword");
  };

  const _handleUpdatePosition = () => {
    if (markRef.current) {
      let position = window.scrollY;
      markRef.current.style.top = position + 200 + "px";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", _handleUpdatePosition); // add event listener

    return () => {
      window.removeEventListener("scroll", _handleUpdatePosition); // clean up
    };
  }, []);

  return (
    <ScrollBookMark
      onClick={_handleGotoMyBookmark}
      ref={markRef}
      style={{ top: "200px" }}
    >
      <img src={scrollbookmark} width={61} height={35} />
      <p>단어장</p>
    </ScrollBookMark>
  );
};

export default QuickBookMark;

const ScrollBookMark = styled.div`
  transition: all 800ms ease 100ms;
  z-index: 100;
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  p {
    position: absolute;
    left: 50%;

    width: 40px;
    transform: translate(-30%);
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
  }
`;
