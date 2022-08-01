import React, { useEffect, useState } from "react";
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
  const [newKzAndWorld, setNewKzAndWorld] = useState(kzAndWorld());

  const handleCurrentPersonKZ = (indexes) => {
    let objects = [...newKzAndWorld];
    for (let i = 0; i < objects.length; i++) {
      if (i === indexes[0]) {
        objects[i].kz.current_person = indexes[1];
      }
    }
    setNewKzAndWorld(objects);
  };

  const handleCurrentPersonWRLD = (indexes) => {
    let objects = [...newKzAndWorld];
    for (let i = 0; i < objects.length; i++) {
      if (i === indexes[0]) {
        objects[i].wrld.current_person = indexes[1];
      }
    }
    setNewKzAndWorld(objects);
  };

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
                          <div key={idx} className="btn">
                            <button
                              onClick={() => handleCurrentPersonKZ([index, idx])}
                            >
                              - {person}
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="column-item-img">
                        <img src={item.kz.imgs.at(item.kz.current_person)} />
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
                    <div className="column-item">
                      <div className="column-item-img">
                        <img
                          src={item.wrld.imgs.at(item.wrld.current_person)}
                        />
                      </div>
                      <div className="column-item-person">
                        <h2>Личности:</h2>
                        {item.wrld.famous.map((person, idx) => (
                          <div key={idx} className="btn">
                            <button
                              onClick={() => handleCurrentPersonWRLD([index, idx])}
                            >
                              - {person}
                            </button>
                          </div>
                        ))}
                      </div>
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
