import React, { useState, useEffect } from "react";

export const Line = () => {
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
    <div className={isLine ? "line" : "not-line"}>
      <p>{year} год</p>
    </div>
  );
};
