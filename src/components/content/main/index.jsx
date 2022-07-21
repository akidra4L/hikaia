import React from "react";
import kazakhstanData from "../../../data/kazakhstan.json";
import worldData from "../../../data/world.json";

export const Main = () => {
  return (
    <div className="main">
      {kazakhstanData.map((item) => (
        <div className="main-wrapper">
          {item.events}
        </div>
      ))}
    </div>
  );
};
