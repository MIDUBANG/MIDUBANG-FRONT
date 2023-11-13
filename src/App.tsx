import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import "@style/font.css";
import "@style/common.scss";

const HomePage = loadable(() => import("@pages/Main/Home"));
const SignupPage = loadable(() => import("@pages/Auth/Signup"));
const LoginPage = loadable(() => import("@pages/Auth/Login"));
const KakoLoginPage = loadable(() => import("@pages/Auth/KakaoLogin"));
const HouseRoutes = loadable(() => import("@route/HouseRoutes"));
const TextRoutes = loadable(() => import("@route/TextRoutes"));
const QuestionRoutes = loadable(() => import("@route/QuestionRoutes"));
const CheckListRoutes = loadable(() => import("@route/CheckListRoutes"));
const WordRoutes = loadable(() => import("@route/WordRoutes"));
const UserRoutes = loadable(() => import("@route/UserRoutes"));
const AnalyzeRoutes = loadable(() => import("@route/AnalyzeRoutes"));
const PrivateRoute = loadable(() => import("@route/PrivateRoute"));
const NotFoundPage = loadable(() => import("@pages/404/NotFoundPage"));

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

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
