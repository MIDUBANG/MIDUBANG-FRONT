import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import edit from "@assets/feedback/edit.svg";
import trash from "@assets/feedback/trash.svg";
import { PropsContracts } from "@assets/types";

type Props = {
  isOpen: boolean;
  setIsOpen: (isopen: boolean) => void;
  contracts: PropsContracts[];
  _handleEdit: (id: number) => void;
  _handleDelete: (id: number) => void;
};

const BottomModal = ({
  isOpen,
  setIsOpen,
  contracts,
  _handleEdit,
  _handleDelete,
}: Props) => {
  const contract = contracts.filter(c => c.selected === true);

  /** 수정하기 */
  const _handleEditContract = (id: number) => {
    _handleEdit(id);
    setIsOpen(false);
  };

  /** 특약 삭제하기 */
  const _handleDeleteContract = (id: number) => {
    _handleDelete(id);
    setIsOpen(false);
  };

  const [wHeight, setWHeight] = useState(
    document.documentElement.scrollHeight + "px",
  );

  /** background 영역 높이 수정 */
  useEffect(() => {
    setWHeight(document.documentElement.scrollHeight + "px");
  });

  return (
    <Modal>
      {isOpen && (
        <Background onClick={() => setIsOpen(false)} wHeight={wHeight} />
      )}
      <div className={isOpen ? "container modal-open" : "container"}>
        <div className="modal">
          <Bar />

          <Contract>
            <div className="dot"></div>
            <p>{contract[0]?.contract.substring(0, 15)}...</p>
          </Contract>

          <Buttons>
            <Button onClick={() => _handleEditContract(contract[0]?.id)}>
              <img src={edit} />
              <p>수정하기</p>
            </Button>

            <Button onClick={() => _handleDeleteContract(contract[0]?.id)}>
              <img src={trash} />
              <p>삭제하기</p>
            </Button>
          </Buttons>
        </div>
      </div>
    </Modal>
  );
};

export default BottomModal;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;

  width: 100%;
  height: 70px;
  border-radius: 5px;

  margin-top: 13px;
`;

const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 45%;
  height: 70px;
  background: #f5f5f5;
  border-radius: 5px;

  img {
    width: 23px;
    height: 23px;
  }
  p {
    margin-top: 5px;

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    display: flex;
    align-items: center;
  }
`;

const Bar = styled.hr`
  width: 30px;
  height: 2px;
  background-color: #565656;
  border: 1px solid #565656;
  border-radius: 1px;
  padding: 0;
  margin: 11px 0 10px 0;
`;
const Contract = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 5px;

  .dot {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    flex-shrink: 0;
    background: #4880ee;
    margin-top: 1px;
    margin-right: 6px;
  }

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
  }
`;

const Background = styled.div<{ wHeight: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${props => props.wHeight};

  background: rgba(0, 0, 0, 0.45);

  backdrop-filter: blur(5px);
  animation: modal-bg-show 300ms;

  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Modal = styled.div`
  z-index: 100;

  .modal {
    box-sizing: border-box;

    background: #ffffff;
    border-radius: 14px 14px 0px 0px;

    width: 100%;
    height: 170px;

    // 숨기기
    position: fixed;
    top: 100%;
    left: 0;

    text-align: left;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all 300ms cubic-bezier(0.86, 0, 0.07, 1);
  }
  .container.modal-open .modal {
    top: calc(100% - 150px);
  }
`;
