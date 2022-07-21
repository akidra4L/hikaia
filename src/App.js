import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { Main } from "./components/content/main";
import { Footer } from "./components/footer";

const App = () => {
  const [year, setYear] = useState(1445);
  const [line, setLine] = useState(true);

  return (
    <BrowserRouter>
      <Navbar />
      {/* <div className={line ? "line" : "not-line"}>{year} year</div>  */}
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App;