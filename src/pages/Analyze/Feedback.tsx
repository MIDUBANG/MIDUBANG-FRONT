/* 오타 수정 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";
// img
import loadingPerson from "@assets/illustration/loadingPerson.png";
import pencil from "@assets/icon/pencil.svg";
// component
import BottomModal from "@components/Modal/BottomModal";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import { FontGray, FontDescribed } from "@style/font.style";
import { PropsContracts } from "@assets/types";
// api & hook
import { PostContractCase } from "@api/analyze";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
// store
import { RootState } from "@store/store";
import { useAppDispatch, useAppSelector } from "@store/store";
import { setNlpReult } from "@store/resultSlice";

import { FontTitle } from "@style/font.style";
import rokect from "@assets/analyze/loading/rokect.png";

const Feedback = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { contents } = useAppSelector((state: RootState) => state.extraInfo);
  const { extraInfo } = useAppSelector((state: RootState) => state.extraInfo);

  let processedContents: PropsContracts[] = [];

  contents.forEach((element, index) => {
    processedContents.push({
      id: index,
      contract: element,
      done: false,
      selected: false,
      edit: false,
    });
  });

  const [cookies, setCookie, removeCookie] = useCookies(["refreshToken"]);

  const onCookie = (res: any) => {
    console.log("쿠키");
    const accessToken = res.data.accessToken;
    localStorage.setItem("token", accessToken);
    const refreshToken = res.data.refreshToken;
    setCookie("refreshToken", refreshToken, { path: "/" });
  };

  // 전역 상태 관리에서 뽑아와야함
  const [contracts, setContracts] =
    useState<PropsContracts[]>(processedContents);

  const [isOpen, setIsOpen] = useState(false);
  const [newContract, setNewContract] = useState<string>("");
  const [isAdd, setIsAdd] = useState<boolean>(false);

  const _handleClickCheck = (id: number) => {
    setContracts(
      contracts.map((c) => (c.id === id ? { ...c, done: !c.done } : c))
    );
  };

  const _handleClickEdit = (id: number) => {
    setContracts(
      contracts.map((c) =>
        c.id === id ? { ...c, selected: true } : { ...c, selected: false }
      )
    );

    const selectedContract = contracts.filter((c) => c.id === id)[0].contract;
    setNewContract(selectedContract);

    setIsOpen(true);
  };

  const _handleEdit = (id: number) => {
    setContracts(
      contracts.map((c) =>
        c.id === id ? { ...c, edit: true } : { ...c, edit: false }
      )
    );
  };

  const _handleSubmitEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setContracts(
      contracts.map((c) => {
        if (c.edit === true) {
          return { ...c, contract: newContract, edit: false };
        } else {
          return c;
        }
      })
    );

    setTimeout(() => {
      setNewContract("");
    }, 200);
  };

  const _handleAddContract = () => {
    setIsAdd(true);
  };

  const _handleSubmitAddContract = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const add = {
      id: contracts.length + 1,
      contract: newContract,
      done: false,
      selected: false,
      edit: false,
    };

    setContracts([...contracts, add]);
    setIsAdd(false);
  };

  const _handlePostAnalyze = async () => {
    setRequest(true);

    console.log("nlp 요청 버튼 클릭");
    // (1) NLP 업로드 -> case 번호 (in, out )
    let valueContents: string[] = [];

    contracts.map((c) => {
      valueContents.push(c.contract);
    });

    const NLP = {
      contents: valueContents,
      extraInfo: extraInfo,
    };

    // {in, out, answer_commission, is_expensive}
    const nlpresult = await PostContractCase(
      NLP,
      cookies.refreshToken,
      onCookie
    );

    console.log("NLP 결과 >>", nlpresult);

    dispatch(
      setNlpReult({
        commission: extraInfo.commission,
        answer_commission: nlpresult.answer_commission,
        is_expensive: nlpresult.is_expensive,
        inclusions: nlpresult.in,
        omissions: nlpresult.out,
      })
    );

    navigate("/analyze/result");
  };

  const [request, setRequest] = useState(false);

  return (
    <Div>
      <SimpleNavBar text="레포트" />

      {!request ? (
        <>
          <Title>총 {contracts.length}개의 특약조항 검출</Title>
          <IlluImg imgWidth="220px" imgHeight="auto" imgMargin="10px 0 0 0">
            <img src={loadingPerson} />
          </IlluImg>
          <FontGray margin="23px auto 0 auto">
            오타를 수정하면 더 정확한 분석을 받아보실 수 있습니다.
          </FontGray>
          {contracts.map((con) => {
            return (
              <Contract>
                <Dot
                  done={con.done}
                  onClick={() => _handleClickCheck(con.id)}
                />

                {con.edit ? (
                  <EditForm onSubmit={(e) => _handleSubmitEdit(e)}>
                    <input
                      autoFocus={true}
                      type="text"
                      value={newContract}
                      onChange={(e) => setNewContract(e.target.value)}
                    />
                  </EditForm>
                ) : (
                  <FontDescribed
                    margin="0 0 0 14px"
                    onClick={() => _handleClickEdit(con.id)}
                  >
                    {con.contract}
                  </FontDescribed>
                )}
              </Contract>
            );
          })}
          {isAdd && (
            <Contract>
              <Dot done={false} onClick={() => _handleClickCheck(9)} />

              <EditForm onSubmit={(e) => _handleSubmitAddContract(e)}>
                <input
                  autoFocus={true}
                  type="text"
                  value={newContract}
                  onChange={(e) => setNewContract(e.target.value)}
                />
              </EditForm>
            </Contract>
          )}
          <BtnBox>
            <AddBtn onClick={_handleAddContract}>
              <img src={pencil} /> 추가
            </AddBtn>
            <DoneBtn onClick={_handlePostAnalyze}>완료</DoneBtn>
          </BtnBox>
          <BottomModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            _handleEdit={_handleEdit}
            contracts={contracts}
          />
        </>
      ) : (
        <div>
          <FontTitle margin="20px 0 0 37px" size="20px">
            레포트 생성 중{" "}
          </FontTitle>
          <IlluImg imgWidth="318px" imgHeight="auto" imgMargin="40px 0 0 25px">
            <img src={rokect} />
          </IlluImg>
          <ProgressFont>65%</ProgressFont>
          <WatingFont>열심히 레포트 쓰는 중...</WatingFont>
        </div>
      )}
    </Div>
  );
};

export default Feedback;

const Div = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 69px;
`;

const EditForm = styled.form`
  width: 85%;

  input {
    border: none;
    border-bottom: 1px solid gray;

    width: 100%;
    padding-bottom: 10px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;

    color: #000000;

    &:focus {
      outline: none;
    }
  }
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
    margin: ${(props) => props.imgMargin};
    width: ${(props) => props.imgWidth};
    height: ${(props) => props.imgHeight};
  }
`;

const Contract = styled.div`
  margin: 23px auto 0 29px;
  display: flex;
  align-items: center;

  width: 90%;

  p {
    margin: 0;
    width: 85%;
  }
`;
const Dot = styled.div<{ done: boolean }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-right: 14px;
  margin-bottom: auto;
  margin-top: 4px;

  // ${(props) => props.done && "#4880ee"};
  //    ${(props) => (props.done ? "1px solid #4880ee" : "1px solid #9A9A9A")};

  background-color: #4880ee;
  border: 1px solid #4880ee;
`;

const Title = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #000000;

  margin-top: 20px;
  margin-left: 31px;
`;

const BtnBox = styled.div`
  display: flex;
  width: 100%;

  padding: 0 30px;
  box-sizing: border-box;

  position: fixed;
  bottom: 33px;
`;
const AddBtn = styled.div`
  width: 100%;
  height: 41px;
  border: 1px solid #4880ee;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: #4880ee;

  img {
    width: 11px;
    height: 12px;
    margin-top: 1px;
    margin-right: 1px;
  }
`;

const DoneBtn = styled.div`
  margin-left: 14px;

  width: 100%;
  height: 41px;
  background: #5a73fc;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
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
