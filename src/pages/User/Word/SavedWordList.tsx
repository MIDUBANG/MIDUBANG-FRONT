import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { GetSavedWordList } from "@api/word";
import { useCookies } from "react-cookie";

// componnet
import SimpleNavBar from "@components/NavBar/SimpleNavBar";

// image
import temp from "@assets/illustration/logo&person.png";
import calendar from "@assets/wordlist/calendar.png";
import bookmark from "@assets/wordlist/bookmark.svg";

const SavedWordList = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  console.log("리프레시는", cookies.refreshToken);

  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const [savedWordList, setSavedWordList] = useState<
    { word_id: number; word: string; meaning: string; word_date: string }[]
  >([]);

  const navigate = useNavigate();

  /** 상세 단어 뜻 보러가기 */
  const _handleWordMean = (id: number) => {
    navigate(`/word/${id}`);
  };

  /** 저장한 단어 목록 가져오기  */
  const _handleGetAllWordList = async () => {
    const words = await GetSavedWordList(cookies.refreshToken, onCookie);

    setSavedWordList(words.content);
    console.log(words.content);
  };

  useEffect(() => {
    _handleGetAllWordList(); // 저장한 단어 가져오기
  }, []);

  const style = { marginBottom: "10px" };

  return (
    <Div>
      <SimpleNavBar text="단어장" />

      <Container>
        {savedWordList.map((w) => (
          <div
            key={w.word_id}
            style={style}
            onClick={() => _handleWordMean(w.word_id)}
          >
            <p>
              {w.word_id} {w.word} {w.meaning} {w.word_date}
            </p>
          </div>
        ))}
      </Container>
    </Div>
  );
};
export default SavedWordList;

const Div = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 70px;
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
