/* 회원가입 페이지 */
import styled from "@emotion/styled";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
// component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import greencheck from "@assets/icon/greencheck.svg";
import graycheck from "@assets/icon/graycheck.svg";
import lockIllustration from "@assets/illustration/lock.png";
import AuthInput from "@components/Input/AuthInput";
import LongBtn from "@components/Buttons/LongBtn";
// hooks
import useInput from "@hooks/useInput";
import { SignUpApi } from "@api/auth";

const Signup = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const [email, setEmail] = useInput("");
  const [pw, setPw] = useInput("");
  const [checkPw, setCheckPw] = useInput("");

  const onCookie = (res: any) => {
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  /**회원가입 */
  const _handleSignUp = () => {
    SignUpApi(email, pw, onCookie);
  };

  /** 로그인하러가기 */
  const _handleGotoLogin = () => {
    navigate("/login");
  };

  return (
    <Div>
      <SimpleNavBar text="회원 가입" />
      <Container>
        <Illurstration src={lockIllustration} />
        <AuthInput placeholder="이메일" value={email} onChange={setEmail} />
        <AuthInput placeholder="비밀번호" value={pw} onChange={setPw} />
        <Box>
          <AuthInput
            placeholder="비밀번호 확인"
            value={checkPw}
            onChange={setCheckPw}
          />
          {pw === checkPw && checkPw != "" ? (
            <Check src={greencheck} />
          ) : (
            <Check src={graycheck} />
          )}
        </Box>

        <LongBtn
          text="회원가입"
          color="--aurora"
          activeColor="--aurora-shadow"
          onClick={_handleSignUp}
        />

        <p className="description" onClick={_handleGotoLogin}>
          이미 계정이 있나요? <span>로그인</span>
        </p>
      </Container>
    </Div>
  );
};

export default Signup;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 69px;
`;

const Illurstration = styled.img`
  margin-top: 15px;
  margin-bottom: 40px;
  width: 30vh;
  height: auto;
`;

const Check = styled.img`
  margin-left: 14px;
  margin-right: 9px;
  margin-bottom: 20px;
`;

const Container = styled.div`
  text-align: center;
  padding: 0 41px 0 41px;

  .description {
    margin-top: 29px;

    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 17px;
    color: #7d7d7d;
  }

  span {
    text-decoration-line: underline;
    margin-left: 5px;
  }
`;

const Box = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
`;
