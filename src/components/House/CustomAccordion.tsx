import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

import Accordion from "react-bootstrap/Accordion";
import "./style.scss";
import plus from "@assets/house/plus.png";
import minus from "@assets/house/minus.png";
import arrowRightWhite from "@assets/house/check/rightArrowWhite.png";

type Item = {
  id: string;
  title: string;
  content: string;
  checked: boolean;
};

type Props = {
  inputData: Item[];
  _handleUpdateCheckData: (id: string) => void;
};

const CustomAccordion = ({ inputData, _handleUpdateCheckData }: Props) => {
  return (
    <Accordion defaultActiveKey="0" id="custom">
      {inputData.map((data: any) => (
        <Accordion.Item eventKey={data.id}>
          <Accordion.Header className="title">
            <img src={plus} />
            {data.title}
          </Accordion.Header>
          <Accordion.Body className="content">
            <div style={{ marginLeft: "30px" }}>
              <DesText>{data.content}</DesText>

              <div style={{ display: "flex", marginTop: "30px" }}>
                <CheckBtn
                  checked={data.checked}
                  onClick={() => _handleUpdateCheckData(data.id)}
                >
                  확인했어요
                </CheckBtn>
                <WeirdBtn>
                  이상해요 <img src={arrowRightWhite} />
                </WeirdBtn>
              </div>
            </div>
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

const CheckBtn = styled.div<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 94px;
  height: 33px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
  border-radius: 16.5px;

  border: ${(props) => (props.checked ? "" : "0.8px solid #5a73fc")};
  color: ${(props) => (props.checked ? "#FFFFFF" : "#5a73fc")};
  background: ${(props) =>
    props.checked
      ? "linear-gradient(94.02deg, #4880EE 5.7%, #B093EE 100%)"
      : ""};
`;

const WeirdBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 33px;

  border: 0.8px solid #ef5353;
  border-radius: 16.5px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #ef5353;

  margin-left: 20px;

  img {
    //width: 20px;
    height: 13px;
    margin: 0;
    margin-left: 6px;
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
