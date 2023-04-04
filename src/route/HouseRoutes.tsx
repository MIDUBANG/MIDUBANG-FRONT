import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import House from "@pages/House/House";
import Intro1 from "@pages/House/Intro/Intro1";
import ReceiveRoutes from "./ReceiveRoutes";
import MyRoutes from "./MyRoutes";
import CheckRoutes from "./CheckRoutes";
const HouseRoutes = () => {
  return (
    <Routes>
      <Route element={<Intro1 />} path="/intro/*" />
      <Route element={<ReceiveRoutes />} path="/receive/*" />
      <Route element={<MyRoutes />} path="/my/*" />
      <Route element={<CheckRoutes />} path="/check/*" />
    </Routes>
  );
};

export default HouseRoutes;
