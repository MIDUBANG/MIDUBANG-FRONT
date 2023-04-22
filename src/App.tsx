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
const HomePage = loadable(() => import("@pages/Main/Home"));

const UploadPage = loadable(() => import("@pages/Analyze/Upload"));
const ResultPage = loadable(() => import("@pages/Analyze/Result"));
const FeedbackPage = loadable(() => import("@pages/Analyze/Feedback"));
const SummaryPage = loadable(() => import("@pages/Analyze/Summary"));

const SignupPage = loadable(() => import("@pages/Auth/Signup"));
const LoginPage = loadable(() => import("@pages/Auth/Login"));
const KakoLoginPage = loadable(() => import("@pages/Auth/KakaoLogin"));

const AnalyzeListPage = loadable(
  () => import("@pages/User/Analyze/AnalyzeList")
);
const AnalyzePage = loadable(() => import("@pages/User/Analyze/Analyze"));

const HousePage = loadable(() => import("@pages/House/House"));
const TextPage = loadable(() => import("@pages/Text/Text"));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      {/* 등기부등본 */}
      <Route path="/house/*" element={<HouseRoutes />} />
      {/* 문자 마법사 */}
      <Route path="/text/*" element={<TextRoutes />} />
      {/* 금쪽이 */}
      <Route path="/question/*" element={<QuestionRoutes />} />
      {/* 자취 체크리스트 */}
      <Route path="/checklist/*" element={<CheckListRoutes />} />
      {/* 단어 관련 */}
      <Route path="/word/*" element={<WordRoutes />} />

      {/* 유저 관련 */}
      <Route path="/my/*" element={<UserRoutes />} />

      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/KakaoLogin" element={<KakoLoginPage />} />

      <Route path="/upload" element={<UploadPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/summary" element={<SummaryPage />} />

      <Route path="/house" element={<HousePage />} />

      <Route path="/analyzelist" element={<AnalyzeListPage />} />
      <Route path="/analyze/:id" element={<AnalyzePage />} />

      <Route path="/text" element={<TextPage />} />
    </Routes>
  );
};

export default App;
