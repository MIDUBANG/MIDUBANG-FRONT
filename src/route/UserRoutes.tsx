import React, { useState, useCallback } from "react";
import { Routes, Route } from "react-router-dom";

import SavedWordList from "@pages/User/Word/SavedWordList";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/savedword" element={<SavedWordList />} />
    </Routes>
  );
};

export default UserRoutes;
