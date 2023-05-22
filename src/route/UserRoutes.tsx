import { Routes, Route } from "react-router-dom";

import My from "@pages/My/My";
import SavedWordList from "@pages/User/Word/SavedWordList";

import AnalyzeList from "@pages/User/Analyze/AnalyzeList";
import AnalyzeHistory from "@pages/User/Analyze/AnalyzeHistory";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<My />} />
      <Route path="/savedword" element={<SavedWordList />} />
      <Route path="/analyzelist" element={<AnalyzeList />} />
      <Route path="/analyzelist/:id" element={<AnalyzeHistory />} />
    </Routes>
  );
};

export default UserRoutes;
