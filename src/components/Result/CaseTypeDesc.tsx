import styled from "@emotion/styled";
import { useState, useEffect } from "react";

type Props = {
  caseTypeBoolean: boolean[];
};

const CaseTypeDesc = ({ caseTypeBoolean }: Props) => {
  const [arr, setArr] = useState<boolean[]>(caseTypeBoolean);
  console.log("결과 :", caseTypeBoolean);

  //   useEffect(() => {
  //     if (num === 0) {
  //       console.log("번호 0");
  //       setArr([true, false, false]);
  //     } else if (num === 1) {
  //       console.log("번호 1");
  //       setArr([false, true, false]);
  //     } else {
  //       console.log("번호 2");
  //       setArr([false, false, true]);
  //     }
  //   }, []);

  return (
    <div>
      {arr[0] ? (
        <p>
          이 특약은 계약서에 포함되어도 <span>법적 효력이 없습니다. </span>
          계약서를 다시 확인해보세요!
        </p>
      ) : (
        <></>
      )}
      {arr[1] ? (
        <p>
          이 특약은 나에게 꼭 필요한 <span>필수 조항</span> 입니다! 계약서에
          추가하는 것을 고려해보세요.
        </p>
      ) : (
        <></>
      )}
      {arr[2] ? (
        <p>
          이 특약은 나에게 불리할 수 있으므로 <span>주의 할 필요가 있는</span>
          특약입니다. 계약서를 다시 확인해보세요!
        </p>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CaseTypeDesc;
