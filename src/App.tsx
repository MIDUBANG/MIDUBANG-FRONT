import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import "@style/font.css";
import "@style/common.scss";

// Routes
import HouseRoutes from "@route/HouseRoutes";
import TextRoutes from "@route/TextRoutes";
import QuestionRoutes from "@route/QuestionRoutes";
import CheckListRoutes from "@route/CheckListRoutes";
import WordRoutes from "@route/WordRoutes";
import UserRoutes from "@route/UserRoutes";
import AnalyzeRoutes from "@route/AnalyzeRoutes";
import PrivateRoute from "@route/PrivateRoute";

const HomePage = loadable(() => import("@pages/Main/Home"));

const SignupPage = loadable(() => import("@pages/Auth/Signup"));
const LoginPage = loadable(() => import("@pages/Auth/Login"));
const KakoLoginPage = loadable(() => import("@pages/Auth/KakaoLogin"));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* 가입 관련 */}
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/KakaoLogin" element={<KakoLoginPage />} />

      <Route element={<PrivateRoute authentication={true} />}>
        {/* 문자 마법사 */}
        <Route path="/text/*" element={<TextRoutes />} />
        {/* 등기부등본 */}
        <Route path="/house/*" element={<HouseRoutes />} />
        {/* 금쪽이 */}
        <Route path="/question/*" element={<QuestionRoutes />} />
        {/* 자취 체크리스트 */}
        <Route path="/checklist/*" element={<CheckListRoutes />} />
        {/* 단어 관련 */}
        <Route path="/word/*" element={<WordRoutes />} />
        {/* 유저 관련 */}
        <Route path="/my/*" element={<UserRoutes />} />
        {/* 특약 기능 */}
        <Route path="/analyze/*" element={<AnalyzeRoutes />} />
      </Route>
    </Routes>
  );
};

export default App;
