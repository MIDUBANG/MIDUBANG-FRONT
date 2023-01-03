import React from "react";
import Greetings from "./Greetings";

const App: React.FC = () => {
  const onClick = (name: string) => {
    console.log(`${name} `);
  };

  return <Greetings name="으아" onClick={onClick} optional="옵션" />;
};

export default App;

// const App: React.FC = () => {
//   const onClick = (name: string) => {
//     console.log(`${name} says hello`);
//   };

//   return <Greetings name="Hello" onClick={onClick} />;
// };
