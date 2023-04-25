import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import My from "@pages/My/My";
import SavedWordList from "@pages/User/Word/SavedWordList";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<My />} />
      <Route path="/savedword" element={<SavedWordList />} />
    </Routes>
  );
};

export default UserRoutes;
