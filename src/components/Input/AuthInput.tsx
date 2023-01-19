import styled from "@emotion/styled";
import logoperson from "@assets/illustration/logo&person.png";
import personAuth from "@assets/icon/personAuth.svg";
import lock from "@assets/icon/lock.svg";

type Props = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const AuthInput = ({ placeholder, value, onChange }: Props) => {
  var ImgSrc = lock;
  if (placeholder == "이메일") {
    ImgSrc = personAuth;
  }

  return (
    <InputBox>
      <img src={ImgSrc} />
      <input placeholder={placeholder} value={value} onChange={onChange} />
    </InputBox>
  );
};

export default AuthInput;

const InputBox = styled.div`
  margin-bottom: 20px;

  height: 41px;
  width: 100%;

  background: #f9f9f9;
  border-radius: 8px;

  display: flex;
  align-items: center;

  img {
    width: 15px;
    height: 15px;
    margin-left: 12px;
    margin-right: 15px;
  }
  input {
    border: none;
    background-color: transparent;

    &:focus {
      outline: none;
    }

    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;

    color: #7d7d7d;
  }
`;
