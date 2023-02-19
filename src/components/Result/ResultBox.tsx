import styled from "@emotion/styled";
// asset
import ill from "@assets/illustration/loadingPerson.png";
import alert from "@assets/icon/alert.svg";
import arrow from "@assets/icon/rightarrow.svg";
import { CasesType, WordsType } from "@assets/types";
// hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  caseData: CasesType;
  wordData: WordsType[];
};
const ResultBox = ({ caseData, wordData }: Props) => {
  const {
    caseType,
    case_detail,
    case_exists,
    case_id,
    desc,
    article_url,
    word_ref,
  } = caseData;

  console.log(word_ref, wordData);

  // 포함되는 단어만 뽑기
  let words = wordData.filter((word) => word_ref.includes(word.word_id));
  //let words = [{ word: "임차보증금" }, { word: "임차권" }];

  const [caseTypeState, setCaseTypeState] = useState<string>("");

  // desc의 임시
  let temp =
    "임차인이 주택을 인도받을 때까지 근저당권 등의 권리 설정을 하지 않겠다는 내용입니다. 만약 임차인이 전입 신고 하기 전에 근저당권 등의 권리 설정이 이루어지면, 임차권이 그 권리보다 후순위가 되어 문제가 발생했을 시 임차보증금을 돌려받는데 문제가 생길 수 있기 때문입니다.@임차인이 주택을 인도받을 때까지 근저당권 등의 권리 설정을 하지 않겠다는 내용입니다. 만약 임차인이 전입 신고 하기 전에 근저당권 등의 권리 설정이 이루어지면, 임차권이 그 권리보다 후순위가 되어 문제가 발생했을 시 임차보증금을 돌려받는데 문제가 생길 수 있기 때문입니다.@임차인이 주택을 인도받을 때까지 근저당권 등의 권리 설정을 하지 않겠다는 내용입니다. 만약 임차인이 전입 신고 하기 전에 근저당권 등의 권리 설정이 이루어지면, 임차권이 그 권리보다 후순위가 되어 문제가 발생했을 시 임차보증금을 돌려받는데 문제가 생길 수 있기 때문입니다.";

  let wordIndex = [[0, 0]];

  words.map((w) => {
    let searchvalue = w.word;
    let pos = 0;
    while (true) {
      let foundPos = desc.indexOf(searchvalue, pos);
      if (foundPos == -1) break;
      wordIndex.push([foundPos, foundPos + searchvalue.length]);
      pos = foundPos + searchvalue.length;
    }
  });

  let finalText: string[] = [];

  wordIndex.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < wordIndex.length; i++) {
    let pre = desc.slice(wordIndex[i - 1][1], wordIndex[i][0] - 1);
    let now_t = desc.slice(wordIndex[i][0], wordIndex[i][1]);

    finalText.push(pre);
    finalText.push(now_t);
  }

  finalText.push(desc.slice(wordIndex[wordIndex.length - 1][1], desc.length));

  let finalResultText: string[] = [];

  finalText.forEach((text, index) => {
    if (text.includes("@")) {
      let temps = text.split("@");
      finalResultText.push(temps[0]);
      finalResultText.push("#");
      finalResultText.push(temps[1]);
    } else {
      finalResultText.push(text);
    }
  });

  /**기사 보기 함수 */
  const _handleReadNews = () => {
    window.location.href = article_url;
  };

  /**단어 뜻 보기 함수 */
  const _handleClickWord = (word: string) => {
    console.log(word);
  };

  useEffect(() => {
    if (caseType === "INVALID") {
      setCaseTypeState("무효");
    } else if (caseType === "VALID_MUST") {
      setCaseTypeState("유효 필수");
    } else {
      setCaseTypeState("유효 주의");
    }
  }, []);

  return (
    <Block>
      <Contract>
        <div></div>
        <p> "{case_detail}"</p>
      </Contract>
      {case_exists ? <p>검출</p> : <p>누락</p>}
      <p>{caseTypeState}</p>

      <img src={ill} />

      <Describe>
        <p>
          {finalResultText.map((f, index) => {
            if (f === "#") {
              return <div className="spacing"></div>;
            } else if (index % 2 == 1) {
              return (
                <span
                  key={f}
                  className="word"
                  onClick={() => _handleClickWord(f)}
                >
                  {f}
                </span>
              );
            } else {
              return <span key={f}>{f}</span>;
            }
          })}
        </p>
      </Describe>

      <NewsBtn onClick={_handleReadNews}>
        <p>기사보기</p>

        <img src={arrow} />
      </NewsBtn>
    </Block>
  );
};

export default ResultBox;

const Block = styled.div`
  box-sizing: border-box;
  height: auto;

  margin: 18px;

  border: 0.5px solid rgba(147, 147, 147, 0.5);
  border-radius: 5px;
`;

const Contract = styled.div`
  display: flex;

  margin: 26px auto 30px 24px;

  width: 70%;

  div {
    background: #fbb03b;
    height: auto;
    width: 7px;
    margin-right: 10px;
  }
  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
  }
`;

const Describe = styled.div`
  display: flex;
  flex-direction: column;
  margin: 28px;
  p {
    margin-bottom: 20px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
  }

  .word {
    color: red;
  }

  .spacing {
    height: 20px;
  }
`;

const NewsBtn = styled.div`
  width: 124px;
  height: 34px;

  border: 1px solid #4880ee;
  border-radius: 20.5px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px 20px auto;

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    color: #4880ee;
  }

  img {
    margin-left: 5px;
    width: 14px;
    height: 10px;
  }
`;
