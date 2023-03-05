import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const _ClickGotoLogin = () => {
    navigate("/login");
  };
  return (
    <p>
      메인 페이지입니다. <button onClick={_ClickGotoLogin}>로그인하기</button>
    </p>
  );
};

export default Home;
