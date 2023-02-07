import client from "@api/common/client";
import exp from "constants";
import { useCookies } from "react-cookie";

// 이메일 확인
const check = (body: string, type: string): boolean => {
  if (type === "email") {
    const email =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return email.test(body);
  } else {
    //  8 ~ 15자 영문, 숫자 조합
    const password = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,15}$/;
    return password.test(body);
  }
};

// 회원가입
export const SignUpApi = (
  email: string,
  pw: string,
  cookie: (res: any) => void
) => {
  if (!check(email, "email")) {
    alert("이메일의 형식이 유효하지 않습니다.");
  } else if (!check(pw, "password")) {
    alert("8 ~ 15자 길이의 영문과 숫자의 조합으로 작성해주세요.");
  } else {
    client
      .post("member/signup", {
        email: email,
        password: pw,
      })
      .then((res) => {
        console.log("쿠키 저장!!");
        cookie(res);
      })
      .catch((err) => {
        if (err.response.data.message === "이미 존재하는 계정입니다.") {
          alert("이미 존재하는 계정입니다.");
          window.location.href = "http://localhost:3000/login";
        }
      });
  }
};

// 로그인
export const LoginApi = (
  email: string,
  pw: string,
  cookie: (res: any) => void
) => {
  if (!check(email, "email")) {
    alert("이메일의 형식이 유효하지 않습니다.");
  } else {
    client
      .post("member/login", {
        email: email,
        password: pw,
      })
      .then((res) => {
        console.log(res);
        cookie(res);
        window.location.href = "http://localhost:3000/";
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.message == "비밀번호가 일치하지 않습니다.") {
          alert("비밀번호가 일치하지 않습니다.");
        } else if (err.response.data.message == "가입하지 않은 계정입니다.") {
          alert("가입하지 않은 계정입니다.");
        }
      });
  }
};

// access 토큰 재발급
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
      console.log("토큰 재발급 완료", res);
      cookie(res); // 토큰 2개 재설정
    })
    .catch((err) => {
      console.log("토큰 재발급 실패", err);

      if (err.response.data.message === "expired token") {
        // 로그인
        alert("토큰 만료 : 다시 로그인 해주세요.");
        window.location.href = "http://localhost:3000/login";
      }

      window.location.href = "http://localhost:3000/login";
    });
};
