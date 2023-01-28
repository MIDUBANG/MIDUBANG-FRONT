import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import "@style/font.css";
import "@style/common.scss";

const UploadPage = loadable(() => import("@pages/Analyze/Upload"));
const Result1Page = loadable(() => import("@pages/Analyze/Result1"));
const Result2Page = loadable(() => import("@pages/Analyze/Result2"));
const SignupPage = loadable(() => import("@pages/Auth/Signup"));
const LoginPage = loadable(() => import("@pages/Auth/Login"));
const KakoLoginPage = loadable(() => import("@pages/Auth/KakaoLogin"));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/analyze" element={<UploadPage />} />
      <Route path="/result1" element={<Result1Page />} />
      <Route path="/result2" element={<Result2Page />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/KakaoLogin" element={<KakoLoginPage />} />
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
