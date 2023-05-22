import { Routes, Route } from "react-router-dom";

import Text from "@pages/Text/Text";
import Chat from "@pages/Text/Chat";
const TextRoutes = () => {
  return (
    <Routes>
      <Route element={<Text />} path="/" />
      <Route element={<Chat />} path="/chat" />
    </Routes>
  );
};

export default TextRoutes;
