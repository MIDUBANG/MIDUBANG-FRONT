/* 카카오로그인 페이지 */
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { SPRING_URL } from "@api/common/url";
// asset
import kakoloading from "@assets/kako/kakaoloading.gif";

const KakaoLogin = () => {
  // const location = useLocation();
  // const KAKAO_CODE = location.search.split("=")[1]; // 인가코드
  // const Spring = `${SPRING_URL}member/login/oauth/kakao?code=${KAKAO_CODE}`; // 토큰 요청

  // const [cookies, setCookie] = useCookies(["refreshToken"]);

  // const navigate = useNavigate();

  // axios.defaults.withCredentials = true;
  // axios
  //   .post(Spring)
  //   .then(res => {
  //     const accessToken = res.data.accessToken;
  //     console.log(accessToken);
  //     localStorage.setItem("token", accessToken);

  //     const refreshToken = res.data.refreshToken;
  //     setCookie("refreshToken", refreshToken, { path: "/" });
  //     navigate("/");
  //     window.location.reload();
  //   })
  //   .catch(err => {
  //     console.log("카카오 로그인 에러.", err);
  //     navigate("/login");
  //   });

  return (
    <Div>
      <Gif src={kakoloading} />
      <p>카카오 로그인 중입니다</p>
      <p>조금만 기다려주세요!</p>
    </Div>
  );
};

export default KakaoLogin;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: "SUITE-Regular";
    margin-top: 5px;
  }
`;

const Gif = styled.img`
  width: 50%;
  height: auto;
  margin-bottom: 30px;
`;
