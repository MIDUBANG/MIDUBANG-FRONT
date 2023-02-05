/* 카카오로그인 페이지 */
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const KakaoLogin = () => {
  const location = useLocation();
  const KAKAO_CODE = location.search.split("=")[1]; // 인가코드
  const Spring = `http://34.64.177.249:8080/api/member/login/oauth/kakao?code=${KAKAO_CODE}`; // 토큰 요청

  const [cookies, setCookie] = useCookies(["refreshToken"]);

  const navigate = useNavigate();

  axios.defaults.withCredentials = true;
  axios
    .post(Spring)
    .then((res) => {
      const accessToken = res.data.accessToken;
      console.log(accessToken);
      localStorage.setItem("token", accessToken);

      const refreshToken = res.data.refreshToken;
      setCookie("refreshToken", refreshToken, { path: "/" });
      navigate("/");
    })
    .catch((err) => {
      console.log("카카오 로그인 에러.", err);
      navigate("/login");
    });

  return <Div></Div>;
};

export default KakaoLogin;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;
