import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import "@style/font.css";
import "@style/common.scss";

const UploadPage = loadable(() => import("@pages/Analyze/Upload"));
const App: React.FC = () => {
  const TestOnClick = () => {
    console.log("dfd");
  };

  return (
    <Routes>
      <Route path="/analyze" element={<UploadPage />} />
    </Routes>
  );
};

export default App;

//import Test from "./Test";
//import Home from "./pages/Analyze/Home";
//import InputTest from "./InputTest";

/* <InputTest />
      <Home name="props" onClick={TestOnClick} />
      <Test /> */
