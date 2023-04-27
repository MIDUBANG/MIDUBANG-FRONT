import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import QuestionMain from "@pages/Question/Main";
import QuestionList from "@pages/Question/List";
import QuestionGoldDetail from "@pages/Question/Detail/GoldDetail";
import QuestionChatDetail from "@pages/Question/Detail/ChatDetail";

import QuestionCreate from "@pages/Question/Create";

const QuestionRoutes = () => {
  return (
    <Routes>
      <Route element={<QuestionMain />} path="/" />
      <Route element={<QuestionList />} path="/list" />

      <Route element={<QuestionGoldDetail />} path="/gold/:id" />
      <Route element={<QuestionChatDetail />} path="/chat/:id" />

      <Route element={<QuestionCreate />} path="/create" />
    </Routes>
  );
};

export default QuestionRoutes;
