import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import House from "@pages/House/House";
import Intro1 from "@pages/House/Intro/Intro1";
import ReceiveRoutes from "./ReceiveRoutes";
const HouseRoutes = () => {
  return (
    <Routes>
      <Route element={<Intro1 />} path="/intro" />
      <Route element={<ReceiveRoutes />} path="/receive/*" />
      <Route element={<House />} path="/who" />
      <Route element={<House />} path="/how" />
    </Routes>
  );
};

export default HouseRoutes;
