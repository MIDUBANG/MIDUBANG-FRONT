import { Routes, Route } from "react-router-dom";

import Receive1 from "@pages/House/Receive/Receive1";
import Receive2 from "@pages/House/Receive/Receive2";
import Receive3 from "@pages/House/Receive/Receive3";
import Receive4 from "@pages/House/Receive/Receive4";

const ReceiveRoutes = () => {
  return (
    <Routes>
      <Route element={<Receive1 />} path="/1" />
      <Route element={<Receive2 />} path="/2" />
      <Route element={<Receive3 />} path="/3" />
      <Route element={<Receive4 />} path="/4" />
    </Routes>
  );
};

export default ReceiveRoutes;
