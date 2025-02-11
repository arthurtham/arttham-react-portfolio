import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faPhp, faBootstrap, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';
import { faBroadcastTower, faComputer, faDatabase, faVideo } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "PHP",
    "MySQL",
    "MariaDB",
    "MongoDB",
    "Python",
    "Flask",
    "JavaScript",
    "HTML5",
    "Bootstrap",
    "Apache",
    "Postman",
    "Cloudinary CDN",
    "GameMaker: Studio (1)",
    "Unity",
    "WebFlow",
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "VMWare",
    "Google Cloud Platform",
    "Namecheap",
    "cPanel",
    "Windows",
    "macOS",
    "Linux",
    "iOS",
];

const labelsThird = [
    "OBS Studio",
    "VDO.Ninja",
    "StreamLabs OBS",
    "StreamElements",
    "Restream",
    "Sheets.io",
    "Snaz Timer",
    "React Fugi Tech",
    "Voicemeeter",
    "Discord",
    "Twitch",
    "YouTube"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Skills Overview</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>&nbsp;
                    <FontAwesomeIcon icon={faBootstrap} size="3x"/>&nbsp; 
                    <FontAwesomeIcon icon={faPython} size="3x"/>&nbsp;
                    <FontAwesomeIcon icon={faPhp} size="3x"/>&nbsp; 
                    <h3>Web Development</h3>
                    <p>I work on back-end websites primary supported by the PHP/MySQL LAMP stack. I've published websites from scratch in the Bootstrap framework. I can set up databases in MySQL, MariaDB, and MongoDB, and I use MySQLWorkbench and phpMyAdmin to manage data. I also have experience using WebFlow, and I'm currently exploring React and other web technologies.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faGithub} size="3x"/>&nbsp;
                    <FontAwesomeIcon icon={faGoogle} size="3x"/>&nbsp;
                    <FontAwesomeIcon icon={faComputer} size="3x"/>&nbsp;
                    <h3>Project Deployment</h3>
                    <p>I utilize online cloud platforms like Google Cloud and Namecheap/cPanel to host websites. For website development and deployment, I use Git and GitHub Actions on those cloud platforms alongside VMWare and virtual machine environments. With project tracking on Google Apps and GitHub, it's easy to iterate and deploy applications quickly and efficiently. </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faBroadcastTower} size="3x"/>&nbsp;
                    <FontAwesomeIcon icon={faVideo} size="3x"/>&nbsp;
                    <h3>Media Broadcasting</h3>
                    <p>I help organizations run remote broadcasts of their events, using OBS Studio alongside many support applications to bring together a simple yet effective experiece for viewers. Whether it's for an esports event or for a weekly podcast, I got your back setting up your stream to get started right away.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Applications:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;