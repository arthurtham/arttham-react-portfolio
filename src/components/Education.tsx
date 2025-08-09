import React from "react";
import { Button } from "@mui/material";
import '@fortawesome/free-regular-svg-icons'
import '../assets/styles/Education.scss';
import anteaterplushie from "../assets/images/anteater-plushie.png";

function Education() {
    var anteaterPlushie = (<img src={anteaterplushie} className="anteater-plushie" alt="anteater plushie"></img>)
    return (
    <div className="container" id="education">
        <div className="education-container">
            <h1>Education</h1>
            <h4 style={{ textAlign: "center" }}>Here's a picture of an Anteater. Our blessed mascot.</h4>
            <div className="container" id="mobile-uci">
                {anteaterPlushie}
            </div>
            <div className="education-grid">
                <div className="education education-item-1">
                    <h2>Master of Science,<br></br>Computer Science</h2>
                    <h3>University of California, Irvine</h3>
                    <p><strong>Years: </strong>2019-2021 |&nbsp;
                       <strong>GPA: </strong>3.86</p>
                </div>
                <div className="education" id='desktop-uci'>
                    {anteaterPlushie}
                </div>
                <div className="education education-item-2">
                    <h2>Bachelor of Science,<br></br>Computer Science</h2>
                    <h3>University of California, Irvine</h3>
                    <p><strong>Years: </strong>2015-2019 |&nbsp;
                    <strong>GPA: </strong>3.69<br />
                       <strong>Specialization: </strong>Information</p>
                </div>
            </div>
            <div className="container">
                <h1>Certificates</h1>
                <div className="education">
                    <h3>Google IT Support</h3>
                    <p>Completed in 2025</p>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{
                                fontWeight: "bold",
                                padding: "8px 16px",
                                borderRadius: "4px",
                            }}
                        >
                            <a
                            href="https://coursera.org/share/ef26f08109a9a5f60db5a5a36f143d23"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none" }}
                            >
                                View Certificate
                            </a>
                        </Button>
                    </div>
                    <div className="education">
                        <h3>Google Data Analytics Certificate</h3>
                        <p>Completed in 2023</p>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{
                                    fontWeight: "bold",
                                    padding: "8px 16px",
                                    borderRadius: "4px",
                                }}
                            >
                                <a
                                href="https://coursera.org/share/aa538b89773f3f3ecccc475f4d6734a3"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: "none" }}
                                >
                                    View Certificate
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Education;