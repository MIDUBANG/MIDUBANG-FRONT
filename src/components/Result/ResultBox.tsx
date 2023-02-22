import styled from "@emotion/styled";
// asset
import ill from "@assets/illustration/loadingPerson.png";
import readmore from "@assets/result/readmore.svg";
import { CasesType, WordsType } from "@assets/types";
import CaseTypeDesc from "@components/Result/CaseTypeDesc";

// hooks
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  caseData: CasesType;
  wordData: WordsType[];
  // highlight: boolean;
  openWordModal: (word: string) => void;
};
const ResultBox = ({ caseData, wordData, openWordModal }: Props) => {
  const {
    caseType,
    case_detail,
    case_exists,
    case_id,
    // desc,
    article_url,
    word_ref,
  } = caseData;

  // 단어 관련
  const [highlighter, setHighlighter] = useState<boolean>(false);
  const _handleHighlighter = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("클릭", e);
    if (e.target.checked) {
      setHighlighter(true);
    } else {
      setHighlighter(false);
    }
  };

  // 포함되는 단어만 뽑기
  //let words = wordData.filter((word) => word_ref.includes(word.word_id));
  let words = [{ word: "임차보증금" }, { word: "임차권" }];

  const [caseTypeState, setCaseTypeState] = useState<string>("");
  const [caseTypeColor, setCaseTypeColor] = useState<string>("");
  const [caseTypeDesc, setCaseTypeDesc] = useState([
    {
      type: "INVALID",
      start: "이 특약은 계약서에 포함되어도 ",
      mid: "법적 효력이 없습니다.",
      end: "계약서를 다시 확인해보세요!",
      color: "#FFAFAF",
    },
    {
      type: "VALID_MUST",
      start: " 이 특약은 나에게 꼭 필요한  ",
      mid: "필수 조항",
      end: "입니다! 계약서에 추가하는 것을 고려해보세요.",
      color: "#D6FFDA",
    },
    {
      type: "VALID_WARNING",
      start: "이 특약은 나에게 불리할 수 있으므로 ",
      mid: "주의 할 필요가 있는",
      end: "특약입니다. 계약서를 다시 확인해보세요!",
      color: "#FFE5BC",
    },
  ]);

  // desc의 임시
  let desc =
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
      console.log("무효");
      setCaseTypeState("무효");
      setCaseTypeColor("#EF5353");
    } else if (caseType === "VALID_MUST") {
      console.log("유효 필수");
      setCaseTypeState("유효 필수");
      setCaseTypeColor("#9CDB75");
    } else {
      console.log("유효 주의");
      setCaseTypeState("유효 주의");
      setCaseTypeColor("#FBB03B");
    }
  }, []);

  return (
    <Block>
      <Contract caseTypeColor={caseTypeColor}>
        <div></div>
        <p> "{case_detail}"</p>
      </Contract>

      {/* 북마크 만들기 */}
      {!case_exists && <p>누락</p>}

      <img src={ill} />

      <InfoBox>
        <div className="text-info">
          {words.map((word) => (
            <p># {word.word}</p>
          ))}
        </div>
      </InfoBox>

      <Describe>
        {caseTypeDesc.map((des) => {
          if (des.type === caseType) {
            return (
              <p>
                {des.start}
                <CaseTypeSpan className="des-span" color={des.color}>
                  {des.mid}
                </CaseTypeSpan>
                {des.end}
              </p>
            );
          }
        })}

        <p>
          {finalResultText.map((word, index) => {
            if (word === "#") {
              return <div className="spacing"></div>;
            } else if (index % 2 == 1) {
              return (
                <span
                  key={index}
                  className={highlighter ? "word" : ""}
                  onClick={() => openWordModal(word)}
                >
                  {word}
                </span>
              );
            } else {
              return <span key={index}>{word}</span>;
            }
          })}
        </p>

        <NewsBtn onClick={_handleReadNews}>
          <p>관련 기사 더 보기</p>
          <img src={readmore} />
        </NewsBtn>
      </Describe>

      <Toggle>
        <div className="word-toggle">
          <input
            type="checkbox"
            id={case_id.toString()}
            className="toggle"
            hidden
            onChange={(e) => _handleHighlighter(e)}
          />

          <label htmlFor={case_id.toString()} className="toggleSwitch">
            <p className="word">단어</p>
            <span className="toggleButton"></span>
          </label>
        </div>
      </Toggle>
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

const Contract = styled.div<{ caseTypeColor: string }>`
  display: flex;
  margin: 26px auto 30px 24px;
  width: 70%;

  div {
    background: ${(props) => props.caseTypeColor};
    height: auto;
    width: 7px;
    margin-right: 10px;
    flex-shrink: 0;
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
    margin-bottom: 10px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
  }

  .word {
    display: inline-block;
    position: relative;
  }

  .word:after {
    content: "";
    width: 100%;
    height: 10px;
    display: inline-block;
    background: #d9fcdb;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    animation-duration: 0.5s;
    animation-name: slidein;
  }

  @keyframes slidein {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }

  .spacing {
    height: 10px;
  }
`;

const CaseTypeSpan = styled.span<{ color: string }>`
  display: inline-block;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 10px;
    display: inline-block;
    background: ${(props) => props.color};
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    animation-duration: 0.5s;
    animation-name: slidein;
  }
`;

const NewsBtn = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.05em;
    color: #4880ee;
    margin: 0;
  }

  img {
    margin-left: 5px;

    width: 14px;
    height: 10px;
  }
`;

const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 27px 20px 27px;

  .text-info {
    display: flex;

    justify-content: space-between;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    letter-spacing: -0.05em;
    color: #9a9a9a;

    p {
      margin-right: 6px;
    }
  }
`;

const Toggle = styled.div`
  display: flex;
  justify-content: end;
  margin: 0 17px 24px auto;
  .word-toggle {
    .toggleSwitch {
      width: 52px;
      height: 23px;

      display: block;
      position: relative;
      border-radius: 30px;
      background-color: #d9d9d9;
      cursor: pointer;
    }

    .toggleSwitch .toggleButton {
      width: 20px;
      height: 20px;

      position: absolute;
      top: 50%;
      left: 3px;

      transform: translateY(-50%);
      border-radius: 50%;
      background: white;
    }
    .word {
      display: none;
    }

    .toggle:checked ~ .toggleSwitch {
      //체크 된 경우
      background: #83b4f9;
    }

    .toggle:checked ~ .toggleSwitch .word {
      position: absolute;
      top: 4px;
      left: 8px;
      display: flex;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 14px;
      text-align: center;
      letter-spacing: -0.05em;

      color: #ffffff;
    }

    .toggle:checked ~ .toggleSwitch .toggleButton {
      left: calc(100% - 23px);
      background: white;
    }

    .toggleSwitch,
    .toggleButton {
      transition: all 0.2s ease-in;
    }
  }
`;
