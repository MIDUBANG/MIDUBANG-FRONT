import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
// component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
// asset
import profile from "@assets/my/profile.png";
import background from "@assets/my/background.png";
import wordbook from "@assets/my/wordbook.png";
import report from "@assets/my/report.png";
import arrow from "@assets/my/arrow.png";
import { GetUserInfo } from "@api/auth";
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
// modal
import Swal from "sweetalert2";
import { ConfirmModal } from "@components/Modal/CustomModal";
import { logoutStyle } from "@style/swalstyle";

const My = () => {
  // w  img 삭제
  const isNoImg = useMediaQuery({
    query: "(max-width : 335px)",
  });
  // h  img랑 보기 버튼 삭제
  const isNoImg_Btn = useMediaQuery({
    query: "(max-height : 600px)",
  });

  const [userInfo, setUserInfo] = useState<{ name: string; email: string }>();
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const onCookie = (res: any) => {
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  /** 유저 정보 불러오기 */
  const _getUserInfo = async () => {
    const res = await GetUserInfo(cookies.refreshToken, onCookie);
    const email = res.email;
    const name = res.email.split("@")[0];
    setUserInfo({ name: name, email: email });
  };

  /** 로그아웃 */
  const _handleLogout = () => {
    ConfirmModal(logoutStyle).then(result => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        removeCookie("refreshToken", { path: "/" });
        Swal.fire("로그아웃 성공");
        navigate("/");
      }
    });
  };

  /** 다른 계정으로 로그인 */
  const _handleLoginOuther = () => {
    ConfirmModal(logoutStyle).then(result => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        removeCookie("refreshToken", { path: "/" });
        Swal.fire({ title: "로그아웃 성공", text: "다시 로그인 해주세요" });
        navigate("/login");
      }
    });
  };

  useEffect(() => {
    _getUserInfo();
  }, []);
  return (
    <Div>
      <SimpleNavBar text="마이페이지" />
      <TopContainer>
        <div className="content-box">
          <img src={profile} width={53} height={53} />

          <TextBox>
            <p className="name">{userInfo?.name} 님</p>
            <div className="email-box">
              <p className="my-email">내 이메일</p>
              <p className="email">{userInfo?.email}</p>
            </div>
          </TextBox>
        </div>
        <img src={background} className="background" />
      </TopContainer>
      <Container>
        <BigButton
          onClick={() => navigate("/my/savedword")}
          isNoImg={isNoImg}
          isNoImg_Btn={isNoImg_Btn}
        >
          <div className="left-flex-box">
            <p className="title">저장한 부동산 단어</p>
            <div className="small-btn">단어장 보기</div>
          </div>

          <img src={wordbook} />
        </BigButton>
        <BigButton
          onClick={() => navigate("/my/analyzelist")}
          isNoImg={isNoImg}
          isNoImg_Btn={isNoImg_Btn}
        >
          <div className="left-flex-box">
            <p className="title">내 계약서 분석 기록</p>
            <div className="small-btn">레포트 보기</div>
          </div>
          <img src={report} />
        </BigButton>

        <SmallBtn onClick={_handleLogout}>
          <p className="title">로그아웃</p>
          <img src={arrow} />
        </SmallBtn>
        <SmallBtn onClick={_handleLoginOuther}>
          <p className="title">다른 계정으로 로그인</p>
          <img src={arrow} />
        </SmallBtn>
      </Container>
    </Div>
  );
};

export default My;

const Div = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 65px;
`;

const TopContainer = styled.div`
  position: relative;

  width: 100%;
  height: 220px;
  background-size: cover;

  .content-box {
    position: absolute;
    display: flex;

    padding: 39px 0px 39px 31px;
  }

  .background {
    position: absolute;
    z-index: -1;

    width: 100%;
    height: 100%;
  }
`;

const TextBox = styled.div`
  font-family: "Noto Sans KR";
  font-style: normal;
  color: #ffffff;

  margin-left: 10px;

  .name {
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
  }

  .email-box {
    display: flex;
    align-items: center;

    margin-top: 5px;
  }

  .my-email {
    font-weight: 400;
    font-size: 12px;
    line-height: 17px;

    width: 61px;
    height: 21px;
    background: rgba(168, 181, 255, 0.5);
    border-radius: 10.5px;

    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .email {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    text-align: center;

    margin-left: 6px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;

  padding: 0 18px;

  transform: translate(0, -90px);
`;

const BigButton = styled.div<{ isNoImg: boolean; isNoImg_Btn: boolean }>`
  width: 100%;
  height: auto;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  display: flex;
  justify-content: space-between;

  margin-bottom: 13px;

  .left-flex-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin: 17px 0 21px 29px;
  }

  .title {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    color: #363636;
    white-space: nowrap;
  }

  .small-btn {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 81px;
    height: 26px;
    background: #f3f7f6;
    border-radius: 4px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 11px;
    color: #727272;

    display: ${props => props.isNoImg_Btn && "none"};
  }

  img {
    width: 110px;
    margin: 10px 16px;

    display: ${props => props.isNoImg && "none"};
    display: ${props => props.isNoImg_Btn && "none"};
  }
`;

const SmallBtn = styled.div`
  width: 100%;
  height: 65px;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 12px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 18px 21px 18px 31px;

  margin-bottom: 18px;

  .title {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    color: #363636;
  }

  img {
    width: 12px;
  }
`;
