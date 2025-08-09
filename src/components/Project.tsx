import React from "react";
import imgCashmountain from "../assets/images/app-cashmountain.png";
import imgContentCreator from "../assets/images/app-contentcreator.png";
import imgConcentration from "../assets/images/app-concentration.png";
import imgKiwanis from "../assets/images/app-kiwanis.png"; 
import imgAppDefault from "../assets/images/app-default.png";
import imgGami from "../assets/images/app-gami.png";
import imgUcicki from "../assets/images/app-ucicki.png";
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
        "title"      : "Content Creation WebFlow Website",
        "image"      : imgGami,
        "link"       : "https://senchigami.webflow.io",
        "description": (
            <>
                <ul>
                    <li>The official website of a content creation organization.</li>
                    <li>Mobile optimizations and dynamic member sorting.</li>
                    <li>WebFlow, WebFlow CMS.</li>
                </ul>
            </>
        )
    },
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
        "title"      : "Content Creator Website",
        "image"      : imgContentCreator,
        "link"       : "https://arttham.com/redirect/browniewebsite",
        "description": (
            <>
                <ul>
                    <li>Deployed LAMP stack and utilized mySQL/PHP backend to host blog posts as a subscription perk for online viewers.</li>
                    <li>Designed a user system with Discord and Twitch integration to provide exclusive access to paying members.</li>
                    <li>Created an admin panel where the webmaster can add, edit, and delete curated content.</li>
                    <li>PHP/MariaDB stack on Google Cloud.</li>
                    <li>Bootstrap 5 framework.</li>
                </ul>
            </>
        )
    },
    {
        "title"      : "UCI Circle K Website",
        "image"      : imgUcicki,
        "link"       : "https://ucicirclek.com",
        "description": (
            <>
                <ul>
                    <li>The official website of a college charity organization.</li>
                    <li>Laid the foundation for the modern iteration of the website, including page and membership system.</li>
                    <li>Designed and developed an event management and waitlist system, and internal tools for tracking event metrics.</li>
                    <li>PHP/MariaDB stack on Namecheap cPanel.</li>
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
        <div className="projects-footer">
            <h2>There's even more!</h2>
            <p>Please visit the link below to view all projects.</p>
            <p><a href="https://arttham.com/project">
                <Button variant="contained" sx={{ backgroundColor: '#5000ca', color: '#ffffff !important', width: 'max-content' }}>
                    All Projects
                </Button>
            </a></p>
        </div>
    </div>
    
    );
}

export default Project;