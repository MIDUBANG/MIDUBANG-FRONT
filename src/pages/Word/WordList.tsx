import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { GetAllWordList, GetSearchWords } from "@api/word";
import { useCookies } from "react-cookie";

// componnet
import SimpleNavBar from "@components/NavBar/SimpleNavBar";

// image
import magnify from "@assets/wordlist/magnify.png";
import bookmark from "@assets/wordlist/bookmark.png";
import bottomarrow from "@assets/wordlist/bottomarrow.png";
import scrollbookmark from "@assets/wordlist/scrollbookmark.png";

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

  const navigate = useNavigate();

  /** 상세 단어 뜻 보러가기 */
  const _handleWordMean = (id: number) => {
    navigate(`${id}`);
  };

  /** 모든 단어 가져오기  */
  const _handleGetAllWordList = async () => {
    const words = await GetAllWordList(cookies.refreshToken, onCookie);
    setWordList(words.content);
    console.log(words.content);
  };

  useEffect(() => {
    _handleGetAllWordList(); // 전체 단어 가져오기
  }, []);

  const [searchText, setSearchText] = useState("");
  const [searched, setSearched] = useState(false);

  /** 단어 검색   */
  const _handleSearchWord = async () => {
    const words = await GetSearchWords(
      searchText,
      cookies.refreshToken,
      onCookie,
    );

    setWordList(words.content);
    console.log(words.content);
    setSearched(true);
  };

  const _handleGotoMyBookmark = () => {
    navigate("/my/savedword");
  };

  return (
    <Div>
      <SimpleNavBar text="단어 사전" />

      <ScrollBookMark onClick={_handleGotoMyBookmark}>
        <img src={scrollbookmark} width={61} height={35} />
        <p>단어장</p>
      </ScrollBookMark>
      <SearchBox>
        <div className="input-box">
          <input
            placeholder="부동산 단어를 입력해주세요"
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />

          <img
            src={magnify}
            width={16}
            height={16}
            onClick={_handleSearchWord}
          />
        </div>
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
            <hr />
          </WordMeanBox>
        ))}

        <SeeMoreBox>
          <p>더보기 13/311</p>
          <img src={bottomarrow} width={15} height={9} />
        </SeeMoreBox>
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

  hr {
    width: 330px;
    height: 2px;
    background-color: #e3e3e3;
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

const ScrollBookMark = styled.div`
  position: absolute;
  right: 0;
  top: 200px;
  display: flex;
  align-items: center;
  p {
    position: absolute;
    left: 50%;

    width: 40px;
    transform: translate(-30%);
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    color: #ffffff;
  }
`;
