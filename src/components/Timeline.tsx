import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { Button } from "@mui/material";

/* EXAMPLE
{
    "title"      : "",
    "subtitle"   : "",
    "date"       : "",
    "icon"       : null,
    "description": ""
  },
  ...
*/
const careerEntries = [
  {
    "title"      : "Under Construction",
    "subtitle"   : "",
    "date"       : "",
    "icon"       : null,
    "description": (
      <>This section is being rebuilt! For now, please visit this link.<br/>
      <a href="https://arttham.com/cv">
        <Button variant="contained" sx={{ backgroundColor: '#5000ca', color: '#ffffff !important', width: 'max-content' }}>
            CV
        </Button>
      </a>
      </>
    )
  }
]

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career Highlights</h1>
        <VerticalTimeline>
          {careerEntries.map((entry, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={entry["date"] || ""}
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={entry["icon"] || faBriefcase} />}
              >
              <h3 className="vertical-timeline-element-title">{entry["title"] || "Experience"}</h3>
              <h4 className="vertical-timeline-element-subtitle">{entry["subtitle"] || ""}</h4>
              <p>
                {entry["description"] || "No description"}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;