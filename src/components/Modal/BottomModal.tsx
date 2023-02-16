import styled from "@emotion/styled";

import { PropsContracts } from "@assets/types";
type Props = {
  isOpen: boolean;
  setIsOpen: (isopen: boolean) => void;
  contracts: PropsContracts[];
  _handleEdit: (id: number) => void;
};
const BottomModal = ({ isOpen, setIsOpen, contracts, _handleEdit }: Props) => {
  const contract = contracts.filter((c) => c.selected === true);

  const ClickEdit = (id: number) => {
    _handleEdit(id);
    setIsOpen(false);
  };

  return (
    <Modal>
      {isOpen && <Background onClick={() => setIsOpen(false)} />}
      <div className={isOpen ? "container modal-open" : "container"}>
        <div className="modal">
          <Bar />

          <Contract>
            <div className="dot"></div>
            <p>{contract[0]?.contract.substring(0, 15)}...</p>
          </Contract>

          <Buttons>
            <div onClick={() => ClickEdit(contract[0]?.id)}>수정하기</div>
            <div onClick={() => setIsOpen(false)}>삭제하기</div>
          </Buttons>
        </div>
      </div>
    </Modal>
  );
};

export default BottomModal;

const Buttons = styled.div`
  display: flex;
  width: 154px;
  height: 70px;
  background: #f5f5f5;
  border-radius: 5px;
`;
const Bar = styled.hr`
  width: 26px;
  height: 1px;
  background-color: #c5c5c5;
  border: 1px solid #c5c5c5;
  border-radius: 1px;
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

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  width: 100%;
  height: 100%;
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
    height: 150px;

    // 숨기기
    position: fixed;
    top: 100%;
    left: 0;

    text-align: left;

    display: flex;
    flex-direction: column;

    transition: all 300ms cubic-bezier(0.86, 0, 0.07, 1);
  }
  .container.modal-open .modal {
    top: calc(100% - 150px);
  }
`;
