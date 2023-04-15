import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import QuestionList from "@pages/Question/Main";

const QuestionRoutes = () => {
  return (
    <Routes>
      <Route element={<QuestionList />} path="/" />
    </Routes>
  );
};

export default QuestionRoutes;
