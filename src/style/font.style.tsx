import styled from "@emotion/styled";
import "@style/font.css";

type FontProps = {
  margin?: string;
};

const FontBig = styled.p<FontProps>`
  margin: ${(props) => props.margin};

  text-align: center;
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
`;

const FontMiddle = styled.p<FontProps>`
  margin: ${(props) => props.margin};
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;

  text-align: center;
`;

const FontGray = styled.p<FontProps>`
  margin: ${(props) => props.margin};
  font-family: "Noto Sans KR", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: #7d7d7d;
`;

const FontTitle = styled.p<FontProps>`
  margin: ${(props) => props.margin};
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  //line-height: 29px;
  color: #000000;
`;

const FontDescribed = styled.p<FontProps>`
  margin: ${(props) => props.margin};
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;

  color: #000000;
`;

export { FontBig, FontMiddle, FontGray, FontTitle, FontDescribed };