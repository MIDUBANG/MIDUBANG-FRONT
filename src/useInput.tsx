import { useState, useCallback, ChangeEvent } from "react";

type UserInputProps = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void
];

const useInput = (initialValue: string): UserInputProps => {
  const [userFormInput, setUserFormInput] = useState(initialValue);

  const onChangeForm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormInput(e.target.value);
  }, []);

  return [userFormInput, onChangeForm];
};

export default useInput;
