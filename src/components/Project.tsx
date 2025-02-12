import React from "react";
import imgCashmountain from "../assets/images/app-cashmountain.png";
import imgHackuwu from "../assets/images/app-hackuwu.png";
import imgConcentration from "../assets/images/app-concentration.png";
import imgKiwanis from "../assets/images/app-kiwanis.png"; 
import imgAppDefault from "../assets/images/app-default.png";
import '../assets/styles/Project.scss';
import { Button } from "@mui/material";


/* EXAMPLE
const projectEntries = [
    {
        "title"      : "",
        "image"      : "",
        "link"       : "",
        "description": (
            <></>
        )
    }
];
*/

const projectEntries = [
    {
        "title"      : "Kiwanis Club of Rosemead",
        "image"      : imgKiwanis,
        "link"       : "https://kiwanisclubofrosemead.org",
        "description": (
            <>
                <ul>
                    <li>The official website of Kiwanis Club of Rosemead.</li>
                    <li>PHP/MariaDB stack on Namecheap cPanel.</li>
                    <li>Bootstrap 5 framework.</li>
                </ul>
            </>
        )
    },
    {
        "title"      : "Cash Mountain",
        "image"      : imgCashmountain,
        "link"       : "https://sandbox.arttham.com/Millionaire",
        "description": (
            <>
                <ul>
                    <li>Answer 15 trivia questions to win 1 million dollars!</li>
                    <li>GameMaker: Studio.</li>
                </ul>
            </>
        )
    },
    {
        "title"      : "HackUWU",
        "image"      : imgHackuwu,
        "link"       : "https://sandbox.arttham.com/HackUWU",
        "description": (
            <>
                <ul>
                    <li>Click on all the UWUs while avoiding common university disctractions!</li>
                    <li>GameMaker: Studio.</li>
                    <li>Leaderboard: PHP and MongoDB.</li>
                </ul>
            </>
        )
    },
    {
        "title"      : "Concentration Training",
        "image"      : imgConcentration,
        "link"       : "https://sandbox.arttham.com/Concentration",
        "description": (
            <>
                <ul>
                    <li>Memorize the number of objects and recall them when they reappear!</li>
                    <li>Unity.</li>
                    <li>Leaderboard: PHP and MongoDB.</li>
                </ul>
            </>
        )
    },
];

function Project() {
    return (
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            {projectEntries.map((project, index) => (
            <div className="project" key={index}>
                <a href={project.link || "#"} target="_blank" rel="noreferrer">
                <img src={project.image || imgAppDefault} className="zoom" alt="thumbnail" width="100%"/>
                <h2>{project.title || "Project"}</h2>
                </a>
                <p>{project.description || "No description"}</p>
            </div>
            ))}
        </div>

        <h2>There's even more!</h2>
        <p>This section is being rebuilt! For now, please visit the link below for all projects.</p>
        <p><a href="https://arttham.com/project">
            <Button variant="contained" sx={{ backgroundColor: '#5000ca', color: '#ffffff !important', width: 'max-content' }}>
                All Projects
            </Button>
        </a></p>
    </div>
    
    );
}

export default Project;