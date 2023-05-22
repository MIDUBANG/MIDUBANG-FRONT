import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

type Props = {
  id: number;
  subId: number;
  complete: boolean;
  bottomFix?: boolean;
};

const UnderstandBtn = ({ id, subId, complete, bottomFix }: Props) => {
  const navigate = useNavigate();

  const IncludeSame = (original: []) => {
    let result = false;

    original.map(o => {
      if (o[0] === id && o[1] === subId) {
        result = true;
      }
    });

    return result;
  };

  const _clickUnderStand = () => {
    if (complete) {
      // 버튼이 활성화 상태일 때만 클릭 가능
      let completeRate: any = null;
      let original: any = localStorage.getItem("houseCompleteRate"); // [[],[]]

      if (original) {
        original = JSON.parse(original);

        // 중복 없을 때만
        if (!IncludeSame(original)) {
          completeRate = [...original, [id, subId]];

          localStorage.setItem(
            "houseCompleteRate",
            JSON.stringify(completeRate),
          );
        }
      } else {
        original = [];
        completeRate = [...original, [id, subId]];
        localStorage.setItem("houseCompleteRate", JSON.stringify(completeRate));
      }

      navigate("/house");
    }
  };

  return (
    <Btn
      onClick={_clickUnderStand}
      complete={complete}
      bottomFix={bottomFix || false}
    >
      이해했어요
    </Btn>
  );
};

UnderstandBtn.defaultProps = {
  complete: true,
  bottomFix: false,
};

export default UnderstandBtn;

const Btn = styled.div<{ complete: boolean; bottomFix: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;

  width: 100%;
  height: 40px;
  background: ${props => (props.complete ? "#4880EE" : "#D1D1D1")};
  border-radius: 8px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #fcfcfc;

  position: ${props => props.bottomFix && "absolute"};
  bottom: ${props => props.bottomFix && "45px"};
  width: ${props => props.bottomFix && "90%"};
`;
