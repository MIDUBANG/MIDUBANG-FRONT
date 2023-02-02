import client from "@api/common/client";
import { useCookies } from "react-cookie";

export const LoginApi = (
  email: string,
  pw: string,
  navigate: () => void,
  cookie: (res: any) => void
) => {
  client
    .post("member/login", {
      email: email,
      password: pw,
    })
    .then((res) => {
      const accessToken = res.data.accessToken;
      localStorage.setItem("token", accessToken);
      const refreshToken = res.data.refreshToken;
      cookie(res);
      navigate();
    })
    .catch((err) => {
      if (err.response.data.message == "비밀번호가 일치하지 않습니다.") {
        alert("비밀번호 불일치");
      } else if (err.response.data.message == "가입하지 않은 계정입니다.") {
        alert("가입하지 않은 계정입니다.");
      }
    });
};
