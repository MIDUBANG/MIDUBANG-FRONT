import { Routes, Route } from "react-router-dom";

import CheckListMain from "@pages/CheckList/Main";
import CheckListDetail from "@pages/CheckList/Detail";
const CheckListRoutes = () => {
  return (
    <Routes>
      <Route element={<CheckListMain />} path="/" />
      <Route element={<CheckListDetail />} path="/:id" />
    </Routes>
  );
};

export default CheckListRoutes;
