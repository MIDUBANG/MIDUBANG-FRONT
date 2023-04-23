import { useParams, useNavigate } from "react-router-dom";

// conponents
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import styled from "@emotion/styled";
// imgs
import rightarrow from "@assets/wordlist/rightarrow.png";
import bookmark from "@assets/wordlist/bookmark.png";
import unbookmark from "@assets/wordlist/unbookmark.png";

// api
import { GetWord, DeleteWord, PostSaveWord } from "@api/word";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const WordMean = () => {
  const { id } = useParams();

  const [word, setWord] = useState<{
    word_id: number;
    word: string;
    meaning: string;
    isSaved: boolean;
  }>({
    word_id: 0,
    word: "",
    meaning: "",
    isSaved: true,
  });

  const [naverWord, setNaverWord] = useState<{
    description: string;
    link: string;
    title: string;
  }>({
    description: "string",
    link: "",
    title: "",
  });

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const _handleGetWord = async () => {
    let word = await GetWord(Number(id), cookies.refreshToken, onCookie);
    console.log(word);

    setWord(word.simpleWordDto);
    setNaverWord(word.naverWordDto);
  };

  const _handleBookMark = async () => {
    await PostSaveWord(Number(id), cookies.refreshToken, onCookie);
    _handleGetWord();
  };

  const _handleCancleBookMark = async () => {
    await DeleteWord(Number(id), cookies.refreshToken, onCookie);
    _handleGetWord();
  };

  const navigate = useNavigate();

  useEffect(() => {
    _handleGetWord();
  }, []);

  return (
    <Div>
      <SimpleNavBar text="단어" />
      <WordBox>
        <p className="word">{word?.word}</p>
        {word.isSaved ? (
          <img src={bookmark} onClick={_handleCancleBookMark} />
        ) : (
          <img src={unbookmark} onClick={_handleBookMark} />
        )}
      </WordBox>

      <Hr />

      <Container>
        <MeanBox>
          <p className="midubang">[믿어방 해설]</p>
          <p className="word">{word?.word}</p>
          <p className="des">{word?.meaning}</p>
        </MeanBox>

        <MeanBox>
          <p className="naver">[네이버 지식백과]</p>
          <p className="word">{word?.word}</p>
          <p className="des">{naverWord?.description}</p>
          <div
            className="more"
            onClick={() => {
              window.location.href = naverWord?.link;
            }}
          >
            <p>해설 더 보기</p>
            <img src={rightarrow} width={8} />
          </div>
        </MeanBox>
      </Container>
    </Div>
  );
};
export default WordMean;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 65px;
`;

const WordBox = styled.div`
  width: 100%;
  height: 176px;

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .word {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 35px;
  }

  img {
    position: absolute;
    right: 24px;
    top: 28px;

    width: 23px;
    height: 33px;
  }
`;

const Hr = styled.div`
  border: none;
  height: 14px;
  background: #f4f5f7;
`;

const Container = styled.div`
  padding: 25px;
`;

const MeanBox = styled.div`
  margin-bottom: 32px;
  .midubang {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #1f4ef5;
  }

  .naver {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #87cc5c;
  }

  .word {
    margin-top: 8px;
    margin-bottom: 8px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 25px;
  }

  .des {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 350;
    font-size: 14px;
    line-height: 20px;
  }

  .more {
    display: flex;
    align-items: center;

    margin-top: 10px;
    p {
      margin-right: 10px;
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      letter-spacing: -0.05em;
      color: #9cdb75;
    }
  }
`;
