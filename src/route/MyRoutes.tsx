import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import Receive1 from "@pages/House/Receive/Receive1";
import Receive2 from "@pages/House/Receive/Receive2";
import Receive3 from "@pages/House/Receive/Receive3";

const MyRoutes = () => {
  return (
    <Routes>
      <Route element={<Receive1 />} path="/1" />
      <Route element={<Receive2 />} path="/2" />
      <Route element={<Receive3 />} path="/3" />
    </Routes>
  );
};

export default MyRoutes;
