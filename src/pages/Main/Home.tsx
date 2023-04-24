import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import MainNavBar from "@components/NavBar/MainNavBar";
import profile from "@assets/nav/profile.png";
// component
import FeatureCard1 from "@components/Main/FeatureCard1";
import FeatureCard2 from "@components/Main/FeatureCard2";
import FeatureCard3 from "@components/Main/FeatureCard3";
import FeatureCard4 from "@components/Main/FeatureCard4";
import FeatureCard5 from "@components/Main/FeatureCard5";
import FeatureCard6 from "@components/Main/FeatureCard6";

import Footer from "@components/Footer/Footer";
const Home = () => {
  const navigate = useNavigate();
  const _ClickGoto = (path: string) => {
    navigate(path);
  };

  return (
    <Div>
      <MainNavBar text="자취가 처음이라면" />

      <Container>
        <Title>
          <p className="title"> 사회초년생 필수 코스</p>
          <p className="sub-title">
            <span>전월세 계약</span> 마스터
          </p>
        </Title>
        <CardScrollBox>
          <FeatureCard1 />
          <FeatureCard2 />
          <FeatureCard3 />
        </CardScrollBox>

        <Title>
          <p className="title">부동산과 친해지기</p>
          <p className="sub-title">
            <span>슬기로운 홀로서기</span>클래스
          </p>
        </Title>
        <CardScrollBox>
          <FeatureCard4 />
          <FeatureCard5 />
          <FeatureCard6 />
        </CardScrollBox>

        {/* <Button onClick={() => _ClickGoto("upload")}>특약</Button>

        <Button onClick={() => _ClickGoto("house")}>등기부</Button>
        <Button onClick={() => _ClickGoto("text")}>문자 마법사</Button>
        <Button onClick={() => _ClickGoto("question")}>금쪽이</Button>
        <Button onClick={() => _ClickGoto("checklist")}>체크리스트</Button>
        <Button onClick={() => _ClickGoto("word")}>단어</Button> */}
      </Container>

      <Footer></Footer>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  width: 100%;
  height: auto;
  padding-top: 70px;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;

  padding: 36px 0 50px 0;
`;

const Title = styled.div`
  margin-left: 29px;

  font-family: "Noto Sans KR";
  font-style: normal;
  color: #363636;

  .title {
    font-weight: 500;
    font-size: 26px;
    line-height: 38px;
  }

  .sub-title {
    font-weight: 400;
    font-size: 26px;
    line-height: 38px;
  }

  span {
    font-weight: 400;
    font-size: 26px;
    line-height: 38px;
    color: #1f4ef5;
  }
`;

const CardScrollBox = styled.div`
  margin-bottom: 50px;

  display: flex;
  align-items: center;
  overflow: scroll;

  width: 100%;
  height: 400px;

  padding-left: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;
