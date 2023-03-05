import { useParams } from "react-router-dom";
// conponents
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import styled from "@emotion/styled";
// imgs
import blur from "@assets/illustration/blur.png";
import bookmark from "@assets/wordlist/bookmark.svg";
import unbookmark from "@assets/wordlist/unbookmark.svg";

// api
import { GetWord, DeleteWord } from "@api/word";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

const WordMean = () => {
  const [isSave, setIsSave] = useState(true);

  const { id } = useParams();

  const [word, setWord] = useState<{
    word_id: number;
    word: string;
    meaning: string;
    word_date: string;
  }>({
    word_id: 0,
    word: "",
    meaning: "",
    word_date: "",
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
    const date = word.word_date.replaceAll("-", ".");

    word.word_date = date;

    console.log("고친거", word);
    setWord(word);
  };

  const _handleBookMark = () => {
    //DeleteWord()
  };

  useEffect(() => {
    _handleGetWord();
  }, []);

  return (
    <Div>
      <SimpleNavBar text="단어" />
      <WordBox>
        <p className="word">{word?.word}</p>
        <p className="date">{word.word_date} 저장</p>
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
          <p className="word">근저당권</p>
          <p className="des">
            임대인 또는 임차인이 임대차기간이 만료되.임대인 또는 임차인이
            임대차기간이 만료되..임대인 또는 임차인이 임대차기간이
            만료되..임대인 또는 임차인이 임대차기간이 만료되..임대인 또는
            임차인이 임대차기간이 만료되...
          </p>
        </MeanBox>
      </Container>

      <MeanFooter>
        {isSave ? <img src={bookmark} /> : <img src={unbookmark} />}
      </MeanFooter>
    </Div>
  );
};
export default WordMean;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const WordBox = styled.div`
  width: 100%;
  height: 200px;

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

  .date {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 350;
    font-size: 14px;
    line-height: 20px;

    color: rgba(0, 0, 0, 0.5);

    position: absolute;
    bottom: 5px;
    right: 10px;
  }

  img {
    width: 20vh;
    height: 20vh;
    position: absolute;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);

    z-index: -1;
    opacity: 0.8;
  }
`;

const Hr = styled.hr`
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
`;

const MeanFooter = styled.div`
  position: fixed;
  bottom: 0;
  height: 67px;
  width: 100%;

  border-top: 2px solid #f4f5f7;
  //border-top: 2px solid red;

  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 18px;

  img {
    height: 33px;
    width: 23px;
  }
`;
