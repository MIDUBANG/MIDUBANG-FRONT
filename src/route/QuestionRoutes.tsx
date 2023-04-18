import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import QuestionMain from "@pages/Question/Main";
import QuestionList from "@pages/Question/List";

const QuestionRoutes = () => {
  return (
    <Routes>
      <Route element={<QuestionMain />} path="/" />
      <Route element={<QuestionList />} path="/list" />
    </Routes>
  );
};

export default QuestionRoutes;
