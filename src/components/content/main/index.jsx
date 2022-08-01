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
        {newKzAndWorld.map((item, index) => (
          <div className="main-content-items" key={index}>
            <Timeline
              style={{
                padding: 0,
              }}
            >
              <TimelineItem>
                <div className="column">
                  <TimelineOppositeContent
                    data-aos="fade-up"
                    className="timeline"
                  >
                    <div className="column-events">
                      {item.kz.events.map((event, idx) => (
                        <p key={idx}>{event}</p>
                      ))}
                    </div>
                    <div className="column-item">
                      <div className="column-item-person">
                        <h2>Личности:</h2>
                        {item.kz.famous.map((person, idx) => (
                          <div>
                            <button key={idx}>▹ {person}</button>
                          </div>
                        ))}
                      </div>
                      <div className="column-item-img">
                        <img src={item.kz.imgs.at(2)} />
                      </div>
                    </div>
                  </TimelineOppositeContent>
                </div>
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector className="connector" />
                </TimelineSeparator>
                <div className="column">
                  <TimelineContent data-aos="fade-up" className="timeline">
                    <div className="column-events">
                      {item.wrld.events.map((event, idx) => (
                        <p key={idx}>{event}</p>
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
