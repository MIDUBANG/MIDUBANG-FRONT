import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import Check1 from "@pages/House/Check/Check1";
import Check2 from "@pages/House/Check/Check2";
import Check3 from "@pages/House/Check/Check3";
const CheckRoutes = () => {
  return (
    <Routes>
      <Route element={<Check1 />} path="/1" />
      <Route element={<Check2 />} path="/2" />
      <Route element={<Check3 />} path="/3" />
    </Routes>
  );
};

export default CheckRoutes;
