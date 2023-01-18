import styled from "@emotion/styled";
import kakao from "@assets/icon/kakao.svg";

type Props = {
  onClick?: () => void;
};

const KakaoBtn = ({ onClick }: Props) => {
  return (
    <Btn>
      <img src={kakao} />
      <p>카카오 로그인</p>
    </Btn>
  );
};

export default KakaoBtn;

const Btn = styled.div`
  margin-top: 20px;

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 41px;
  border-radius: 8px;
  padding: 0 21px;

  // 색상
  background: var(--kakao);
  box-shadow: -3px 4px 5px rgba(0, 0, 0, 0.15);
  &:active {
    background: var(--kakao-shadow);
  }

  p {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;

    color: #3a2929;
  }

  img {
    position: absolute;
    left: 32px;
    top: 12px;
    width: 22px;
    height: 19px;
  }
`;
