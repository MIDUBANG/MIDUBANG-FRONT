import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import WordList from "@pages/User/Word/WordList";
import WordMean from "@pages/User/Word/WordMean";

const WordRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WordList />} />
      <Route path="/:id" element={<WordMean />} />
    </Routes>
  );
};

export default WordRoutes;
