import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import MainNavBar from "@components/NavBar/MainNavBar";
import profile from "@assets/nav/profile.png";

const Home = () => {
  const navigate = useNavigate();
  const _ClickGoto = (path: string) => {
    navigate(path);
  };

  return (
    <Div>
      <Container>
        <MainNavBar text="자취가 처음이라면" />
        <Button onClick={() => _ClickGoto("upload")}>특약</Button>

        <Button onClick={() => _ClickGoto("house")}>등기부</Button>
        <Button onClick={() => _ClickGoto("text")}>문자 마법사</Button>
        <Button onClick={() => _ClickGoto("question")}>금쪽이</Button>
      </Container>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 65px;
`;

const Button = styled.div`
  // 임시 버튼
  width: 100px;
  height: 30px;
  border: 1px solid red;
`;
