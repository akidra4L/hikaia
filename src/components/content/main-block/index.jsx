import React from "react";
import Typewriter from "typewriter-effect";

export const MainBlock = () => {
  return (
    <div className="mainblock">
      <div className="mainblock-wrapper">
        <h2>Привет, Казахстан!</h2>
        <Typewriter
          options={{
            strings: [
              "Данный сайт был сделан с целью показать и сравнить, как менялась наша страна со времен образования Казахского Ханства, и что же происходило в Мире в это же время",
            ],
            autoStart: true,
            loop: true,
            delay: 75,
          }}
        />
      </div>
    </div>
  );
};
