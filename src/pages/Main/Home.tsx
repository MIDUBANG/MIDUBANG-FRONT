import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import MainNavBar from "@components/NavBar/MainNavBar";
import profile from "@assets/nav/profile.png";

const Home = () => {
  const navigate = useNavigate();
  const _ClickGotoLogin = () => {
    navigate("/login");
  };
  return (
    <Div>
      <MainNavBar text="자취가 처음이라면" />
      <div>배너</div>
      <div>
        <h1>제목1</h1>
        <div>버튼들</div>
      </div>
      <div>
        <h1>제목2</h1>
        <div>버튼들</div>
      </div>
      <div>sdfs</div>
    </Div>
  );
};

export default Home;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const TopNav = styled.div`
  width: 100%;
  height: 50px;
`;
