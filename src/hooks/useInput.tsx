import { useState, useCallback } from "react";

type UserInputProps = [
  string,
  (e: React.ChangeEvent<HTMLInputElement>) => void,
  () => void,
];

const useInput = (initialValue: string): UserInputProps => {
  const [userFormInput, setUserFormInput] = useState(initialValue);

  const onChangeForm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserFormInput(e.target.value);
  }, []);

  const reset = useCallback(() => {
    setUserFormInput(initialValue);
  }, [initialValue]);

  return [userFormInput, onChangeForm, reset];
};

export default useInput;
