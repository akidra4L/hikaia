import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { MainBlock } from "../main-block";
import { Line } from "../line";

// Data
import kazakhstanData from "../../../data/kazakhstan.json";
import worldData from "../../../data/world.json";

const kzAndWorld = () => {
  const filledArray = [...new Array(kazakhstanData.length)].map(() => 0);

  const a = filledArray.map((el, idx) => {
    return { kz: kazakhstanData[idx], wrld: worldData[idx] };
  });

  return a;
};

export const Main = () => {
  const newKzAndWorld = kzAndWorld();
  console.log(newKzAndWorld);

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <div className="main">
      <MainBlock />
      <Line />

      <div className="main-countries">
        <p>Казахстан</p>
        <p>Мир</p>
      </div>
      <div className="main-content">
        {newKzAndWorld.map((item) => (
          <div className="main-content-items">
            <Timeline
              sx={{
                padding: 0,
              }}
            >
              <TimelineItem>
                <div className="column">
                  <TimelineOppositeContent data-aos="fade-up">
                    <div className="column-events">
                      {item.kz.events.map((event) => (
                        <p>{event}</p>
                      ))}
                    </div>
                  </TimelineOppositeContent>
                </div>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector className="connector" />
                </TimelineSeparator>
                <div className="column">
                  <TimelineContent data-aos="fade-up">
                    <div className="column-events">
                      {item.wrld.events.map((event) => (
                        <p>{event}</p>
                      ))}
                    </div>
                  </TimelineContent>
                </div>
              </TimelineItem>
            </Timeline>
          </div>
        ))}
      </div>
    </div>
  );
};
