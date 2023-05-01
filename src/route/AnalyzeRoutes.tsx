import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import loadable from "@loadable/component";

const UploadPage = loadable(() => import("@pages/Analyze/Upload"));
const ResultPage = loadable(() => import("@pages/Analyze/Result"));
const FeedbackPage = loadable(() => import("@pages/Analyze/Feedback"));
const SummaryPage = loadable(() => import("@pages/Analyze/Summary"));

const AnalyzeRoutes = () => {
  return (
    <Routes>
      <Route path="/upload" element={<UploadPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/summary" element={<SummaryPage />} />
    </Routes>
  );
};

export default AnalyzeRoutes;
