import { useState } from "react";
import styled from "@emotion/styled";
import { GetWordList, PostSaveWord, DeleteWord } from "@api/word";
import { useCookies } from "react-cookie";

// componnet
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import ShortBtn from "@components/Buttons/ShortBtn";
const WordList = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const [wordId, setWordId] = useState(1);

  const [wordList, setWordList] = useState<
    { word_id: number; word: string; meaning: string; date: string }[]
  >([]);

  const [activeWord, setActiveWord] = useState<
    { word_id: number; word: string; meaning: string; date: string }[]
  >([
    {
      word_id: 1,
      word: "근저당",
      meaning: "근저당 설명 블라블라",
      date: "2022-01-21",
    },
  ]);

  // 선택한 날짜
  const [date, setDate] = useState("");

  const _handleSaveWord = async (id: number) => {
    await PostSaveWord(wordId, cookies.refreshToken, onCookie);
    _handleWordList();
  };

  const _handleWordList = async () => {
    const words = await GetWordList(cookies.refreshToken, onCookie);
    setWordList(words);
  };

  const _handleDeleteWord = async () => {
    await DeleteWord(wordId, cookies.refreshToken, onCookie);
    // setWordList([]);
    _handleWordList();
  };

  // 작업 필요
  const _handleSetDate = () => {
    // 날짜 정하면, 그거랑 맞는 wordList만 출력
  };

  return (
    <Div>
      <SimpleNavBar text="단어장" />

      <div>달력 아이콘</div>

      <div>
        <button onClick={() => _handleWordList()}>전체</button>
        <button onClick={() => _handleSaveWord(wordId)}>오늘(저장)</button>
      </div>

      {activeWord.map((word) => (
        <div key={word.word_id}>
          <div>
            <p>{word.word}</p>
            <p>{word.date}</p>
          </div>

          <p>{word.meaning}</p>
          <div>북마크로고</div>
        </div>
      ))}

      {/* <button onClick={() => setWordId(wordId + 1)}>{wordId}</button>
      <button onClick={() => _handleDeleteWord()}>저장한 단어 삭제</button> */}

      <WordListBox>
        {wordList.map((word) => {
          return <p key={word.word_id}>{word.word}</p>;
        })}
      </WordListBox>
    </Div>
  );
};
export default WordList;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const WordListBox = styled.div`
  border: 1px red solid;
`;
