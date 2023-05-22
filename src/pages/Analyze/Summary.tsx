// hooks
import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
// store
import { useAppSelector } from "@store/store";
import { RootState } from "@store/store";
// component
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
//api
import { SummarizeReport, GetAnalyze } from "@api/analyze";
import { FontTitle } from "@style/font.style";
import rokect from "@assets/analyze/loading/rokect.png";

const Summary = () => {
  const { reportId } = useAppSelector((state: RootState) => state.summary);

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const onCookie = (res: any) => {
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  const [loading, setLoading] = useState(true);

  let INVALID: any[] = [];
  let VALID_MUST: any[] = [];
  let VALID_WARNING: any[] = [];

  /** 요약 요청 보내기  */
  const _requestSummary = async () => {
    const records = await GetAnalyze(reportId, cookies.refreshToken, onCookie); //records중 case만

    // 케이스 별로 구별
    records.myCaseDto.map((r: any) => {
      let ob = {
        case_id: r.case_id,
        case_detail: r.case_detail,
        article_url: r.article_url,
        caseType: r.caseType,
        case_exists: r.case_exists,
        desc: r.desc,
      };

      switch (ob.caseType) {
        case "INVALID":
          INVALID.push(ob);
          break;
        case "VALID_MUST":
          VALID_MUST.push(ob);
          break;
        case "VALID_WARNING":
          VALID_WARNING.push(ob);
          break;
      }
    });

    // DESC (설명) 만 뽑고
    let temp1 = INVALID.map((re: any) => re.desc);
    let temp2 = VALID_MUST.map((re: any) => re.desc);
    let temp3 = VALID_WARNING.map((re: any) => re.desc);

    // 요약 요청 보내기
    let res1 = await SummarizeReport(temp1);
    let res2 = await SummarizeReport(temp2);
    let res3 = await SummarizeReport(temp3);

    res1 = res1.data.summarys;
    res2 = res2.data.summarys;
    res3 = res3.data.summarys;

    INVALID = INVALID.map((con: any, i: number) => ({
      ...con,
      summary: res1[i],
    }));

    VALID_MUST = VALID_MUST.map((con: any, i: number) => ({
      ...con,
      summary: res2[i],
    }));

    VALID_WARNING = VALID_WARNING.map((con: any, i: number) => ({
      ...con,
      summary: res3[i],
    }));

    setINVALID(INVALID);
    setVALID_MUST(VALID_MUST);
    setVALID_WARNING(VALID_WARNING);

    setLoading(false);
  };

  const [INVALID2, setINVALID] = useState<any>([]);
  const [VALID_MUST2, setVALID_MUST] = useState<any>([]);
  const [VALID_WARNING2, setVALID_WARNING] = useState<any>([]);

  useEffect(() => {
    _requestSummary();
  }, []);

  return (
    <Div>
      <Container>
        <SimpleNavBar text="레포트 요약" />

        {loading ? (
          <div>
            <FontTitle margin="20px 0 0 37px" size="20px">
              요약 레포트 생성 중
            </FontTitle>
            <IlluImg
              imgWidth="318px"
              imgHeight="auto"
              imgMargin="40px 0 0 25px"
            >
              <img src={rokect} />
            </IlluImg>
            <ProgressFont>65%</ProgressFont>
            <WatingFont>레포트 요약 중...</WatingFont>
          </div>
        ) : (
          <div>
            <ReportTitle>레포트 요약 결과</ReportTitle>
            {!!INVALID2 && (
              <Block>
                <Contract caseTypeColor="#EF5353">
                  <div></div>
                  <p>법적 효력이 없는 특약 </p>
                </Contract>
                {INVALID2.map((c: any, i: number) => (
                  <>
                    <Title>
                      {i + 1}. {c.case_detail}
                    </Title>
                    <Des>{c.summary}</Des>
                  </>
                ))}
              </Block>
            )}

            {!!VALID_MUST2.length && (
              <Block>
                <Contract caseTypeColor="#9CDB75">
                  <div></div>
                  <p>필수 특약 </p>
                </Contract>
                {VALID_MUST2.map((c: any, i: number) => (
                  <>
                    <Title>
                      {i + 1}. {c.case_detail}
                    </Title>
                    <Des>{c.summary}</Des>
                  </>
                ))}
              </Block>
            )}

            {!!VALID_WARNING2.length && (
              <Block>
                <Contract caseTypeColor="#FBB03B">
                  <div></div>
                  <p>미리 알아둬야 할 특약 </p>
                </Contract>
                {VALID_WARNING2?.map((c: any, i: number) => (
                  <>
                    <Title>
                      {i + 1}. {c.case_detail}
                    </Title>
                    <Des>{c.summary}</Des>
                  </>
                ))}
              </Block>
            )}
          </div>
        )}
      </Container>
    </Div>
  );
};

export default Summary;

const Div = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 90px;
  //overflow-y: scroll;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
`;

const Block = styled.div`
  position: relative;
  box-sizing: border-box;
  height: auto;

  margin: 18px;

  border: 0.5px solid rgba(147, 147, 147, 0.5);
  border-radius: 5px;
`;

const Contract = styled.div<{ caseTypeColor: string }>`
  display: flex;
  margin: 26px auto 30px 24px;
  width: 80%;

  div {
    background: ${props => props.caseTypeColor};
    height: auto;
    width: 7px;
    margin-right: 10px;
    flex-shrink: 0;
  }
  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
  }
`;

const ReportTitle = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 35px;

  text-align: center;

  color: #000000;
`;
const Title = styled.div`
  margin: 26px 21px 0px 21px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.05em;
`;

const Des = styled.div`
  margin: 10px 21px 30px 21px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
`;

const IlluImg = styled.div<{
  imgWidth: string;
  imgHeight: string;
  imgMargin: string;
}>`
  //margin: 35px auto 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin: ${props => props.imgMargin};
    width: ${props => props.imgWidth};
    height: ${props => props.imgHeight};
  }
`;
const ProgressFont = styled.p`
  margin-top: 19px;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 60px;
  /* identical to box height */
  text-align: center;
  color: #9b9b9b;
`;

const WatingFont = styled.p`
  margin-left: 9px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 350;
  font-size: 32px;
  line-height: 46px;
  text-align: center;

  color: #959595;
`;
