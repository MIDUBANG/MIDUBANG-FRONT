import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import My1 from "@pages/House/My/My1";
import My2 from "@pages/House/My/My2";
import My3 from "@pages/House/My/My3";
import My4 from "@pages/House/My/My4";
const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<My1 />} path="/1" />
      <Route element={<My2 />} path="/2" />
      <Route element={<My3 />} path="/3" />
      <Route element={<My4 />} path="/4" />
    </Routes>
  );
};

export default MyRoutes;
