import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { GetSavedWordList } from "@api/word";
import { useCookies } from "react-cookie";
import { useMediaQuery } from "react-responsive";

// componnet
import SimpleNavBar from "@components/NavBar/SimpleNavBar";

// image
import wordbook from "@assets/wordlist/wordbook.png";
import bookmark from "@assets/wordlist/bookmark.png";

const SavedWordList = () => {
  const isNoImg = useMediaQuery({
    query: "(max-width : 370px)",
  });

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const onCookie = (res: any) => {
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const [savedWordList, setSavedWordList] = useState<
    { wordId: number; word: string; meaning: string; word_date: string }[]
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
  };

  useEffect(() => {
    _handleGetAllWordList(); // 저장한 단어 가져오기
  }, []);

  const [btnArr, setBtnArr] = useState([
    { id: 1, text: "최신순", active: true },
    { id: 2, text: "과거순", active: false },
  ]);

  const _handleClickBtn = (id: number) => {
    setBtnArr(
      btnArr.map(b =>
        b.id === id ? { ...b, active: true } : { ...b, active: false },
      ),
    );
  };

  /** 정렬 */
  useEffect(() => {
    var newArray = [...savedWordList];

    if (btnArr[0].active) {
      newArray.sort((a, b) => {
        // 최신순
        if (a.word_date > b.word_date) return -1;
        if (a.word_date < b.word_date) return 1;
        return 0;
      });
    } else {
      newArray.sort((a, b) => {
        // 과거순
        if (a.word_date > b.word_date) return 1;
        if (a.word_date < b.word_date) return -1;
        return 0;
      });
    }

    setSavedWordList(newArray);
  }, [btnArr]);

  return (
    <Div>
      <SimpleNavBar text="단어장" />

      <Container>
        <Banner>
          <div>
            <Title>
              내가 저장한 <br /> 믿어방 부동산 단어
            </Title>

            <Buttons>
              {btnArr.map(b => (
                <Btn active={b.active} onClick={() => _handleClickBtn(b.id)}>
                  {b.text}
                </Btn>
              ))}
            </Buttons>
          </div>

          <Illustration src={wordbook} isNoImg={isNoImg} />
        </Banner>

        <CountText>
          저장된 단어 <span>{savedWordList.length}개</span>
        </CountText>
        {savedWordList.map(w => (
          <WordBox key={w.wordId} onClick={() => _handleWordMean(w.wordId)}>
            <div className="top-content">
              <p>{w.word}</p>
              <span>{w.word_date.split("T")[0]}</span>
            </div>

            <p className="mean">{w.meaning.substr(0, 70)}...</p>

            <img src={bookmark} width={16} height={23} />
          </WordBox>
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

const Illustration = styled.img<{ isNoImg: boolean }>`
  width: 120px;
  height: 100px;

  display: ${props => props.isNoImg && "none"};
`;
const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 30px 15px;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  margin-bottom: 35px;
`;

const Title = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;

  color: #000000;

  margin-bottom: 29px;
  margin-left: 5px;
`;

const Buttons = styled.div`
  display: flex;
  align-content: center;
`;

const Btn = styled.div<{ active: boolean }>`
  margin-right: 10px;
  width: 107px;
  height: 29px;
  border-radius: 9px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  text-align: center;

  color: ${props => (props.active ? "#ffffff" : "#707070")};
  background: ${props => (props.active ? "#5a73fc" : "#F2F3F7")};

  ${props =>
    props.active &&
    css`
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    `};
`;

const CountText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #313131;

  span {
    color: #7b7b7b;
    margin-left: 7px;
  }

  margin-bottom: 16px;
`;

const WordBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;
  background: #f4f5f7;
  border-radius: 5px;

  padding: 23px 18px;
  margin-bottom: 13px;

  &:active {
    background: #eceef3;
  }

  .top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;

    span {
      font-weight: 350;
      font-size: 14px;

      color: rgba(0, 0, 0, 0.5);
    }

    margin-bottom: 10px;
  }

  .mean {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;

    color: #000000;
  }

  img {
    margin-left: auto;
  }
`;
