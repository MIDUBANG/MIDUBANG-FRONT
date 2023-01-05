import React, { useState } from "react";
import Test from "./Test";

import Home from "./pages/Analyze/Home";
import InputTest from "./InputTest";

const App: React.FC = () => {
  const TestOnClick = () => {
    console.log("dfd");
  };

  return (
    <div>
      <InputTest />
      <Home name="props" onClick={TestOnClick} />
      <Test />
    </div>
  );
};

export default App;
