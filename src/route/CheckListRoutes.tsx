import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import CheckListMain from "@pages/CheckList/Main";

const CheckListRoutes = () => {
  return (
    <Routes>
      <Route element={<CheckListMain />} path="/" />
    </Routes>
  );
};

export default CheckListRoutes;
