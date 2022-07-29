import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { RouteList } from "./routes";
import warrior from "./assets/warrior.gif"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <RouteList />
      <div className="person">
        <img src={warrior} />
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
