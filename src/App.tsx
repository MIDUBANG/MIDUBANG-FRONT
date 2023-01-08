import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";

//import Test from "./Test";
//import Home from "./pages/Analyze/Home";
//import InputTest from "./InputTest";

const Upload = loadable(() => import("@pages/Analyze/Upload"));

const App: React.FC = () => {
  const TestOnClick = () => {
    console.log("dfd");
  };

  return (
    <Routes>
      <Route path="/analyze" element={<Upload />} />
    </Routes>
  );
};

export default App;
{
  /* <InputTest />
      <Home name="props" onClick={TestOnClick} />
      <Test /> */
}
