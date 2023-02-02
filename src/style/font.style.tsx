import styled from "@emotion/styled";
import "@style/font.css";

type FontProps = {
  margin?: string;
  size?: string;
};

const FontBig = styled.p<FontProps>`
  margin: ${(props) => props.margin || "0 auto 0 auto"};

  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.size || "14px"};
  line-height: 29px;
`;

const FontMiddle = styled.p<FontProps>`
  margin: ${(props) => props.margin || "0 auto 0 auto"};
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;

  text-align: center;
`;

const FontGray = styled.p<FontProps>`
  margin: ${(props) => props.margin || "0 auto 0 auto"};
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  font-size: ${(props) => props.size || "14px"};
  text-align: center;
  color: #7d7d7d;
`;

const FontTitle = styled.p<FontProps>`
  margin: ${(props) => props.margin || "0 auto 0 auto"};
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => props.size || "14px"}; //line-height: 29px;
  color: #000000;
`;

const FontDescribed = styled.p<FontProps>`
  margin: ${(props) => props.margin || "0 auto 0 auto"};
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => props.size || "14px"};
  line-height: 20px;

  color: #000000;
`;

export { FontBig, FontMiddle, FontGray, FontTitle, FontDescribed };
