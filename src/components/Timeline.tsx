import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faTelevision } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'
import { Box, Button, Modal, Typography } from "@mui/material";

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
    "title"      : "Back-end Website Developer and Webmaster",
    "location"   : "Remote, Los Angeles, CA",
    "company"    : "Kiwanis Club of Rosemead, Kiwanis International",
    "date"       : "Jun 2024 - Present",
    "icon"       : null,
    "description": (
      <>
        <ul>
          <li>Design and deploy a website run on PHP and MariaDB, utilizing cPanel to deploy and maintain dynamic data.</li>
          <li>Develop a dynamic page system for content writers to edit pages using Markdown language.</li>
          <li>Implement an admin panel JavaScript framework (AdminJS) for administrators to manage content and registered users, utilizing Ajax calls to send JSON requests to a database server to update information on-demand.</li>
          <li>Utilize Google reCAPTCHA and Calendar API to protect the website from bots and display upcoming events.</li>
        </ul>
      </>
    )
  },
  {
    "title"      : "Broadcast Producer and Back-end Live Stream Engineer",
    "location"   : "Remote, San Francisco, CA",
    "company"    : "Self-employed",
    "date"       : "Jan 2023 - Present",
    "icon"       : faTelevision,
    "description": (
      <>
        <ul>
          <li>Design and deploy Google Sheets to manage player data and process statistics to ensure a smooth logging process.</li>
          <li>Construct mini web applications in PHP to process uploaded gameplay clips linked to players via Discord API.</li>
          <li>Utilize Google Sheets and external media APIs to hook text and media sources over the cloud to broadcast via automation.</li>
          <li>Manage and maintain main and event webpages with up-to-date content gathered and stored on web content delivery network.</li>
        </ul>
      </>
    )
  },
  {
    "title"      : "Stream Software and Network Technical Support and Administration",
    "location"   : "Los Angeles, CA & Washington, D.C.",
    "company"    : "OS Studios (Freelance)",
    "date"       : "Sep 2022 - Present",
    "icon"       : null,
    "description": (
      <>
        <ul>
          <li>Configure and troubleshoot computers running Windows 10/11 with OBS, VoiceMeeter, Discord, and Elgato media software.</li>
          <li>Deploy OS images through FOG Project servers and feeding their displays to RTMP and SRT feeds.</li>
        </ul>
      </>
    )
  },
  {
    "title"      : "Software Developer and Content Writer",
    "location"   : "Remote, San Francisco, CA",
    "company"    : "Cloudinary, Inc.",
    "date"       : "Dec 2021 - Apr 2022",
    "icon"       : null,
    "description": (
      <>
        <ul>
          <li>Coordinated weekly live broadcasts to promote the Cloudinary platform and interactive media concepts to 800+ community members, including hosting coding sessions to encourage exploration of the technical and game design space.</li>
          <li>Conducted user testing and observational analysis to understand how users interact with the Cloudinary media platform.</li>
        </ul>
      </>
    )
  },
  {
    "title"      : "Software Developer and Level Designer",
    "location"   : "Remote, San Francisco, CA",
    "company"    : "Twilio, Inc.",
    "date"       : "Sep 2021 - Dec 2021",
    "icon"       : null,
    "description": (
      <>
        <ul>
          <li>Designed an interactive educational experience focusing on technological and societal topics surrounding SMS and media APIs.</li>
          <li>Implemented 14 game levels using JavaScript Electron with consultation from educational curriculum designers.</li>
        </ul>
      </>
    )
  },
  {
    "title"      : "Interactive Developer",
    "location"   : "Irvine, CA",
    "company"    : "Circle K International at UC Irvine, Kiwanis International",
    "date"       : "Mar 2016 - Jun 2019",
    "icon"       : null,
    "description": (
      <>
        <ul>
          <li>Design and develop yearly interactive games using a HTML5 framework to increase outreach for the organization.</li>
          <li>Maintain uptime of award-winning server logging membership statistics using PHP / MySQL and front-end Bootstrap application.</li>
        </ul>
      </>
    )
  },
]

function Timeline() {
  const [open, setOpen] = React.useState(false);
  const [careerModalTitle, setCareerModalTitle] = React.useState("title");
  const [careerModalDescription, setCareerModalDescription] = React.useState(() => <></>);
  const [careerModalCompany, setCareerModalCompany] = React.useState("company");
  const [careerModalLocation, setCareerModalLocation] = React.useState("location");
  const [careerModalDate, setCareerModalDate] = React.useState("date");
  const careerModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }
  const handleOpen = (index: number) => {
    var careerEntry = careerEntries[index];
    setCareerModalTitle(careerEntry["title"]);
    setCareerModalDescription(careerEntry["description"]);
    setCareerModalLocation(careerEntry["location"]);
    setCareerModalCompany(careerEntry["company"]);
    setCareerModalDate(careerEntry["date"]);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
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
              <h6 className="vertical-timeline-element-subtitle">{entry["company"] || "Personal"} - {entry["location"] || "Remote"}</h6>
              <p>
                <Button variant="contained" sx={{ backgroundColor: '#ff845b', color: '#ffffff !important', width: 'max-content' }} onClick={() => handleOpen(index)}>Details</Button>
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
        <div className="container">
          <h1>There's even more!</h1>
          <p>While this section is being updated, please visit this link below for the full list of experience.</p>
          <p>
            <a href="https://arttham.com/cv">
            <Button variant="contained" sx={{ backgroundColor: '#5000ca', color: '#ffffff !important', width: 'max-content' }}>
                Full List of Experience
            </Button>
          </a></p>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="career-modal-title"
        aria-describedby="career-modal-description"
      >
        <Box sx={careerModalStyle}>
          <Typography id="career-modal-title" variant="h6" component="h2" color="black">
            <strong>{careerModalTitle}</strong>
          </Typography>
          <Typography id="career-modal-description" color="black" sx={{ mt: 2 }}>
            <strong>{careerModalCompany || "Personal"} - {careerModalLocation || "Remote"}</strong>
          </Typography>
          <Typography id="career-modal-description" color="black" sx={{ mt: 2 }}>
            {careerModalDate || ""}
          </Typography>
          <Typography id="career-modal-description" color="black" sx={{ mt: 2 }}>
            {careerModalDescription}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Timeline;