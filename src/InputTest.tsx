import React, { useState } from "react";
import useInput from "./hooks/useInput";

const InputTest = () => {
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  return (
    <div>
      <input name="id" value={id} onChange={(e) => onChangeId(e)} />
      <input
        name="password"
        value={password}
        onChange={(e) => onChangePassword(e)}
      />
    </div>
  );
};

export default InputTest;
