import { useState } from "react";
import styled from "@emotion/styled";
import { GetWordList, PostSaveWord, DeleteWord } from "@api/word";
import { useCookies } from "react-cookie";

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
    { word_id: number; word: string; meaning: string }[]
  >([]);

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

  return (
    <Div>
      <button onClick={() => _handleSaveWord(wordId)}>
        단어 저장 테스트 버튼
      </button>
      <button onClick={() => setWordId(wordId + 1)}>{wordId}</button>

      <button onClick={() => _handleWordList()}>저장한 단어 불러오기</button>
      <button onClick={() => _handleDeleteWord()}>저장한 단어 삭제</button>

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
