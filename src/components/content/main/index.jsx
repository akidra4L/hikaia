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

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  console.log(newKzAndWorld);
  return (
    <div className="main">
      <div className="main-countries">
        <p>Казахстан</p>
        <p>Мир</p>
      </div>

      <div className="main-content">
        {newKzAndWorld.map((item, idx) => (
          <div className="main-content-items">
            <Timeline
              sx={{
                padding: 0,
              }}
            >
              <TimelineItem>
                <div className="column">
                  {item.kz.events.map((event) => (
                    <TimelineOppositeContent data-aos="fade-up">
                      <p>{event}</p>
                    </TimelineOppositeContent>
                  ))}
                </div>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector className="connector" />
                </TimelineSeparator>
                <div className="column">
                  {item.wrld.events.map((event) => (
                    <TimelineContent data-aos="fade-up">
                      <p>{event}</p>
                    </TimelineContent>
                  ))}
                </div>
              </TimelineItem>
            </Timeline>
          </div>
        ))}
      </div>
    </div>
  );
};
