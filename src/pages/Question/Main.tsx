// lib
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { useCookies } from "react-cookie";

//component
import GoldQuestionBox from "@components/Question/GoldQuestionBox";
import ChatQuestionBox from "@components/Question/ChatQuestionBox";

// asset
import card1 from "@assets/question/card1.png";
import card2 from "@assets/question/card2.png";

import write from "@assets/question/write.svg";
import rightArrow from "@assets/question/rightArrow.png";
// api
import { GetTodayPosts } from "@api/community";
// type
import { GoldQuestionType, ChatQuestionType } from "@assets/types";
import MainNavBar from "@components/NavBar/MainNavBar";

const Main = () => {
  const navigate = useNavigate();

  const backgroundArray = [
    "linear-gradient(30.18deg,#5a73fc 57.1%,rgba(83, 108, 249, 0.853858) 84.35%, rgba(74, 100, 245, 0.66486) 99.99%,rgba(74, 100, 245, 0) 100%);",
    "linear-gradient(259.16deg, #5B8BF7 49.62%, rgba(81, 120, 251, 0.777732) 81.88%, rgba(68, 96, 255, 0.51) 91.14%);box-shadow: 0px 20px 50px 4px rgba(0, 0, 0, 0.25);",
  ];

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const onCookie = (res: any) => {
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const [chatPosts, setChatPosts] = useState<ChatQuestionType[]>();
  const [goldPosts, setGoldPosts] = useState<GoldQuestionType[]>();

  const _handleGetTodayPosts = async () => {
    const res = await GetTodayPosts(cookies.refreshToken, onCookie);
    setChatPosts(res.data.questionList);
    setGoldPosts(res.data.postList);
  };

  /** detail 페이지로 이동 */
  const _handleClicktoDetail = (category: string, id: number) => {
    if (category === "금쪽이") {
      navigate(`/question/gold/${id}`);
    } else {
      // 챗쪽이
      navigate(`/question/chat/${id}`);
    }
  };

  useEffect(() => {
    _handleGetTodayPosts();
  }, []);
  return (
    <Div>
      <MainNavBar text="챗쪽이의 부동산 질문" />

      <CardsContainer>
        <Card background={backgroundArray[0]}>
          <Title size="small">챗쪽이의 질문 모음</Title>
          <Title size="big">
            어려운 부동산 <br />
            대신 물어봅니다
          </Title>

          <img src={card1} className="card1" />
        </Card>

        <Card background={backgroundArray[1]}>
          <Title size="small">오늘의 질문</Title>
          <Title size="big">
            보증금 할부 <br />
            가능한가요?
          </Title>

          <img src={card2} className="card2" />
        </Card>
      </CardsContainer>

      <Container>
        <BtnBar>
          <div className="btnItem" onClick={() => navigate("/question/list")}>
            <QuestionBtn>
              <p>Q</p>
            </QuestionBtn>
            <Text margin="0 0 0 13px">질문 보기</Text>
          </div>
          <div className="btnItem" onClick={() => navigate("/question/create")}>
            <WriteBtn>
              <img src={write} />
            </WriteBtn>

            <Text margin="0 0 0 13px">질문 쓰기</Text>
          </div>
        </BtnBar>

        <Bar>
          <Text size={18} style={{ alignSelf: "end", marginBottom: "7px" }}>
            오늘의 질문
          </Text>

          <ViewAllBtn onClick={() => navigate("/question/list")}>
            <p>전체보기</p>
            <img src={rightArrow} />
          </ViewAllBtn>
        </Bar>

        <div>
          {chatPosts?.map(question => (
            <ChatQuestionBox
              question={question}
              onClick={() =>
                _handleClicktoDetail("챗쪽이", question.questionId)
              }
            />
          ))}

          {goldPosts?.map(question => (
            <GoldQuestionBox
              question={question}
              onClick={() => _handleClicktoDetail("금쪽이", question.postId)}
            />
          ))}
        </div>
      </Container>
    </Div>
  );
};

export default Main;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 40px;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  padding: 24px;

  box-sizing: border-box;

  background: #ffffff;
  border-radius: 44px 44px 0 0;

  z-index: 10;
  transform: translate(0, -20px);
`;

const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  overflow: scroll;

  width: 100%;
  height: 310px;

  padding-left: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Card = styled.div<{ background: string }>`
  min-width: 193px;
  height: 231px;
  background: ${props => props.background};
  border-radius: 25px;
  box-shadow: 0px 20px 50px 4px rgba(0, 0, 0, 0.25);

  margin-left: 10px;

  padding: 15px 20px;

  position: relative;

  overflow: hidden;
  img {
    position: absolute;
    right: -5px;
    bottom: 0;
  }

  .card1 {
    position: absolute;
    right: -5px;
    bottom: 0;
    width: 123px;
  }

  .card2 {
    position: absolute;
    left: 11px;
    bottom: 11px;

    width: 85px;
  }
`;

const Title = styled.p<{ size: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  color: #ffffff;
  font-weight: ${props => (props.size === "small" ? 200 : 300)};

  font-size: ${props => (props.size === "small" ? "11px" : "20px")};

  line-height: ${props => props.size === "big" && "29px"};
  margin-top: ${props => props.size === "big" && "3px"};
`;

const BtnBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .btnItem {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 40%;
  }
`;
const QuestionBtn = styled.div`
  width: 41px;
  height: 41px;
  background: conic-gradient(
    from 224.06deg at 50% 50%,
    #5a73fc 0deg,
    rgba(107, 129, 255, 0.72) 125.63deg,
    rgba(90, 115, 252, 0.911458) 166.87deg,
    #5a73fc 360deg
  );
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Murecho";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    color: #ffffff;
    padding-bottom: 5px;
  }
`;

const Text = styled.p<{ size?: number | 16; margin?: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: ${props => props.size}px;

  color: #090909;

  margin: ${props => props.margin};
`;

const WriteBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 26px;
    height: 20px;
  }
  width: 41px;
  height: 41px;

  background: linear-gradient(
    144.16deg,
    #cc71f7 14.66%,
    rgba(214, 141, 249, 0.990625) 53.31%,
    rgba(228, 172, 255, 0.980931) 72.09%,
    rgba(222, 151, 255, 0.97) 85.34%
  );
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
`;

const Bar = styled.div`
  display: flex;
  justify-content: space-between;

  border-bottom: 1px solid rgba(207, 207, 207, 0.5);

  height: 33px;
  margin-top: 30px;
  margin-bottom: 21px;
`;

const ViewAllBtn = styled.div`
  align-self: end;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 4px;

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #616161;
  }
  img {
    margin-left: 7px;
    margin-top: 1px;
    width: 5px;
    height: 10px;
  }
`;
