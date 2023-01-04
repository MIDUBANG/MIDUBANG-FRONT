import React, { useState } from "react";
import Test from "./Test";

import Home from "./pages/Analyze/Home";

const App: React.FC = () => {
  const TestOnClick = () => {
    console.log("dfd");
  };

  return (
    <div>
      <Home name="props" onClick={TestOnClick} />
      <Test />
    </div>
  );
};

export default App;
