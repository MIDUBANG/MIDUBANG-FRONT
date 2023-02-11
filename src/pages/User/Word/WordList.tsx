import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { GetWordList, PostSaveWord, DeleteWord } from "@api/word";
import { useCookies } from "react-cookie";

// componnet
import SimpleNavBar from "@components/NavBar/SimpleNavBar";

// image
import temp from "@assets/illustration/logo&person.png";
import calendar from "@assets/wordlist/calendar.png";
import bookmark from "@assets/wordlist/bookmark.svg";

const WordList = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  console.log("리프레시는", cookies.refreshToken);

  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const [wordId, setWordId] = useState(2);

  const [wordList, setWordList] = useState<
    { word_id: number; word: string; meaning: string; word_date: string }[]
  >([]);

  const [activeWord, setActiveWord] = useState<
    { word_id: number; word: string; meaning: string; word_date: string }[]
  >([]);

  // 선택한 날짜
  const [date, setDate] = useState("");

  const _handleSaveWord = async (id: number) => {
    await PostSaveWord(wordId, cookies.refreshToken, onCookie);
    _handleWordList();
  };

  const _handleWordList = async () => {
    const words = await GetWordList(cookies.refreshToken, onCookie);
    const newWords = words.map((w: any) => {
      let date = w.word_date.replaceAll("-", ".");
      return { ...w, word_date: date };
    });
    setWordList(newWords);
    console.log(newWords);
  };

  const _handleDeleteWord = async (wordId: number) => {
    alert("삭제하시겠습니까?");
    await DeleteWord(wordId, cookies.refreshToken, onCookie);
    _handleWordList();
  };

  // 작업 필요
  const _handleSetDate = () => {
    // 날짜 정하면, 그거랑 맞는 wordList만 출력
  };

  const navigate = useNavigate();

  useEffect(() => {
    _handleWordList(); // 가져오기
  }, []);

  return (
    <Div>
      <SimpleNavBar text="단어장" />

      <Container>
        <Illustration src={temp} />
        <Calendar src={calendar} />

        <BtnBox>
          <Button active={true}>전체</Button>
          <Button active={false}>오늘</Button>
        </BtnBox>

        {wordList.map((word) => (
          <Word
            key={word.word_id}
            onClick={() => navigate(`/wordmean/${word.word_id}`)}
          >
            <div className="title">
              <p className="word"> {word.word}</p>
              <p className="date">{word.word_date}</p>
            </div>

            <p className="des">{word.meaning}</p>

            <img
              src={bookmark}
              className="bookmark"
              onClick={(e) => {
                e.stopPropagation();
                _handleDeleteWord(word.word_id);
              }}
            />
          </Word>
        ))}

        <button onClick={() => setWordId(wordId + 1)}>{wordId}</button>
        <button onClick={() => _handleSaveWord(wordId)}>저장</button>

        {/* <WordListBox>
  {wordList.map((word) => {
    return <p key={word.word_id}>{word.word}</p>;
  })}
</WordListBox> */}
      </Container>
    </Div>
  );
};
export default WordList;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Illustration = styled.img`
  width: 179px;
  height: 115px;
  margin: 15px auto 0 auto;
`;

const Calendar = styled.img`
  width: 39px;
  height: 39px;
  margin-left: auto;
  margin-right: 22px;
`;

const BtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 23px;
  margin-top: 19px;
  margin-bottom: 37px;
`;
const Button = styled.div<{ active: boolean }>`
  width: 50%;
  height: 45px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 25px;

  border: 1px solid ${(props) => (props.active ? "#1F4EF5" : "#9a9a9a")};
  color: ${(props) => (props.active ? "#1F4EF5" : "#9a9a9a")};

  margin-left: 7px;
  margin-right: 7px;
`;

const Word = styled.div`
  width: 331px;
  height: auto;
  background: #f4f5f7;
  border-radius: 5px;

  margin: 16px auto 0 auto;
  padding: 20px;

  .title {
    display: flex;
    justify-content: space-between;
  }

  .word {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
  }

  .date {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 350;
    font-size: 14px;
    line-height: 20px;

    color: rgba(0, 0, 0, 0.5);
  }

  .des {
    margin-top: 10px;
    margin-bottom: 15px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;
  }

  .bookmark {
    z-index: 1000;
  }
`;
