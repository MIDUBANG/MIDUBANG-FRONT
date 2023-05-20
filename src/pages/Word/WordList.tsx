import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { GetAllWordList, GetSearchWords } from "@api/word";
import { useCookies } from "react-cookie";

// componnet
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import QuickBookMark from "@components/Word/QuickBookMark";
// image
import magnify from "@assets/wordlist/magnify.png";
import bookmark from "@assets/wordlist/bookmark.png";
import bottomarrow from "@assets/wordlist/bottomarrow.png";
import uparrow from "@assets/wordlist/uparrow.png";

const WordList = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const [wordList, setWordList] = useState<
    { wordId: number; word: string; meaning: string; isSaved: boolean }[]
  >([]);

  const [reqPageNum, setReqPageNum] = useState<number>(0);

  const navigate = useNavigate();

  /** 상세 단어 뜻 보러가기 */
  const _handleWordMean = (id: number) => {
    navigate(`${id}`);
  };

  /** 모든 단어 가져오기  */
  const _handleGetAllWordList = async () => {
    const words = await GetAllWordList(
      reqPageNum,
      cookies.refreshToken,
      onCookie,
    );

    console.log(words);

    let newWordList = [...wordList, ...words.content];

    setWordList(newWordList);

    setReqPageNum(reqPageNum + 1);
  };

  useEffect(() => {
    _handleGetAllWordList(); // 전체 단어 가져오기
  }, []);

  const [searchText, setSearchText] = useState("");
  const [searched, setSearched] = useState(false);

  /** 단어 검색   */
  const _handleSearchWord = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const searchWord = searchText.replace(" ", "");

    const words = await GetSearchWords(
      searchWord,
      cookies.refreshToken,
      onCookie,
    );

    setWordList(words.content);
    console.log(words.content);
    setSearched(true);
  };

  return (
    <Div>
      <SimpleNavBar text="단어 사전" />
      <QuickBookMark />

      <SearchBox>
        <form onSubmit={_handleSearchWord} className="input-box">
          <input
            placeholder="부동산 단어를 입력해주세요"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />

          <SearchBtn type="submit">
            <img src={magnify} />
          </SearchBtn>
        </form>
      </SearchBox>

      <Container>
        <CountText>
          <p>
            {searched ? "검색 결과" : "믿어방 단어"}
            <span>{wordList.length}개</span>
          </p>
        </CountText>

        {wordList.map(w => (
          <WordMeanBox onClick={() => _handleWordMean(w.wordId)}>
            <div className="word-box">
              <p className="word">{w.word} </p>
              {w.isSaved && <img src={bookmark} width={13} height={18} />}
            </div>

            <p className="meaning">{w.meaning}</p>
          </WordMeanBox>
        ))}

        {wordList.length === 309 ? (
          <SeeMoreBox>
            <p> 끝 {wordList.length}/309</p>
            <img src={uparrow} width={15} height={9} />
          </SeeMoreBox>
        ) : (
          <SeeMoreBox onClick={_handleGetAllWordList}>
            <p>더보기 {wordList.length}/309</p>
            <img src={bottomarrow} width={15} height={9} />
          </SeeMoreBox>
        )}
      </Container>
    </Div>
  );
};
export default WordList;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 65px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  padding: 30px 35px;
`;

const SearchBox = styled.div`
  width: 100%;
  height: 70px;
  background: #bfdaff;

  padding: 15px 20px;

  .input-box {
    width: 100%;
    height: 39px;
    background: #ffffff;
    border-radius: 19.5px;

    padding: 0 16px 0 24px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  input {
    background-color: transparent;
    border: none;
    width: 80%;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #4b4b4b;

    &:focus {
      outline: none;
    }
  }
`;

const CountText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #313131;
    span {
      margin-left: 7px;

      color: #7b7b7b;
    }
  }

  margin-bottom: 26px;
`;

const WordMeanBox = styled.div`
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 29px;
  .word-box {
    display: flex;
    justify-content: space-between;

    align-items: center;
  }
  .word {
    display: inline-block;

    padding: 0 5px;
    height: 27px;
    background: #e2f0f9;

    line-height: 25px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #0068cb;
  }

  .meaning {
    margin: 17px 8px 22px 4px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #4b4b4b;
  }
`;

const SeeMoreBox = styled.div`
  width: 100%;
  height: 61px;
  background: #f9fafc;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #4b4b4b;

    margin-right: 10px;
  }
`;

const SearchBtn = styled.button`
  background-color: transparent;
  border: none;

  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 20px;
    height: auto;
    transform: translate(0, 2px);
  }
`;
