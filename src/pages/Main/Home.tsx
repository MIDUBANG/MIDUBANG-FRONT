import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import MainNavBar from "@components/NavBar/MainNavBar";
import profile from "@assets/nav/profile.png";
// component
import FeatureCard1 from "@components/Main/FeatureCard1";
import FeatureCard2 from "@components/Main/FeatureCard2";
import FeatureCard3 from "@components/Main/FeatureCard3";

const Home = () => {
  const navigate = useNavigate();
  const _ClickGoto = (path: string) => {
    navigate(path);
  };

  return (
    <Div>
      <MainNavBar text="자취가 처음이라면" />

      <Container>
        <CardScrollBox>
          <FeatureCard1 />
          <FeatureCard2 />
          <FeatureCard3 />
        </CardScrollBox>

        <Button onClick={() => _ClickGoto("upload")}>특약</Button>

        <Button onClick={() => _ClickGoto("house")}>등기부</Button>
        <Button onClick={() => _ClickGoto("text")}>문자 마법사</Button>
        <Button onClick={() => _ClickGoto("question")}>금쪽이</Button>
        <Button onClick={() => _ClickGoto("checklist")}>체크리스트</Button>
        <Button onClick={() => _ClickGoto("word")}>단어</Button>
      </Container>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 70px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Button = styled.div`
  // 임시 버튼
  width: 100px;
  height: 30px;
  border: 1px solid red;
`;

const CardScrollBox = styled.div`
  display: flex;
  align-items: center;
  overflow: scroll;

  width: 100%;
  height: 400px;

  padding-left: 10px;

  border: 1px solid red;

  &::-webkit-scrollbar {
    display: none;
  }
`;
