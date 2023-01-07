import React, { useState } from "react";
import Test from "./Test";

import Home from "./pages/Analyze/Home";
import InputTest from "./InputTest";
import SimpleNavBar from "./components/NavBar/SimpleNavBar";

const App: React.FC = () => {
  const TestOnClick = () => {
    console.log("dfd");
  };

  return (
    <div>
      <SimpleNavBar />
      {/* <InputTest />
      <Home name="props" onClick={TestOnClick} />
      <Test /> */}
    </div>
  );
};

export default App;
