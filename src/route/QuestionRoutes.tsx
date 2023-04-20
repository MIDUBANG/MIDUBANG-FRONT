import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import QuestionMain from "@pages/Question/Main";
import QuestionList from "@pages/Question/List";
import QuestionDetail from "@pages/Question/Detail";
import QuestionCreate from "@pages/Question/Create";

const QuestionRoutes = () => {
  return (
    <Routes>
      <Route element={<QuestionMain />} path="/" />
      <Route element={<QuestionList />} path="/list" />
      <Route element={<QuestionDetail />} path="/detail/:id" />
      <Route element={<QuestionCreate />} path="/create" />
    </Routes>
  );
};

export default QuestionRoutes;
