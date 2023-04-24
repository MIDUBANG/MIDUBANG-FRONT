import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import logo from "@assets/footer/whitelogo.png";

const Footer = () => {
  return (
    <FooterDiv>
      <img src={logo} width={46} />
    </FooterDiv>
  );
};

export default Footer;

const FooterDiv = styled.div`
  height: 361px;
  width: 100%;

  margin-top: 50px;

  background: #041e42;
`;
