import client from "@api/common/client";
import axios from "axios";
import { SPRING_URL } from "./common/url";

import {
  WarningSwal,
  ErrorSwal,
  SuccessSwal,
} from "@components/Modal/CustomModal";

const CLIENT_MAIN_URL = process.env.REACT_APP_REACT_URL;

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
  cookie: (res: any) => void,
) => {
  if (!check(email, "email")) {
    WarningSwal("회원가입 실패", "이메일의 형식이 유효하지 않습니다.");
  } else if (!check(pw, "password")) {
    WarningSwal(
      "회원가입 실패",
      "8 ~ 15자 길이의 영문과 숫자의 조합으로 작성해주세요.",
    );
  } else {
    client
      .post("member/signup", {
        email: email,
        password: pw,
      })
      .then(res => {
        SuccessSwal("회원 가입 성공", "축하드립니다!");
        cookie(res);
        window.location.href = CLIENT_MAIN_URL || "";
      })
      .catch(err => {
        console.log(err);
        if (err.response.data.message === "이미 존재하는 계정입니다.") {
          WarningSwal("회원가입 실패", "이미 존재하는 계정입니다.");
          window.location.href = `${CLIENT_MAIN_URL}/login`;
        } else {
          ErrorSwal("에러 발생", "다시 시도해주세요.");
        }
      });
  }
};

// 로그인
export const LoginApi = (
  email: string,
  pw: string,
  cookie: (res: any) => void,
) => {
  if (!check(email, "email")) {
    WarningSwal("로그인 실패", "이메일의 형식이 유효하지 않습니다.");
  } else {
    client
      .post("member/login", {
        email: email,
        password: pw,
      })
      .then(res => {
        console.log(res);
        cookie(res);
      })
      .catch(err => {
        console.log(err);
        if (err.response.data.message == "비밀번호가 일치하지 않습니다.") {
          WarningSwal("로그인 실패", "비밀번호가 일치하지 않습니다.");
        } else if (err.response.data.message == "가입하지 않은 계정입니다.") {
          WarningSwal("로그인 실패", "가입하지 않은 계정입니다.");
        } else {
          ErrorSwal("에러 발생", "다시 시도해주세요.");
        }
      });
  }
};

// 유저 정보 조회
export const GetUserInfo = async (
  refreshToken: string,
  cookie: (res: any) => void,
): Promise<any> => {
  try {
    const res = await client.get("member/info");
    return res.data;
  } catch (err: any) {
    console.log("에러임>", err);

    //ErrorSwal("에러 발생", "다시 시도해주세요.");

    RefreshApi(refreshToken, cookie);

    // if (err.response.data.message === "expired token") {
    //   alert("유저 정보 조회 시도했으나 토큰 만료");
    //   RefreshApi(refreshToken, cookie); // 재발급
    // } else {
    //   WarningSwal("인증 오류", "다시 로그인해주세요");
    //   let e = new Error("로그인 필요");
    //   throw e;
    // }
  }
};

// access 토큰 재발급
export const RefreshApi = (
  refreshToken: string,
  cookie: (res: any) => void,
) => {
  axios
    .get(`${SPRING_URL}/member/refresh/`, {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    })
    .then(res => {
      cookie(res); // 토큰 2개 재설정
      window.location.reload();
    })
    .catch(err => {
      WarningSwal("토큰 만료", "다시 로그인해주세요").then(res => {
        window.location.href = `${CLIENT_MAIN_URL}login`; // 다시 로그인
      });
    });
};
