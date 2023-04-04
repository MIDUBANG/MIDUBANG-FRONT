import React from "react";
import styled from "@emotion/styled";
import Accordion from "react-bootstrap/Accordion";
import "./style.scss";
import plus from "@assets/house/plus.png";
import minus from "@assets/house/minus.png";

type Item = {
  id: string;
  title: string;
  content: string;
};

type Props = { inputData: Item[] };

const CustomAccordion = ({ inputData }: Props) => {
  return (
    <Accordion defaultActiveKey="0" id="custom">
      {inputData.map((data: any) => (
        <Accordion.Item eventKey={data.id}>
          <Accordion.Header className="title">
            <img src={plus} />
            {data.title}
          </Accordion.Header>
          <Accordion.Body className="content">
            <DesText>{data.content}</DesText>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;

const DesText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 14px;
  line-height: 20px;
  color: #000000;

  span {
    font-weight: 500;
  }
`;

const ContentText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #000000;
`;
