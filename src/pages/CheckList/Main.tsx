// lib
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useCookies } from "react-cookie";
//component
import MainNavBar from "@components/NavBar/MainNavBar";
import CategoryBox from "@components/CheckList/CategoryBox";
// asset
import { checkCategoryData } from "@assets/checkCategoryData";
//img
import illustration from "@assets/checklist/illustration.png";
import check from "@assets/checklist/check.png";
// api
import { GetAllCheckCount } from "@api/checklist";

const Main = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const onCookie = (res: any) => {
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const [doneDount, setDoneCount] = useState(0);

  /** 완료한 개수 */
  const _handleGetAllCheckCount = async () => {
    const res = await GetAllCheckCount(cookies.refreshToken, onCookie);
    setDoneCount(res.count);
  };

  useEffect(() => {
    _handleGetAllCheckCount();
  }, []);

  return (
    <Div>
      <MainNavBar text="자취 A-Z 체크리스트" />
      <Banner>
        <EnText weight="700" size="40px" color="#070A39" margin="">
          Checklists
        </EnText>
        <EnText weight="700" size="14px" color="#474747" margin="7px 0 0 3px">
          슬기로운 자취 시작 A to Z
        </EnText>
        <div className="img-box">
          <img src={illustration} />
        </div>
      </Banner>

      <Container>
        <ProgressBox>
          <img src={check} width={43} height={43} />
          <div className="percent">
            <p className="percent-text">
              {parseInt(((doneDount / 62) * 100).toString())}%<span>완료 </span>
            </p>
            <ProgressBar percent={(doneDount / 62) * 100}>
              <div className="done-bar"></div>
            </ProgressBar>
          </div>
        </ProgressBox>

        {checkCategoryData.map(c => (
          <CategoryBox
            backgroundColor={c.backgroundColor}
            pointColor={c.pointColor}
            title={c.title}
            path={c.path}
            arrow={c.arrow}
            emoji={c.emoji}
            count={c.count}
          />
        ))}
      </Container>
    </Div>
  );
};

export default Main;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 65px;
`;

const Banner = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;
  background: #f7f5fa;

  padding: 24px 30px 40px 30px;

  .img-box {
    width: 100%;
    height: 130px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Container = styled.div`
  width: 100%;
  height: auto;

  padding: 40px 19px 75px 19px;
`;

const EnText = styled.div<{
  weight: string;
  size: string;
  color: string;
  margin: string;
}>`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  color: ${props => props.color};
  margin: ${props => props.margin};
`;

const KRText = styled.div<{ weight: string; size: string; color: string }>`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: ${props => props.weight};
  font-size: ${props => props.size};
  color: ${props => props.color};
`;

const ProgressBox = styled.div`
  height: 43px;
  width: 100%;
  display: flex;

  padding: 0 10px;
  margin-bottom: 20px;

  .percent {
    width: 100%;
    margin-left: 13px;
  }
  .percent-text {
    width: 100%;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #5a7fff;

    span {
      font-family: "Noto Sans KR";
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      color: #aaaaaa;
    }
  }
`;

const ProgressBar = styled.div<{ percent: number }>`
  position: relative;

  width: 100%;
  height: 8px;
  background: #e8f1f6;
  border-radius: 7px;

  margin-top: 5px;

  .done-bar {
    position: absolute;
    left: 0;

    width: ${props => props.percent}%;
    height: 8px;
    background: linear-gradient(270.04deg, #4e75ff 0.03%, #87a2ff 98.93%);
    border-radius: 7px;
  }
`;
