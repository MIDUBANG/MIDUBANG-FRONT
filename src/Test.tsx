import React, { useState } from "react";
import Greetings from "./Greetings";
import MyForm from "./MyForm";

const Test = () => {
  //useState를 사용 할 때 Generics 를 사용하지 않아도 알아서 타입을 유추하기 때문에 생략해도 상관없습니다.

  const [count, setCount] = useState<number>(0);
  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  // null일 수도 있고 아닐수도 있을때 Generics 를 활용하시면 좋습니다.
  type Information = { name: string; description: string };
  const [info, setInformation] = useState<Information | null>(null);

  const onClick = (name: string) => {
    console.log(`${name} `);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <Greetings name="으아" onClick={onClick} optional="옵션" />
      <MyForm onSubmit={onSubmit} />
    </div>
  );
};

export default Test;

// const App: React.FC = () => {
//   const onClick = (name: string) => {
//     console.log(`${name} says hello`);
//   };

//   return <Greetings name="Hello" onClick={onClick} />;
// };
