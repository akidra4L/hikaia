import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./components/navbar";
import { MainBlock } from "./components/content/main-block";
import { Main } from "./components/content/main";
import { Footer } from "./components/footer";

const App = () => {
  const [year, setYear] = useState(1440);
  const [isLine, setIsLine] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const height = parseInt(window.scrollY);
      if (year + parseInt(height / 7) <= 2022) {
        setYear(year + parseInt(height / 7));
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (year >= 1450) {
      setIsLine(true);
    }
    if (year < 1450) {
      setIsLine(false);
    }
  }, [year]);

  return (
    <BrowserRouter>
      <Navbar />
      <MainBlock />
      <Main />
      <div className={isLine ? "line" : "not-line"}>
        <p>{year} год</p>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
