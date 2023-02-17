/* 오타 수정 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";
// img
import loadingPerson from "@assets/illustration/loadingPerson.png";
import pencil from "@assets/icon/pencil.svg";
// component
import BottomModal from "@components/Modal/BottomModal";
import SimpleNavBar from "@components/NavBar/SimpleNavBar";
import { FontGray, FontDescribed, FontBig } from "@style/font.style";
import { PropsContracts } from "@assets/types";
// api & hook
import { PostContractCase, PostAnalyze } from "@api/analyze";
import { useCookies } from "react-cookie";
// store
import { RootState } from "@store/store";
import { useAppDispatch, useAppSelector } from "@store/store";

const Feedback = () => {
  const { contents } = useAppSelector((state: RootState) => state.extraInfo);
  const { extraInfo } = useAppSelector((state: RootState) => state.extraInfo);

  //const url = useAppSelector((state: RootState) => state.image_url);

  // let obj = {};
  // arr.forEach((element, index) => {
  //   obj['key' + index] = element;
  // });
  // console.log(obj);

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
    // (1) NLP 업로드 -> case 번호 (in, out )
    let valueContents: string[] = [];

    contracts.map((c) => {
      valueContents.push(c.contract);
    });

    const NLP = {
      contents: valueContents,
      extraInfo: extraInfo,
    };

    console.log("왜", NLP);
    // {in, out, answer_commission, is_expensive}
    const res_case = await PostContractCase(
      NLP,
      cookies.refreshToken,
      onCookie
    );

    // (2) Spring 업로드 -> 최종 결과 (result로 옮길까?)
    // const res = await PostAnalyze(
    //   0,
    //   0,
    //   false,
    //   "전세",
    //   "url",
    //   [1],
    //   [2],
    //   cookies.refreshToken,
    //   onCookie
    // );
    // console.log("스프링 요청");
  };

  return (
    <Div>
      <SimpleNavBar text="레포트" />
      <Title>총 N개의 특약조항 검출</Title>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <IlluImg src={loadingPerson} style={{ width: "60%" }} />
      </div>
      <FontGray margin="23px auto 0 auto">
        오타를 수정하면 더 정확한 분석을 받아보실 수 있습니다.
      </FontGray>
      {contracts.map((con) => {
        return (
          <Contract>
            <Dot done={con.done} onClick={() => _handleClickCheck(con.id)} />

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
    </Div>
  );
};

export default Feedback;

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
const Div = styled.div`
  width: 100%;
  height: 100%;
`;

const IlluImg = styled.img`
  margin: 35px auto 0 auto;
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

  background-color: ${(props) => (props.done ? "#4880ee" : "")};
  border: ${(props) => (props.done ? "" : "1px solid #9A9A9A")};
`;

const Title = styled.p`
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  color: #000000;

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
