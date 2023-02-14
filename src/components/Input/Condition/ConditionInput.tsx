/* Result 특약사항 페이지 */
import { useState } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

type Props = {
  value: number;
  setValue: (value: number) => void;
  placeholder: string;
};

const ConditionInput = ({ value, setValue, placeholder }: Props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  return (
    <Input
      type="number"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
    />
  );
};

export default ConditionInput;

const Input = styled.input`
  margin-bottom: 26px;

  width: 100%;
  height: 41px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 200;
  font-size: 13px;
  line-height: 19px;
  text-align: center;

  border: 1px solid #d9d9d9;

  border-radius: 20.5px;
`;
