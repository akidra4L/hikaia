import { Route, Routes } from "react-router-dom";

import { Navbar } from "../components/navbar";
import { Main } from "../components/content/main";

export const RouteList = () => {
  <Routes>
    <Route path="/" element={<Navbar />} />
    <Route path="/" element={<Main />} />
  </Routes>;
};
