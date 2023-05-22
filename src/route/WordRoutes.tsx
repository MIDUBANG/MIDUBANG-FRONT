import { Routes, Route } from "react-router-dom";

import WordList from "@pages/Word/WordList";
import WordMean from "@pages/Word/WordMean";

const WordRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<WordList />} />
      <Route path="/:id" element={<WordMean />} />
    </Routes>
  );
};

export default WordRoutes;
