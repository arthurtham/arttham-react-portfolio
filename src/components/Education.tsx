import React from "react";
import '@fortawesome/free-regular-svg-icons'
import '../assets/styles/Education.scss';

function Education() {
    return (
    <div className="container" id="education">
        <div className="education-container">
            <h1>Education</h1>
            <div className="education-grid">
                <div className="education">
                    <h2>M.S. Computer Science</h2>
                    <h3>University of California, Irvine</h3>
                    <p><strong>Years: </strong>2019-2021<br />
                       <strong>GPA: </strong>3.86</p>
                </div>
                <div className="education">
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