import React from "react";
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

  console.log(newKzAndWorld);
  return (
    <div className="main">
      <div className="main-countries">
        <p>Kazakhstan</p>
        <p>World</p>
      </div>

      {newKzAndWorld.map((item, idx) => (
        <div>
          <Timeline position="alternate">
            <TimelineItem>
              <div className="column">
                {item.kz.events.map((event) => (
                  <TimelineOppositeContent>
                    <p>{event}</p>
                  </TimelineOppositeContent>
                ))}
              </div>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <div className="column">
                {item.wrld.events.map((event) => (
                  <TimelineContent>
                    <p>{event}</p>
                  </TimelineContent>
                ))}
              </div>
            </TimelineItem>
          </Timeline>
        </div>
      ))}
    </div>
    // <div className="main">
    //   <div className="main-countries">
    //     <p>Kazakhstan</p>
    //     <p>World</p>
    //   </div>
    //   <Timeline position="alternate">
    //     <TimelineItem>
    //       <TimelineOppositeContent>
    //         <p>
    //           <KzSide />
    //         </p>
    //       </TimelineOppositeContent>
    //       <TimelineSeparator>
    //         <TimelineDot />
    //         <TimelineConnector />
    //       </TimelineSeparator>
    //       <TimelineContent>
    //         <p>
    //           <WorldSide />
    //         </p>
    //       </TimelineContent>
    //     </TimelineItem>
    //   </Timeline>
    // </div>
  );
};
