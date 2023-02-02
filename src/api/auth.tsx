import client from "@api/common/client";
import exp from "constants";
import { useCookies } from "react-cookie";

export const SignUpApi = (
  email: string,
  pw: string,
  cookie: (res: any) => void,
  refreshtoken: string
) => {
  client
    .post("member/signup", {
      email: email,
      password: pw,
    })
    .then((res) => {
      console.log(res);
      if (res.data.status === "OK") {
        cookie(res);
      }
    })
    .catch((err) => {
      window.location.href = "http://localhost:3000/login";
      if (err.response.data.message === "이미 존재하는 계정입니다.") {
        alert("이미 존재하는 계정입니다.");
      } else if (err.response.data.message == "토큰 만료") {
        RefreshApi(refreshtoken, cookie);
      }
    });
};

export const LoginApi = (
  email: string,
  pw: string,
  cookie: (res: any) => void,
  refreshtoken: string
) => {
  client
    .post("member/login", {
      email: email,
      password: pw,
    })
    .then((res) => {
      cookie(res);
      window.location.href = "http://localhost:3000/";
    })
    .catch((err) => {
      if (err.response.data.message == "비밀번호가 일치하지 않습니다.") {
        alert("비밀번호 불일치");
      } else if (err.response.data.message == "가입하지 않은 계정입니다.") {
        alert("가입하지 않은 계정입니다.");
      } else if (err.response.data.message == "토큰 만료") {
        RefreshApi(refreshtoken, cookie);
      }
    });
};

export const RefreshApi = (
  refreshToken: string,
  cookie: (res: any) => void
) => {
  client
    .get("member/refresh/", {
      headers: {
        refreshToken: `Bearer ${refreshToken}`,
      },
    })
    .then((res) => {
      console.log(res);
      cookie(res); // 토큰 2개 재설정
      window.location.href = "http://localhost:3000/login";

      //navigate();
    })
    .catch((err) => {
      if (err.response.data.message == "가입되지 않은 이메일입니다.") {
        alert("가입되지 않은 이메일입니다.");
      }
    });
};
