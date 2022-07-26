import { Route, Routes } from "react-router-dom";

import { Main } from "../components/content/main";
import { Source } from "../components/content/source";
import { Faq } from "../components/content/faq";

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/source" element={<Source />} />

      <Route path="/" element={<Main />} />

      <Route path="/faq" element={<Faq />} />
    </Routes>
  )
};
