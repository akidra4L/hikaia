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

export const Main = () => {
  return (
    <div className="main">
      {kazakhstanData.map((kzItem) => (
        <div>
          {worldData.map((worldItem) => (
            <div>
              <Timeline position="alternate">
                <TimelineItem>
                  <div className="column">
                    {kzItem.events.map((event) => (
                      <TimelineOppositeContent>{event}</TimelineOppositeContent>
                    ))}
                  </div>
                  <TimelineSeparator>
                    <TimelineDot>
                      year
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <div className="column">
                    {worldItem.events.map((event) => (
                      <TimelineContent>{event}</TimelineContent>
                    ))}
                  </div>
                </TimelineItem>
              </Timeline>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
