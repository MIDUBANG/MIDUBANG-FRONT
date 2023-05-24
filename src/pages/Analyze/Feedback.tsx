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
import Loading from "@components/Loading/Loading";
import FloatingLoading from "@components/Loading/FloatingLoading";
import { ConfirmModal } from "@components/Modal/CustomModal";
import { uploadGuideStyle } from "@style/swalstyle";
// api & hook
import { PostContractCase } from "@api/analyze";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
// store
import { RootState } from "@store/store";
import { useAppDispatch, useAppSelector } from "@store/store";
import { setNlpReult } from "@store/resultSlice";
import { FontTitle } from "@style/font.style";

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
  const [editBtnActive, setEditBtnActive] = useState<boolean>(false);

  const _handleClickCheck = (id: number) => {
    setContracts(
      contracts.map(c => (c.id === id ? { ...c, done: !c.done } : c)),
    );
  };

  /** 바텀 모달 열고, 선택된 특약 세팅함 */
  const _handleClickEdit = (id: number) => {
    setContracts(
      contracts.map(c =>
        c.id === id ? { ...c, selected: true } : { ...c, selected: false },
      ),
    );

    const selectedContract = contracts.filter(c => c.id === id)[0].contract;
    setNewContract(selectedContract);

    setIsOpen(true);
  };

  /** 데이터 수정하려고 input에 세팅  */
  const _handleEdit = (id: number) => {
    setContracts(
      contracts.map(c =>
        c.id === id ? { ...c, edit: true } : { ...c, edit: false },
      ),
    );
    setEditBtnActive(true);
  };

  /** 수정 - 제출 */
  const _handleSubmitEdit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setContracts(
      contracts.map(c => {
        if (c.edit === true) {
          return { ...c, contract: newContract, edit: false };
        } else {
          return c;
        }
      }),
    );

    setTimeout(() => {
      setNewContract("");
    }, 200);
    setEditBtnActive(false);
  };

  /** 수정 제출 버튼 */
  const _handleSubmitEdit_Click = () => {
    setContracts(
      contracts.map(c => {
        if (c.edit === true) {
          return { ...c, contract: newContract, edit: false };
        } else {
          return c;
        }
      }),
    );

    setTimeout(() => {
      setNewContract("");
    }, 200);
    setEditBtnActive(false);
  };

  /** 추가 - input 창 열기 */
  const _handleAddContract = () => {
    setNewContract("");
    setIsAdd(true);
  };

  /** 추가 */
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
    setNewContract("");
  };

  /** 선택된 특약 삭제하기 */
  const _handleDeleteContract = (id: number) => {
    setContracts(contracts.filter(c => c.id !== id));
  };

  /** 최종 분석 요청 버튼 z클릭*/
  const _handlePostAnalyze = async () => {
    ConfirmModal(uploadGuideStyle).then(res => {
      if (res.isConfirmed) {
        _reqPostAnalyze();
      }
    });
  };

  /** 분석 요청! */
  const _reqPostAnalyze = async () => {
    setRequest(true);

    // (1) NLP 업로드 -> case 번호 (in, out )
    let valueContents: string[] = [];

    contracts.map(c => {
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
      onCookie,
    );

    dispatch(
      setNlpReult({
        commission: extraInfo.commission,
        answer_commission: nlpresult.answer_commission,
        is_expensive: nlpresult.is_expensive,
        inclusions: nlpresult.in,
        omissions: nlpresult.out,
      }),
    );

    //setTimeout(() => navigate("/analyze/result"), 60000);
  };

  // loading 화면 보여줄지말지 선택하는 state
  const [request, setRequest] = useState(false);

  return (
    <Div>
      <SimpleNavBar text="레포트" />

      {!request ? (
        <Container>
          <Title>총 {contracts.length}개의 특약조항 검출</Title>
          <IlluImg>
            <img src={loadingPerson} />
          </IlluImg>
          <FontGray margin="23px auto 0 auto">
            오타를 수정하면 더 정확한 분석을 받아보실 수 있습니다.
          </FontGray>

          <BtnBox>
            <AddBtn onClick={_handleAddContract}>
              <img src={pencil} /> 추가
            </AddBtn>
            <EditBtn
              onClick={_handleSubmitEdit_Click}
              isEditActive={editBtnActive}
            >
              수정
            </EditBtn>

            <DoneBtn onClick={_handlePostAnalyze}>분석하기</DoneBtn>
          </BtnBox>

          {contracts.map(con => {
            return (
              <Contract onClick={() => _handleClickEdit(con.id)}>
                <Dot
                  done={con.done}
                  onClick={() => _handleClickCheck(con.id)}
                />

                {con.edit ? (
                  <EditForm onSubmit={e => _handleSubmitEdit(e)}>
                    <input
                      autoFocus={true}
                      type="text"
                      value={newContract}
                      onChange={e => setNewContract(e.target.value)}
                    />
                  </EditForm>
                ) : (
                  <FontDescribed margin="0 0 0 14px">
                    {con.contract}
                  </FontDescribed>
                )}
              </Contract>
            );
          })}
          {isAdd && (
            <Contract>
              <Dot done={false} onClick={() => _handleClickCheck(9)} />

              <EditForm onSubmit={e => _handleSubmitAddContract(e)}>
                <input
                  autoFocus={true}
                  type="text"
                  value={newContract}
                  onChange={e => setNewContract(e.target.value)}
                />
              </EditForm>
            </Contract>
          )}

          <BottomModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            _handleEdit={_handleEdit}
            _handleDelete={_handleDeleteContract}
            contracts={contracts}
          />
        </Container>
      ) : (
        <Container>
          <FontTitle margin="20px 0 0 37px" size="20px">
            레포트 생성 중
          </FontTitle>
          <FloatingLoading />

          <WatingFont>열심히 레포트 쓰는 중...</WatingFont>
          <Loading />
        </Container>
      )}
    </Div>
  );
};

export default Feedback;

const Div = styled.div`
  width: 100%;
  height: 100%;

  padding-top: 69px;
  margin-bottom: 30px;
`;

const Container = styled.div`
  width: 100%;
  height: auto;

  padding-bottom: 100px;
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

const IlluImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: 20vh;
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

  // ${props => props.done && "#4880ee"};
  //    ${props => (props.done ? "1px solid #4880ee" : "1px solid #9A9A9A")};

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
  justify-content: space-between;
  width: 100%;

  margin-top: 20px;
  padding: 0 30px;
  box-sizing: border-box;
`;
const AddBtn = styled.div`
  width: 25vw;
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

const EditBtn = styled.div<{ isEditActive: boolean }>`
  width: 25vw;
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

  background: ${props => props.isEditActive && "#5a73fc"};
  color: ${props => props.isEditActive && "#ffffff"};
`;
const DoneBtn = styled.div`
  width: 25vw;
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
const WatingFont = styled.p`
  margin-left: 9px;
  margin-top: 30px;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  text-align: center;
  color: #959595;
`;
