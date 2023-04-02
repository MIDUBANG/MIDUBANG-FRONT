import React from "react";
import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import "@style/font.css";
import "@style/common.scss";

const HomePage = loadable(() => import("@pages/Main/Home"));

const UploadPage = loadable(() => import("@pages/Analyze/Upload"));
const ResultPage = loadable(() => import("@pages/Analyze/Result"));
const FeedbackPage = loadable(() => import("@pages/Analyze/Feedback"));
const SummaryPage = loadable(() => import("@pages/Analyze/Summary"));

const SignupPage = loadable(() => import("@pages/Auth/Signup"));
const LoginPage = loadable(() => import("@pages/Auth/Login"));
const KakoLoginPage = loadable(() => import("@pages/Auth/KakaoLogin"));

const WordListPage = loadable(() => import("@pages/User/Word/WordList"));
const WordMeanPage = loadable(() => import("@pages/User/Word/WordMean"));
const AnalyzeListPage = loadable(
  () => import("@pages/User/Analyze/AnalyzeList")
);
const AnalyzePage = loadable(() => import("@pages/User/Analyze/Analyze"));

const HousePage = loadable(() => import("@pages/House/House"));

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/KakaoLogin" element={<KakoLoginPage />} />

      <Route path="/upload" element={<UploadPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/summary" element={<SummaryPage />} />

      <Route path="/house" element={<HousePage />} />

      <Route path="/wordlist" element={<WordListPage />} />
      <Route path="/wordmean/:id" element={<WordMeanPage />} />
      <Route path="/analyzelist" element={<AnalyzeListPage />} />
      <Route path="/analyze/:id" element={<AnalyzePage />} />
    </Routes>
  );
};

export default App;
