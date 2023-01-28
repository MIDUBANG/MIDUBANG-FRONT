/* 카카오로그인 페이지 */
import styled from "@emotion/styled";
import { useLocation } from "react-router-dom";
import axios from "axios";

const KakaoLogin = () => {
  const location = useLocation();
  const KAKAO_CODE = location.search.split("=")[1]; // 인가코드드

  const Spring = `http://{{ip}}:8080/api/member/login/oauth/kakao?code=${KAKAO_CODE}`; // 토큰 요청

  axios
    .post(Spring)
    .then((res) => console.log(res.data.accessToken, res.data.refreshToken)) //access는 http의 디폴트로 설정, 리프레시는 쿠키에 넣기
    .catch((err) => console.log(err));

  // {
  //     "grantType": "bearer",
  //     "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJneTUwMjdAbmF2ZXIuY29tIiwiZXhwIjoxNjc0ODQ2MjQwLCJpZCI6MSwiZW1haWwiOiJneTUwMjdAbmF2ZXIuY29tIn0.-vPR-Z7RTOkazfOhJhdCztVfzA3I71tHnHn36571TUXe9LOeXi01i1kHLC_imKSEwgodNSjtZp1OW-Z4JTmJDA",
  //     "tokenExpiresIn": 1674846240175,
  //     "refreshToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJneTUwMjdAbmF2ZXIuY29tIiwiZXhwIjoxNjc0OTMwODQwLCJpZCI6MSwiZW1haWwiOiJneTUwMjdAbmF2ZXIuY29tIn0.nf5EzyGGow_Fys3afspV9XR1FphqXrOWAzgTb-_QPwGE6Kf5EbFMxf5_ZD7igHTAlhcbn_tdzEl1-GK-pGB_rQ"
  // }

  return (
    <Div>
      <p>로그인</p>
    </Div>
  );
};

export default KakaoLogin;

const Div = styled.div`
  width: 100%;
  height: 100%;
`;
