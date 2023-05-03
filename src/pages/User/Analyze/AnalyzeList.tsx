import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { GetAnalyzeList, GetAnalyze, DeleteAnalyze } from "@api/analyze";
import { useCookies } from "react-cookie";
// img
import report from "@assets/analyzelist/report.png";
// asset
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import { resultsType } from "@assets/types";

const AnalyzeHistory = () => {
  const [results, setResults] = useState<resultsType[]>([]);

  const navigate = useNavigate();

  /** 분석 기록 리스트 */
  const _handleGetAnalyzeList = async () => {
    const res = await GetAnalyzeList(cookies.refreshToken, onCookie);
    let records = [...res.data.recordList];

    records.sort((a, b) => {
      // 최신순
      if (a.record_date > b.record_date) return -1;
      if (a.record_date < b.record_date) return 1;
      return 0;
    });

    setResults(records);
  };

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);
  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  /**분석 개별 페이지로 이동 */
  const _handleClickAnalyze = (id: number) => {
    navigate(`${id}`);
  };

  const _handleClickBtn = (id: number) => {
    setBtnArr(
      btnArr.map((b) =>
        b.id === id ? { ...b, active: true } : { ...b, active: false }
      )
    );
  };

  const [btnArr, setBtnArr] = useState([
    { id: 1, text: "최신순", active: true },
    { id: 2, text: "과거순", active: false },
  ]);

  /** 정렬 */
  useEffect(() => {
    console.log("정렬결과");

    var newArray = [...results];

    if (btnArr[0].active) {
      newArray.sort((a, b) => {
        // 최신순
        if (a.record_date > b.record_date) return -1;
        if (a.record_date < b.record_date) return 1;
        return 0;
      });
    } else {
      newArray.sort((a, b) => {
        // 과거순
        if (a.record_date > b.record_date) return 1;
        if (a.record_date < b.record_date) return -1;
        return 0;
      });
    }

    setResults(newArray);
  }, [btnArr]);

  useEffect(() => {
    _handleGetAnalyzeList();
  }, []);

  return (
    <Div>
      <SimpleNavBar text="레포트 목록" />

      <Container>
        <Banner>
          <div>
            <Title>
              내가 저장한 <br /> 믿어방 부동산 단어
            </Title>

            <Buttons>
              {btnArr.map((b) => (
                <Btn active={b.active} onClick={() => _handleClickBtn(b.id)}>
                  {b.text}
                </Btn>
              ))}
            </Buttons>
          </div>

          <img src={report} width={160} height={137} />
        </Banner>

        <CountText>
          저장된 레포트 <span>{results.length}개</span>
        </CountText>
        {results?.map((result) => {
          let date =
            result.record_date.substring(5, 10).replace("-", "월 ") + "일";
          let contractType = "";
          if (result.contract_type === "JEONSE") {
            contractType = "전세";
          } else if (result.contract_type === "HALF_JEONSE") {
            contractType = "반전세";
          } else {
            contractType = "월세";
          }

          return (
            <AnalyzeBox onClick={() => _handleClickAnalyze(result.recordId)}>
              <p className="title">{date} 분석</p>
              <p className="date">{contractType} </p>
            </AnalyzeBox>
          );
        })}
      </Container>
    </Div>
  );
};
export default AnalyzeHistory;

const Div = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 70px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 30px 15px;
`;

const Banner = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;

  margin-bottom: 35px;

  img {
    width: 140px;
    height: auto;
  }
`;

const Title = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;

  color: #000000;

  margin-bottom: 29px;
  margin-left: 5px;
`;

const Buttons = styled.div`
  display: flex;
  align-content: center;
`;

const Btn = styled.div<{ active: boolean }>`
  margin-right: 10px;
  width: 107px;
  height: 29px;
  border-radius: 9px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  text-align: center;

  color: ${(props) => (props.active ? "#ffffff" : "#707070")};
  background: ${(props) => (props.active ? "#5a73fc" : "#F2F3F7")};

  ${(props) =>
    props.active &&
    css`
      box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    `};
`;

const CountText = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #313131;

  span {
    color: #7b7b7b;
    margin-left: 7px;
  }

  margin-bottom: 16px;
`;

const WordBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 156px;
  background: #f4f5f7;
  border-radius: 5px;

  padding: 23px 18px;
  margin-bottom: 13px;

  &:active {
    background: #eceef3;
  }

  .top-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;

    span {
      font-weight: 350;
      font-size: 14px;

      color: rgba(0, 0, 0, 0.5);
    }

    margin-bottom: 10px;
  }

  .mean {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 20px;

    color: #000000;
  }

  img {
    margin-left: auto;
  }
`;

const AnalyzeBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: auto;
  background: #f4f5f7;
  border-radius: 5px;

  margin-bottom: 15px;
  padding: 20px;

  .title {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
  }

  .date {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 350;
    font-size: 14px;
    line-height: 20px;

    color: rgba(0, 0, 0, 0.5);
  }
`;
