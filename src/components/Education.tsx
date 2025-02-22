import React from "react";
import '@fortawesome/free-regular-svg-icons'
import '../assets/styles/Education.scss';
import anteaterplushie from "../assets/images/anteater-plushie.png";

function Education() {
    var anteaterPlushie = (<img src={anteaterplushie} className="anteater-plushie" alt="anteater plushie"></img>)
    return (
    <div className="container" id="education">
        <div className="education-container">
            <h1>Education</h1>
            <div className="container" id="mobile-uci">
                {anteaterPlushie}
            </div>
            <div className="education-grid">
                <div className="education education-item-1">
                    <h2>M.S. Computer Science</h2>
                    <h3>University of California, Irvine</h3>
                    <p><strong>Years: </strong>2019-2021<br />
                       <strong>GPA: </strong>3.86</p>
                </div>
                <div className="education" id='desktop-uci'>
                    {anteaterPlushie}
                </div>
                <div className="education education-item-2">
                    <h2>B.S. Computer Science</h2>
                    <h3>University of California, Irvine</h3>
                    <p><strong>Years: </strong>2015-2019<br />
                       <strong>GPA: </strong>3.69<br />
                       <strong>Specialization: </strong>Information</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Education;