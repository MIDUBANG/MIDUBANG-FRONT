/* Result 특약사항 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";

import SimpleNavBar from "@components/NavBar/SimpleNavBar";

import { FontTitle, FontDescribed } from "@style/font.style";
import resultTemp1 from "@assets/temp/resultTemp1.png";
import alert from "@assets/icon/alert.svg";

// component
import ResultBox from "@components/Result/ResultBox";
import ShortBtn from "@components/Buttons/ShortBtn";
import WordModal from "@components/Modal/WordModal";
import { PostContractCase, PostAnalyze } from "@api/analyze";
import { useCookies } from "react-cookie";

const Result = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  // 단어 형광펜
  const [wordMark, setWordMark] = useState(false);
  // 모달 컴포넌트
  const [modalOpen, setModalOpen] = useState(false);
  const [selectWord, setSelectWord] = useState("");

  const results = {
    id: 1,
    text: [
      "주택임대차보호법 제 4조에 따르면 기간을 정하지 않거나 2년 미만으로 정한 ",
      "임대차 계약",
      "기간은 그 기간을 2년으로 봅니다.",
      "임대차 계약",
      "기간은 그 기간을 2년으로 봅니다.",
      "임대차 계약",
      "테스트",
      "저당권",
    ],
  };

  const _handlePostAnalyze = async () => {
    // NLP에서 case in, out 받아오기
    // const caseResult = await PostContractCase(
    //   resultArray,
    //   cookies.refreshToken,
    //   onCookie
    // );

    const caseResult = {
      answer_commission: 40000,
      is_expensive: true,
      in: [1, 2, 3],
      out: [4, 5, 6],
    };

    // Spring에서 최종 분석 받아오기
    const res = await PostAnalyze(
      30000, // 내 복비
      caseResult.answer_commission, // 적정 복비
      caseResult.is_expensive, // 바가지 유무
      "JEONSE", // 전세 월세 유무 (이것도 전역)
      "https/", // 전역에서 뽑아와,,
      caseResult.in,
      caseResult.out,
      cookies.refreshToken,
      onCookie
    );

    const myCase = res.myCaseDto;
    const record = res.record;
    const word = res.simpleWordDtos;

    console.log("케이스", myCase);
    console.log("그 외 정보", record);
    console.log("단어", word);
  };

  const openModal = (t: string) => {
    setSelectWord(t);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Div>
      <SimpleNavBar text="레포트" />
      <Container>
        <FontTitle margin="20px 0 28px 28px">
          주의 요망 특약 사항 발견
        </FontTitle>
        <img
          src={resultTemp1}
          style={{ margin: "0 auto", display: "block", width: "90%" }}
        />

        <p>특약 조항 해설</p>

        <ResultBox />
        <ResultBox />

        <ResultBox />

        <WordModal open={modalOpen} close={closeModal} text={selectWord} />

        {/* <BtnsDiv>
          <ShortBtn
            text="관련 기사 보러가기"
            color="--aurora"
            activeColor="--aurora-shadow"
            state={modalOpen}
            onClick={openModal}
          />
          <div className="gap"></div>
          <ShortBtn
            text="단어 사전 보기"
            color="--skyblue"
            activeColor="--skyblue-shadow"
            state={wordMark}
            onClick={setWordMark}
          />
        </BtnsDiv> */}
      </Container>
    </Div>
  );
};

export default Result;

const Div = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: scroll;
`;

const Container = styled.div`
  padding-bottom: 100px;
`;
