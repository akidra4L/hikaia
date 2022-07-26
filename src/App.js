import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { RouteList } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <RouteList />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
