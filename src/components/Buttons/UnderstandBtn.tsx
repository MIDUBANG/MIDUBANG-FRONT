import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  subId: number;
};

const UnderstandBtn = ({ id, subId }: Props) => {
  const navigate = useNavigate();

  const _clickUnderStand = () => {
    let completeRate: any = null;
    let original: any = localStorage.getItem("houseCompleteRate"); // [[],[]]
    if (original) {
      original = JSON.parse(original);
      completeRate = [...original, [id, subId]];
      console.log("테스트", completeRate);
      localStorage.setItem("houseCompleteRate", JSON.stringify(completeRate));
    } else {
      original = [];
      completeRate = [...original, [id, subId]];
      console.log("테스트", completeRate);
      localStorage.setItem("houseCompleteRate", JSON.stringify(completeRate));
    }

    navigate("/house");
  };

  return <Btn onClick={_clickUnderStand}>이해했어요 </Btn>;
};

export default UnderstandBtn;

const Btn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;

  width: 90%;
  height: 40px;
  background: #fbb03b;
  border-radius: 8px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #fcfcfc;
`;
