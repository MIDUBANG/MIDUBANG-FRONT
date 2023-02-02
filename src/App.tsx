import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import "@style/font.css";
import "@style/common.scss";

const HomePage = loadable(() => import("@pages/Main/Home"));

const UploadPage = loadable(() => import("@pages/Analyze/Upload"));
const ResultPage = loadable(() => import("@pages/Analyze/Result"));
const FeedbackPage = loadable(() => import("@pages/Analyze/Feedback"));

const SignupPage = loadable(() => import("@pages/Auth/Signup"));
const LoginPage = loadable(() => import("@pages/Auth/Login"));
const KakoLoginPage = loadable(() => import("@pages/Auth/KakaoLogin"));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />

      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/KakaoLogin" element={<KakoLoginPage />} />

      <Route path="/analyze" element={<UploadPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
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
